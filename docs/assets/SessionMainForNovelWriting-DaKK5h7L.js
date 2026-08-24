const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/db-master-COerPnjC.js","assets/@tanstack-m-1uuL6k.js","assets/react-DE62XWsa.js","assets/vendor-BJF3NJg5.js","assets/formatting-Bt4POpGk.js","assets/@radix-ui-BQCqNqg0.js","assets/immer-BCQU3qJI.js","assets/dexie-DDTiHGxC.js","assets/zod-BOL00Oce.js","assets/analytics-Bjtkoif7.js","assets/nex-tavern-uuid-CebEkfZN.js","assets/index-Uh1-_uek.js","assets/icons-CTrgr6La.js","assets/index-CwGLb_ZP.css","assets/id-BY9c7rfI.js"])))=>i.map(i=>d[i]);
import { ac as we, ad as it, D as je, aN as fe, r as j, t as T, j as e, u as K } from "./react-DE62XWsa.js";
import { h as ct, m as Ce, S as lt } from "./db-master-COerPnjC.js";
import { k as ie, m as ce, j as dt } from "./@tanstack-m-1uuL6k.js";
import { _ as mt, __tla as __tla_0 } from "./index-Uh1-_uek.js";
import { C as pt, A as ut } from "./AutoScrollDownArea-pE8VBST-.js";
import { S as ht } from "./session-manager.class-BJcXIlz7.js";
import { n as k } from "./id-BY9c7rfI.js";
import { o as M, n as I, s as w, _ as U, b as L, a as Ne, c as he, r as xt, l as gt } from "./zod-BOL00Oce.js";
import { D as _t } from "./dexie-DDTiHGxC.js";
import { B as C } from "./button-B05uqCHL.js";
import { u as ne, g as re, a as Z } from "./global-llm-config.store-C3SCKavw.js";
import { T as z } from "./textarea-Dy3g7GWU.js";
import { L as G } from "./label-D3rOOHnq.js";
import { l as Te } from "./formatting-Bt4POpGk.js";
import { D as ft, a as wt, b as St, c as yt, d as Nt, e as vt } from "./dialog-Cpy7hIEy.js";
import { a5 as V, L as W, Z as bt, aE as It, a1 as xe, m as jt, ai as Ct, aF as Tt, aq as $e, aG as $, ac as H, as as Ae, a9 as At, R as Le, k as le, au as Se, x as kt, a4 as Et, ay as ke } from "./icons-CTrgr6La.js";
import { I as Ee } from "./input-ClDm2ZgA.js";
import { C as O } from "./card-DOswZeAM.js";
import { C as Mt } from "./CharacterAvatar-CoNDFifP.js";
import { S as Me, a as Pe, b as Oe, c as Re, d as me } from "./select-CHLiIXEq.js";
import "./vendor-BJF3NJg5.js";
import "./@radix-ui-BQCqNqg0.js";
import "./immer-BCQU3qJI.js";
import "./analytics-Bjtkoif7.js";
import "./nex-tavern-uuid-CebEkfZN.js";
import "./es-toolkit-9bjl2JfA.js";
import "./shadcn-utils-Cnr6N47i.js";
import "./components-and-styling-lnR2ABT4.js";
import "./@tailwind-CPcsbTWB.js";
let pr;
let __tla = Promise.all([
    (()=>{
        try {
            return __tla_0;
        } catch  {}
    })()
]).then(async ()=>{
    const Pt = `
你是世界观设计专家，负责为小说创作生成完整的世界观设定。
用户可能会提供一些简单的提示（如"古代武侠"、"赛博朋克"等），
也可能不提供任何提示。

你需要生成：
1. timePeriod: 时代背景 - 详细描述时代特征、历史背景
2. socialSystem: 社会制度 - 政治体制、社会结构、阶级划分等
3. techSystem: 技术体系 - 科技水平、重要技术、限制等（可选）
4. powerSystem: 能力体系 - 特殊能力、修炼体系、力量来源等（可选）
5. otherSettings: 其他设定 - 货币、语言、地理等补充设定（可选）

输出格式为 JSON：
{
  "timePeriod": "...",
  "socialSystem": "...",
  "techSystem": "...",
  "powerSystem": "...",
  "otherSettings": "..."
}

要求：
- 设定要自洽、合理
- 细节丰富但不冗余
- 适合小说创作
`.trim(), Ot = `
你是世界观设计助手，负责根据已有信息生成世界观的特定字段内容。

要求：
- 与已有字段保持一致性
- 内容详细但不过于冗长（200-500字）
- 符合小说创作需求
`.trim(), Rt = `
你是角色设计专家，负责为小说创作生成关键角色。
根据世界观和主题（如果提供），生成 3-5 个关键角色。

角色应该包括：
- 主角（1-2个）
- 重要配角（1-2个）
- 反派或对立角色（1个，可选）

每个角色需要包含：
- name: 姓名（符合世界观背景）
- role: 角色定位（主角/配角/反派等）
- description: 详细描述（外貌、性格、背景、动机、能力等，300-500字）

输出格式为 JSONL（每行一个角色的 JSON）：
{"name": "...", "role": "主角", "description": "..."}
{"name": "...", "role": "配角", "description": "..."}

要求：
- 角色要立体、有特点
- 角色间要有互补性和冲突性
- 符合世界观设定
- 每个角色要有清晰的动机
`.trim(), Dt = `
你是角色设计专家，负责根据世界观和已有角色，生成一个新角色。

要求：
- 避免与已有角色重复或过于相似
- 与已有角色形成互补或冲突关系
- 符合世界观设定
- 如果用户提供了提示（如"一个神秘的老者"），要符合该提示
- 角色要有独特性和可塑性

输出格式为 JSON：
{
  "name": "...",
  "role": "...",
  "description": "..."
}
`.trim(), $t = `
你是角色深化专家，负责完善角色描述，增加细节、背景故事、性格特点等。

要求：
- 保持角色的核心设定不变
- 增加外貌细节、性格细节、背景故事
- 补充角色动机、目标、恐惧、欲望等
- 增加角色的独特习惯、口头禅等小细节
- 让角色更加立体和真实

输出完善后的完整角色描述（JSON 格式）。
`.trim(), Lt = `
你是小说主题设计专家，负责根据世界观和角色设计生成小说的主题。

你需要生成：
1. mainIdea: 主旨 - 小说的核心思想（如"正义必胜"、"成长的代价"等）
2. intention: 立意 - 作品的思想深度和价值取向
3. style: 风格 - 如：轻松幽默、严肃深刻、悬疑紧张、浪漫温馨、史诗宏大等

输出格式为 JSON：
{
  "mainIdea": "...",
  "intention": "...",
  "style": "..."
}

要求：
- 主题要与世界观和角色匹配
- 主旨要清晰、有深度
- 立意要有思想性
- 风格要明确、一致
`.trim(), Ut = `
你是主题分析专家，负责分析当前主题设计，给出改进建议。

分析内容：
1. 主题的优点
2. 潜在问题
3. 改进建议
4. 与世界观/角色的匹配度

要求：
- 客观、专业
- 具体、可操作
- 既要肯定优点，也要指出问题
`.trim(), Bt = `
你是情节设计专家，负责根据经典故事结构模板生成情节脉络。

用户选择的结构模板和格式将在 user 消息中提供。

请按照指定格式和结构生成 5-12 个关键情节点。

要求：
- 严格遵循选择的故事结构
- 情节要有起承转合
- 冲突要递进、有张力
- 符合世界观、角色、主题
- 每个情节点要清晰、具体
`.trim(), Ft = `
你是情节设计专家，负责自由创作有吸引力的情节脉络。

不限结构，但要确保：
- 有明确的开端、发展、高潮、结局
- 冲突递进、有张力
- 节奏合理
- 符合世界观、角色、主题

生成 5-12 个关键情节点。

如果用户提供了提示（如"包含复仇元素"），要体现在情节中。
`.trim(), Ht = `
你是情节优化专家，负责优化现有情节脉络。

优化方向：
1. 检查情节的连贯性
2. 增强冲突和张力
3. 确保起承转合
4. 平衡节奏
5. 填补逻辑漏洞

要求：
- 保持用户选择的格式（Markdown 或 YAML）
- 不改变核心情节，只优化细节
- 输出优化后的完整文本
`.trim(), Wt = `
你是小说大纲设计专家，负责根据情节脉络生成详细的章节大纲。

用户期望的章节数和格式将在 user 消息中提供。

每章需要包含：
- 章节号
- 章节标题（吸引人且点明主题）
- 章节摘要（200-300字，描述本章主要内容和发展）
- 关键事件列表（3-5个事件，按顺序）

要求：
- 章节安排符合故事节奏，有起承转合
- 每章有明确的目标和冲突
- 章节间要有连贯性和递进关系
- 合理分配情节点到各章节
- 章节标题要有吸引力

请按照指定格式输出完整的章节大纲。
`.trim(), Gt = `
你是章节大纲优化专家，负责优化现有章节大纲。

优化方向：
1. 检查章节分配是否合理
2. 优化故事节奏
3. 确保每章有明确的目标和冲突
4. 平衡章节间的连贯性和转折性
5. 优化章节标题的吸引力

要求：
- 保持用户选择的格式（Markdown 或 YAML）
- 保持章节数量基本不变（可微调）
- 输出优化后的完整文本
`.trim(), Yt = `
你是小说设计评审专家，负责评估世界观、角色、主题、情节的完整性和一致性。

评审维度：
1. 世界观完整性（设定是否自洽）- 评分 0-10
2. 角色设计合理性（角色是否立体、有冲突）- 评分 0-10
3. 主题深度（主旨是否清晰、立意是否深刻）- 评分 0-10
4. 情节逻辑（情节是否连贯、有起伏）- 评分 0-10
5. 大纲可行性（如果有大纲，章节分配是否合理）- 评分 0-10

输出格式：
## 评审结果

### 综合评分
{总分}/10

### 各维度评分
1. 世界观完整性：{分数}/10
2. 角色设计合理性：{分数}/10
3. 主题深度：{分数}/10
4. 情节逻辑：{分数}/10
5. 大纲可行性：{分数}/10

### 优点
- ...
- ...

### 问题
- ...
- ...

### 建议
- ...
- ...

### 结论
【建议通过】或【建议修改】

要求：
- 客观、专业
- 既要肯定优点，也要指出问题
- 建议要具体、可操作
- 即使有问题，也要尊重创作者的选择
`.trim(), zt = `
你是前情回顾生成专家，负责生成简洁的前情总结。

任务：
- 总结已完成章节的关键内容
- 回顾当前章节大纲（如果有）
- 为即将开始的章节做准备

输出：
- 简洁的前情回顾（300-500字）
- 重点突出关键情节和角色状态
- 为新章节做铺垫

要求：
- 简洁明了
- 突出重点
- 连贯流畅
`.trim(), Kt = `
你是一个充满好奇心的游戏剧情读者，负责从文字冒险游戏的剧情中提取兴趣点。

user 将提供给你：
- 相对早期的前置剧情（供你参考，不需要再次压缩），可能是若干个段落。
- 近期发生的剧情，可能是更加详细的若干个段落。

你的任务：
- 从近期发生的剧情中提取出你希望进一步了解的兴趣点。
- 兴趣点的类型包括：
  - 好奇：你对某个情节或要素产生了好奇心，希望进一步了解。
  - 伏笔：你觉得某个情节或要素可能会在后续发展中起到重要作用。
  - 主线：你认为某个情节或要素对于推动整个剧情的主线发展至关重要。
  - 线索：你发现了一些可能暗示未来剧情发展的线索。
  - 突破：你认为某个情节或要素可能会在后续发展中产生重大突破。
- 共提取 5 个兴趣点，这些兴趣点可以是任何类型。
- 用简单的陈述句或问句描述兴趣点，每个兴趣点一行，按照以下格式输出：
  - 格式：〖【序号:number】【兴趣类型】【兴趣点陈述句或问句】〗
  - 例子：〖【1】【好奇】【要杀张三的人是谁？】〗
`.trim(), Vt = `
你是情绪曲线设计专家，负责设计章节的情绪曲线。

任务：
- 根据历史情绪序列
- 根据当前章节大纲
- 根据兴趣点列表
- 设计本章的情绪变化节奏

输出格式：
为本章设计 3-5 个情绪节点，每个节点包括：
- 位置（章节开始/中段/结尾等）
- 情绪类型（紧张/舒缓/激昂/悲伤/喜悦等）
- 强度（1-10）
- 原因（为什么在这里设计这个情绪）

要求：
- 情绪要有起伏，不能一直平淡
- 考虑读者的情绪承受能力
- 与章节内容匹配
`.trim(), qt = `
你是章节规划生成专家，负责为即将开始的章节生成详细规划。

任务：
综合以下信息生成章节规划：
- 章节大纲（如果有）
- 前情回顾
- 伏笔列表
- 兴趣点列表
- 情绪曲线设计

输出内容：
1. 本章目标（明确的目标）
2. 关键情节点（3-5个）
3. 预计分块数量（通常 3-5 块，每块 500-1000 字）
4. 预计字数分配
5. 需要注意的伏笔和兴趣点

要求：
- 规划要具体、可执行
- 与大纲一致（如果有）
- 考虑情绪曲线
- 为分块写作提供清晰指导
`.trim(), Jt = `
你是一个沉浸式文字冒险游戏的叙事引擎，负责根据上下文续写剧情。

任务：
- 根据章节规划和已写内容，续写下一个分块（500-1000字）
- 保持与世界观、角色设定的一致性
- 符合兴趣点和情绪设计
- 推动情节发展

要求：
- 每次续写 500-1000 字
- 用文学化的小说风格续写
- 不要过于冗长，保持简洁明了
- 不要使用不必要的 Markdown 标记（如数字列表、标题等）
- 注意避免反复出现相似重复的剧情
- 在叙述时，不要使用"你"来指代角色，而是使用角色的名字或称谓

风格：
- 文学性强但不晦涩
- 节奏适中
- 细节适度
- 情绪渲染到位
`.trim(), Zt = `
你是小说续写专家，负责根据用户的指令续写剧情。

用户会提供指令，如：
- "让主角遇到一个神秘老人"
- "制造一个意外的冲突"
- "描写环境氛围"
等

任务：
- 根据用户指令续写 500-1000 字
- 保持与上下文的连贯性
- 符合世界观和角色设定
- 自然地融入指令内容

要求：
- 不要生硬地执行指令
- 要自然、流畅地融入情节
- 保持文学性
- 推动情节发展
`.trim(), Xt = `
你是续写指令建议专家，根据当前章节规划、已写内容、兴趣点等，
建议 3-5 个合适的续写指令。

输出格式：
- 每行一个指令建议
- 简洁明了
- 符合当前情节发展

示例：
- 引入一个新角色
- 制造一个意外事件
- 揭示一个秘密
- 描写角色的内心挣扎
- 推进主线剧情
`.trim(), Qt = `
你是小说润色专家，负责根据指定风格润色文本。

润色风格（由用户指定）：
- 文学润色：提升文学性，增加修辞手法
- 简洁润色：去除冗余，使语言更简练
- 生动润色：增加细节和画面感，让描写更生动
- 情感润色：增强情绪表达，让情感更打动人

任务：
- 保持原文的核心内容和情节不变
- 根据指定风格进行润色
- 保持角色性格一致
- 不过度修改

输出：
- 润色后的完整文本
- 简要说明主要修改点
`.trim(), es = `
你是写作助手，负责为用户提供续写建议。

任务：
- 根据用户已写的内容
- 根据光标位置
- 提供 2-3 个简短的续写方向建议

输出格式：
1. {建议1}
2. {建议2}
3. {建议3}

要求：
- 建议要简短（一句话）
- 要符合上下文
- 要有创意
`.trim(), ts = `
你是内容扩写专家，负责将大纲式内容扩展为详细的小说文本。

任务：
- 将用户的大纲式内容（如："主角进入密林，发现古老遗迹"）
- 扩展为详细的小说文本（500-1000字）

要求：
- 保持原意不变
- 增加细节描写
- 增加画面感
- 符合小说风格
`.trim(), ss = `
你是角色扮演续写专家，负责根据角色的行动续写剧情。

用户会指定一个角色，并描述该角色的行动，如：
- 角色：李明
- 行动：走向那扇门并推开它

任务：
- 根据角色行动续写剧情（500-1000字）
- 描写行动的过程和结果
- 描写环境和其他角色的反应
- 推动情节发展

要求：
- 符合角色性格
- 符合世界观设定
- 保持连贯性
- 有画面感
`.trim(), ns = `
你是角色行动建议专家，根据当前情节、角色性格和动机，
建议 3-5 个该角色可能采取的行动。

输出格式：
- 每行一个行动建议
- 符合角色性格
- 推动剧情发展

示例：
- 说："我需要更多时间考虑。"
- 走向窗边，观察外面的情况
- 思考着刚才的对话中的疑点
- 决定跟随那个神秘人
`.trim(), rs = `
你是内容评估专家，负责评估分块内容的质量。

评估维度（每项 0-10 分）：
1. 与章节规划符合度
2. 与故事设定符合度
3. 与读者兴趣点符合度
4. 与情绪设计符合度

输出格式：
## 评估结果

### 各维度评分
1. 与章节规划符合度：{分数}/10
2. 与故事设定符合度：{分数}/10
3. 与读者兴趣点符合度：{分数}/10
4. 与情绪设计符合度：{分数}/10

### 综合评分
{平均分}/10

### AI 建议
- （仅供参考，用户可忽略）
- ...

要求：
- 客观评估
- 建议要具体但不强制
- 尊重创作者的选择
- 即使评分低，也允许用户继续
`.trim(), as = `
你是内容改进顾问，根据评估结果，给出具体的改进建议。

针对低分项（<6分），提供：
- 问题分析
- 改进方向
- 具体建议（3-5条）

要求：
- 建议要具体、可操作
- 不要过于苛刻
- 尊重创作风格
- 强调这些只是建议，可以忽略
`.trim(), os = `
你是内容修正专家，根据评估结果和改进建议，自动修正内容。

要求：
- 保持原文的核心内容和情节
- 针对性地改进低分维度
- 不过度修改
- 保持作者的写作风格

输出：
- 修正后的完整文本
- 简要说明修改点
`.trim(), is = `
你是章节评估专家，负责评估整章内容的质量。

评估维度（每项 0-10 分）：
1. 章节主题聚焦程度
2. 与大纲符合度（如果有大纲）
3. 与故事设定符合度
4. 与读者兴趣点符合度
5. 与情绪设计符合度

输出格式：
## 章节评估结果

### 各维度评分
1. 章节主题聚焦程度：{分数}/10
2. 与大纲符合度：{分数}/10
3. 与故事设定符合度：{分数}/10
4. 与读者兴趣点符合度：{分数}/10
5. 与情绪设计符合度：{分数}/10

### 综合评分
{平均分}/10

### 亮点
- ...
- ...

### 问题（如果有）
- ...

### AI 建议
- （仅供参考）
- ...

要求：
- 客观、全面
- 既要肯定优点，也要指出问题
- 建议仅供参考，不强制
`.trim(), cs = `
你是章节改进顾问，根据章节评估结果，给出详细的改进建议。

输出内容：
- 整体分析
- 优点总结
- 存在的问题
- 具体改进方向（分点说明）
- 可选的扩展方向

要求：
- 详细但不啰嗦
- 具体可操作
- 尊重创作风格
- 强调这些只是建议
`.trim(), ls = `
你是章节优化专家，对整章内容进行优化。

优化方向：
- 改善低分维度
- 增强主题聚焦
- 优化叙事节奏
- 增加细节描写（如需要）
- 加强情绪渲染（如需要）

注意：
- 保持核心情节不变
- 保持角色性格一致
- 不过度修改
- 保持作者风格

输出：
- 优化后的完整章节
- 修改说明
`.trim(), ds = `
你是剧情梗概总结压缩专员，负责对文字冒险游戏的剧情进行压缩总结，提炼出关键信息，帮助玩家快速回顾剧情发展。

user 将提供给你：
- 章节的完整内容

你的任务：
- 把章节内容压缩为一个简洁的段落（200-500字，根据用户选择的风格调整）
- 注意不要遗漏重要信息，也不要添加新的信息
- 突出本章的关键情节和角色发展

风格：
- 详细：约 500 字，包含更多细节
- 标准：约 300 字，平衡详略
- 简洁：约 200 字，仅核心内容
`.trim(), ms = `
你是游戏要素提取函数，负责从文字冒险游戏的剧情中提取游戏要素，包括角色、道具、技能、阵营、概念等等。

user 将提供给你：
- 相对早期的前置剧情（供你参考，不需要再次压缩），可能是若干个段落。
- 近期发生的剧情，可能是更加详细的若干个段落。
- 已经知晓的游戏要素清单。

你的任务：
- 从近期发生的剧情中提取游戏要素，包括角色、道具、技能、阵营、概念等等。
  - 注意：概念是指与游戏设定相关的重要概念，不要提取过于普通或日常的概念。
  - 注意：如果没有明确的游戏要素，可以不提取，返回"null"即可。
- 注意：**不要提取地图、地区、地点之类的要素**，因为这些要素有其他函数负责提取。
- 通常来说，你应该提取不在已知清单中的要素。但如果已知要素的信息发生了重要变化或重要更新，你也可以提取。
- 你应该以 jsonlines 格式输出结果，每行一个游戏要素的 json 对象。
  - 千万注意不是 json 格式，不要用逗号分隔，也不要在外层加上中括号。
  - 每个对象应包含 type, name, alias, descList, method, related 等字段。
    - method 字段（非必有），其值为"update"时表示更新已知要素的信息；其值为"add"时表示添加新的要素，"add"可省略，即：如果没有 method 字段，则表示添加新的要素。
    - type 字段（必有）表示游戏要素的类型，如"角色"、"道具"、"技能"、"阵营"、"概念"等。
    - name 字段（必有）表示游戏要素的名称。注意：name 字段应该是唯一的，不应该重复。如果有可能发生重复，则应该尽可能使用不会混淆的名称，然后在 alias 字段中列出可能的别名。
      - 注意：name 字段是可以修改的，比如先前未知道姓名的角色，后来才知道了，那么应该将 name 字段修改为新的名称。此时 method 字段应该为"update"。
      - 注意：不要使用容易混淆的概括性名称，比如"老妇人"，而应该使用更具体的名称，比如"卖报的老妇人"。
    - alias 字段（非必有）表示游戏要素的别名，是字符串数组。
    - descList 字段（非必有）表示游戏要素的描述列表，是字符串数组。每个字符串应该是关于此游戏要素的简要描述。
      - 注意：如果在理论设定上没有必然联系，则描述不应该提及其他游戏要素，以免造成过度耦合。
      - 注意：如果 method 字段为"update"，则 descList 字段只应该包含要添加的新描述，而不应该包含已有的描述。
    - related 字段（非必有）表示在 descList 中提到的其他游戏要素的名称，是字符串数组。这些要素可以是已知的，也可以是还未出现的。如果 method 字段为"update"，则 related 字段只应该包含要添加的新相关要素，而不应该包含已有的相关要素。
  - 例如：{ "type": "角色", "name": "张三", "alias": ["三哥"], "method": "add", "descList": ["一个身材魁梧的男子", "持有名为"灵核"的道具"], "related": ["灵核"] }
`.trim(), ps = `
你是故事完结评估专家，负责判断故事是否自然完结。

评估依据：
- 主要情节是否已解决
- 角色弧光是否完成
- 伏笔是否基本收回
- 是否有合适的结局感

输出格式：
## 完结评估

### 是否完结
【是】或【否】

### 理由
- ...
- ...

### 建议
- 如果已完结：可以结束了
- 如果未完结：建议继续写 X 章，完成 Y 内容

要求：
- 客观评估
- 不强制要求完美结局
- 尊重创作者的选择
`.trim(), us = `
你是全书摘要生成专家，负责生成小说的整体摘要。

任务：
- 根据设计阶段内容和所有章节摘要
- 生成全书摘要（500-1000字）
- 概括故事的核心内容、主题、特点

输出：
- 简洁的故事梗概
- 核心主题
- 主要角色
- 主要情节线

要求：
- 简洁但不失完整性
- 突出亮点
- 适合作为作品简介
`.trim(), hs = `
你是营销文案专家，负责生成小说推荐语。

任务：
- 根据全书摘要、主题、风格
- 生成吸引读者的推荐语
- 提供短版（50-100字）和长版（200-300字）

要求：
- 有吸引力
- 突出卖点
- 符合目标读者
- 不夸大其词
`.trim(), xs = `
you 是导读生成专家，负责为小说生成导读。

任务：
- 帮助读者更好地理解作品
- 介绍背景、主题、特色
- 提供阅读建议

输出内容：
- 创作背景
- 主题分析
- 特色介绍
- 阅读建议

要求：
- 不剧透关键情节
- 引导而不灌输
- 适度分析
`.trim(), gs = `
你是作者后记生成专家，负责生成作者的话。

任务：
- 根据创作历程
- 生成真诚的作者后记

可包含内容：
- 创作动机
- 创作过程中的感受
- 对作品的期望
- 对读者的感谢

要求：
- 真诚、自然
- 不过度煽情
- 体现创作者的个性
`.trim(), _s = `
你是视觉描述专家，负责生成适合 AI 绘画工具的封面描述。

任务：
- 根据故事风格、关键角色、核心场景
- 生成适用于 Midjourney / DALL-E 等工具的文字描述

输出：
- 详细的视觉描述
- 包括：主体、风格、氛围、色调、构图等
- 适合 AI 绘画工具理解

要求：
- 具象化
- 符合故事风格
- 有视觉冲击力
`.trim(), A = {
        WORLDVIEW_GENERATION: Pt,
        WORLDVIEW_FIELD: Ot,
        CHARACTERS_BATCH_GENERATION: Rt,
        SINGLE_CHARACTER_GENERATION: Dt,
        CHARACTER_ENHANCEMENT: $t,
        THEME_GENERATION: Lt,
        THEME_ANALYSIS: Ut,
        PLOT_GENERATION_TEMPLATE: Bt,
        PLOT_GENERATION_FREE: Ft,
        PLOT_OPTIMIZATION: Ht,
        CHAPTER_OUTLINE_GENERATION: Wt,
        CHAPTER_OUTLINE_OPTIMIZATION: Gt,
        DESIGN_REVIEW: Yt,
        CHAPTER_PREP_REVIEW: zt,
        INTEREST_ANALYSIS: Kt,
        EMOTION_DESIGN: Vt,
        CHAPTER_PLAN_GENERATION: qt,
        BLOCK_WRITE_DIRECT: Jt,
        BLOCK_WRITE_GUIDED: Zt,
        INSTRUCTION_SUGGESTION: Xt,
        BLOCK_POLISH: Qt,
        WRITING_HINT: es,
        CONTENT_EXPANSION: ts,
        BLOCK_WRITE_ROLEPLAY: ss,
        ACTION_SUGGESTION: ns,
        BLOCK_EVALUATION: rs,
        IMPROVEMENT_SUGGESTIONS: as,
        AUTO_CORRECTION: os,
        CHAPTER_EVALUATION: is,
        CHAPTER_IMPROVEMENT_SUGGESTIONS: cs,
        CHAPTER_OPTIMIZATION: ls,
        CHAPTER_SUMMARY: ds,
        KNOWLEDGE_EXTRACTION: ms,
        COMPLETION_CHECK: ps,
        BOOK_SUMMARY: us,
        RECOMMENDATION: hs,
        READING_GUIDE: xs,
        AUTHOR_NOTE: gs,
        COVER_DESCRIPTION: _s
    };
    function R(t) {
        return `【小说标题】：${t.modeConfig.projectName || "未命名小说"}
`;
    }
    function X(t) {
        const s = t.modeState.tempData?.latestReviewSuggestions;
        return s ? `

=== 之前的评审建议 ===
特别注意：用户之前收到了以下评审建议，请务必在本次生成中针对性地改进，避免重复错误：
${s}
======================
` : "";
    }
    function D(t) {
        const s = t.modeConfig.worldview;
        if (!s) return "（暂无世界观设定）";
        const n = [];
        return s.timePeriod && n.push(`**时代背景**：${s.timePeriod}`), s.socialSystem && n.push(`**社会制度**：${s.socialSystem}`), s.techSystem && n.push(`**技术体系**：${s.techSystem}`), s.powerSystem && n.push(`**能力体系**：${s.powerSystem}`), s.otherSettings && n.push(`**其他设定**：${s.otherSettings}`), n.join(`

`);
    }
    function B(t) {
        const s = t.modeConfig.keyCharacters;
        return !s || s.length === 0 ? "（暂无角色）" : s.map((n)=>`### ${n.name}（${n.role}）
${n.description}`).join(`

`);
    }
    function q(t) {
        const s = t.modeConfig.theme;
        return s ? [
            `**主旨**：${s.mainIdea}`,
            `**立意**：${s.intention}`,
            `**风格**：${s.style}`
        ].join(`
`) : "（暂无主题设定）";
    }
    function ae(t) {
        const s = t.modeConfig.plotOutline;
        if (!s) return "（暂无情节脉络）";
        if (s.rawText) return s.rawText;
        const n = s.structure ? `**故事结构**：${s.structure}

` : "", r = s.keyPlots.map((a, i)=>`${i + 1}. **${a.name}**
${a.description}`).join(`

`);
        return n + r;
    }
    function Ue(t) {
        const s = t.modeConfig.chapterOutline, n = t.modeConfig.chapterOutlineRawText;
        return (!s || s.length === 0) && !n ? "（暂无章节大纲）" : !s || s.length === 0 ? n : s.map((r)=>{
            const a = r.keyEvents.map((i)=>`- ${i}`).join(`
`);
            return `### 第${r.chapterNumber}章：${r.title}

**摘要**：${r.summary}

**关键事件**：
${a}`;
        }).join(`

---

`);
    }
    function pe(t) {
        const s = t.modeState.chapterSummaries;
        return !s || s.length === 0 ? "（暂无已完成章节）" : s.map((n)=>`**第${n.chapterNumber}章**：${n.summary}`).join(`

`);
    }
    function J(t) {
        const s = t.modeState.currentChapter;
        return !s || !s.blocks || s.blocks.length === 0 ? "（本章暂无已写内容）" : s.blocks.map((n, r)=>`【分块 ${r + 1}】（${n.wordCount}字）
${n.content}`).join(`

`);
    }
    function oe(t) {
        const s = t.modeState.progressTracking.currentInterestPoints;
        return !s || s.length === 0 ? "（暂无兴趣点）" : s.map((n, r)=>`${r + 1}. 【${n.type}】${n.content}（优先级：${n.priority}）`).join(`
`);
    }
    function ve(t) {
        const n = t.modeState.progressTracking.foreshadows.filter((r)=>r.status === "pending" || r.status === "in-progress");
        return n.length === 0 ? "（暂无未完成的伏笔）" : n.map((r)=>{
            const a = `第${r.introducedAt.chapter}章-分块${r.introducedAt.block}`;
            return `- 【${r.importance}】${r.content}（引入于：${a}）`;
        }).join(`
`);
    }
    function fs(t) {
        const s = t.modeState.knowledgeBase, n = [];
        if (s.entities && s.entities.length > 0) {
            const r = s.entities.map((a)=>{
                const i = a.alias && a.alias.length > 0 ? `（别名：${a.alias.join("、")}）` : "", d = a.description.slice(0, 2).join("；");
                return `- ${a.name}${i}：${d}`;
            }).join(`
`);
            n.push(`**实体**：
${r}`);
        }
        if (s.rules && s.rules.length > 0) {
            const r = s.rules.map((a)=>`- ${a.name}：${a.description}`).join(`
`);
            n.push(`**规则**：
${r}`);
        }
        return n.join(`

`) || "（暂无知识库内容）";
    }
    function ws(t, s) {
        const n = t.modeState.tempData?.worldviewHint || "", r = R(t), a = X(t);
        return [
            {
                role: "system",
                content: A.WORLDVIEW_GENERATION
            },
            {
                role: "user",
                content: [
                    r,
                    n ? `【用户期望/现有设定】：
${n}` : "",
                    "请根据以上信息生成完整的世界观设定。",
                    a
                ].filter(Boolean).join(`

`)
            }
        ];
    }
    function Ss(t, s) {
        const n = t.modeState.tempData?.currentField || "", r = t.modeState.tempData?.worldviewHint || "", a = R(t), i = t.modeConfig.worldview || {}, d = X(t);
        return [
            {
                role: "system",
                content: A.WORLDVIEW_FIELD
            },
            {
                role: "user",
                content: [
                    a,
                    `已有世界观内容：
${JSON.stringify(i, null, 2)}`,
                    r ? `【用户提示】：
${r}` : "",
                    `请为字段「${n}」生成内容。`,
                    d
                ].filter(Boolean).join(`

`)
            }
        ];
    }
    function ys(t, s) {
        const n = R(t), r = D(t), a = q(t), i = t.modeState.tempData?.characterHint || "", d = X(t);
        return [
            {
                role: "system",
                content: A.CHARACTERS_BATCH_GENERATION
            },
            {
                role: "user",
                content: [
                    n,
                    `【世界观】
${r}`,
                    `【主题】
${a}`,
                    i ? `【用户提示】：
${i}` : "",
                    "请生成 3-5 个关键角色。",
                    d
                ].filter(Boolean).join(`

`)
            }
        ];
    }
    function Ns(t, s) {
        const n = R(t), r = D(t), a = B(t), i = t.modeState.tempData?.characterHint || "", d = X(t);
        return [
            {
                role: "system",
                content: A.SINGLE_CHARACTER_GENERATION
            },
            {
                role: "user",
                content: [
                    n,
                    `【世界观】
${r}`,
                    `【已有角色】
${a}`,
                    i ? `【用户提示】
${i}` : "",
                    "请生成一个新角色。",
                    d
                ].filter(Boolean).join(`

`)
            }
        ];
    }
    function vs(t, s) {
        const n = R(t), r = t.modeState.tempData?.targetCharacterId || "", a = t.modeConfig.keyCharacters.find((p)=>p.id === r), i = t.modeState.tempData?.characterHint || "", d = X(t);
        if (!a) throw new Error(`Character ${r} not found`);
        const m = D(t);
        return [
            {
                role: "system",
                content: A.CHARACTER_ENHANCEMENT
            },
            {
                role: "user",
                content: [
                    n,
                    `【世界观】
${m}`,
                    `【当前角色】
姓名：${a.name}
角色定位：${a.role}
描述：${a.description}`,
                    i ? `【完善要求】：
${i}` : "",
                    "请完善此角色。",
                    d
                ].filter(Boolean).join(`

`)
            }
        ];
    }
    function bs(t, s) {
        const n = R(t), r = D(t), a = B(t), i = t.modeState.tempData?.themeHint || "", d = X(t);
        return [
            {
                role: "system",
                content: A.THEME_GENERATION
            },
            {
                role: "user",
                content: [
                    n,
                    `【世界观】
${r}`,
                    `【角色】
${a}`,
                    i ? `【用户提示】：
${i}` : "",
                    "请生成小说主题。",
                    d
                ].filter(Boolean).join(`

`)
            }
        ];
    }
    function Is(t, s) {
        const n = R(t), r = D(t), a = B(t), i = q(t);
        return [
            {
                role: "system",
                content: A.THEME_ANALYSIS
            },
            {
                role: "user",
                content: [
                    n,
                    `【世界观】
${r}`,
                    `【角色】
${a}`,
                    `【主题】
${i}`,
                    "请分析当前主题设计。"
                ].join(`

`)
            }
        ];
    }
    function js(t, s) {
        const n = R(t), r = t.modeState.tempData?.plotStructure || "三幕剧", a = t.modeState.tempData?.plotFormat || "markdown", i = t.modeState.tempData?.plotHint || "", d = X(t), m = D(t), p = B(t), f = q(t), _ = ae(t), N = _ && !_.includes("暂无情节脉络"), h = a === "yaml" ? "请以 YAML 格式输出（参考 system prompt 中的格式要求）。" : "请以 Markdown 格式输出（参考 system prompt 中的格式要求）。";
        return [
            {
                role: "system",
                content: A.PLOT_GENERATION_TEMPLATE
            },
            {
                role: "user",
                content: [
                    n,
                    `【世界观】
${m}`,
                    `【角色】
${p}`,
                    `【主题】
${f}`,
                    N ? `【当前情节草稿】
${_}` : "",
                    i ? `【用户提示】：
${i}` : "",
                    `【选择的结构】：${r}`,
                    `
${h}`,
                    d
                ].filter(Boolean).join(`

`)
            }
        ];
    }
    function Cs(t, s) {
        const n = R(t), r = t.modeState.tempData?.plotFormat || "markdown", a = t.modeState.tempData?.plotHint || "", i = X(t), d = D(t), m = B(t), p = q(t), f = ae(t), _ = f && !f.includes("暂无情节脉络"), N = r === "yaml" ? "请以 YAML 格式输出。" : "请以 Markdown 格式输出。";
        return [
            {
                role: "system",
                content: A.PLOT_GENERATION_FREE
            },
            {
                role: "user",
                content: [
                    n,
                    `【世界观】
${d}`,
                    `【角色】
${m}`,
                    `【主题】
${p}`,
                    _ ? `【当前情节草稿】
${f}` : "",
                    a ? `【用户提示】
${a}` : "",
                    `
${N}`,
                    i
                ].filter(Boolean).join(`

`)
            }
        ];
    }
    function Ts(t, s) {
        const n = R(t), r = t.modeState.tempData?.plotText || ae(t), a = t.modeConfig.plotOutline?.format || "markdown", i = t.modeState.tempData?.plotHint || "", d = X(t), m = D(t), p = B(t), f = q(t);
        return [
            {
                role: "system",
                content: A.PLOT_OPTIMIZATION
            },
            {
                role: "user",
                content: [
                    n,
                    `【世界观】
${m}`,
                    `【角色】
${p}`,
                    `【主题】
${f}`,
                    `【当前情节脉络】（${a} 格式）
${r}`,
                    i ? `【优化要求】：
${i}` : "",
                    "请优化这个情节脉络，保持原格式。",
                    d
                ].filter(Boolean).join(`

`)
            }
        ];
    }
    function As(t, s) {
        const n = R(t), r = t.modeState.tempData?.chapterCount || 12, a = t.modeState.tempData?.outlineFormat || "markdown", i = t.modeState.tempData?.outlineHint || "", d = X(t), m = D(t), p = B(t), f = q(t), _ = ae(t), N = a === "yaml" ? "请以 YAML 格式输出。" : "请以 Markdown 格式输出。";
        return [
            {
                role: "system",
                content: A.CHAPTER_OUTLINE_GENERATION
            },
            {
                role: "user",
                content: [
                    n,
                    `【世界观】
${m}`,
                    `【角色】
${p}`,
                    `【主题】
${f}`,
                    `【情节脉络】
${_}`,
                    i ? `【用户提示】：
${i}` : "",
                    `
请生成约 ${r} 章的章节大纲。

${N}`,
                    d
                ].filter(Boolean).join(`

`)
            }
        ];
    }
    function ks(t, s) {
        const n = R(t), r = t.modeState.tempData?.outlineText || Ue(t), a = t.modeState.tempData?.outlineFormat || "markdown", i = t.modeState.tempData?.outlineHint || "", d = X(t), m = ae(t);
        return [
            {
                role: "system",
                content: A.CHAPTER_OUTLINE_OPTIMIZATION
            },
            {
                role: "user",
                content: [
                    n,
                    `【情节脉络】
${m}`,
                    `【当前章节大纲】（${a} 格式）
${r}`,
                    i ? `【优化要求】：
${i}` : "",
                    "请优化这个章节大纲，保持原格式。",
                    d
                ].filter(Boolean).join(`

`)
            }
        ];
    }
    function Be(t, s) {
        const n = R(t), r = D(t), a = B(t), i = q(t), d = ae(t), m = t.modeConfig.chapterOutlineRawText, f = t.modeConfig.chapterOutline && t.modeConfig.chapterOutline.length > 0 || !!m ? Ue(t) : "（用户选择跳过大纲设计）";
        return [
            {
                role: "system",
                content: A.DESIGN_REVIEW
            },
            {
                role: "user",
                content: [
                    n,
                    `【世界观】
${r}`,
                    `【角色】
${a}`,
                    `【主题】
${i}`,
                    `【情节脉络】
${d}`,
                    `【章节大纲】
${f}`,
                    "请对以上设计进行全面评审。"
                ].join(`

`)
            }
        ];
    }
    function Fe(t, s) {
        const n = R(t), r = D(t), a = B(t), i = pe(t), d = t.modeState.currentChapterIndex + 1, m = t.modeConfig.chapterOutline?.find((f)=>f.chapterNumber === d), p = m ? `【本章大纲】
第${m.chapterNumber}章：${m.title}
${m.summary}` : "（本章无大纲）";
        return [
            {
                role: "system",
                content: A.CHAPTER_PREP_REVIEW
            },
            {
                role: "user",
                content: [
                    n,
                    `【世界观】
${r}`,
                    `【角色】
${a}`,
                    `【已完成章节摘要】
${i}`,
                    p,
                    `请生成前情回顾，为第${d}章做准备。`
                ].join(`

`)
            }
        ];
    }
    function He(t, s) {
        const n = R(t), r = pe(t), a = J(t), i = ve(t);
        return [
            {
                role: "system",
                content: A.INTEREST_ANALYSIS
            },
            {
                role: "user",
                content: [
                    n,
                    `====【前置剧情开始】====
${r}`,
                    `====【近期剧情开始】====
${a}`,
                    `====【未完成伏笔】====
${i}`,
                    "====【请提取兴趣点】===="
                ].join(`

`)
            }
        ];
    }
    function We(t, s) {
        const n = R(t), r = t.modeState.progressTracking.emotionSequence.slice(-10).map((p)=>`第${p.chapterNumber}章-块${p.blockIndex}：${p.emotion}（强度${p.intensity}）`).join(`
`) || "（暂无历史情绪）", a = t.modeState.currentChapterIndex + 1, i = t.modeConfig.chapterOutline?.find((p)=>p.chapterNumber === a), d = i ? `第${i.chapterNumber}章：${i.title}
${i.summary}` : "（本章无大纲）", m = oe(t);
        return [
            {
                role: "system",
                content: A.EMOTION_DESIGN
            },
            {
                role: "user",
                content: [
                    n,
                    `【历史情绪序列】
${r}`,
                    `【本章大纲】
${d}`,
                    `【当前兴趣点】
${m}`,
                    "请为本章设计情绪曲线。"
                ].join(`

`)
            }
        ];
    }
    function Ge(t, s) {
        const n = R(t), r = t.modeState.currentChapterIndex + 1, a = t.modeConfig.chapterOutline?.find((_)=>_.chapterNumber === r), i = a ? `第${a.chapterNumber}章：${a.title}
摘要：${a.summary}
关键事件：
${a.keyEvents.map((_)=>`- ${_}`).join(`
`)}` : "（本章无大纲）", d = t.modeState.tempData?.chapterPrepReview || "（无前情回顾）", m = ve(t), p = oe(t), f = t.modeState.tempData?.emotionDesign || "（无情绪设计）";
        return [
            {
                role: "system",
                content: A.CHAPTER_PLAN_GENERATION
            },
            {
                role: "user",
                content: [
                    n,
                    `【章节大纲】
${i}`,
                    `【前情回顾】
${d}`,
                    `【未完成伏笔】
${m}`,
                    `【兴趣点列表】
${p}`,
                    `【情绪曲线设计】
${f}`,
                    "请生成本章的详细规划。"
                ].join(`

`)
            }
        ];
    }
    function ye(t, s) {
        const n = R(t), r = D(t), a = B(t), i = t.modeState.currentChapter?.plan || "（无章节规划）", d = J(t), m = oe(t), p = t.modeState.tempData?.emotionDesign || "（无情绪设计）", f = t.modeState.tempData?.userInstruction || "";
        return [
            {
                role: "system",
                content: A.BLOCK_WRITE_DIRECT
            },
            {
                role: "user",
                content: [
                    n,
                    `【世界观】
${r}`,
                    `【角色】
${a}`,
                    `【章节规划】
${i}`,
                    `【已写内容】
${d}`,
                    `【兴趣点】
${m}`,
                    `【情绪设计】
${p}`,
                    f ? `【续写提示】：
${f}` : "",
                    "请续写下一个分块（500-1000字）。"
                ].filter(Boolean).join(`

`)
            }
        ];
    }
    function Ye(t, s) {
        const n = R(t), r = t.modeState.tempData?.userInstruction || "", a = D(t), i = B(t), d = t.modeState.currentChapter?.plan || "（无章节规划）", m = J(t);
        return [
            {
                role: "system",
                content: A.BLOCK_WRITE_GUIDED
            },
            {
                role: "user",
                content: [
                    n,
                    `【世界观】
${a}`,
                    `【角色】
${i}`,
                    `【章节规划】
${d}`,
                    `【已写内容】
${m}`,
                    `【用户指令】
${r}`,
                    `
请根据用户指令续写（500-1000字）。`
                ].join(`

`)
            }
        ];
    }
    function Es(t, s) {
        const n = t.modeState.currentChapter?.plan || "（无章节规划）", r = J(t), a = oe(t);
        return [
            {
                role: "system",
                content: A.INSTRUCTION_SUGGESTION
            },
            {
                role: "user",
                content: `【章节规划】
${n}

【已写内容】
${r}

【兴趣点】
${a}

请建议 3-5 个续写指令。`
            }
        ];
    }
    function ze(t, s) {
        const n = R(t), r = t.modeState.tempData?.userContent || "", a = t.modeState.tempData?.polishStyle || "文学润色", i = t.modeState.tempData?.customRequirement || "", d = D(t), m = B(t);
        return [
            {
                role: "system",
                content: A.BLOCK_POLISH
            },
            {
                role: "user",
                content: [
                    n,
                    `【世界观】
${d}`,
                    `【角色】
${m}`,
                    `【润色风格】
${a}`,
                    i ? `【自定义要求】
${i}` : "",
                    `【待润色内容】
${r}`,
                    "请润色以上内容。"
                ].filter(Boolean).join(`

`)
            }
        ];
    }
    function Ms(t, s) {
        const n = t.modeState.tempData?.writtenContent || "", r = t.modeState.currentChapter?.plan || "（无章节规划）", a = J(t);
        return [
            {
                role: "system",
                content: A.WRITING_HINT
            },
            {
                role: "user",
                content: `【章节规划】
${r}

【已写内容】
${a}

【用户当前写作内容】
${n}

请提供 2-3 个续写方向建议。`
            }
        ];
    }
    function Ps(t, s) {
        const n = R(t), r = t.modeState.tempData?.outlineContent || "", a = D(t), i = B(t), d = t.modeState.currentChapter?.plan || "（无章节规划）";
        return [
            {
                role: "system",
                content: A.CONTENT_EXPANSION
            },
            {
                role: "user",
                content: [
                    n,
                    `【世界观】
${a}`,
                    `【角色】
${i}`,
                    `【章节规划】
${d}`,
                    `【用户的大纲式内容】
${r}`,
                    "请将以上大纲扩展为详细的小说文本（500-1000字）。"
                ].join(`

`)
            }
        ];
    }
    function Ke(t, s) {
        const n = R(t), r = t.modeState.tempData?.selectedCharacterId || "", a = t.modeConfig.keyCharacters.find((N)=>N.id === r), i = t.modeState.tempData?.actionType || "", d = t.modeState.tempData?.action || "";
        if (!a) throw new Error(`Character ${r} not found`);
        const m = D(t), p = B(t), f = t.modeState.currentChapter?.plan || "（无章节规划）", _ = J(t);
        return [
            {
                role: "system",
                content: A.BLOCK_WRITE_ROLEPLAY
            },
            {
                role: "user",
                content: [
                    n,
                    `【世界观】
${m}`,
                    `【角色】
${p}`,
                    `【章节规划】
${f}`,
                    `【已写内容】
${_}`,
                    `【选定角色】
姓名：${a.name}
角色定位：${a.role}
描述：${a.description}`,
                    `【行动类型】
${i}`,
                    `【角色行动】
${d}`,
                    `
请根据角色行动续写剧情（500-1000字）。`
                ].join(`

`)
            }
        ];
    }
    function Os(t, s) {
        const n = R(t), r = t.modeState.tempData?.selectedCharacterId || "", a = t.modeConfig.keyCharacters.find((p)=>p.id === r);
        if (!a) throw new Error(`Character ${r} not found`);
        const i = t.modeState.currentChapter?.plan || "（无章节规划）", d = J(t), m = oe(t);
        return [
            {
                role: "system",
                content: A.ACTION_SUGGESTION
            },
            {
                role: "user",
                content: [
                    n,
                    `【章节规划】
${i}`,
                    `【已写内容】
${d}`,
                    `【兴趣点】
${m}`,
                    `【选定角色】
姓名：${a.name}
角色定位：${a.role}
描述：${a.description}`,
                    `
请建议 3-5 个该角色可能采取的行动。`
                ].join(`

`)
            }
        ];
    }
    function Rs(t, s) {
        const n = t.modeState.tempData?.blockContent || "", r = t.modeState.currentChapter?.plan || "（无章节规划）", a = D(t), i = oe(t), d = t.modeState.tempData?.emotionDesign || "（无情绪设计）";
        return [
            {
                role: "system",
                content: A.BLOCK_EVALUATION
            },
            {
                role: "user",
                content: `【章节规划】
${r}

【世界观设定】
${a}

【兴趣点列表】
${i}

【情绪设计】
${d}

【分块内容】
${n}

请评估以上分块内容。`
            }
        ];
    }
    function Ds(t, s) {
        const n = t.modeState.tempData?.blockContent || "", r = t.modeState.tempData?.evaluation || {}, a = t.modeState.currentChapter?.plan || "（无章节规划）";
        return [
            {
                role: "system",
                content: A.IMPROVEMENT_SUGGESTIONS
            },
            {
                role: "user",
                content: `【章节规划】
${a}

【分块内容】
${n}

【评估结果】
${JSON.stringify(r, null, 2)}

请给出具体的改进建议。`
            }
        ];
    }
    function $s(t, s) {
        const n = t.modeState.tempData?.blockContent || "", r = t.modeState.tempData?.evaluation || {}, a = t.modeState.tempData?.suggestions || "", i = t.modeState.currentChapter?.plan || "（无章节规划）";
        return [
            {
                role: "system",
                content: A.AUTO_CORRECTION
            },
            {
                role: "user",
                content: `【章节规划】
${i}

【原始内容】
${n}

【评估结果】
${JSON.stringify(r, null, 2)}

【改进建议】
${a}

请修正以上内容。`
            }
        ];
    }
    function Ls(t, s) {
        const n = t.modeState.currentChapterIndex + 1, r = t.modeConfig.chapterOutline?.find((f)=>f.chapterNumber === n), a = r ? `第${r.chapterNumber}章：${r.title}
${r.summary}` : "（本章无大纲）", i = J(t), d = D(t), m = oe(t), p = t.modeState.tempData?.emotionDesign || "（无情绪设计）";
        return [
            {
                role: "system",
                content: A.CHAPTER_EVALUATION
            },
            {
                role: "user",
                content: `【章节大纲】
${a}

【世界观设定】
${d}

【兴趣点列表】
${m}

【情绪设计】
${p}

【章节完整内容】
${i}

请评估以上章节内容。`
            }
        ];
    }
    function Us(t, s) {
        const n = J(t), r = t.modeState.tempData?.chapterEvaluation || {};
        return [
            {
                role: "system",
                content: A.CHAPTER_IMPROVEMENT_SUGGESTIONS
            },
            {
                role: "user",
                content: `【章节内容】
${n}

【评估结果】
${JSON.stringify(r, null, 2)}

请给出详细的改进建议。`
            }
        ];
    }
    function Bs(t, s) {
        const n = J(t), r = t.modeState.tempData?.chapterEvaluation || {}, a = D(t), i = B(t);
        return [
            {
                role: "system",
                content: A.CHAPTER_OPTIMIZATION
            },
            {
                role: "user",
                content: `【世界观】
${a}

【角色】
${i}

【章节内容】
${n}

【评估结果】
${JSON.stringify(r, null, 2)}

请优化以上章节内容。`
            }
        ];
    }
    function Ve(t, s) {
        const n = J(t), r = t.modeState.tempData?.summaryStyle || "standard";
        return [
            {
                role: "system",
                content: A.CHAPTER_SUMMARY
            },
            {
                role: "user",
                content: `【章节内容】
${n}

【摘要风格】
${r === "detailed" ? "详细（约500字）" : r === "brief" ? "简洁（约200字）" : "标准（约300字）"}

请生成章节摘要。`
            }
        ];
    }
    function qe(t, s) {
        const n = pe(t), r = J(t), a = fs(t);
        return [
            {
                role: "system",
                content: A.KNOWLEDGE_EXTRACTION
            },
            {
                role: "user",
                content: `====【前置剧情】====
${n}

====【近期剧情】====
${r}

====【已知要素清单】====
${a}

====【请提取游戏要素】====`
            }
        ];
    }
    function Je(t, s) {
        const n = D(t), r = B(t), a = q(t), i = ae(t), d = pe(t), m = J(t), p = ve(t);
        return [
            {
                role: "system",
                content: A.COMPLETION_CHECK
            },
            {
                role: "user",
                content: `【世界观】
${n}

【角色】
${r}

【主题】
${a}

【情节脉络】
${i}

【所有章节摘要】
${d}

【最新章节内容】
${m}

【未完成伏笔】
${p}

请评估故事是否自然完结。`
            }
        ];
    }
    function Ze(t, s) {
        const n = D(t), r = B(t), a = q(t), i = pe(t);
        return [
            {
                role: "system",
                content: A.BOOK_SUMMARY
            },
            {
                role: "user",
                content: `【世界观】
${n}

【角色】
${r}

【主题】
${a}

【所有章节摘要】
${i}

请生成全书摘要（500-1000字）。`
            }
        ];
    }
    function Xe(t, s) {
        const n = t.modeState.tempData?.bookSummary || "", r = q(t);
        return [
            {
                role: "system",
                content: A.RECOMMENDATION
            },
            {
                role: "user",
                content: `【全书摘要】
${n}

【主题】
${r}

请生成推荐语（短版50-100字，长版200-300字）。`
            }
        ];
    }
    function Qe(t, s) {
        const n = D(t), r = q(t), a = t.modeState.tempData?.bookSummary || "";
        return [
            {
                role: "system",
                content: A.READING_GUIDE
            },
            {
                role: "user",
                content: `【世界观】
${n}

【主题】
${r}

【全书摘要】
${a}

请生成导读。`
            }
        ];
    }
    function et(t, s) {
        const n = q(t), r = t.modeConfig.projectName;
        return [
            {
                role: "system",
                content: A.AUTHOR_NOTE
            },
            {
                role: "user",
                content: `【项目名称】
${r}

【主题】
${n}

请生成作者的话。`
            }
        ];
    }
    function tt(t, s) {
        const n = q(t), r = B(t), a = D(t);
        return [
            {
                role: "system",
                content: A.COVER_DESCRIPTION
            },
            {
                role: "user",
                content: `【世界观】
${a}

【角色】
${r}

【主题】
${n}

请生成适合 AI 绘画工具的封面描述。`
            }
        ];
    }
    const Q = {
        makeMessagesForWorldviewGeneration: ws,
        makeMessagesForWorldviewField: Ss,
        makeMessagesForCharactersBatchGeneration: ys,
        makeMessagesForSingleCharacterGeneration: Ns,
        makeMessagesForCharacterEnhancement: vs,
        makeMessagesForThemeGeneration: bs,
        makeMessagesForThemeAnalysis: Is,
        makeMessagesForPlotGenerationWithTemplate: js,
        makeMessagesForPlotGenerationFree: Cs,
        makeMessagesForPlotOptimization: Ts,
        makeMessagesForChapterOutlineGeneration: As,
        makeMessagesForChapterOutlineOptimization: ks,
        makeMessagesForDesignReview: Be,
        makeMessagesForChapterPrepReview: Fe,
        makeMessagesForInterestAnalysis: He,
        makeMessagesForEmotionDesign: We,
        makeMessagesForChapterPlanGeneration: Ge,
        makeMessagesForBlockWriteDirect: ye,
        makeMessagesForBlockWriteGuided: Ye,
        makeMessagesForInstructionSuggestion: Es,
        makeMessagesForBlockPolish: ze,
        makeMessagesForWritingHint: Ms,
        makeMessagesForContentExpansion: Ps,
        makeMessagesForBlockWriteRoleplay: Ke,
        makeMessagesForActionSuggestion: Os,
        makeMessagesForBlockEvaluation: Rs,
        makeMessagesForImprovementSuggestions: Ds,
        makeMessagesForAutoCorrection: $s,
        makeMessagesForChapterEvaluation: Ls,
        makeMessagesForChapterImprovementSuggestions: Us,
        makeMessagesForChapterOptimization: Bs,
        makeMessagesForChapterSummary: Ve,
        makeMessagesForKnowledgeExtraction: qe,
        makeMessagesForCompletionCheck: Je,
        makeMessagesForBookSummary: Ze,
        makeMessagesForRecommendation: Xe,
        makeMessagesForReadingGuide: Qe,
        makeMessagesForAuthorNote: et,
        makeMessagesForCoverDescription: tt
    };
    class Fs extends ht {
        novelDB = null;
        constructor(s, n){
            super(s), this.novelDB = n || null;
        }
        getCurrentPhase() {
            return this.session.modeState.currentPhase;
        }
        getCurrentUIState() {
            return this.session.modeState.currentUIState;
        }
        getActualCurrentPhase(s) {
            const n = s.getProcessingItem();
            if (n?.type) {
                const a = {
                    novel_design_worldview: "design_worldview",
                    novel_design_characters: "design_characters",
                    novel_design_theme: "design_theme",
                    novel_design_plot_outline: "design_plot_outline",
                    novel_design_chapter_outline: "design_chapter_outline",
                    novel_ai_review: "ai_review",
                    novel_user_revision: "user_revision",
                    novel_chapter_prep_review: "chapter_prep_review",
                    novel_chapter_prep_interest: "chapter_prep_interest",
                    novel_chapter_prep_emotion: "chapter_prep_emotion",
                    novel_chapter_plan_generation: "chapter_plan_generation",
                    novel_block_write: "block_write",
                    novel_block_check: "block_check",
                    novel_chapter_check: "chapter_check",
                    novel_chapter_summary: "chapter_summary_generation",
                    novel_knowledge_update: "knowledge_update",
                    novel_completion_check: "completion_check",
                    novel_book_summary: "book_summary_generation"
                }[n.type];
                if (a) return a;
            }
            return this.session.modeState.currentPhase;
        }
        getActualCurrentUIState(s) {
            const n = s.getProcessingItem();
            if (n?.type) {
                const a = {
                    novel_design_worldview: "design_worldview_editing",
                    novel_design_characters: "design_characters_editing",
                    novel_design_theme: "design_theme_editing",
                    novel_ai_review: "ai_review_running",
                    novel_chapter_prep_review: "chapter_prep_running",
                    novel_chapter_plan_generation: "chapter_plan_running",
                    novel_block_write: "block_write_running",
                    novel_block_check: "block_check_running",
                    novel_chapter_check: "chapter_complete"
                }[n.type];
                if (a) return a;
            }
            return this.session.modeState.currentUIState ? this.session.modeState.currentUIState : this.getReadyUIStateForPhase(this.getActualCurrentPhase(s));
        }
        getReadyUIStateForPhase(s) {
            return {
                design_worldview: "design_worldview_ready",
                design_characters: "design_characters_ready",
                design_theme: "design_theme_ready",
                design_plot_outline: "design_plot_outline_ready",
                design_chapter_outline: "design_chapter_outline_ready",
                ai_review: "ai_review_ready",
                user_revision: "user_revision_ready",
                chapter_prep_review: "chapter_prep_running",
                chapter_prep_foreshadow: "chapter_prep_running",
                chapter_prep_interest: "chapter_prep_running",
                chapter_prep_emotion: "chapter_prep_running",
                chapter_plan_generation: "chapter_plan_ready",
                chapter_plan_approval: "chapter_plan_done",
                block_write: "block_write_ready",
                block_check: "block_check_ready",
                block_confirm: "block_write_done",
                chapter_check: "chapter_complete",
                chapter_confirm: "chapter_complete",
                chapter_summary_generation: "chapter_complete",
                knowledge_update: "chapter_complete",
                re_planning_check: "chapter_complete",
                completion_check: "completion_ready",
                book_summary_generation: "completion_running",
                recommendation_generation: "completion_running",
                reading_guide_generation: "completion_running",
                author_note_generation: "completion_running",
                cover_description_generation: "completion_running",
                completed: "completed"
            }[s] || "idle";
        }
        enterNextState(s) {
            console.log(`[NovelWriting] Transition: ${this.session.modeState.currentPhase} -> ${s}`), this.session.modeState.currentPhase = s, this.session.updatedAt = Date.now();
        }
        setCurrentUIState(s) {
            this.session.modeState.currentUIState = s, this.session.updatedAt = Date.now();
        }
        async executeCurrentStateLogic(s) {
            switch(this.session.modeState.currentPhase){
                case "design_worldview":
                    return this.setCurrentUIState("design_worldview_ready"), {
                        type: "WAIT_FOR_INPUT"
                    };
                case "design_characters":
                    return this.setCurrentUIState("design_characters_ready"), {
                        type: "WAIT_FOR_INPUT"
                    };
                case "design_theme":
                    return this.setCurrentUIState("design_theme_ready"), {
                        type: "WAIT_FOR_INPUT"
                    };
                case "design_plot_outline":
                    return this.setCurrentUIState("design_plot_outline_ready"), {
                        type: "WAIT_FOR_INPUT"
                    };
                case "design_chapter_outline":
                    return this.setCurrentUIState("design_chapter_outline_ready"), {
                        type: "WAIT_FOR_INPUT"
                    };
                case "ai_review":
                    return this.session.modeState.currentUIState === "ai_review_running" || this.session.modeState.currentUIState === "ai_review_ready" ? (this.session.modeState.currentUIState === "ai_review_ready" && this.setCurrentUIState("ai_review_running"), {
                        type: "LLM_CALL",
                        messages: Be(this.session),
                        callbackPhase: "ai_review",
                        llmRequestType: "ai_review"
                    }) : (this.setCurrentUIState("ai_review_ready"), {
                        type: "WAIT_FOR_INPUT"
                    });
                case "user_revision":
                    return this.setCurrentUIState("user_revision_ready"), {
                        type: "WAIT_FOR_INPUT"
                    };
                case "chapter_prep_review":
                    return this.session.modeState.currentUIState === "chapter_prep_running" || this.session.modeState.currentUIState === "chapter_prep_ready" ? (this.session.modeState.currentUIState === "chapter_prep_ready" && this.setCurrentUIState("chapter_prep_running"), {
                        type: "LLM_CALL",
                        messages: Fe(this.session),
                        callbackPhase: "chapter_prep_review",
                        llmRequestType: "chapter_prep_review"
                    }) : (this.setCurrentUIState("chapter_prep_ready"), {
                        type: "WAIT_FOR_INPUT"
                    });
                case "chapter_prep_foreshadow":
                    return this.enterNextState("chapter_prep_interest"), {
                        type: "STATE_CHANGE"
                    };
                case "chapter_prep_interest":
                    return this.session.modeState.currentUIState === "chapter_prep_running" || this.session.modeState.currentUIState === "chapter_prep_ready" ? (this.session.modeState.currentUIState === "chapter_prep_ready" && this.setCurrentUIState("chapter_prep_running"), {
                        type: "LLM_CALL",
                        messages: He(this.session),
                        callbackPhase: "chapter_prep_interest",
                        llmRequestType: "interest_analysis"
                    }) : (this.setCurrentUIState("chapter_prep_ready"), {
                        type: "WAIT_FOR_INPUT"
                    });
                case "chapter_prep_emotion":
                    return this.session.modeState.currentUIState === "chapter_prep_running" || this.session.modeState.currentUIState === "chapter_prep_ready" ? (this.session.modeState.currentUIState === "chapter_prep_ready" && this.setCurrentUIState("chapter_prep_running"), {
                        type: "LLM_CALL",
                        messages: We(this.session),
                        callbackPhase: "chapter_prep_emotion",
                        llmRequestType: "emotion_design"
                    }) : (this.setCurrentUIState("chapter_prep_ready"), {
                        type: "WAIT_FOR_INPUT"
                    });
                case "chapter_plan_generation":
                    return this.session.modeState.currentUIState === "chapter_plan_running" || this.session.modeState.currentUIState === "chapter_plan_ready" ? (this.session.modeState.currentUIState === "chapter_plan_ready" && this.setCurrentUIState("chapter_plan_running"), {
                        type: "LLM_CALL",
                        messages: Ge(this.session),
                        callbackPhase: "chapter_plan_generation",
                        llmRequestType: "chapter_plan_generation"
                    }) : (this.setCurrentUIState("chapter_plan_ready"), {
                        type: "WAIT_FOR_INPUT"
                    });
                case "chapter_plan_approval":
                    return this.setCurrentUIState("chapter_plan_done"), {
                        type: "WAIT_FOR_INPUT"
                    };
                case "block_write":
                    if (this.session.modeState.currentUIState === "block_write_running" || this.session.modeState.currentUIState === "block_write_ready") {
                        this.session.modeState.currentUIState === "block_write_ready" && this.setCurrentUIState("block_write_running");
                        const r = this.session.modeState.tempData?.writeMode || "ai_direct";
                        let a;
                        switch(r){
                            case "ai_direct":
                                a = ye(this.session);
                                break;
                            case "ai_guided":
                                a = Ye(this.session);
                                break;
                            case "user_polish":
                                a = ze(this.session);
                                break;
                            case "roleplay":
                                a = Ke(this.session);
                                break;
                            default:
                                a = ye(this.session);
                        }
                        return {
                            type: "LLM_CALL",
                            messages: a,
                            callbackPhase: "block_write",
                            llmRequestType: `block_write_${r}`
                        };
                    }
                    return this.setCurrentUIState("block_write_ready"), {
                        type: "WAIT_FOR_INPUT"
                    };
                case "block_check":
                    return this.setCurrentUIState("block_check_ready"), {
                        type: "WAIT_FOR_INPUT"
                    };
                case "block_confirm":
                    return this.setCurrentUIState("block_write_done"), {
                        type: "WAIT_FOR_INPUT"
                    };
                case "chapter_check":
                    return this.setCurrentUIState("chapter_complete"), {
                        type: "WAIT_FOR_INPUT"
                    };
                case "chapter_confirm":
                    return this.setCurrentUIState("chapter_complete"), {
                        type: "WAIT_FOR_INPUT"
                    };
                case "chapter_summary_generation":
                    return this.session.modeState.currentUIState === "chapter_complete_running" || this.session.modeState.currentUIState === "chapter_complete" ? (this.session.modeState.currentUIState === "chapter_complete" && this.setCurrentUIState("chapter_complete_running"), {
                        type: "LLM_CALL",
                        messages: Ve(this.session),
                        callbackPhase: "chapter_summary_generation",
                        llmRequestType: "chapter_summary"
                    }) : (this.setCurrentUIState("chapter_complete"), {
                        type: "WAIT_FOR_INPUT"
                    });
                case "knowledge_update":
                    return this.session.modeState.currentUIState === "chapter_complete_running" || this.session.modeState.currentUIState === "chapter_complete" ? (this.session.modeState.currentUIState === "chapter_complete" && this.setCurrentUIState("chapter_complete_running"), {
                        type: "LLM_CALL",
                        messages: qe(this.session),
                        callbackPhase: "knowledge_update",
                        llmRequestType: "knowledge_extraction"
                    }) : (this.setCurrentUIState("chapter_complete"), {
                        type: "WAIT_FOR_INPUT"
                    });
                case "re_planning_check":
                    return this.setCurrentUIState("chapter_complete"), {
                        type: "WAIT_FOR_INPUT"
                    };
                case "completion_check":
                    return this.session.modeState.currentUIState === "completion_running" || this.session.modeState.currentUIState === "completion_ready" ? (this.session.modeState.currentUIState === "completion_ready" && this.setCurrentUIState("completion_running"), {
                        type: "LLM_CALL",
                        messages: Je(this.session),
                        callbackPhase: "completion_check",
                        llmRequestType: "completion_check"
                    }) : (this.setCurrentUIState("completion_ready"), {
                        type: "WAIT_FOR_INPUT"
                    });
                case "book_summary_generation":
                    return this.session.modeState.currentUIState === "completion_running" || this.session.modeState.currentUIState === "completion_ready" ? (this.session.modeState.currentUIState === "completion_ready" && this.setCurrentUIState("completion_running"), {
                        type: "LLM_CALL",
                        messages: Ze(this.session),
                        callbackPhase: "book_summary_generation",
                        llmRequestType: "book_summary"
                    }) : (this.setCurrentUIState("completion_ready"), {
                        type: "WAIT_FOR_INPUT"
                    });
                case "recommendation_generation":
                    return this.session.modeState.currentUIState === "completion_running" || this.session.modeState.currentUIState === "completion_ready" ? (this.session.modeState.currentUIState === "completion_ready" && this.setCurrentUIState("completion_running"), {
                        type: "LLM_CALL",
                        messages: Xe(this.session),
                        callbackPhase: "recommendation_generation",
                        llmRequestType: "recommendation"
                    }) : (this.setCurrentUIState("completion_ready"), {
                        type: "WAIT_FOR_INPUT"
                    });
                case "reading_guide_generation":
                    return this.session.modeState.currentUIState === "completion_running" || this.session.modeState.currentUIState === "completion_ready" ? (this.session.modeState.currentUIState === "completion_ready" && this.setCurrentUIState("completion_running"), {
                        type: "LLM_CALL",
                        messages: Qe(this.session),
                        callbackPhase: "reading_guide_generation",
                        llmRequestType: "reading_guide"
                    }) : (this.setCurrentUIState("completion_ready"), {
                        type: "WAIT_FOR_INPUT"
                    });
                case "author_note_generation":
                    return this.session.modeState.currentUIState === "completion_running" || this.session.modeState.currentUIState === "completion_ready" ? (this.session.modeState.currentUIState === "completion_ready" && this.setCurrentUIState("completion_running"), {
                        type: "LLM_CALL",
                        messages: et(this.session),
                        callbackPhase: "author_note_generation",
                        llmRequestType: "author_note"
                    }) : (this.setCurrentUIState("completion_ready"), {
                        type: "WAIT_FOR_INPUT"
                    });
                case "cover_description_generation":
                    return this.session.modeState.currentUIState === "completion_running" || this.session.modeState.currentUIState === "completion_ready" ? (this.session.modeState.currentUIState === "completion_ready" && this.setCurrentUIState("completion_running"), {
                        type: "LLM_CALL",
                        messages: tt(this.session),
                        callbackPhase: "cover_description_generation",
                        llmRequestType: "cover_description"
                    }) : (this.setCurrentUIState("completion_ready"), {
                        type: "WAIT_FOR_INPUT"
                    });
                case "completed":
                    return this.setCurrentUIState("completed"), {
                        type: "STOP"
                    };
                default:
                    return {
                        type: "WAIT_FOR_INPUT"
                    };
            }
        }
        async initializeNewChapter(s) {
            const n = this.session.modeConfig.chapterOutline?.find((a)=>a.chapterNumber === s), r = {
                id: k(),
                projectId: this.session.id,
                chapterNumber: s,
                title: n?.title || `第${s}章`,
                summary: "",
                status: "planning",
                wordCount: 0,
                targetWordCount: 4e3,
                blocks: [],
                createdAt: Date.now(),
                updatedAt: Date.now()
            };
            this.session.modeState.currentChapter = {
                id: r.id,
                number: r.chapterNumber,
                title: r.title,
                status: r.status,
                wordCount: r.wordCount,
                targetWordCount: r.targetWordCount,
                blocks: [],
                summary: r.summary
            }, this.session.modeState.currentChapterIndex = s - 1, this.session.updatedAt = Date.now(), this.novelDB && await this.novelDB.saveChapter(r);
        }
        async addBlock(s, n) {
            if (!this.session.modeState.currentChapter) throw new Error("No current chapter");
            const r = s.length, a = {
                id: k(),
                chapterId: this.session.modeState.currentChapter.id,
                content: s,
                wordCount: r,
                writeMode: n,
                status: "completed",
                createdAt: Date.now(),
                updatedAt: Date.now()
            };
            if (this.session.modeState.currentChapter.blocks.push({
                ...a,
                writeMode: n
            }), this.session.modeState.currentChapter.wordCount += r, this.session.updatedAt = Date.now(), this.novelDB) {
                await this.novelDB.saveBlock(a);
                const i = await this.novelDB.getChapters().then((d)=>d.find((m)=>m.id === a.chapterId));
                i && (i.wordCount += r, i.updatedAt = Date.now(), await this.novelDB.saveChapter(i));
            }
            return a;
        }
        async completeCurrentChapter() {
            if (!this.session.modeState.currentChapter) throw new Error("No current chapter");
            if (this.session.modeState.currentChapter.status = "completed", this.session.modeState.progressTracking.completedChapters += 1, this.session.modeState.progressTracking.totalWordCount += this.session.modeState.currentChapter.wordCount, this.session.updatedAt = Date.now(), this.novelDB) {
                const s = this.session.modeState.currentChapter.id, r = (await this.novelDB.getChapters()).find((a)=>a.id === s);
                r && (r.status = "completed", r.updatedAt = Date.now(), await this.novelDB.saveChapter(r));
            }
        }
        addChapterSummary(s, n) {
            this.session.modeState.chapterSummaries.push({
                chapterNumber: s,
                summary: n
            }), this.session.updatedAt = Date.now(), this.novelDB && this.novelDB.getChapters().then((r)=>{
                const a = r.find((i)=>i.chapterNumber === s);
                a && (a.summary = n, this.novelDB?.saveChapter(a));
            });
        }
        updateInterestPoints(s) {
            this.session.modeState.progressTracking.currentInterestPoints = s, this.session.updatedAt = Date.now();
        }
        async addForeshadow(s, n, r, a) {
            const i = {
                id: k(),
                projectId: this.session.id,
                content: s,
                introducedAt: {
                    chapterId: `${n}`,
                    blockId: `${r}`,
                    chapter: n,
                    block: r
                },
                status: "pending",
                importance: a,
                createdAt: Date.now(),
                updatedAt: Date.now()
            };
            this.session.modeState.progressTracking.foreshadows.push({
                id: i.id,
                content: i.content,
                introducedAt: {
                    chapter: n,
                    block: r
                },
                status: "pending",
                importance: a
            }), this.session.updatedAt = Date.now(), this.novelDB && await this.novelDB.saveForeshadow(i);
        }
        async resolveForeshadow(s, n, r) {
            const a = this.session.modeState.progressTracking.foreshadows.find((i)=>i.id === s);
            if (a && (a.status = "resolved", a.resolvedAt = {
                chapter: n,
                block: r
            }, this.session.updatedAt = Date.now()), this.novelDB) {
                const d = (await this.novelDB.getForeshadows()).find((m)=>m.id === s);
                d && (d.status = "resolved", d.resolvedAt = {
                    chapterId: `${n}`,
                    blockId: `${r}`
                }, d.updatedAt = Date.now(), await this.novelDB.saveForeshadow(d));
            }
        }
        async updateKnowledgeBase(s) {
            if (s.newEntities && this.session.modeState.knowledgeBase.entities.push(...s.newEntities), s.newEvents && this.session.modeState.knowledgeBase.events.push(...s.newEvents), s.newRules && this.session.modeState.knowledgeBase.rules.push(...s.newRules), this.session.updatedAt = Date.now(), this.novelDB) {
                if (s.newEntities) for (const n of s.newEntities)await this.novelDB.saveEntity({
                    id: k(),
                    projectId: this.session.id,
                    name: n.name,
                    type: n.type === "角色" ? "character" : n.type === "地点" ? "location" : n.type === "物品" ? "item" : "other",
                    description: n.description,
                    aliases: n.alias,
                    createdAt: Date.now(),
                    updatedAt: Date.now()
                });
                if (s.newEvents) for (const n of s.newEvents)await this.novelDB.saveEvent({
                    id: k(),
                    projectId: this.session.id,
                    name: "未命名事件",
                    type: n.type === "状态变化" ? "state_change" : n.type === "关系变化" ? "relation_change" : "event",
                    description: n.description,
                    createdAt: Date.now()
                });
                if (s.newRules) for (const n of s.newRules)await this.novelDB.saveRule({
                    id: k(),
                    projectId: this.session.id,
                    category: n.type === "时代背景" ? "world" : n.type === "社会制度" ? "social" : n.type === "技术体系" ? "tech" : n.type === "能力体系" ? "power" : "other",
                    name: n.name,
                    content: n.description,
                    createdAt: Date.now(),
                    updatedAt: Date.now()
                });
            }
        }
    }
    const Hs = M({
        id: w(),
        chapterId: w(),
        content: w(),
        wordCount: I(),
        writeMode: U([
            "ai_direct",
            "ai_guided",
            "user_polish",
            "roleplay"
        ]),
        status: U([
            "draft",
            "completed",
            "revised"
        ]).default("draft"),
        createdAt: I(),
        updatedAt: I(),
        evaluation: Ne().optional()
    }), Ws = M({
        id: w(),
        projectId: w(),
        chapterNumber: I(),
        title: w(),
        summary: w().optional(),
        status: U([
            "planning",
            "writing",
            "completed",
            "archived"
        ]),
        wordCount: I().default(0),
        plan: w().optional(),
        outline: Ne().optional(),
        createdAt: I(),
        updatedAt: I()
    }), Gs = M({
        id: w(),
        projectId: w(),
        name: w(),
        type: U([
            "character",
            "location",
            "item",
            "other"
        ]),
        description: L(w()),
        aliases: L(w()).optional(),
        tags: L(w()).optional(),
        firstAppearance: w().optional(),
        createdAt: I(),
        updatedAt: I()
    }), Ys = M({
        id: w(),
        projectId: w(),
        name: w(),
        type: U([
            "state_change",
            "relation_change",
            "event"
        ]),
        description: w(),
        occurredAt: w().optional(),
        involvedEntities: L(w()).optional(),
        createdAt: I()
    }), zs = M({
        id: w(),
        projectId: w(),
        category: U([
            "world",
            "social",
            "tech",
            "power",
            "other"
        ]),
        name: w(),
        content: w(),
        createdAt: I(),
        updatedAt: I()
    }), Ks = M({
        id: w(),
        projectId: w(),
        content: w(),
        importance: U([
            "low",
            "medium",
            "high"
        ]),
        status: U([
            "pending",
            "in_progress",
            "resolved",
            "dropped"
        ]),
        introducedAt: M({
            chapterId: w(),
            blockId: w().optional()
        }),
        resolvedAt: M({
            chapterId: w(),
            blockId: w().optional()
        }).optional(),
        createdAt: I(),
        updatedAt: I()
    });
    function Vs(t) {
        return typeof t == "object" && t !== null && it(t) !== void 0;
    }
    function ee(t) {
        if (Vs(t)) return we(t);
        if (Array.isArray(t)) return t.map((s)=>ee(s));
        if (t && typeof t == "object") {
            const s = {};
            for (const [n, r] of Object.entries(t))s[n] = ee(r);
            return s;
        }
        return t;
    }
    function qs(t) {
        const s = `silly-tavern-novel-${t}`, n = new _t(s);
        return n.version(4).stores({
            blocks: "id, chapterId, status",
            chapters: "id, projectId, chapterNumber, status",
            entities: "id, projectId, type",
            events: "id, projectId, type",
            rules: "id, projectId, category",
            foreshadows: "id, projectId, status, importance"
        }), {
            blocks: ie(ce({
                id: "blocks",
                schema: Hs,
                getKey: (r)=>r.id,
                dbName: s
            })),
            chapters: ie(ce({
                id: "chapters",
                schema: Ws,
                getKey: (r)=>r.id,
                dbName: s
            })),
            entities: ie(ce({
                id: "entities",
                schema: Gs,
                getKey: (r)=>r.id,
                dbName: s
            })),
            events: ie(ce({
                id: "events",
                schema: Ys,
                getKey: (r)=>r.id,
                dbName: s
            })),
            rules: ie(ce({
                id: "rules",
                schema: zs,
                getKey: (r)=>r.id,
                dbName: s
            })),
            foreshadows: ie(ce({
                id: "foreshadows",
                schema: Ks,
                getKey: (r)=>r.id,
                dbName: s
            })),
            dexieInstance: n
        };
    }
    const De = new Map;
    class Js {
        projectId;
        database;
        constructor(s){
            this.projectId = s, this.database = this.initDatabase();
        }
        initDatabase() {
            let s = De.get(this.projectId);
            return s || (s = qs(this.projectId), De.set(this.projectId, s)), s;
        }
        getTable(s) {
            return this.database.dexieInstance.table(s);
        }
        async getChapters() {
            return (await this.getTable("chapters").where("projectId").equals(this.projectId).toArray()).sort((n, r)=>n.chapterNumber - r.chapterNumber);
        }
        async saveChapter(s) {
            return await this.getTable("chapters").put(ee(s));
        }
        async getBlocks(s) {
            return (await this.getTable("blocks").where("chapterId").equals(s).toArray()).sort((r, a)=>r.createdAt - a.createdAt);
        }
        async saveBlock(s) {
            return await this.getTable("blocks").put(ee(s));
        }
        async getEntities() {
            return await this.getTable("entities").where("projectId").equals(this.projectId).toArray();
        }
        async saveEntity(s) {
            return await this.getTable("entities").put(ee(s));
        }
        async getEvents() {
            return await this.getTable("events").where("projectId").equals(this.projectId).toArray();
        }
        async saveEvent(s) {
            return await this.getTable("events").put(ee(s));
        }
        async getRules() {
            return await this.getTable("rules").where("projectId").equals(this.projectId).toArray();
        }
        async saveRule(s) {
            return await this.getTable("rules").put(ee(s));
        }
        async getForeshadows() {
            return await this.getTable("foreshadows").where("projectId").equals(this.projectId).toArray();
        }
        async saveForeshadow(s) {
            return await this.getTable("foreshadows").put(ee(s));
        }
    }
    const o = je({
        currentSession: null,
        contextManager: null,
        sessionManager: null,
        novelDB: null,
        isLoading: !1,
        isStreaming: !1,
        errorMessage: null,
        async loadSession (t) {
            o.isLoading = !0;
            try {
                o.currentSession = t;
                const s = new Js(t.id);
                o.novelDB = fe(s);
                const n = await s.getEntities(), r = await s.getEvents(), a = await s.getRules();
                if (o.currentSession) {
                    o.currentSession.modeState.knowledgeBase = {
                        entities: n.map((h)=>({
                                type: h.type === "character" ? "角色" : h.type === "location" ? "地点" : "物品",
                                name: h.name,
                                description: h.description,
                                alias: h.aliases
                            })),
                        events: r.map((h)=>({
                                type: h.type === "state_change" ? "状态变化" : "关系变化",
                                description: h.description,
                                chapterNumber: 0,
                                timestamp: h.createdAt
                            })),
                        rules: a.map((h)=>({
                                type: h.category === "world" ? "时代背景" : h.category === "social" ? "社会制度" : h.category === "tech" ? "技术体系" : h.category === "power" ? "能力体系" : "其他",
                                name: h.name,
                                description: h.content
                            }))
                    };
                    const i = await s.getChapters(), d = o.currentSession.modeState.currentChapterIndex, m = i.find((h)=>h.chapterNumber === d + 1);
                    if (m && o.currentSession) {
                        const h = await s.getBlocks(m.id);
                        o.currentSession.modeState.currentChapter = {
                            id: m.id,
                            number: m.chapterNumber,
                            title: m.title,
                            status: m.status,
                            wordCount: m.wordCount,
                            targetWordCount: 4e3,
                            blocks: h.map((y)=>({
                                    id: y.id,
                                    content: y.content,
                                    wordCount: y.wordCount,
                                    writeMode: y.writeMode,
                                    createdAt: y.createdAt
                                })),
                            summary: m.summary || "",
                            plan: m.plan || ""
                        };
                    }
                    const p = await s.getForeshadows();
                    p.length > 0 && (o.currentSession.modeState.progressTracking.foreshadows = p.map((h)=>({
                            id: h.id,
                            content: h.content,
                            importance: h.importance,
                            status: h.status === "in_progress" ? "in-progress" : h.status,
                            introducedAt: {
                                chapter: Number.parseInt(h.introducedAt.chapterId) || 0,
                                block: Number.parseInt(h.introducedAt.blockId || "0") || 0
                            },
                            resolvedAt: h.resolvedAt ? {
                                chapter: Number.parseInt(h.resolvedAt.chapterId) || 0,
                                block: Number.parseInt(h.resolvedAt.blockId || "0") || 0
                            } : void 0
                        })));
                    const f = new Fs(o.currentSession, s);
                    o.sessionManager = fe(f);
                    const _ = o.currentSession.modeState.tempData?.reviewHistory || [], N = je({
                        historyItems: _,
                        processingItem: void 0
                    });
                    o.contextManager = fe(new pt(N));
                }
            } catch (s) {
                console.error("Failed to load session data:", s), o.errorMessage = "加载会话数据失败";
            } finally{
                o.isLoading = !1;
            }
        },
        setPhase (t) {
            this.currentSession && (this.currentSession.modeState.currentPhase = t, this.currentSession.updatedAt = Date.now());
        },
        setUIState (t) {
            this.currentSession && (this.currentSession.modeState.currentUIState = t, this.currentSession.updatedAt = Date.now());
        },
        updateModeConfig (t) {
            this.currentSession && (Object.assign(this.currentSession.modeConfig, t), this.currentSession.updatedAt = Date.now());
        },
        updateModeState (t) {
            this.currentSession && (Object.assign(this.currentSession.modeState, t), this.currentSession.updatedAt = Date.now());
        },
        updateTempData (t) {
            this.currentSession && (this.currentSession.modeState.tempData || (this.currentSession.modeState.tempData = {}), Object.assign(this.currentSession.modeState.tempData, t), this.currentSession.updatedAt = Date.now());
        },
        clearTempData () {
            this.currentSession && (this.currentSession.modeState.tempData = {}, this.currentSession.updatedAt = Date.now());
        },
        async saveNewContextItemsToDB (t, s) {
            this.currentSession && (this.updateTempData({
                reviewHistory: s
            }), await this.updateSessionInDB());
        },
        async updateSessionInDB () {
            if (o.currentSession) try {
                const { masterDb: t } = await mt(async ()=>{
                    const { masterDb: r } = await import("./db-master-COerPnjC.js").then((a)=>a.w);
                    return {
                        masterDb: r
                    };
                }, __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14])), s = we(o.currentSession.modeConfig), n = we(o.currentSession.modeState);
                await t.sessions.update(o.currentSession.id, {
                    modeConfig: s,
                    modeState: n,
                    updatedAt: Date.now()
                });
            } catch (t) {
                console.error("Failed to update session in DB:", t);
            }
        },
        setError (t) {
            this.errorMessage = t;
        },
        setLoading (t) {
            this.isLoading = t;
        },
        setStreaming (t) {
            this.isStreaming = t;
        }
    });
    function de() {
        const t = ne((v)=>re(v.config)), s = j.useRef(!1), n = j.useRef(async ()=>{}), r = j.useRef(async ()=>{}), a = j.useCallback(async (v, g, x, u, c = {})=>{
            const l = o.contextManager;
            if (!l) return {
                content: ""
            };
            const S = {
                id: k(),
                type: x,
                orderRef: 0,
                timestamp: Date.now(),
                data: {
                    content: "",
                    ...c
                }
            };
            l.setProcessingItem(S);
            let b = "";
            return await Z(v, g, [], (E, Y)=>{
                if (u?.(E), b = Y, o.contextManager) {
                    const F = o.contextManager.state.processingItem;
                    F && (F.data = {
                        ...F.data,
                        content: Y
                    });
                }
            }), l.completeProcessingItem(), {
                content: b
            };
        }, []), i = j.useCallback(async (v, g)=>{
            const x = o.sessionManager, u = o.contextManager;
            if (!(x && u)) return;
            const c = await x.executeCurrentStateLogic(u);
            if (console.log("[NovelWriting Loop] Action:", c), c.type === "WAIT_FOR_INPUT" || c.type === "STOP") {
                await o.updateSessionInDB(), s.current = !1;
                return;
            }
            if (c.type === "STATE_CHANGE") {
                await o.updateSessionInDB(), setTimeout(()=>{
                    n.current(v.id);
                }, 0);
                return;
            }
            if (c.type === "LLM_CALL") {
                c.callbackPhase && x.setCurrentUIState("block_write_running"), await o.updateSessionInDB();
                const l = await a(g, c.messages.map((S)=>({
                        ...S,
                        id: k()
                    })), c.llmRequestType, void 0, c.dataExtra);
                await o.saveNewContextItemsToDB(v.id, u.getHistoryItems()), await r.current(c, l.content, v.id), await o.saveNewContextItemsToDB(v.id, u.getHistoryItems()), await o.updateSessionInDB(), setTimeout(()=>{
                    n.current(v.id);
                }, 0);
            }
        }, [
            a
        ]), d = async (v, g, x)=>{
            const u = o.sessionManager, c = o.contextManager;
            switch(v.callbackPhase){
                case "ai_review":
                    try {
                        const l = m(g);
                        c.addHistoryItem({
                            id: k(),
                            type: "novel_ai_review",
                            idx: 0,
                            orderRef: 0,
                            timestamp: Date.now(),
                            data: l,
                            hidden: !1
                        }), await o.saveNewContextItemsToDB(x, c.getHistoryItems()), l.recommendation === "pass" ? u.enterNextState("chapter_prep_review") : u.enterNextState("user_revision");
                    } catch (l) {
                        console.error("Failed to parse AI review", l), T.error("AI 评审解析失败"), u.enterNextState("user_revision");
                    }
                    break;
                case "chapter_prep_review":
                    c.addHistoryItem({
                        id: k(),
                        type: "novel_chapter_prep_review",
                        idx: 0,
                        orderRef: 0,
                        timestamp: Date.now(),
                        data: {
                            chapterNumber: u.session.modeState.currentChapterIndex + 1,
                            reviewText: g,
                            generatedAt: Date.now()
                        },
                        hidden: !1
                    });
                    break;
                case "interest_analysis":
                    try {
                        const l = p(g);
                        c.addHistoryItem({
                            id: k(),
                            type: "novel_chapter_prep_interest",
                            idx: 0,
                            orderRef: 0,
                            timestamp: Date.now(),
                            data: {
                                chapterNumber: u.session.modeState.currentChapterIndex + 1,
                                interestPoints: l,
                                analysisText: g
                            },
                            hidden: !1
                        }), u.updateInterestPoints(l);
                    } catch (l) {
                        console.error("Failed to parse interest points", l);
                    }
                    break;
                case "emotion_design":
                    o.updateTempData({
                        emotionDesign: g
                    }), c.addHistoryItem({
                        id: k(),
                        type: "novel_chapter_prep_emotion",
                        idx: 0,
                        orderRef: 0,
                        timestamp: Date.now(),
                        data: {
                            chapterNumber: u.session.modeState.currentChapterIndex + 1,
                            emotionDesign: g,
                            emotionNodes: []
                        },
                        hidden: !1
                    });
                    break;
                case "chapter_plan_generation":
                    u.session.modeState.currentChapter && (u.session.modeState.currentChapter.plan = g), c.addHistoryItem({
                        id: k(),
                        type: "novel_chapter_plan_generation",
                        idx: 0,
                        orderRef: 0,
                        timestamp: Date.now(),
                        data: {
                            chapterNumber: u.session.modeState.currentChapterIndex + 1,
                            plan: g,
                            generatedAt: Date.now()
                        },
                        hidden: !1
                    });
                    break;
                case "block_write":
                    {
                        const l = u.session.modeState.tempData?.writeMode || "ai_direct", S = await u.addBlock(g, l);
                        c.addHistoryItem({
                            id: k(),
                            type: "novel_block_write",
                            idx: 0,
                            orderRef: 0,
                            timestamp: Date.now(),
                            data: {
                                chapterNumber: u.session.modeState.currentChapterIndex + 1,
                                blockIndex: u.session.modeState.currentChapter.blocks.length - 1,
                                content: g,
                                wordCount: S.wordCount,
                                writeMode: l
                            },
                            hidden: !1
                        }), u.enterNextState("block_confirm");
                    }
                    break;
                case "chapter_summary":
                    {
                        const l = u.session.modeState.currentChapterIndex + 1;
                        u.addChapterSummary(l, g), c.addHistoryItem({
                            id: k(),
                            type: "novel_chapter_summary",
                            idx: 0,
                            orderRef: 0,
                            timestamp: Date.now(),
                            data: {
                                chapterNumber: l,
                                summary: g,
                                style: "standard",
                                generatedAt: Date.now()
                            },
                            hidden: !1
                        }), u.enterNextState("knowledge_update");
                    }
                    break;
                case "knowledge_extraction":
                    try {
                        const l = f(g);
                        c.addHistoryItem({
                            id: k(),
                            type: "novel_knowledge_update",
                            idx: 0,
                            orderRef: 0,
                            timestamp: Date.now(),
                            data: {
                                chapterNumber: u.session.modeState.currentChapterIndex + 1,
                                updates: l,
                                approved: !1
                            },
                            hidden: !1
                        }), u.enterNextState("re_planning_check");
                    } catch (l) {
                        console.error("Failed to parse knowledge updates", l), u.enterNextState("re_planning_check");
                    }
                    break;
                case "completion_check":
                    try {
                        const l = g.includes("已完结") || g.includes("完结");
                        if (c.addHistoryItem({
                            id: k(),
                            type: "novel_completion_check",
                            idx: 0,
                            orderRef: 0,
                            timestamp: Date.now(),
                            data: {
                                isCompleted: l,
                                completionReason: l ? "natural_ending" : void 0,
                                aiAssessment: g
                            },
                            hidden: !1
                        }), l) u.enterNextState("book_summary_generation");
                        else {
                            const S = u.session.modeState.currentChapterIndex + 2;
                            u.initializeNewChapter(S), u.enterNextState("chapter_prep_review");
                        }
                    } catch (l) {
                        console.error("Failed to parse completion check", l);
                    }
                    break;
                case "book_summary":
                    o.updateTempData({
                        bookSummary: g
                    }), c.addHistoryItem({
                        id: k(),
                        type: "novel_book_summary",
                        idx: 0,
                        orderRef: 0,
                        timestamp: Date.now(),
                        data: {
                            summary: g,
                            generatedAt: Date.now()
                        },
                        hidden: !1
                    }), u.enterNextState("recommendation_generation");
                    break;
                case "recommendation":
                    {
                        const [l, S] = g.split(`

`).filter(Boolean);
                        c.addHistoryItem({
                            id: k(),
                            type: "novel_recommendation",
                            idx: 0,
                            orderRef: 0,
                            timestamp: Date.now(),
                            data: {
                                shortVersion: l || g,
                                longVersion: S || g,
                                generatedAt: Date.now()
                            },
                            hidden: !1
                        }), u.enterNextState("reading_guide_generation");
                    }
                    break;
                case "reading_guide":
                    c.addHistoryItem({
                        id: k(),
                        type: "novel_reading_guide",
                        idx: 0,
                        orderRef: 0,
                        timestamp: Date.now(),
                        data: {
                            guide: g,
                            generatedAt: Date.now()
                        },
                        hidden: !1
                    }), u.enterNextState("author_note_generation");
                    break;
                case "author_note":
                    c.addHistoryItem({
                        id: k(),
                        type: "novel_author_note",
                        idx: 0,
                        orderRef: 0,
                        timestamp: Date.now(),
                        data: {
                            note: g,
                            generatedAt: Date.now()
                        },
                        hidden: !1
                    }), u.enterNextState("cover_description_generation");
                    break;
                case "cover_description":
                    c.addHistoryItem({
                        id: k(),
                        type: "novel_cover_description",
                        idx: 0,
                        orderRef: 0,
                        timestamp: Date.now(),
                        data: {
                            description: g,
                            generatedAt: Date.now()
                        },
                        hidden: !1
                    }), u.enterNextState("completed");
                    break;
                default:
                    console.warn("Unknown callback phase:", v.callbackPhase);
            }
        };
        r.current = d;
        function m(v) {
            const g = {
                worldviewCompleteness: 0,
                characterDesign: 0,
                themeDepth: 0,
                plotLogic: 0,
                outlineFeasibility: 0
            }, x = v.match(/世界观完整性[：:]\s*(\d+)/), u = v.match(/角色设计合理性[：:]\s*(\d+)/), c = v.match(/主题深度[：:]\s*(\d+)/), l = v.match(/情节逻辑[：:]\s*(\d+)/), S = v.match(/大纲可行性[：:]\s*(\d+)/), b = v.match(/综合评分[：:]?\s*(\d+(\.\d+)?)/);
            x && (g.worldviewCompleteness = parseInt(x[1])), u && (g.characterDesign = parseInt(u[1])), c && (g.themeDepth = parseInt(c[1])), l && (g.plotLogic = parseInt(l[1])), S && (g.outlineFeasibility = parseInt(S[1]));
            let E = 0;
            if (b) E = parseFloat(b[1]);
            else {
                const Y = Object.values(g).filter((F)=>F > 0);
                Y.length > 0 && (E = Y.reduce((F, te)=>F + te, 0) / Y.length);
            }
            return {
                reviewResult: v,
                scores: g,
                overallScore: parseFloat(E.toFixed(1)),
                recommendation: v.includes("【建议通过】") ? "pass" : "revise",
                suggestions: []
            };
        }
        function p(v) {
            const g = [], x = v.matchAll(/[〖\[【](?:\d+)?[\)\]】][〖\[【]([^】\]]+)[\)\]】][〖\[【]([^〗\]】]+)[〗\]】]/g);
            for (const u of x)g.push({
                type: u[1],
                content: u[2],
                priority: 5
            });
            if (g.length === 0) {
                const u = v.split(`
`).filter((c)=>c.includes("】") || c.includes("]"));
                for (const c of u.slice(0, 5)){
                    const l = c.split(/[】\]]/);
                    l.length >= 2 && g.push({
                        type: "看点",
                        content: l[l.length - 1].trim().replace(/^[：:\s〖\[【]+/, ""),
                        priority: 5
                    });
                }
            }
            return g.slice(0, 5);
        }
        function f(v) {
            const g = v.split(`
`).filter((l)=>l.trim().startsWith("{")), x = [], u = [], c = [];
            for (const l of g)try {
                const S = JSON.parse(l);
                S.type === "角色" || S.type === "地点" || S.type === "物品" ? x.push(S) : S.type?.includes("状态") || S.type?.includes("关系") ? u.push(S) : c.push(S);
            } catch  {
                console.warn("Failed to parse knowledge line:", l);
            }
            return {
                newEntities: x.filter((l)=>l.method !== "update"),
                updatedEntities: x.filter((l)=>l.method === "update"),
                newEvents: u,
                newRules: c
            };
        }
        const _ = j.useCallback(async (v, g = !1)=>{
            const x = o.currentSession;
            if (!x || x.id !== v) {
                console.warn("[Loop] Session mismatch or not loaded");
                return;
            }
            if (s.current && !g) {
                console.warn("[Loop] Already calling, skip");
                return;
            }
            s.current = !0;
            try {
                await i(x, t);
            } catch (u) {
                console.error("[Loop] Error:", u), T.error("执行出错，请检查控制台"), s.current = !1;
            }
        }, [
            t,
            i
        ]);
        n.current = _;
        const N = j.useCallback(async ()=>{
            if (!o.currentSession) return;
            const g = o.sessionManager;
            g && (g.setCurrentUIState("design_worldview_ready"), await o.updateSessionInDB());
        }, []), h = j.useCallback(async (v)=>{
            const g = o.currentSession;
            if (!g) return;
            const x = o.sessionManager;
            x && (x.enterNextState(v), await o.updateSessionInDB(), _(g.id));
        }, [
            _
        ]), y = j.useCallback(async (v)=>{
            const g = o.currentSession;
            if (!g) return;
            const x = o.contextManager;
            x && (x.addHistoryItem({
                id: k(),
                type: "participant_message",
                idx: 0,
                orderRef: 0,
                timestamp: Date.now(),
                data: {
                    content: v,
                    role: "user"
                },
                hidden: !1
            }), await o.saveNewContextItemsToDB(g.id, x.getHistoryItems()), _(g.id));
        }, [
            _
        ]);
        return {
            runLoop: _,
            startDesign: N,
            continueToNextPhase: h,
            submitUserInput: y
        };
    }
    const Zs = U([
        "design_worldview",
        "design_characters",
        "design_theme",
        "design_plot_outline",
        "design_chapter_outline",
        "ai_review",
        "user_revision",
        "chapter_prep_review",
        "chapter_prep_foreshadow",
        "chapter_prep_interest",
        "chapter_prep_emotion",
        "chapter_plan_generation",
        "chapter_plan_approval",
        "block_write",
        "block_check",
        "block_confirm",
        "chapter_check",
        "chapter_confirm",
        "chapter_summary_generation",
        "knowledge_update",
        "re_planning_check",
        "completion_check",
        "book_summary_generation",
        "recommendation_generation",
        "reading_guide_generation",
        "author_note_generation",
        "cover_description_generation",
        "completed"
    ]), Xs = U([
        "idle",
        "design_worldview_ready",
        "design_worldview_editing",
        "design_worldview_done",
        "design_characters_ready",
        "design_characters_editing",
        "design_characters_done",
        "design_theme_ready",
        "design_theme_editing",
        "design_theme_done",
        "design_plot_outline_ready",
        "design_plot_outline_editing",
        "design_plot_outline_done",
        "design_chapter_outline_ready",
        "design_chapter_outline_editing",
        "design_chapter_outline_done",
        "ai_review_ready",
        "ai_review_running",
        "ai_review_done",
        "user_revision_ready",
        "user_revision_editing",
        "user_revision_done",
        "chapter_prep_ready",
        "chapter_prep_running",
        "chapter_prep_done",
        "chapter_plan_ready",
        "chapter_plan_running",
        "chapter_plan_done",
        "block_write_ready",
        "block_write_running",
        "block_write_done",
        "block_check_ready",
        "block_check_running",
        "block_check_done",
        "chapter_complete",
        "chapter_complete_running",
        "completion_ready",
        "completion_running",
        "completion_done",
        "completed"
    ]), Qs = {
        idle: {
            label: "空闲",
            placeholder: "请开始设计您的小说...",
            inputEnabled: !1
        },
        design_worldview_ready: {
            label: "世界观设计（准备）",
            placeholder: "准备设计世界观...",
            inputEnabled: !1
        },
        design_worldview_editing: {
            label: "世界观设计（编辑中）",
            placeholder: "正在设计世界观...",
            inputEnabled: !0
        },
        design_worldview_done: {
            label: "世界观设计（完成）",
            placeholder: "世界观设计完成",
            inputEnabled: !1
        },
        design_characters_ready: {
            label: "角色设计（准备）",
            placeholder: "准备设计角色...",
            inputEnabled: !1
        },
        design_characters_editing: {
            label: "角色设计（编辑中）",
            placeholder: "正在设计角色...",
            inputEnabled: !0
        },
        design_characters_done: {
            label: "角色设计（完成）",
            placeholder: "角色设计完成",
            inputEnabled: !1
        },
        design_theme_ready: {
            label: "主题设计（准备）",
            placeholder: "准备设计主题...",
            inputEnabled: !1
        },
        design_theme_editing: {
            label: "主题设计（编辑中）",
            placeholder: "正在设计主题...",
            inputEnabled: !0
        },
        design_theme_done: {
            label: "主题设计（完成）",
            placeholder: "主题设计完成",
            inputEnabled: !1
        },
        design_plot_outline_ready: {
            label: "情节脉络设计（准备）",
            placeholder: "准备设计情节脉络...",
            inputEnabled: !1
        },
        design_plot_outline_editing: {
            label: "情节脉络设计（编辑中）",
            placeholder: "正在设计情节脉络...",
            inputEnabled: !0
        },
        design_plot_outline_done: {
            label: "情节脉络设计（完成）",
            placeholder: "情节脉络设计完成",
            inputEnabled: !1
        },
        design_chapter_outline_ready: {
            label: "章节大纲设计（准备）",
            placeholder: "准备设计章节大纲...",
            inputEnabled: !1
        },
        design_chapter_outline_editing: {
            label: "章节大纲设计（编辑中）",
            placeholder: "正在设计章节大纲...",
            inputEnabled: !0
        },
        design_chapter_outline_done: {
            label: "章节大纲设计（完成）",
            placeholder: "章节大纲设计完成",
            inputEnabled: !1
        },
        ai_review_ready: {
            label: "AI 评审（准备）",
            placeholder: "准备进行 AI 评审...",
            inputEnabled: !1
        },
        ai_review_running: {
            label: "AI 评审（进行中）",
            placeholder: "AI 正在评审设计...",
            inputEnabled: !1
        },
        ai_review_done: {
            label: "AI 评审（完成）",
            placeholder: "AI 评审完成",
            inputEnabled: !1
        },
        user_revision_ready: {
            label: "用户修改（准备）",
            placeholder: "准备修改设计...",
            inputEnabled: !1
        },
        user_revision_editing: {
            label: "用户修改（编辑中）",
            placeholder: "正在修改设计...",
            inputEnabled: !0
        },
        user_revision_done: {
            label: "用户修改（完成）",
            placeholder: "修改完成",
            inputEnabled: !1
        },
        chapter_prep_ready: {
            label: "章节准备（准备）",
            placeholder: "准备开始章节...",
            inputEnabled: !1
        },
        chapter_prep_running: {
            label: "章节准备（进行中）",
            placeholder: "AI 正在准备章节...",
            inputEnabled: !1
        },
        chapter_prep_done: {
            label: "章节准备（完成）",
            placeholder: "章节准备完成",
            inputEnabled: !1
        },
        chapter_plan_ready: {
            label: "章节规划（准备）",
            placeholder: "准备生成章节规划...",
            inputEnabled: !1
        },
        chapter_plan_running: {
            label: "章节规划（生成中）",
            placeholder: "AI 正在生成章节规划...",
            inputEnabled: !1
        },
        chapter_plan_done: {
            label: "章节规划（完成）",
            placeholder: "章节规划完成，请审批",
            inputEnabled: !1
        },
        block_write_ready: {
            label: "分块写作（准备）",
            placeholder: "准备开始写作...",
            inputEnabled: !1
        },
        block_write_running: {
            label: "分块写作（进行中）",
            placeholder: "AI 正在续写...",
            inputEnabled: !1
        },
        block_write_done: {
            label: "分块写作（完成）",
            placeholder: "写作完成",
            inputEnabled: !1
        },
        block_check_ready: {
            label: "分块评估（准备）",
            placeholder: "准备评估内容...",
            inputEnabled: !1
        },
        block_check_running: {
            label: "分块评估（进行中）",
            placeholder: "AI 正在评估...",
            inputEnabled: !1
        },
        block_check_done: {
            label: "分块评估（完成）",
            placeholder: "评估完成",
            inputEnabled: !1
        },
        chapter_complete: {
            label: "章节完成",
            placeholder: "本章已完成",
            inputEnabled: !1
        },
        chapter_complete_running: {
            label: "章节完成处理中",
            placeholder: "正在处理章节完成...",
            inputEnabled: !1
        },
        completion_ready: {
            label: "完结准备",
            placeholder: "准备完结小说...",
            inputEnabled: !1
        },
        completion_running: {
            label: "完结处理中",
            placeholder: "正在生成完结内容...",
            inputEnabled: !1
        },
        completion_done: {
            label: "完结完成",
            placeholder: "小说已完成",
            inputEnabled: !1
        },
        completed: {
            label: "已完成",
            placeholder: "小说创作完成！",
            inputEnabled: !1
        }
    }, en = U([
        "ai_direct",
        "ai_guided",
        "user_polish",
        "roleplay"
    ]), tn = M({
        timePeriod: w().optional().describe("时代背景"),
        socialSystem: w().optional().describe("社会制度"),
        techSystem: w().optional().describe("技术体系"),
        powerSystem: w().optional().describe("能力体系"),
        otherSettings: w().optional().describe("其他设定")
    }), sn = M({
        id: w().describe("角色 ID"),
        name: w().describe("角色名称"),
        role: w().describe("角色定位（主角/配角/反派等）"),
        description: w().describe("角色详细描述"),
        avatar: w().optional().describe("角色头像 URI 或 Base64"),
        importedFrom: w().optional().describe("如果从角色库导入，记录来源 ID")
    }), nn = M({
        mainIdea: w().describe("主旨"),
        intention: w().describe("立意"),
        style: w().describe("风格")
    }), rn = M({
        id: w().describe("情节点 ID"),
        name: w().describe("情节名称"),
        description: w().describe("情节描述"),
        order: I().describe("顺序编号")
    }), an = M({
        structure: w().optional().describe("故事结构（如：三幕剧、英雄之旅等）"),
        keyPlots: L(rn).describe("关键情节点列表"),
        rawText: w().optional().describe("原始文本（Markdown 或 YAML）"),
        format: U([
            "markdown",
            "yaml"
        ]).optional().describe("格式类型")
    }), on = M({
        id: w().describe("章节 ID"),
        chapterNumber: I().describe("章节号"),
        title: w().describe("章节标题"),
        summary: w().describe("章节摘要"),
        keyEvents: L(w()).describe("关键事件列表")
    }), cn = M({
        type: U([
            "好奇",
            "伏笔",
            "主线",
            "线索",
            "突破"
        ]).describe("兴趣类型"),
        content: w().describe("兴趣点内容"),
        priority: I().describe("优先级 1-10")
    }), ln = M({
        chapterNumber: I().describe("章节号"),
        blockIndex: I().describe("分块索引"),
        emotion: w().describe("情绪类型（如：紧张、舒缓、激昂等）"),
        intensity: I().describe("强度 1-10")
    }), dn = M({
        id: w().describe("伏笔 ID"),
        content: w().describe("伏笔内容"),
        introducedAt: M({
            chapter: I(),
            block: I()
        }).describe("引入位置"),
        resolvedAt: M({
            chapter: I(),
            block: I()
        }).optional().describe("解决位置"),
        status: U([
            "pending",
            "in-progress",
            "resolved"
        ]).describe("状态"),
        importance: U([
            "low",
            "medium",
            "high"
        ]).describe("重要程度")
    }), mn = M({
        type: U([
            "角色",
            "地点",
            "物品"
        ]).describe("实体类型"),
        name: w().describe("名称"),
        alias: L(w()).optional().describe("别名"),
        description: L(w()).describe("描述列表"),
        relatedEntities: L(w()).optional().describe("相关实体")
    }), pn = M({
        type: U([
            "状态声明",
            "状态变化",
            "关系声明",
            "关系变化"
        ]).describe("事件类型"),
        description: w().describe("事件描述"),
        chapterNumber: I().describe("发生章节"),
        timestamp: I().describe("记录时间戳")
    }), un = M({
        type: U([
            "时代背景",
            "社会制度",
            "技术体系",
            "能力体系",
            "其他"
        ]).describe("规则类型"),
        name: w().describe("规则名称"),
        description: w().describe("规则描述")
    }), hn = M({
        entities: L(mn).describe("实体列表"),
        events: L(pn).describe("事件列表"),
        rules: L(un).describe("规则列表")
    }), xn = M({
        id: w().describe("分块 ID"),
        content: w().describe("分块内容"),
        wordCount: I().describe("字数"),
        writeMode: en.describe("写作模式"),
        createdAt: I().describe("创建时间")
    }), gn = M({
        id: w().describe("章节 ID"),
        number: I().describe("章节号"),
        title: w().describe("章节标题"),
        status: U([
            "planning",
            "writing",
            "reviewing",
            "completed"
        ]).describe("状态"),
        wordCount: I().describe("当前字数"),
        targetWordCount: I().describe("目标字数 3000-5000"),
        blocks: L(xn).describe("分块列表"),
        plan: w().optional().describe("章节规划"),
        summary: w().optional().describe("章节摘要")
    });
    M({
        planCompliance: I().describe("与章节规划符合度 0-10"),
        settingCompliance: I().describe("与故事设定符合度 0-10"),
        interestAlignment: I().describe("与读者兴趣点符合度 0-10"),
        emotionAlignment: I().describe("与情绪设计符合度 0-10"),
        suggestions: L(w()).describe("AI 建议")
    });
    M({
        themeFocus: I().describe("章节主题聚焦程度 0-10"),
        outlineCompliance: I().describe("与大纲符合度 0-10"),
        settingCompliance: I().describe("与故事设定符合度 0-10"),
        interestAlignment: I().describe("与读者兴趣点符合度 0-10"),
        emotionAlignment: I().describe("与情绪设计符合度 0-10"),
        suggestions: L(w()).describe("AI 建议")
    });
    const _n = M({
        projectName: w().describe("小说项目名称"),
        worldview: tn.optional().describe("世界观"),
        keyCharacters: L(sn).describe("关键角色列表"),
        theme: nn.optional().describe("主题"),
        plotOutline: an.optional().describe("情节脉络"),
        chapterOutline: L(on).optional().describe("章节大纲"),
        hasOutline: he().default(!1).describe("是否有大纲")
    }), fn = M({
        currentPhase: Zs.describe("当前阶段"),
        currentUIState: Xs.describe("当前 UI 状态"),
        designCompleted: he().default(!1).describe("设计是否完成"),
        reviewPassed: he().default(!1).describe("评审是否通过"),
        currentChapterIndex: I().default(0).describe("当前章节索引"),
        currentChapter: gn.optional().describe("当前章节"),
        progressTracking: M({
            completedChapters: I().default(0).describe("已完成章节数"),
            totalPlannedChapters: I().default(0).describe("计划总章节数"),
            totalWordCount: I().default(0).describe("总字数"),
            currentInterestPoints: L(cn).describe("当前兴趣点"),
            emotionSequence: L(ln).describe("情绪序列"),
            foreshadows: L(dn).describe("伏笔列表")
        }).describe("进度追踪"),
        knowledgeBase: hn.describe("知识库"),
        isCompleted: he().default(!1).describe("是否完结"),
        completionReason: U([
            "manual",
            "outline_finished",
            "natural_ending"
        ]).optional().describe("完结原因"),
        historySummary: w().default("").describe("历史摘要"),
        chapterSummaries: L(M({
            chapterNumber: I(),
            summary: w()
        })).describe("章节摘要列表"),
        tempData: xt(w(), Ne()).optional().describe("临时数据")
    });
    ct.extend({
        mode: gt("novel-writing").describe("模式"),
        modeConfig: _n.describe("Novel Writing 模式配置"),
        modeState: fn.describe("Novel Writing 模式状态")
    });
    function wn(t) {
        return t.trim().replace(/<think>[\s\S]*<\/think>/g, "").trim().replace(/^[\s]*```[^\n]*|```[\s]*$/g, "").trim();
    }
    let be, ue, Sn, yn, Nn, vn, bn, In, jn, Cn, Tn, An, kn, En, Mn, Pn, On, Rn, Dn;
    be = (t)=>{
        const s = wn(t);
        try {
            return Te.parse(s);
        } catch (n) {
            try {
                return s === "" ? "" : Te.parse(s.slice(1));
            } catch (r) {
                return console.error({
                    error1: n,
                    error2: r,
                    newStr: s,
                    jsonStr: t
                }), s;
            }
        }
    };
    ue = ({ isOpen: t, onClose: s, onConfirm: n, title: r = "AI 辅助生成", description: a = "请输入您的要求或关键词，AI 将根据您的提示进行创作。", placeholder: i = "例如：希望时代背景是蒸汽朋克风格，带有一些克苏鲁元素...", defaultValue: d = "" })=>{
        const [m, p] = j.useState(d), f = ()=>{
            n(m), s();
        };
        return e.jsx(ft, {
            open: t,
            onOpenChange: (_)=>!_ && s(),
            children: e.jsxs(wt, {
                className: "sm:max-w-[500px]",
                children: [
                    e.jsxs(St, {
                        children: [
                            e.jsxs(yt, {
                                className: "flex items-center gap-2",
                                children: [
                                    e.jsx(V, {
                                        className: "w-5 h-5 text-primary"
                                    }),
                                    r
                                ]
                            }),
                            e.jsx(Nt, {
                                children: a
                            })
                        ]
                    }),
                    e.jsx("div", {
                        className: "py-4",
                        children: e.jsx(z, {
                            value: m,
                            onChange: (_)=>p(_.target.value),
                            placeholder: i,
                            rows: 5,
                            className: "resize-none",
                            autoFocus: !0
                        })
                    }),
                    e.jsxs(vt, {
                        children: [
                            e.jsx(C, {
                                variant: "outline",
                                onClick: s,
                                children: "取消"
                            }),
                            e.jsx(C, {
                                onClick: f,
                                children: "确认生成"
                            })
                        ]
                    })
                ]
            })
        });
    };
    Sn = ()=>{
        const t = K(o), s = ne((y)=>re(y.config)), [n, r] = j.useState(!1), [a, i] = j.useState(!1), d = t.currentSession?.modeConfig?.worldview, m = t.currentSession?.modeState?.tempData?.latestReviewSuggestions, [p, f] = j.useState({
            timePeriod: "",
            socialSystem: "",
            techSystem: "",
            powerSystem: "",
            otherSettings: ""
        });
        j.useEffect(()=>{
            d && f({
                timePeriod: d.timePeriod || "",
                socialSystem: d.socialSystem || "",
                techSystem: d.techSystem || "",
                powerSystem: d.powerSystem || "",
                otherSettings: d.otherSettings || ""
            });
        }, [
            d
        ]);
        const _ = (y, v)=>{
            f((g)=>({
                    ...g,
                    [y]: v
                }));
        }, N = ()=>{
            o.updateModeConfig({
                worldview: {
                    ...p
                }
            });
        }, h = async (y)=>{
            r(!0);
            try {
                const v = o.contextManager;
                if (!o.currentSession || !v) {
                    T.error("会话未初始化");
                    return;
                }
                const g = Object.entries(p).filter(([S, b])=>b && b.trim()).map(([S, b])=>`${S}: ${b}`).join(`
`);
                let x = "";
                y && (x += `用户期望：${y}
`), g && (x += `现有设定：
${g}`), x && o.updateTempData({
                    worldviewHint: x
                });
                const u = Q.makeMessagesForWorldviewGeneration(o.currentSession, v);
                let c = "";
                await Z(s, u.map((S)=>({
                        role: S.role,
                        content: S.content,
                        id: k()
                    })), [], (S, b)=>{
                    c = b;
                });
                const l = be(c);
                if (l && typeof l == "object") {
                    const S = {
                        timePeriod: l.timePeriod || p.timePeriod || "",
                        socialSystem: l.socialSystem || p.socialSystem || "",
                        techSystem: l.techSystem || p.techSystem || "",
                        powerSystem: l.powerSystem || p.powerSystem || "",
                        otherSettings: l.otherSettings || p.otherSettings || ""
                    };
                    o.updateModeConfig({
                        worldview: S
                    }), T.success(m ? "AI 已根据评审建议优化世界观" : "AI 生成世界观成功");
                } else o.updateModeConfig({
                    worldview: {
                        ...p,
                        otherSettings: (p.otherSettings ? p.otherSettings + `

` : "") + c
                    }
                }), T.info("未能完全解析 JSON，内容已存入其他设定");
            } catch (v) {
                console.error("AI generation error:", v), T.error("AI 生成失败");
            } finally{
                r(!1), o.updateTempData({
                    worldviewHint: void 0
                });
            }
        };
        return e.jsxs("div", {
            className: "space-y-4",
            children: [
                e.jsx("div", {
                    className: "flex justify-end",
                    children: e.jsx(C, {
                        size: "sm",
                        variant: "outline",
                        onClick: ()=>i(!0),
                        disabled: n,
                        children: n ? e.jsxs(e.Fragment, {
                            children: [
                                e.jsx(W, {
                                    className: "w-4 h-4 mr-2 animate-spin"
                                }),
                                "生成中..."
                            ]
                        }) : e.jsxs(e.Fragment, {
                            children: [
                                e.jsx(V, {
                                    className: "w-4 h-4 mr-2"
                                }),
                                m ? "根据建议重新生成" : "一键 AI 生成/补全"
                            ]
                        })
                    })
                }),
                e.jsx(ue, {
                    isOpen: a,
                    onClose: ()=>i(!1),
                    onConfirm: h,
                    title: "世界观 AI 生成",
                    description: "请输入您对世界观的期望（如：赛博朋克、克苏鲁、东方玄幻等），AI 将为您生成完整的设定。"
                }),
                e.jsxs("div", {
                    className: "space-y-4",
                    children: [
                        e.jsxs("div", {
                            className: "space-y-2",
                            children: [
                                e.jsx(G, {
                                    children: "时代背景"
                                }),
                                e.jsx(z, {
                                    value: p.timePeriod,
                                    onChange: (y)=>_("timePeriod", y.target.value),
                                    onBlur: N,
                                    placeholder: "描述故事发生的时代、地理环境等...",
                                    rows: 2,
                                    className: "resize-none"
                                })
                            ]
                        }),
                        e.jsxs("div", {
                            className: "space-y-2",
                            children: [
                                e.jsx(G, {
                                    children: "社会体系"
                                }),
                                e.jsx(z, {
                                    value: p.socialSystem,
                                    onChange: (y)=>_("socialSystem", y.target.value),
                                    onBlur: N,
                                    placeholder: "政治制度、经济状况、文化风俗...",
                                    rows: 3,
                                    className: "resize-none"
                                })
                            ]
                        }),
                        e.jsxs("div", {
                            className: "space-y-2",
                            children: [
                                e.jsx(G, {
                                    children: "技术体系"
                                }),
                                e.jsx(z, {
                                    value: p.techSystem,
                                    onChange: (y)=>_("techSystem", y.target.value),
                                    onBlur: N,
                                    placeholder: "科技水平、交通工具、通讯方式...",
                                    rows: 3,
                                    className: "resize-none"
                                })
                            ]
                        }),
                        e.jsxs("div", {
                            className: "space-y-2",
                            children: [
                                e.jsx(G, {
                                    children: "力量体系"
                                }),
                                e.jsx(z, {
                                    value: p.powerSystem,
                                    onChange: (y)=>_("powerSystem", y.target.value),
                                    onBlur: N,
                                    placeholder: "魔法、武功、异能或其他超自然力量设定...",
                                    rows: 3,
                                    className: "resize-none"
                                })
                            ]
                        }),
                        e.jsxs("div", {
                            className: "space-y-2",
                            children: [
                                e.jsx(G, {
                                    children: "其他设定"
                                }),
                                e.jsx(z, {
                                    value: p.otherSettings,
                                    onChange: (y)=>_("otherSettings", y.target.value),
                                    onBlur: N,
                                    placeholder: "任何其他重要的世界观补充...",
                                    rows: 4,
                                    className: "resize-none"
                                })
                            ]
                        })
                    ]
                }),
                m && e.jsxs("div", {
                    className: "mt-4 p-3 bg-yellow-500/10 border border-yellow-500/20 rounded text-xs text-yellow-600",
                    children: [
                        e.jsx("strong", {
                            children: "当前参考的评审建议："
                        }),
                        e.jsx("p", {
                            className: "mt-1 line-clamp-2",
                            children: m
                        })
                    ]
                })
            ]
        });
    };
    yn = (t)=>e.jsx(Sn, {
            ...t
        });
    Nn = ({ character: t, onUpdate: s, onRemove: n, onExport: r, onEnhance: a, isEnhancing: i })=>{
        const [d, m] = j.useState(t);
        j.useEffect(()=>{
            m(t);
        }, [
            t
        ]);
        const p = (_, N)=>{
            m((h)=>({
                    ...h,
                    [_]: N
                }));
        }, f = ()=>{
            (d.name !== t.name || d.role !== t.role || d.description !== t.description) && s(t.id, d);
        };
        return e.jsx(O, {
            className: "p-4 space-y-3",
            children: e.jsxs("div", {
                className: "flex gap-4",
                children: [
                    e.jsx("div", {
                        className: "shrink-0 pt-6",
                        children: e.jsx(Mt, {
                            character: t,
                            size: "md",
                            shape: "square"
                        })
                    }),
                    e.jsxs("div", {
                        className: "flex-1 space-y-3",
                        children: [
                            e.jsxs("div", {
                                className: "grid grid-cols-2 gap-3",
                                children: [
                                    e.jsxs("div", {
                                        className: "space-y-2",
                                        children: [
                                            e.jsx(G, {
                                                children: "角色名"
                                            }),
                                            e.jsx(Ee, {
                                                placeholder: "例如：张三",
                                                value: d.name,
                                                onChange: (_)=>p("name", _.target.value),
                                                onBlur: f
                                            })
                                        ]
                                    }),
                                    e.jsxs("div", {
                                        className: "space-y-2",
                                        children: [
                                            e.jsx(G, {
                                                children: "定位/角色"
                                            }),
                                            e.jsx(Ee, {
                                                placeholder: "例如：主角、配角、反派",
                                                value: d.role,
                                                onChange: (_)=>p("role", _.target.value),
                                                onBlur: f
                                            })
                                        ]
                                    })
                                ]
                            }),
                            e.jsxs("div", {
                                className: "space-y-2",
                                children: [
                                    e.jsx(G, {
                                        children: "角色描述"
                                    }),
                                    e.jsx(z, {
                                        placeholder: "性格、背景、特点、关系等...",
                                        value: d.description,
                                        onChange: (_)=>p("description", _.target.value),
                                        onBlur: f,
                                        rows: 3
                                    })
                                ]
                            })
                        ]
                    }),
                    e.jsxs("div", {
                        className: "flex flex-col gap-2",
                        children: [
                            e.jsx(C, {
                                size: "sm",
                                variant: "ghost",
                                onClick: ()=>a(t.id),
                                disabled: i,
                                title: "AI 完善角色",
                                children: i ? e.jsx(W, {
                                    className: "w-4 h-4 animate-spin text-primary"
                                }) : e.jsx(xe, {
                                    className: "w-4 h-4 text-primary"
                                })
                            }),
                            e.jsx(C, {
                                size: "sm",
                                variant: "ghost",
                                onClick: ()=>n(t.id),
                                title: "删除角色",
                                children: e.jsx(jt, {
                                    className: "w-4 h-4 text-destructive"
                                })
                            }),
                            e.jsx(C, {
                                size: "sm",
                                variant: "ghost",
                                onClick: ()=>r(d),
                                title: "导出到角色库",
                                children: e.jsx(Ct, {
                                    className: "w-4 h-4 text-primary"
                                })
                            })
                        ]
                    })
                ]
            })
        });
    };
    vn = ()=>{
        const t = K(o), s = ne((c)=>re(c.config)), [n, r] = j.useState(!1), [a, i] = j.useState(!1), [d, m] = j.useState(null), p = j.useRef(0), f = t.currentSession?.modeConfig?.keyCharacters || [], _ = t.currentSession?.modeState?.tempData?.latestReviewSuggestions, N = ()=>{
            const c = {
                id: k(),
                name: "",
                role: "",
                description: ""
            };
            o.updateModeConfig({
                keyCharacters: [
                    ...f,
                    c
                ]
            });
        }, h = async ()=>{
            try {
                const l = await (await Ce.characters.getTable()).toArray();
                if (l.length === 0) {
                    T.error("角色库为空，请先创建角色卡");
                    return;
                }
                const S = new Set(f.map((E)=>E.name)), b = l.find((E)=>!S.has(E.name));
                if (b) {
                    const E = {
                        id: k(),
                        name: b.name,
                        role: "主要角色",
                        description: b.description || b.personality || "",
                        avatar: b.avatar || "",
                        importedFrom: b.id
                    };
                    o.updateModeConfig({
                        keyCharacters: [
                            ...f,
                            E
                        ]
                    }), T.success(`已从角色库导入：${b.name}`);
                } else T.info("角色库中的角色已全部在列表中");
            } catch (c) {
                console.error("Import error:", c), T.error("导入失败");
            }
        }, y = async (c)=>{
            if (!c.name || !c.description) {
                T.error("角色名称和描述不能为空");
                return;
            }
            try {
                const l = await Ce.characters.getTable();
                if (await l.where("name").equals(c.name).first()) {
                    T.error(`角色库中已存在名为“${c.name}”的角色`);
                    return;
                }
                await l.add({
                    id: k(),
                    name: c.name,
                    description: c.description,
                    personality: c.description,
                    first_mes: `我是${c.name}，${c.role}。`,
                    avatar: "",
                    chat_history: [],
                    tags: [
                        "小说导出",
                        c.role
                    ],
                    creator_notes: "从小说模式导出",
                    system_prompt: "",
                    post_history_instructions: "",
                    alternate_greetings: [],
                    character_book: void 0,
                    creator: "User",
                    character_version: "1.0.0",
                    extensions: {}
                }), T.success(`已将“${c.name}”导出到角色库`);
            } catch (l) {
                console.error("Export error:", l), T.error("导出失败");
            }
        }, v = (c)=>{
            o.updateModeConfig({
                keyCharacters: f.filter((l)=>l.id !== c)
            });
        }, g = (c, l)=>{
            o.updateModeConfig({
                keyCharacters: f.map((S)=>S.id === c ? {
                        ...S,
                        ...l
                    } : S)
            });
        }, x = async (c)=>{
            m(c);
            try {
                const l = o.currentSession, S = o.contextManager;
                if (!l || !S) return;
                o.updateTempData({
                    targetCharacterId: c
                });
                const b = Q.makeMessagesForCharacterEnhancement(l, S);
                let E = "";
                await Z(s, b.map((F)=>({
                        role: F.role,
                        content: F.content,
                        id: k()
                    })), [], (F, te)=>{
                    E = te;
                });
                const Y = be(E);
                if (Y && typeof Y == "object") g(c, {
                    name: Y.name || void 0,
                    role: Y.role || void 0,
                    description: Y.description || void 0
                }), T.success("角色完善成功");
                else {
                    const F = f.find((te)=>te.id === c);
                    F && g(c, {
                        description: (F.description ? F.description + `

` : "") + E
                    }), T.info("内容已追加到角色描述");
                }
            } catch (l) {
                console.error("AI enhancement error:", l), T.error("AI 完善失败");
            } finally{
                m(null), o.updateTempData({
                    targetCharacterId: void 0
                });
            }
        }, u = async (c)=>{
            r(!0), p.current = 0;
            try {
                const l = o.contextManager;
                if (!o.currentSession || !l) {
                    T.error("会话未初始化");
                    return;
                }
                c && o.updateTempData({
                    characterHint: c
                });
                const S = Q.makeMessagesForCharactersBatchGeneration(o.currentSession, l);
                await Z(s, S.map((b)=>({
                        role: b.role,
                        content: b.content,
                        id: k()
                    })), [], (b, E)=>{}), await o.updateSessionInDB(), T.success(_ ? "AI 已根据评审建议优化并生成角色" : "AI 角色生成完成");
            } catch (l) {
                console.error("AI generation error:", l), T.error("AI 生成失败");
            } finally{
                r(!1), o.updateTempData({
                    characterHint: void 0
                });
            }
        };
        return e.jsxs("div", {
            className: "space-y-4",
            children: [
                e.jsxs("div", {
                    className: "flex flex-wrap gap-2 justify-between items-center",
                    children: [
                        e.jsxs("div", {
                            className: "flex gap-2",
                            children: [
                                e.jsxs(C, {
                                    size: "sm",
                                    variant: "outline",
                                    onClick: N,
                                    children: [
                                        e.jsx(bt, {
                                            className: "w-4 h-4 mr-2"
                                        }),
                                        "手动添加"
                                    ]
                                }),
                                e.jsxs(C, {
                                    size: "sm",
                                    variant: "outline",
                                    onClick: h,
                                    children: [
                                        e.jsx(It, {
                                            className: "w-4 h-4 mr-2"
                                        }),
                                        "从角色库导入"
                                    ]
                                })
                            ]
                        }),
                        e.jsx(C, {
                            size: "sm",
                            variant: "outline",
                            onClick: ()=>i(!0),
                            disabled: n,
                            children: n ? e.jsxs(e.Fragment, {
                                children: [
                                    e.jsx(W, {
                                        className: "w-4 h-4 mr-2 animate-spin"
                                    }),
                                    "AI 批量生成中..."
                                ]
                            }) : e.jsxs(e.Fragment, {
                                children: [
                                    e.jsx(V, {
                                        className: "w-4 h-4 mr-2"
                                    }),
                                    _ ? "根据建议重新生成" : "AI 批量生成"
                                ]
                            })
                        })
                    ]
                }),
                e.jsx(ue, {
                    isOpen: a,
                    onClose: ()=>i(!1),
                    onConfirm: u,
                    title: "角色 AI 批量生成",
                    description: "请输入您对角色的期望（如：性格、职业、种族、关系等），AI 将为您生成一组角色。"
                }),
                _ && e.jsxs("div", {
                    className: "p-3 bg-yellow-500/10 border border-yellow-500/20 rounded text-xs text-yellow-600",
                    children: [
                        "参考建议：",
                        _.substring(0, 100),
                        "..."
                    ]
                }),
                f.length === 0 ? e.jsx("div", {
                    className: "text-center py-12 text-muted-foreground",
                    children: e.jsx("p", {
                        children: "暂无角色，点击上方按钮添加或 AI 生成"
                    })
                }) : e.jsx("div", {
                    className: "space-y-4",
                    children: f.map((c)=>e.jsx(Nn, {
                            character: c,
                            onUpdate: g,
                            onRemove: v,
                            onExport: y,
                            onEnhance: x,
                            isEnhancing: d === c.id
                        }, c.id))
                }),
                e.jsx("div", {
                    className: "text-xs text-muted-foreground p-3 bg-muted/30 rounded",
                    children: "💡 提示：可以手动添加角色，也可以用 AI 批量生成。角色可以随时增删改。点击保存图标可将新角色导出到广场。"
                })
            ]
        });
    };
    bn = ()=>{
        const t = K(o), s = ne((x)=>re(x.config)), [n, r] = j.useState(!1), [a, i] = j.useState(!1), [d, m] = j.useState(!1), p = t.currentSession?.modeConfig?.theme, f = t.currentSession?.modeState?.tempData?.latestReviewSuggestions, [_, N] = j.useState({
            mainIdea: "",
            intention: "",
            style: ""
        });
        j.useEffect(()=>{
            p && N({
                mainIdea: p.mainIdea || "",
                intention: p.intention || "",
                style: p.style || ""
            });
        }, [
            p
        ]);
        const h = (x, u)=>{
            N((c)=>({
                    ...c,
                    [x]: u
                }));
        }, y = ()=>{
            o.updateModeConfig({
                theme: {
                    ..._
                }
            });
        }, v = async ()=>{
            i(!0);
            try {
                const x = o.currentSession, u = o.contextManager;
                if (!x || !u) return;
                const c = Q.makeMessagesForThemeAnalysis(x, u);
                let l = "";
                await Z(s, c.map((S)=>({
                        role: S.role,
                        content: S.content,
                        id: k()
                    })), [], (S, b)=>{
                    l = b;
                }), T.info("AI 主题分析完成", {
                    description: l,
                    duration: 1e4
                });
            } catch (x) {
                console.error("AI analysis error:", x), T.error("AI 分析失败");
            } finally{
                i(!1);
            }
        }, g = async (x)=>{
            r(!0);
            try {
                const u = o.contextManager;
                if (!o.currentSession || !u) {
                    T.error("会话未初始化");
                    return;
                }
                x && o.updateTempData({
                    themeHint: x
                });
                const c = Q.makeMessagesForThemeGeneration(o.currentSession, u);
                let l = "";
                await Z(s, c.map((b)=>({
                        role: b.role,
                        content: b.content,
                        id: k()
                    })), [], (b, E)=>{
                    l = E;
                });
                const S = be(l);
                if (S && typeof S == "object") o.updateModeConfig({
                    theme: {
                        mainIdea: S.mainIdea || "",
                        intention: S.intention || "",
                        style: S.style || ""
                    }
                }), T.success(f ? "AI 已根据评审建议优化主题" : "AI 生成主题成功");
                else {
                    const b = {
                        ..._,
                        mainIdea: l
                    };
                    o.updateModeConfig({
                        theme: b
                    }), T.info("内容已存入核心思想");
                }
            } catch (u) {
                console.error("AI generation error:", u), T.error("AI 生成失败");
            } finally{
                r(!1), o.updateTempData({
                    themeHint: void 0
                });
            }
        };
        return e.jsxs("div", {
            className: "space-y-4",
            children: [
                e.jsxs("div", {
                    className: "flex justify-end gap-2",
                    children: [
                        e.jsx(C, {
                            size: "sm",
                            variant: "outline",
                            onClick: v,
                            disabled: a || n,
                            children: a ? e.jsxs(e.Fragment, {
                                children: [
                                    e.jsx(W, {
                                        className: "mr-2 h-4 w-4 animate-spin"
                                    }),
                                    "分析中..."
                                ]
                            }) : e.jsxs(e.Fragment, {
                                children: [
                                    e.jsx(Tt, {
                                        className: "mr-2 h-4 w-4"
                                    }),
                                    "AI 深度分析"
                                ]
                            })
                        }),
                        e.jsx(C, {
                            size: "sm",
                            variant: "outline",
                            onClick: ()=>m(!0),
                            disabled: n || a,
                            children: n ? e.jsxs(e.Fragment, {
                                children: [
                                    e.jsx(W, {
                                        className: "mr-2 h-4 w-4 animate-spin"
                                    }),
                                    "生成中..."
                                ]
                            }) : e.jsxs(e.Fragment, {
                                children: [
                                    e.jsx(V, {
                                        className: "mr-2 h-4 w-4"
                                    }),
                                    f ? "根据建议重新生成" : "一键 AI 生成"
                                ]
                            })
                        })
                    ]
                }),
                e.jsx(ue, {
                    isOpen: d,
                    onClose: ()=>m(!1),
                    onConfirm: g,
                    title: "主题 AI 生成",
                    description: "请输入您对故事主题的期望（如：成长、复仇、爱与和平等），AI 将为您生成核心思想和创作意图。"
                }),
                e.jsxs("div", {
                    className: "space-y-4",
                    children: [
                        e.jsxs("div", {
                            className: "space-y-2",
                            children: [
                                e.jsx(G, {
                                    children: "核心思想"
                                }),
                                e.jsx(z, {
                                    value: _.mainIdea,
                                    onChange: (x)=>h("mainIdea", x.target.value),
                                    onBlur: y,
                                    rows: 3
                                })
                            ]
                        }),
                        e.jsxs("div", {
                            className: "space-y-2",
                            children: [
                                e.jsx(G, {
                                    children: "创作意图"
                                }),
                                e.jsx(z, {
                                    value: _.intention,
                                    onChange: (x)=>h("intention", x.target.value),
                                    onBlur: y,
                                    rows: 3
                                })
                            ]
                        }),
                        e.jsxs("div", {
                            className: "space-y-2",
                            children: [
                                e.jsx(G, {
                                    children: "风格基调"
                                }),
                                e.jsx(z, {
                                    value: _.style,
                                    onChange: (x)=>h("style", x.target.value),
                                    onBlur: y,
                                    rows: 2
                                })
                            ]
                        })
                    ]
                }),
                f && e.jsxs("div", {
                    className: "mt-4 p-3 bg-yellow-500/10 border border-yellow-500/20 rounded text-xs text-yellow-600 italic",
                    children: [
                        "正在参考评审建议：",
                        f.substring(0, 100),
                        "..."
                    ]
                })
            ]
        });
    };
    In = (t)=>e.jsx(bn, {
            ...t
        });
    jn = ()=>{
        const t = K(o), s = ne((u)=>re(u.config)), [n, r] = j.useState(!1), [a, i] = j.useState(!1), [d, m] = j.useState(!1), p = t.currentSession?.modeConfig?.plotOutline, f = p?.rawText || "", _ = t.currentSession?.modeState?.tempData?.latestReviewSuggestions, [N, h] = j.useState("");
        j.useEffect(()=>{
            h(f);
        }, [
            f
        ]);
        const y = (u)=>{
            const c = u.split(`
`).filter((S)=>S.trim()), l = [];
            c.forEach((S, b)=>{
                /^[\d\-\*]/.test(S.trim()) && l.push({
                    id: k(),
                    name: S.replace(/^[\d\-\*\.\s]+/, "").trim(),
                    description: "",
                    order: b
                });
            }), o.updateModeConfig({
                plotOutline: {
                    structure: p?.structure || "",
                    keyPlots: l,
                    rawText: u,
                    format: "markdown"
                }
            });
        }, v = ()=>{
            y(N);
        }, g = async ()=>{
            if (!N.trim()) {
                T.error("请先输入情节脉络内容");
                return;
            }
            i(!0);
            try {
                const u = o.currentSession, c = o.contextManager;
                if (!u || !c) return;
                const l = Q.makeMessagesForPlotOptimization(u, c);
                await Z(s, l.map((S)=>({
                        role: S.role,
                        content: S.content,
                        id: k()
                    })), [], (S, b)=>{
                    y(b);
                }), await o.updateSessionInDB(), T.success("AI 优化情节脉络完成");
            } catch (u) {
                console.error("AI optimization error:", u), T.error("AI 优化失败");
            } finally{
                i(!1);
            }
        }, x = async (u)=>{
            r(!0);
            try {
                const c = o.contextManager;
                if (!o.currentSession || !c) {
                    T.error("会话未初始化");
                    return;
                }
                o.updateTempData({
                    plotFormat: "markdown",
                    plotHint: u || void 0
                });
                const l = Q.makeMessagesForPlotGenerationFree(o.currentSession, c);
                await Z(s, l.map((S)=>({
                        role: S.role,
                        content: S.content,
                        id: k()
                    })), [], (S, b)=>{
                    y(b);
                }), await o.updateSessionInDB(), T.success(_ ? "AI 已根据评审建议优化情节" : "AI 生成情节脉络成功");
            } catch (c) {
                console.error("AI generation error:", c), T.error("AI 生成失败");
            } finally{
                r(!1), o.updateTempData({
                    plotHint: void 0
                });
            }
        };
        return e.jsxs("div", {
            className: "space-y-4",
            children: [
                e.jsxs("div", {
                    className: "flex justify-between items-center",
                    children: [
                        e.jsxs("div", {
                            className: "text-xs text-muted-foreground flex items-center gap-2",
                            children: [
                                e.jsx($e, {
                                    className: "w-4 h-4"
                                }),
                                "支持 Markdown 格式，实时自动保存"
                            ]
                        }),
                        e.jsxs("div", {
                            className: "flex gap-2",
                            children: [
                                e.jsx(C, {
                                    size: "sm",
                                    variant: "outline",
                                    onClick: g,
                                    disabled: a || n,
                                    children: a ? e.jsxs(e.Fragment, {
                                        children: [
                                            e.jsx(W, {
                                                className: "w-4 h-4 mr-2 animate-spin"
                                            }),
                                            "优化中..."
                                        ]
                                    }) : e.jsxs(e.Fragment, {
                                        children: [
                                            e.jsx(xe, {
                                                className: "w-4 h-4 mr-2"
                                            }),
                                            "AI 优化"
                                        ]
                                    })
                                }),
                                e.jsx(C, {
                                    size: "sm",
                                    variant: "outline",
                                    onClick: ()=>m(!0),
                                    disabled: n || a,
                                    children: n ? e.jsxs(e.Fragment, {
                                        children: [
                                            e.jsx(W, {
                                                className: "w-4 h-4 mr-2 animate-spin"
                                            }),
                                            "生成中..."
                                        ]
                                    }) : e.jsxs(e.Fragment, {
                                        children: [
                                            e.jsx(V, {
                                                className: "w-4 h-4 mr-2"
                                            }),
                                            _ ? "根据建议重新生成" : "AI 生成"
                                        ]
                                    })
                                })
                            ]
                        })
                    ]
                }),
                e.jsx(ue, {
                    isOpen: d,
                    onClose: ()=>m(!1),
                    onConfirm: x,
                    title: "情节脉络 AI 生成",
                    description: "请输入您对情节的期望（如：起承转合、高潮点、结局走向等），AI 将为您生成完整的情节大纲。"
                }),
                e.jsx(z, {
                    value: N,
                    onChange: (u)=>h(u.target.value),
                    onBlur: v,
                    rows: 20,
                    className: "font-mono text-sm"
                }),
                _ && e.jsxs("div", {
                    className: "p-3 bg-yellow-500/10 border border-yellow-500/20 rounded text-xs text-yellow-600",
                    children: [
                        "参考建议：",
                        _.substring(0, 100),
                        "..."
                    ]
                })
            ]
        });
    };
    Cn = (t)=>e.jsx(jn, {
            ...t
        });
    Tn = ()=>{
        const t = K(o), s = ne((x)=>re(x.config)), [n, r] = j.useState(!1), [a, i] = j.useState(!1), [d, m] = j.useState(!1), p = t.currentSession?.modeConfig?.chapterOutlineRawText || "", f = t.currentSession?.modeState?.tempData?.latestReviewSuggestions, [_, N] = j.useState("");
        j.useEffect(()=>{
            N(p);
        }, [
            p
        ]);
        const h = (x)=>{
            const u = x.split(`
`), c = [];
            let l = null;
            for (const S of u){
                const b = S.trim(), E = b.match(/^#+\s*第?(\d+)[章节][\s:：]*(.*)/);
                E ? (l && c.push(l), l = {
                    id: k(),
                    chapterNumber: parseInt(E[1]),
                    title: E[2] || `第${E[1]}章`,
                    summary: "",
                    keyEvents: []
                }) : l && b && (b.startsWith("-") || b.startsWith("*") ? l.keyEvents.push(b.replace(/^[\-\*]\s*/, "")) : l.summary += (l.summary ? `
` : "") + b);
            }
            l && c.push(l), o.updateModeConfig({
                chapterOutline: c,
                chapterOutlineRawText: x,
                hasOutline: c.length > 0
            });
        }, y = ()=>{
            h(_);
        }, v = async ()=>{
            if (!_.trim()) {
                T.error("请先输入章节大纲内容");
                return;
            }
            i(!0);
            try {
                const x = o.currentSession, u = o.contextManager;
                if (!x || !u) return;
                const c = Q.makeMessagesForChapterOutlineOptimization(x, u);
                await Z(s, c.map((l)=>({
                        role: l.role,
                        content: l.content,
                        id: k()
                    })), [], (l, S)=>{
                    h(S);
                }), await o.updateSessionInDB(), T.success("AI 优化章节大纲完成");
            } catch (x) {
                console.error("AI optimization error:", x), T.error("AI 优化失败");
            } finally{
                i(!1);
            }
        }, g = async (x)=>{
            r(!0);
            try {
                const u = o.contextManager;
                if (!o.currentSession || !u) {
                    T.error("会话未初始化");
                    return;
                }
                o.updateTempData({
                    outlineFormat: "markdown",
                    chapterCount: 12,
                    outlineHint: x || void 0
                });
                const c = Q.makeMessagesForChapterOutlineGeneration(o.currentSession, u);
                await Z(s, c.map((l)=>({
                        role: l.role,
                        content: l.content,
                        id: k()
                    })), [], (l, S)=>{
                    h(S);
                }), await o.updateSessionInDB(), T.success(f ? "AI 已根据评审建议优化大纲" : "AI 生成章节大纲成功");
            } catch (u) {
                console.error("AI generation error:", u), T.error("AI 生成失败");
            } finally{
                r(!1), o.updateTempData({
                    outlineHint: void 0
                });
            }
        };
        return e.jsxs("div", {
            className: "space-y-4",
            children: [
                e.jsxs("div", {
                    className: "flex justify-between items-center",
                    children: [
                        e.jsxs("div", {
                            className: "text-xs text-muted-foreground flex items-center gap-2",
                            children: [
                                e.jsx($e, {
                                    className: "w-4 h-4"
                                }),
                                "支持 Markdown 格式，自由编写，实时自动保存"
                            ]
                        }),
                        e.jsxs("div", {
                            className: "flex gap-2",
                            children: [
                                e.jsx(C, {
                                    size: "sm",
                                    variant: "outline",
                                    onClick: v,
                                    disabled: a || n,
                                    children: a ? e.jsxs(e.Fragment, {
                                        children: [
                                            e.jsx(W, {
                                                className: "w-4 h-4 mr-2 animate-spin"
                                            }),
                                            "优化中..."
                                        ]
                                    }) : e.jsxs(e.Fragment, {
                                        children: [
                                            e.jsx(xe, {
                                                className: "w-4 h-4 mr-2"
                                            }),
                                            "AI 优化"
                                        ]
                                    })
                                }),
                                e.jsx(C, {
                                    size: "sm",
                                    variant: "outline",
                                    onClick: ()=>m(!0),
                                    disabled: n || a,
                                    children: n ? e.jsxs(e.Fragment, {
                                        children: [
                                            e.jsx(W, {
                                                className: "w-4 h-4 mr-2 animate-spin"
                                            }),
                                            "AI 生成中..."
                                        ]
                                    }) : e.jsxs(e.Fragment, {
                                        children: [
                                            e.jsx(V, {
                                                className: "w-4 h-4 mr-2"
                                            }),
                                            f ? "根据建议重新生成" : "AI 生成"
                                        ]
                                    })
                                })
                            ]
                        })
                    ]
                }),
                e.jsx(ue, {
                    isOpen: d,
                    onClose: ()=>m(!1),
                    onConfirm: g,
                    title: "章节大纲 AI 生成",
                    description: "请输入您对章节大纲的期望（如：章节数量、每章重点、节奏快慢等），AI 将为您生成详细的章节列表。"
                }),
                e.jsx(z, {
                    placeholder: `请输入章节大纲（Markdown 格式）：

示例：
# 第1章 意外觉醒
主角在平凡的一天突然发现自己拥有了神秘力量。
- 早晨醒来，发现周围物体悬浮
- 前往学校，引发小规模混乱
- 被神秘组织盯上

# 第2章 踏入新世界
主角被带到隐秘的修炼者世界，开始了解真相。
- 遇到引路人
- 参观修炼者据点
- 了解世界的秘密`,
                    value: _,
                    onChange: (x)=>N(x.target.value),
                    onBlur: y,
                    rows: 20,
                    className: "font-mono text-sm"
                }),
                e.jsx("div", {
                    className: "text-xs text-muted-foreground p-3 bg-muted/30 rounded",
                    children: "💡 提示：直接在文本框中自由编写章节大纲，所有的修改都会实时自动保存。"
                }),
                f && e.jsxs("div", {
                    className: "mt-2 p-3 bg-yellow-500/10 border border-yellow-500/20 rounded text-xs text-yellow-600",
                    children: [
                        "参考建议：",
                        f.substring(0, 100),
                        "..."
                    ]
                })
            ]
        });
    };
    An = (t)=>e.jsx(Tn, {
            ...t
        });
    kn = ({ sessionId: t })=>{
        const s = K(o), n = s.currentSession?.modeState?.currentPhase, r = async ()=>{
            switch(n){
                case "design_worldview":
                    o.setPhase("design_characters"), o.setUIState("design_characters_ready");
                    break;
                case "design_characters":
                    o.setPhase("design_theme"), o.setUIState("design_theme_ready");
                    break;
                case "design_theme":
                    o.setPhase("design_plot_outline"), o.setUIState("design_plot_outline_ready");
                    break;
                case "design_plot_outline":
                    o.setPhase("design_chapter_outline"), o.setUIState("design_chapter_outline_ready");
                    break;
                case "design_chapter_outline":
                    o.setPhase("ai_review"), o.setUIState("ai_review_ready");
                    break;
            }
            await o.updateSessionInDB();
        }, a = async ()=>{
            switch(n){
                case "design_characters":
                    o.setPhase("design_worldview"), o.setUIState("design_worldview_ready");
                    break;
                case "design_theme":
                    o.setPhase("design_characters"), o.setUIState("design_characters_ready");
                    break;
                case "design_plot_outline":
                    o.setPhase("design_theme"), o.setUIState("design_theme_ready");
                    break;
                case "design_chapter_outline":
                    o.setPhase("design_plot_outline"), o.setUIState("design_plot_outline_ready");
                    break;
            }
            await o.updateSessionInDB();
        }, i = ()=>{
            switch(n){
                case "design_worldview":
                    return e.jsxs("div", {
                        className: "space-y-6",
                        children: [
                            e.jsx("div", {
                                className: "flex items-center justify-between",
                                children: e.jsxs("div", {
                                    children: [
                                        e.jsx("h3", {
                                            className: "text-lg font-semibold",
                                            children: "世界观设计"
                                        }),
                                        e.jsx("p", {
                                            className: "text-sm text-muted-foreground",
                                            children: "定义小说的时代背景、社会体系、技术水平等基础设定"
                                        })
                                    ]
                                })
                            }),
                            e.jsx(yn, {
                                sessionId: t
                            })
                        ]
                    });
                case "design_characters":
                    return e.jsxs("div", {
                        className: "space-y-6",
                        children: [
                            e.jsx("div", {
                                className: "flex items-center justify-between",
                                children: e.jsxs("div", {
                                    children: [
                                        e.jsx("h3", {
                                            className: "text-lg font-semibold",
                                            children: "角色设计"
                                        }),
                                        e.jsx("p", {
                                            className: "text-sm text-muted-foreground",
                                            children: "创建主要角色，定义性格、背景和关系"
                                        })
                                    ]
                                })
                            }),
                            e.jsx(vn, {
                                sessionId: t
                            })
                        ]
                    });
                case "design_theme":
                    return e.jsxs("div", {
                        className: "space-y-6",
                        children: [
                            e.jsx("div", {
                                className: "flex items-center justify-between",
                                children: e.jsxs("div", {
                                    children: [
                                        e.jsx("h3", {
                                            className: "text-lg font-semibold",
                                            children: "主题设计"
                                        }),
                                        e.jsx("p", {
                                            className: "text-sm text-muted-foreground",
                                            children: "确定小说的核心思想、创作意图和风格"
                                        })
                                    ]
                                })
                            }),
                            e.jsx(In, {
                                sessionId: t
                            })
                        ]
                    });
                case "design_plot_outline":
                    return e.jsxs("div", {
                        className: "space-y-6",
                        children: [
                            e.jsx("div", {
                                className: "flex items-center justify-between",
                                children: e.jsxs("div", {
                                    children: [
                                        e.jsx("h3", {
                                            className: "text-lg font-semibold",
                                            children: "情节脉络设计"
                                        }),
                                        e.jsx("p", {
                                            className: "text-sm text-muted-foreground",
                                            children: "规划整体故事结构和关键情节点"
                                        })
                                    ]
                                })
                            }),
                            e.jsx(Cn, {
                                sessionId: t
                            })
                        ]
                    });
                case "design_chapter_outline":
                    return e.jsxs("div", {
                        className: "space-y-6",
                        children: [
                            e.jsx("div", {
                                className: "flex items-center justify-between",
                                children: e.jsxs("div", {
                                    children: [
                                        e.jsx("h3", {
                                            className: "text-lg font-semibold",
                                            children: "章节大纲设计"
                                        }),
                                        e.jsx("p", {
                                            className: "text-sm text-muted-foreground",
                                            children: "细化每一章的标题、摘要和关键事件"
                                        })
                                    ]
                                })
                            }),
                            e.jsx(An, {
                                sessionId: t
                            })
                        ]
                    });
                default:
                    return null;
            }
        }, d = ()=>{
            if (!s.currentSession) return !1;
            switch(n){
                case "design_worldview":
                    return !0;
                case "design_characters":
                    return !0;
                case "design_theme":
                    return !0;
                case "design_plot_outline":
                    return !0;
                case "design_chapter_outline":
                    return !0;
                default:
                    return !1;
            }
        };
        return e.jsxs("div", {
            className: "max-w-4xl mx-auto space-y-6",
            children: [
                e.jsxs("div", {
                    className: "flex items-center gap-2 text-xs",
                    children: [
                        e.jsxs("div", {
                            className: `flex items-center gap-1 ${n === "design_worldview" ? "text-primary font-medium" : "text-muted-foreground"}`,
                            children: [
                                n !== "design_worldview" && e.jsx($, {
                                    className: "w-3 h-3"
                                }),
                                "世界观"
                            ]
                        }),
                        e.jsx(H, {
                            className: "w-3 h-3 text-muted-foreground"
                        }),
                        e.jsxs("div", {
                            className: `flex items-center gap-1 ${n === "design_characters" ? "text-primary font-medium" : "text-muted-foreground"}`,
                            children: [
                                [
                                    "design_theme",
                                    "design_plot_outline",
                                    "design_chapter_outline"
                                ].includes(n || "") && e.jsx($, {
                                    className: "w-3 h-3"
                                }),
                                "角色"
                            ]
                        }),
                        e.jsx(H, {
                            className: "w-3 h-3 text-muted-foreground"
                        }),
                        e.jsxs("div", {
                            className: `flex items-center gap-1 ${n === "design_theme" ? "text-primary font-medium" : "text-muted-foreground"}`,
                            children: [
                                [
                                    "design_plot_outline",
                                    "design_chapter_outline"
                                ].includes(n || "") && e.jsx($, {
                                    className: "w-3 h-3"
                                }),
                                "主题"
                            ]
                        }),
                        e.jsx(H, {
                            className: "w-3 h-3 text-muted-foreground"
                        }),
                        e.jsxs("div", {
                            className: `flex items-center gap-1 ${n === "design_plot_outline" ? "text-primary font-medium" : "text-muted-foreground"}`,
                            children: [
                                n === "design_chapter_outline" && e.jsx($, {
                                    className: "w-3 h-3"
                                }),
                                "情节脉络"
                            ]
                        }),
                        e.jsx(H, {
                            className: "w-3 h-3 text-muted-foreground"
                        }),
                        e.jsx("div", {
                            className: `flex items-center gap-1 ${n === "design_chapter_outline" ? "text-primary font-medium" : "text-muted-foreground"}`,
                            children: "章节大纲"
                        })
                    ]
                }),
                i(),
                e.jsxs("div", {
                    className: "flex justify-between items-center pt-4 border-t",
                    children: [
                        e.jsx(C, {
                            variant: "outline",
                            onClick: a,
                            disabled: n === "design_worldview",
                            children: "上一步"
                        }),
                        e.jsxs(C, {
                            onClick: r,
                            disabled: !d(),
                            children: [
                                n === "design_chapter_outline" ? "提交评审" : "下一步",
                                e.jsx(H, {
                                    className: "w-4 h-4 ml-2"
                                })
                            ]
                        })
                    ]
                })
            ]
        });
    };
    En = ({ sessionId: t })=>{
        const s = K(o), { runLoop: n } = de(), r = s.currentSession?.modeState?.currentPhase, a = s.contextManager?.state.processingItem, d = [
            ...s.contextManager?.state.historyItems || []
        ].reverse().find((N)=>N.type === "novel_ai_review"), m = a !== void 0, p = async ()=>{
            o.setPhase("ai_review"), o.setUIState("ai_review_running");
            const N = o.contextManager;
            N && (N.state.historyItems = []), await o.updateSessionInDB(), n(t);
        }, f = async ()=>{
            o.setPhase("chapter_prep_review"), o.setUIState("chapter_prep_ready"), await o.updateSessionInDB();
        }, _ = async ()=>{
            if (d) {
                const N = d.data;
                o.updateTempData({
                    latestReviewSuggestions: N.reviewResult + `
` + (N.suggestions?.join(`
`) || "")
                });
            }
            o.setPhase("design_worldview"), o.setUIState("design_worldview_ready"), await o.updateSessionInDB();
        };
        if (r === "ai_review") {
            if (!d && !m) return e.jsx("div", {
                className: "max-w-4xl mx-auto space-y-6",
                children: e.jsxs(O, {
                    className: "p-12 text-center border-dashed",
                    children: [
                        e.jsx("div", {
                            className: "w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4",
                            children: e.jsx(V, {
                                className: "w-8 h-8 text-primary"
                            })
                        }),
                        e.jsx("h3", {
                            className: "text-xl font-bold mb-4",
                            children: "进行 AI 评审"
                        }),
                        e.jsx("p", {
                            className: "text-muted-foreground mb-8 max-w-md mx-auto",
                            children: "AI 将深度分析您的世界观、角色和情节设计，指出逻辑漏洞并提供优化方案。"
                        }),
                        e.jsxs("div", {
                            className: "flex flex-col sm:flex-row items-center justify-center gap-4",
                            children: [
                                e.jsxs(C, {
                                    variant: "outline",
                                    onClick: _,
                                    className: "px-6",
                                    children: [
                                        e.jsx(Ae, {
                                            className: "w-4 h-4 mr-2"
                                        }),
                                        "返回修改"
                                    ]
                                }),
                                e.jsxs(C, {
                                    size: "lg",
                                    onClick: p,
                                    className: "px-8",
                                    children: [
                                        e.jsx(V, {
                                            className: "w-5 h-5 mr-2"
                                        }),
                                        "立即开始评审"
                                    ]
                                }),
                                e.jsxs(C, {
                                    variant: "ghost",
                                    onClick: f,
                                    className: "px-6 text-muted-foreground hover:text-primary",
                                    children: [
                                        "跳过评审直接写作",
                                        e.jsx(H, {
                                            className: "w-4 h-4 ml-2"
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            });
            if (m) return e.jsx("div", {
                className: "max-w-4xl mx-auto space-y-6",
                children: e.jsxs(O, {
                    className: "p-12 text-center",
                    children: [
                        e.jsx(W, {
                            className: "w-12 h-12 animate-spin text-primary mx-auto mb-6"
                        }),
                        e.jsx("h3", {
                            className: "text-lg font-semibold mb-2",
                            children: "AI 正在深度评审中..."
                        }),
                        e.jsx("p", {
                            className: "text-sm text-muted-foreground mb-8",
                            children: "正在对比世界观的一致性与角色的动机合理性..."
                        }),
                        a && e.jsx("div", {
                            className: "text-left bg-muted p-4 rounded-lg text-sm whitespace-pre-wrap max-h-75 overflow-y-auto",
                            children: a.data.content
                        })
                    ]
                })
            });
            const N = d.data, h = N.recommendation === "pass";
            return e.jsxs("div", {
                className: "max-w-4xl mx-auto space-y-6",
                children: [
                    e.jsx(O, {
                        className: "p-6 border-2 border-primary/20",
                        children: e.jsxs("div", {
                            className: "space-y-6",
                            children: [
                                e.jsxs("div", {
                                    className: "flex items-start justify-between",
                                    children: [
                                        e.jsxs("div", {
                                            className: "flex items-start gap-4",
                                            children: [
                                                e.jsx("div", {
                                                    className: `w-12 h-12 rounded-full flex items-center justify-center ${h ? "bg-green-500/10" : "bg-yellow-500/10"}`,
                                                    children: h ? e.jsx($, {
                                                        className: "w-6 h-6 text-green-500"
                                                    }) : e.jsx(At, {
                                                        className: "w-6 h-6 text-yellow-500"
                                                    })
                                                }),
                                                e.jsxs("div", {
                                                    children: [
                                                        e.jsxs("h3", {
                                                            className: "text-lg font-bold",
                                                            children: [
                                                                "评审结论：",
                                                                h ? "建议通过" : "建议修改"
                                                            ]
                                                        }),
                                                        e.jsxs("p", {
                                                            className: "text-xs text-muted-foreground",
                                                            children: [
                                                                "生成时间：",
                                                                new Date(d.timestamp || Date.now()).toLocaleString()
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        e.jsxs(C, {
                                            variant: "ghost",
                                            size: "sm",
                                            onClick: p,
                                            className: "text-primary hover:text-primary/80",
                                            children: [
                                                e.jsx(Le, {
                                                    className: "w-4 h-4 mr-2"
                                                }),
                                                "重新评审"
                                            ]
                                        })
                                    ]
                                }),
                                e.jsx("div", {
                                    className: "text-sm text-muted-foreground bg-muted/30 p-4 rounded-lg whitespace-pre-wrap",
                                    children: N.reviewResult
                                }),
                                e.jsxs("div", {
                                    className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 border-t pt-6",
                                    children: [
                                        e.jsxs("div", {
                                            className: "text-center p-3 bg-muted/20 rounded-lg",
                                            children: [
                                                e.jsx("div", {
                                                    className: "text-[10px] text-muted-foreground uppercase mb-1",
                                                    children: "世界观"
                                                }),
                                                e.jsx("div", {
                                                    className: "text-xl font-bold",
                                                    children: N.scores?.worldviewCompleteness || 0
                                                })
                                            ]
                                        }),
                                        e.jsxs("div", {
                                            className: "text-center p-3 bg-muted/20 rounded-lg",
                                            children: [
                                                e.jsx("div", {
                                                    className: "text-[10px] text-muted-foreground uppercase mb-1",
                                                    children: "角色"
                                                }),
                                                e.jsx("div", {
                                                    className: "text-xl font-bold",
                                                    children: N.scores?.characterDesign || 0
                                                })
                                            ]
                                        }),
                                        e.jsxs("div", {
                                            className: "text-center p-3 bg-muted/20 rounded-lg",
                                            children: [
                                                e.jsx("div", {
                                                    className: "text-[10px] text-muted-foreground uppercase mb-1",
                                                    children: "主题"
                                                }),
                                                e.jsx("div", {
                                                    className: "text-xl font-bold",
                                                    children: N.scores?.themeDepth || 0
                                                })
                                            ]
                                        }),
                                        e.jsxs("div", {
                                            className: "text-center p-3 bg-muted/20 rounded-lg",
                                            children: [
                                                e.jsx("div", {
                                                    className: "text-[10px] text-muted-foreground uppercase mb-1",
                                                    children: "情节"
                                                }),
                                                e.jsx("div", {
                                                    className: "text-xl font-bold",
                                                    children: N.scores?.plotLogic || 0
                                                })
                                            ]
                                        }),
                                        e.jsxs("div", {
                                            className: "text-center p-3 bg-primary/10 rounded-lg border border-primary/20",
                                            children: [
                                                e.jsx("div", {
                                                    className: "text-[10px] text-primary uppercase mb-1",
                                                    children: "综合"
                                                }),
                                                e.jsx("div", {
                                                    className: "text-xl font-bold text-primary",
                                                    children: N.overallScore || 0
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    e.jsxs("div", {
                        className: "flex justify-between gap-3",
                        children: [
                            e.jsxs(C, {
                                variant: "outline",
                                onClick: _,
                                className: "flex-1 max-w-50",
                                children: [
                                    e.jsx(Ae, {
                                        className: "w-4 h-4 mr-2"
                                    }),
                                    "返回修改"
                                ]
                            }),
                            e.jsxs(C, {
                                onClick: f,
                                className: "flex-1 max-w-75 bg-green-600 hover:bg-green-700",
                                children: [
                                    "接受并开始写作",
                                    e.jsx(H, {
                                        className: "w-4 h-4 ml-2"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            });
        }
        return null;
    };
    Mn = ({ sessionId: t })=>{
        const s = K(o), n = K(o.contextManager.state), { runLoop: r } = de(), a = s.currentSession?.modeState?.currentPhase, i = s.currentSession?.modeState?.currentChapter, d = n.historyItems || [], m = n.processingItem, p = [
            ...d
        ].reverse().find((c)=>c.type === "novel_chapter_prep_review"), f = [
            ...d
        ].reverse().find((c)=>c.type === "novel_chapter_prep_interest"), _ = [
            ...d
        ].reverse().find((c)=>c.type === "novel_chapter_prep_emotion"), N = [
            ...d
        ].reverse().find((c)=>c.type === "novel_chapter_plan_generation"), h = async ()=>{
            console.log("[ChapterPrep] Starting step, current phase:", o.currentSession?.modeState.currentPhase), o.setUIState("chapter_prep_running"), await o.updateSessionInDB(), r(t, !0);
        }, y = async ()=>{
            const c = o.currentSession;
            if (!c) {
                console.error("[ChapterPrep] No active session found");
                return;
            }
            const l = c.modeState.currentPhase;
            console.log("[ChapterPrep] handleNextStep called. Current phase:", l), l === "chapter_prep_review" ? c.modeState.currentPhase = "chapter_prep_interest" : l === "chapter_prep_interest" ? c.modeState.currentPhase = "chapter_prep_emotion" : l === "chapter_prep_emotion" ? c.modeState.currentPhase = "chapter_plan_generation" : l === "chapter_plan_generation" && (c.modeState.currentPhase = "chapter_plan_approval"), c.modeState.currentUIState = "idle", c.updatedAt = Date.now(), await o.updateSessionInDB();
        }, v = async ()=>{
            const c = o.sessionManager;
            c && (c.enterNextState("block_write"), await o.updateSessionInDB());
        }, g = async ()=>{
            const c = o.sessionManager;
            c && (c.enterNextState("chapter_plan_generation"), o.setUIState("chapter_prep_running"), await o.updateSessionInDB(), r(t, !0));
        }, x = m !== void 0, u = (i?.number || 1) === 1;
        return e.jsxs("div", {
            className: "space-y-6",
            children: [
                e.jsx("div", {
                    className: "flex items-center justify-between",
                    children: e.jsxs("div", {
                        children: [
                            e.jsxs("h2", {
                                className: "text-2xl font-bold",
                                children: [
                                    "第 ",
                                    i?.number || 1,
                                    " 章：",
                                    i?.title || "未命名"
                                ]
                            }),
                            e.jsx("p", {
                                className: "text-sm text-muted-foreground",
                                children: u ? "开篇准备中" : "章节准备中"
                            })
                        ]
                    })
                }),
                e.jsxs("div", {
                    className: "flex items-center gap-2 text-xs flex-wrap bg-muted/30 p-3 rounded-lg",
                    children: [
                        e.jsxs("div", {
                            className: `flex items-center gap-1 ${[
                                "chapter_prep_review"
                            ].includes(a || "") ? "text-primary font-bold" : p ? "text-green-600" : "text-muted-foreground"}`,
                            children: [
                                p ? e.jsx($, {
                                    className: "w-3 h-3"
                                }) : e.jsx("div", {
                                    className: "w-3 h-3 rounded-full border border-current"
                                }),
                                u ? "开篇寄语" : "前情回顾"
                            ]
                        }),
                        e.jsx(H, {
                            className: "w-3 h-3 text-muted-foreground/30"
                        }),
                        e.jsxs("div", {
                            className: `flex items-center gap-1 ${[
                                "chapter_prep_interest"
                            ].includes(a || "") ? "text-primary font-bold" : f ? "text-green-600" : "text-muted-foreground"}`,
                            children: [
                                f ? e.jsx($, {
                                    className: "w-3 h-3"
                                }) : e.jsx("div", {
                                    className: "w-3 h-3 rounded-full border border-current"
                                }),
                                "兴趣点分析"
                            ]
                        }),
                        e.jsx(H, {
                            className: "w-3 h-3 text-muted-foreground/30"
                        }),
                        e.jsxs("div", {
                            className: `flex items-center gap-1 ${[
                                "chapter_prep_emotion"
                            ].includes(a || "") ? "text-primary font-bold" : _ ? "text-green-600" : "text-muted-foreground"}`,
                            children: [
                                _ ? e.jsx($, {
                                    className: "w-3 h-3"
                                }) : e.jsx("div", {
                                    className: "w-3 h-3 rounded-full border border-current"
                                }),
                                "情绪设计"
                            ]
                        }),
                        e.jsx(H, {
                            className: "w-3 h-3 text-muted-foreground/30"
                        }),
                        e.jsxs("div", {
                            className: `flex items-center gap-1 ${[
                                "chapter_plan_generation",
                                "chapter_plan_approval"
                            ].includes(a || "") ? "text-primary font-bold" : N ? "text-green-600" : "text-muted-foreground"}`,
                            children: [
                                N ? e.jsx($, {
                                    className: "w-3 h-3"
                                }) : e.jsx("div", {
                                    className: "w-3 h-3 rounded-full border border-current"
                                }),
                                "章节规划"
                            ]
                        })
                    ]
                }),
                !p && !x && a === "chapter_prep_review" && e.jsxs(O, {
                    className: "p-12 text-center border-dashed",
                    children: [
                        e.jsx("div", {
                            className: "w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4",
                            children: e.jsx(le, {
                                className: "w-8 h-8 text-primary"
                            })
                        }),
                        e.jsx("h3", {
                            className: "text-lg font-bold mb-2",
                            children: u ? "开启您的创作之旅" : "准备开始新章节"
                        }),
                        e.jsx("p", {
                            className: "text-sm text-muted-foreground mb-8 max-w-md mx-auto",
                            children: u ? "AI 将根据您的世界观和角色设定，为您生成开篇建议和创作灵感。" : "AI 将回顾之前的剧情，分析当前的伏笔，为您规划本章的写作方向。"
                        }),
                        e.jsxs(C, {
                            size: "lg",
                            onClick: h,
                            className: "px-8",
                            children: [
                                e.jsx(V, {
                                    className: "w-4 h-4 mr-2"
                                }),
                                u ? "开始开篇准备" : "开始章节准备"
                            ]
                        })
                    ]
                }),
                !f && !x && a === "chapter_prep_interest" && e.jsxs(O, {
                    className: "p-12 text-center border-dashed",
                    children: [
                        e.jsx("div", {
                            className: "w-16 h-16 rounded-full bg-orange-500/10 flex items-center justify-center mx-auto mb-4",
                            children: e.jsx(V, {
                                className: "w-8 h-8 text-orange-500"
                            })
                        }),
                        e.jsx("h3", {
                            className: "text-lg font-bold mb-2",
                            children: "分析本章兴趣点"
                        }),
                        e.jsx("p", {
                            className: "text-sm text-muted-foreground mb-8 max-w-md mx-auto",
                            children: "AI 将根据前情提要和伏笔，为您提取本章的看点和冲突点。"
                        }),
                        e.jsx(C, {
                            size: "lg",
                            onClick: h,
                            className: "px-8 bg-orange-600 hover:bg-orange-700",
                            children: "开始分析"
                        })
                    ]
                }),
                !_ && !x && a === "chapter_prep_emotion" && e.jsxs(O, {
                    className: "p-12 text-center border-dashed",
                    children: [
                        e.jsx("div", {
                            className: "w-16 h-16 rounded-full bg-pink-500/10 flex items-center justify-center mx-auto mb-4",
                            children: e.jsx(Se, {
                                className: "w-8 h-8 text-pink-500"
                            })
                        }),
                        e.jsx("h3", {
                            className: "text-lg font-bold mb-2",
                            children: "设计情绪曲线"
                        }),
                        e.jsx("p", {
                            className: "text-sm text-muted-foreground mb-8 max-w-md mx-auto",
                            children: "AI 将根据本章的兴趣点，为您规划读者的情绪起伏。"
                        }),
                        e.jsx(C, {
                            size: "lg",
                            onClick: h,
                            className: "px-8 bg-pink-600 hover:bg-pink-700",
                            children: "开始设计"
                        })
                    ]
                }),
                !N && !x && a === "chapter_plan_generation" && e.jsxs(O, {
                    className: "p-12 text-center border-dashed",
                    children: [
                        e.jsx("div", {
                            className: "w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center mx-auto mb-4",
                            children: e.jsx(le, {
                                className: "w-8 h-8 text-blue-500"
                            })
                        }),
                        e.jsx("h3", {
                            className: "text-lg font-bold mb-2",
                            children: "生成章节规划"
                        }),
                        e.jsx("p", {
                            className: "text-sm text-muted-foreground mb-8 max-w-md mx-auto",
                            children: "AI 将整合所有准备信息，为您生成详细的本章写作大纲。"
                        }),
                        e.jsx(C, {
                            size: "lg",
                            onClick: h,
                            className: "px-8 bg-blue-600 hover:bg-blue-700",
                            children: "生成规划"
                        })
                    ]
                }),
                p && e.jsxs(O, {
                    className: "p-4 border-l-4 border-l-blue-500",
                    children: [
                        e.jsxs("h3", {
                            className: "text-sm font-semibold mb-2 flex items-center gap-2",
                            children: [
                                e.jsx(le, {
                                    className: "w-4 h-4 text-blue-500"
                                }),
                                u ? "开篇寄语" : "前情回顾"
                            ]
                        }),
                        e.jsx("div", {
                            className: "text-sm text-muted-foreground whitespace-pre-wrap leading-relaxed",
                            children: p.data.reviewText
                        }),
                        a === "chapter_prep_review" && !x && e.jsx("div", {
                            className: "mt-4 flex justify-end",
                            children: e.jsxs(C, {
                                size: "sm",
                                onClick: y,
                                children: [
                                    "分析兴趣点",
                                    e.jsx(H, {
                                        className: "w-4 h-4 ml-2"
                                    })
                                ]
                            })
                        })
                    ]
                }),
                f && e.jsxs(O, {
                    className: "p-4 border-l-4 border-l-orange-500",
                    children: [
                        e.jsxs("h3", {
                            className: "text-sm font-semibold mb-2 flex items-center gap-2",
                            children: [
                                e.jsx(V, {
                                    className: "w-4 h-4 text-orange-500"
                                }),
                                "🎯 兴趣点分析"
                            ]
                        }),
                        (f.data.interestPoints || []).length > 0 ? e.jsx("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 gap-3",
                            children: (f.data.interestPoints || []).map((c, l)=>e.jsxs("div", {
                                    className: "flex items-start gap-2 p-2 rounded bg-muted/50",
                                    children: [
                                        e.jsx("span", {
                                            className: "text-[10px] font-bold px-1.5 py-0.5 rounded bg-orange-500/10 text-orange-600 uppercase",
                                            children: c.type
                                        }),
                                        e.jsx("span", {
                                            className: "text-sm text-muted-foreground",
                                            children: c.content
                                        })
                                    ]
                                }, l))
                        }) : e.jsx("div", {
                            className: "text-sm text-muted-foreground whitespace-pre-wrap leading-relaxed",
                            children: f.data.analysisText || f.data.content
                        }),
                        a === "chapter_prep_interest" && !x && e.jsx("div", {
                            className: "mt-4 flex justify-end",
                            children: e.jsxs(C, {
                                size: "sm",
                                onClick: y,
                                children: [
                                    "设计情绪曲线",
                                    e.jsx(H, {
                                        className: "w-4 h-4 ml-2"
                                    })
                                ]
                            })
                        })
                    ]
                }),
                _ && e.jsxs(O, {
                    className: "p-4 border-l-4 border-l-pink-500",
                    children: [
                        e.jsxs("h3", {
                            className: "text-sm font-semibold mb-2 flex items-center gap-2",
                            children: [
                                e.jsx(Se, {
                                    className: "w-4 h-4 text-pink-500"
                                }),
                                "💭 情绪设计"
                            ]
                        }),
                        e.jsx("div", {
                            className: "text-sm text-muted-foreground whitespace-pre-wrap leading-relaxed",
                            children: _.data.emotionDesign
                        }),
                        a === "chapter_prep_emotion" && !x && e.jsx("div", {
                            className: "mt-4 flex justify-end",
                            children: e.jsxs(C, {
                                size: "sm",
                                onClick: y,
                                children: [
                                    "生成章节规划",
                                    e.jsx(H, {
                                        className: "w-4 h-4 ml-2"
                                    })
                                ]
                            })
                        })
                    ]
                }),
                N && e.jsxs(O, {
                    className: "p-4",
                    children: [
                        e.jsx("h3", {
                            className: "text-sm font-semibold mb-2",
                            children: "📝 章节规划"
                        }),
                        e.jsx("div", {
                            className: "text-sm text-muted-foreground whitespace-pre-wrap",
                            children: N.data.plan
                        })
                    ]
                }),
                x && m && e.jsx(O, {
                    className: "p-4",
                    children: e.jsxs("div", {
                        className: "flex items-start gap-3",
                        children: [
                            e.jsx(W, {
                                className: "w-5 h-5 animate-spin text-primary mt-1"
                            }),
                            e.jsxs("div", {
                                className: "flex-1",
                                children: [
                                    e.jsx("h3", {
                                        className: "text-sm font-semibold mb-2",
                                        children: "AI 生成中..."
                                    }),
                                    e.jsx("div", {
                                        className: "text-sm text-muted-foreground whitespace-pre-wrap",
                                        children: m.data.content || ""
                                    })
                                ]
                            })
                        ]
                    })
                }),
                a === "chapter_plan_approval" && e.jsxs("div", {
                    className: "flex justify-end gap-3 pt-4 border-t",
                    children: [
                        e.jsx(C, {
                            variant: "outline",
                            onClick: g,
                            children: "重新生成规划"
                        }),
                        e.jsxs(C, {
                            onClick: v,
                            children: [
                                "确认规划，开始写作",
                                e.jsx(H, {
                                    className: "w-4 h-4 ml-2"
                                })
                            ]
                        })
                    ]
                }),
                e.jsx("div", {
                    className: "text-xs text-muted-foreground p-3 bg-muted/30 rounded",
                    children: "💡 提示：章节准备阶段会自动进行前情回顾、兴趣点分析、情绪设计和章节规划，帮助您更好地构思本章内容。"
                })
            ]
        });
    };
    Pn = ({ sessionId: t })=>{
        const s = K(o), n = ne((P)=>re(P.config)), { runLoop: r } = de(), a = s.currentSession?.modeState?.currentPhase, i = s.currentSession?.modeState?.currentChapter, d = s.contextManager?.state.processingItem, m = s.currentSession?.modeState?.tempData || {}, p = m.writeMode || "ai_direct", f = m.userInstruction || "", _ = m.userContent || "", N = m.selectedCharacter || "", h = i?.blocks || [], y = i?.targetWordCount || 4e3, v = i?.wordCount || 0, g = Math.min(v / y * 100, 100), [x, u] = j.useState(""), [c, l] = j.useState(""), [S, b] = j.useState(!1);
        j.useEffect(()=>{
            u(f);
        }, [
            f
        ]), j.useEffect(()=>{
            l(_);
        }, [
            _
        ]);
        const E = (P)=>{
            o.updateTempData(P);
        }, Y = ()=>{
            E({
                userInstruction: x
            });
        }, F = ()=>{
            E({
                userContent: c
            });
        }, te = async ()=>{
            b(!0);
            try {
                const P = o.currentSession, se = o.contextManager;
                if (!P || !se) return;
                const at = Q.makeMessagesForInstructionSuggestion(P, se);
                let ge = "";
                await Z(n, at.map((_e)=>({
                        role: _e.role,
                        content: _e.content,
                        id: k()
                    })), [], (_e, ot)=>{
                    ge = ot;
                }), u(ge), E({
                    userInstruction: ge
                }), T.success("AI 已建议写作指令");
            } catch (P) {
                console.error("AI suggestion error:", P), T.error("AI 建议失败");
            } finally{
                b(!1);
            }
        }, st = async ()=>{
            if (o.sessionManager) {
                if (E({
                    userInstruction: x,
                    userContent: c
                }), p === "ai_direct" && !x) {
                    const se = "请根据章节规划续写剧情。";
                    u(se), E({
                        userInstruction: se
                    });
                }
                o.setUIState("block_write_running"), await o.updateSessionInDB(), r(t, !0);
            }
        }, nt = async ()=>{
            o.sessionManager && (u(""), l(""), E({
                userInstruction: "",
                userContent: "",
                latestBlockEvaluation: null
            }), v >= y ? (o.setPhase("chapter_check"), o.setUIState("chapter_complete")) : o.setUIState("block_write_ready"), await o.updateSessionInDB());
        }, rt = async ()=>{
            r(t, !0);
        }, Ie = d !== void 0;
        return e.jsxs("div", {
            className: "space-y-6",
            children: [
                e.jsx("div", {
                    className: "flex items-center justify-between",
                    children: e.jsxs("div", {
                        children: [
                            e.jsxs("h2", {
                                className: "text-2xl font-bold",
                                children: [
                                    "第 ",
                                    i?.number || 1,
                                    " 章：",
                                    i?.title || "未命名"
                                ]
                            }),
                            e.jsxs("div", {
                                className: "flex items-center gap-4 mt-1",
                                children: [
                                    e.jsxs("p", {
                                        className: "text-sm text-muted-foreground",
                                        children: [
                                            "已写 ",
                                            v.toLocaleString(),
                                            " / ",
                                            y.toLocaleString(),
                                            " 字"
                                        ]
                                    }),
                                    e.jsx("div", {
                                        className: "flex-1 h-2 bg-muted rounded-full overflow-hidden max-w-xs",
                                        children: e.jsx("div", {
                                            className: "h-full bg-primary transition-all",
                                            style: {
                                                width: `${g}%`
                                            }
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                }),
                h.length > 0 && e.jsxs("div", {
                    className: "space-y-3",
                    children: [
                        e.jsxs("h3", {
                            className: "text-sm font-semibold",
                            children: [
                                "已完成片段 (",
                                h.length,
                                ")"
                            ]
                        }),
                        h.map((P, se)=>e.jsxs(O, {
                                className: "p-4",
                                children: [
                                    e.jsxs("div", {
                                        className: "flex items-start justify-between mb-2",
                                        children: [
                                            e.jsxs("span", {
                                                className: "text-xs font-medium text-muted-foreground",
                                                children: [
                                                    "片段 ",
                                                    se + 1,
                                                    " · ",
                                                    P.wordCount,
                                                    " 字 · ",
                                                    P.writeMode === "ai_direct" ? "AI直接" : P.writeMode === "ai_guided" ? "AI引导" : P.writeMode === "user_polish" ? "用户润色" : "角色扮演"
                                                ]
                                            }),
                                            e.jsx($, {
                                                className: "w-4 h-4 text-green-500"
                                            })
                                        ]
                                    }),
                                    e.jsx("div", {
                                        className: "text-sm whitespace-pre-wrap",
                                        children: P.content
                                    })
                                ]
                            }, P.id))
                    ]
                }),
                Ie && d && e.jsxs(O, {
                    className: "p-4 border-primary bg-primary/5",
                    children: [
                        e.jsxs("div", {
                            className: "flex items-start gap-3 mb-2",
                            children: [
                                e.jsx(W, {
                                    className: "w-5 h-5 animate-spin text-primary mt-1"
                                }),
                                e.jsx("h3", {
                                    className: "text-sm font-semibold",
                                    children: "AI 正在创作中..."
                                })
                            ]
                        }),
                        e.jsx("div", {
                            className: "text-sm whitespace-pre-wrap",
                            children: d.data.content || ""
                        })
                    ]
                }),
                a === "block_write" && !Ie && e.jsx(O, {
                    className: "p-6 border-t-4 border-t-primary",
                    children: e.jsxs("div", {
                        className: "space-y-4",
                        children: [
                            e.jsxs("div", {
                                className: "flex items-center justify-between mb-2",
                                children: [
                                    e.jsxs("h3", {
                                        className: "text-lg font-bold flex items-center gap-2",
                                        children: [
                                            e.jsx(V, {
                                                className: "w-5 h-5 text-primary"
                                            }),
                                            "接下来的写作计划"
                                        ]
                                    }),
                                    e.jsxs("div", {
                                        className: "text-xs text-muted-foreground bg-muted px-2 py-1 rounded",
                                        children: [
                                            "当前模式: ",
                                            p === "ai_direct" ? "AI 直接写作" : p === "ai_guided" ? "AI 引导写作" : p === "user_polish" ? "用户润色" : "角色扮演"
                                        ]
                                    })
                                ]
                            }),
                            e.jsxs("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                children: [
                                    e.jsxs("div", {
                                        className: "space-y-2",
                                        children: [
                                            e.jsx(G, {
                                                children: "写作模式"
                                            }),
                                            e.jsxs(Me, {
                                                value: p,
                                                onValueChange: (P)=>E({
                                                        writeMode: P
                                                    }),
                                                children: [
                                                    e.jsx(Pe, {
                                                        children: e.jsx(Oe, {})
                                                    }),
                                                    e.jsxs(Re, {
                                                        children: [
                                                            e.jsx(me, {
                                                                value: "ai_direct",
                                                                children: "AI 直接写作"
                                                            }),
                                                            e.jsx(me, {
                                                                value: "ai_guided",
                                                                children: "AI 引导写作"
                                                            }),
                                                            e.jsx(me, {
                                                                value: "user_polish",
                                                                children: "用户提供初稿，AI 润色"
                                                            }),
                                                            e.jsx(me, {
                                                                value: "roleplay",
                                                                children: "角色扮演模式"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    p === "roleplay" && e.jsxs("div", {
                                        className: "space-y-2",
                                        children: [
                                            e.jsx(G, {
                                                children: "选择角色"
                                            }),
                                            e.jsxs(Me, {
                                                value: N,
                                                onValueChange: (P)=>E({
                                                        selectedCharacter: P
                                                    }),
                                                children: [
                                                    e.jsx(Pe, {
                                                        children: e.jsx(Oe, {
                                                            placeholder: "选择角色..."
                                                        })
                                                    }),
                                                    e.jsx(Re, {
                                                        children: (s.currentSession?.modeConfig?.keyCharacters || []).map((P)=>e.jsx(me, {
                                                                value: P.id,
                                                                children: P.name
                                                            }, P.id))
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            (p === "ai_guided" || p === "ai_direct") && e.jsxs("div", {
                                className: "space-y-2",
                                children: [
                                    e.jsxs("div", {
                                        className: "flex items-center justify-between",
                                        children: [
                                            e.jsxs(G, {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    "写作指令",
                                                    e.jsx("span", {
                                                        className: "text-[10px] font-normal text-muted-foreground",
                                                        children: "(可选，留空则由 AI 自主发挥)"
                                                    })
                                                ]
                                            }),
                                            e.jsxs(C, {
                                                size: "xs",
                                                variant: "ghost",
                                                className: "h-7 text-xs",
                                                onClick: te,
                                                disabled: S,
                                                children: [
                                                    S ? e.jsx(W, {
                                                        className: "w-3 h-3 mr-1 animate-spin"
                                                    }) : e.jsx(xe, {
                                                        className: "w-3 h-3 mr-1"
                                                    }),
                                                    "AI 建议指令"
                                                ]
                                            })
                                        ]
                                    }),
                                    e.jsx(z, {
                                        placeholder: "例如：描写主角进入酒馆时的心理活动，或者增加一段关于环境的描写...",
                                        value: x,
                                        onChange: (P)=>u(P.target.value),
                                        onBlur: Y,
                                        rows: 3,
                                        className: "resize-none"
                                    })
                                ]
                            }),
                            p === "user_polish" && e.jsxs("div", {
                                className: "space-y-2",
                                children: [
                                    e.jsx(G, {
                                        children: "您的初稿"
                                    }),
                                    e.jsx(z, {
                                        placeholder: "在这里输入您的草稿，AI 将为您进行文学化润色...",
                                        value: c,
                                        onChange: (P)=>l(P.target.value),
                                        onBlur: F,
                                        rows: 6
                                    })
                                ]
                            }),
                            e.jsxs(C, {
                                onClick: st,
                                className: "w-full py-6 text-lg font-bold shadow-lg hover:shadow-primary/20 transition-all",
                                children: [
                                    e.jsx(V, {
                                        className: "w-5 h-5 mr-2"
                                    }),
                                    h.length === 0 ? "开始撰写第一章" : "继续撰写下一段"
                                ]
                            })
                        ]
                    })
                }),
                a === "block_confirm" && e.jsxs("div", {
                    className: "flex justify-end gap-3 pt-4 border-t",
                    children: [
                        e.jsxs(C, {
                            variant: "outline",
                            onClick: rt,
                            children: [
                                e.jsx(Le, {
                                    className: "w-4 h-4 mr-2"
                                }),
                                "重新生成"
                            ]
                        }),
                        e.jsxs(C, {
                            onClick: nt,
                            children: [
                                "接受并继续",
                                e.jsx(H, {
                                    className: "w-4 h-4 ml-2"
                                })
                            ]
                        })
                    ]
                })
            ]
        });
    };
    On = ({ sessionId: t })=>{
        const s = K(o), { runLoop: n } = de(), r = s.currentSession?.modeState?.currentPhase, a = s.currentSession?.modeState?.currentChapter, i = s.contextManager?.state.historyItems || [], d = s.contextManager?.state.processingItem, m = [
            ...i
        ].reverse().find((h)=>h.type === "novel_chapter_summary"), p = [
            ...i
        ].reverse().find((h)=>h.type === "novel_knowledge_update"), f = async ()=>{
            const h = o.sessionManager;
            h && (h.completeCurrentChapter(), h.enterNextState("completion_check"), await o.updateSessionInDB(), n(t, !0));
        }, _ = async ()=>{
            const h = o.sessionManager;
            if (!h) return;
            h.completeCurrentChapter();
            const y = (a?.number || 1) + 1;
            h.initializeNewChapter(y), h.enterNextState("chapter_prep_review"), await o.updateSessionInDB(), n(t, !0);
        }, N = d !== void 0;
        return e.jsxs("div", {
            className: "space-y-6",
            children: [
                e.jsxs("div", {
                    className: "flex items-center justify-between",
                    children: [
                        e.jsxs("div", {
                            children: [
                                e.jsxs("h2", {
                                    className: "text-2xl font-bold",
                                    children: [
                                        "第 ",
                                        a?.number || 1,
                                        " 章：",
                                        a?.title || "未命名"
                                    ]
                                }),
                                e.jsxs("p", {
                                    className: "text-sm text-muted-foreground",
                                    children: [
                                        "已完成 ",
                                        a?.wordCount?.toLocaleString() || 0,
                                        " 字"
                                    ]
                                })
                            ]
                        }),
                        e.jsxs("div", {
                            className: "flex items-center gap-2 text-green-600",
                            children: [
                                e.jsx($, {
                                    className: "w-5 h-5"
                                }),
                                e.jsx("span", {
                                    className: "font-medium",
                                    children: "章节完成"
                                })
                            ]
                        })
                    ]
                }),
                m && e.jsxs(O, {
                    className: "p-4",
                    children: [
                        e.jsx("h3", {
                            className: "text-sm font-semibold mb-2",
                            children: "📄 章节摘要"
                        }),
                        e.jsx("div", {
                            className: "text-sm text-muted-foreground whitespace-pre-wrap",
                            children: m.data.summary
                        })
                    ]
                }),
                p && e.jsxs(O, {
                    className: "p-4",
                    children: [
                        e.jsx("h3", {
                            className: "text-sm font-semibold mb-2",
                            children: "📚 知识库更新"
                        }),
                        e.jsxs("div", {
                            className: "space-y-3 text-sm",
                            children: [
                                p.data.updates?.newEntities?.length > 0 && e.jsxs("div", {
                                    children: [
                                        e.jsx("div", {
                                            className: "font-medium mb-1",
                                            children: "新增实体："
                                        }),
                                        e.jsx("div", {
                                            className: "space-y-1",
                                            children: p.data.updates.newEntities.map((h, y)=>e.jsxs("div", {
                                                    className: "text-muted-foreground",
                                                    children: [
                                                        "· ",
                                                        h.name || h.id
                                                    ]
                                                }, y))
                                        })
                                    ]
                                }),
                                p.data.updates?.newEvents?.length > 0 && e.jsxs("div", {
                                    children: [
                                        e.jsx("div", {
                                            className: "font-medium mb-1",
                                            children: "新增事件："
                                        }),
                                        e.jsx("div", {
                                            className: "space-y-1",
                                            children: p.data.updates.newEvents.map((h, y)=>e.jsxs("div", {
                                                    className: "text-muted-foreground",
                                                    children: [
                                                        "· ",
                                                        h.description || h.id
                                                    ]
                                                }, y))
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                N && d && e.jsx(O, {
                    className: "p-4",
                    children: e.jsxs("div", {
                        className: "flex items-start gap-3",
                        children: [
                            e.jsx(W, {
                                className: "w-5 h-5 animate-spin text-primary mt-1"
                            }),
                            e.jsxs("div", {
                                className: "flex-1",
                                children: [
                                    e.jsx("h3", {
                                        className: "text-sm font-semibold mb-2",
                                        children: "AI 处理中..."
                                    }),
                                    e.jsx("div", {
                                        className: "text-sm text-muted-foreground whitespace-pre-wrap",
                                        children: d.data.content || ""
                                    })
                                ]
                            })
                        ]
                    })
                }),
                r === "re_planning_check" && !N && e.jsxs("div", {
                    className: "flex justify-end gap-3 pt-4 border-t",
                    children: [
                        e.jsx(C, {
                            variant: "outline",
                            onClick: f,
                            children: "完成小说（进入完结流程）"
                        }),
                        e.jsxs(C, {
                            onClick: _,
                            children: [
                                "继续下一章",
                                e.jsx(H, {
                                    className: "w-4 h-4 ml-2"
                                })
                            ]
                        })
                    ]
                }),
                e.jsx("div", {
                    className: "text-xs text-muted-foreground p-3 bg-muted/30 rounded",
                    children: "💡 提示：每章完成后会自动生成摘要并更新知识库。您可以选择继续下一章或进入完结流程。"
                })
            ]
        });
    };
    Rn = ({ sessionId: t })=>{
        const s = K(o), { runLoop: n } = de(), r = s.currentSession?.modeState?.currentPhase, a = s.currentSession?.modeState?.currentChapter, i = async ()=>{
            const d = o.sessionManager;
            d && (d.initializeNewChapter(1), d.enterNextState("chapter_prep_review"), await o.updateSessionInDB(), n(t, !0));
        };
        return r === "chapter_prep_review" || r === "chapter_prep_foreshadow" || r === "chapter_prep_interest" || r === "chapter_prep_emotion" || r === "chapter_plan_generation" || r === "chapter_plan_approval" ? e.jsx("div", {
            className: "max-w-4xl mx-auto",
            children: e.jsx(Mn, {
                sessionId: t
            })
        }) : r === "block_write" || r === "block_check" || r === "block_confirm" ? e.jsx("div", {
            className: "max-w-5xl mx-auto",
            children: e.jsx(Pn, {
                sessionId: t
            })
        }) : r === "chapter_check" || r === "chapter_confirm" || r === "chapter_summary_generation" || r === "knowledge_update" || r === "re_planning_check" ? e.jsx("div", {
            className: "max-w-4xl mx-auto",
            children: e.jsx(On, {
                sessionId: t
            })
        }) : a ? e.jsx("div", {
            className: "max-w-4xl mx-auto",
            children: e.jsx(O, {
                className: "p-6",
                children: e.jsxs("div", {
                    className: "text-center py-8 text-muted-foreground",
                    children: [
                        e.jsx(W, {
                            className: "w-8 h-8 animate-spin mx-auto mb-2"
                        }),
                        e.jsx("p", {
                            children: "加载中..."
                        })
                    ]
                })
            })
        }) : e.jsx("div", {
            className: "max-w-4xl mx-auto",
            children: e.jsx(O, {
                className: "p-6",
                children: e.jsxs("div", {
                    className: "text-center py-12",
                    children: [
                        e.jsx("div", {
                            className: "w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4",
                            children: e.jsx(le, {
                                className: "w-8 h-8 text-primary"
                            })
                        }),
                        e.jsx("h3", {
                            className: "text-lg font-semibold mb-2",
                            children: "准备开始写作"
                        }),
                        e.jsx("p", {
                            className: "text-sm text-muted-foreground mb-6",
                            children: "一切准备就绪，点击下方按钮开始第一章的创作"
                        }),
                        e.jsxs(C, {
                            onClick: i,
                            children: [
                                "开始第一章",
                                e.jsx(H, {
                                    className: "w-4 h-4 ml-2"
                                })
                            ]
                        })
                    ]
                })
            })
        });
    };
    Dn = ()=>{
        const t = K(o), s = t.currentSession?.modeState?.currentPhase, n = t.contextManager?.state.historyItems || [], r = t.contextManager?.state.processingItem, a = t.currentSession?.modeState?.progressTracking, i = [
            ...n
        ].reverse().find((y)=>y.type === "novel_completion_check"), d = [
            ...n
        ].reverse().find((y)=>y.type === "novel_book_summary"), m = [
            ...n
        ].reverse().find((y)=>y.type === "novel_recommendation"), p = [
            ...n
        ].reverse().find((y)=>y.type === "novel_reading_guide"), f = [
            ...n
        ].reverse().find((y)=>y.type === "novel_author_note"), _ = [
            ...n
        ].reverse().find((y)=>y.type === "novel_cover_description"), N = r !== void 0, h = ()=>{
            T.info("导出功能开发中...");
        };
        return s === "completed" ? e.jsxs("div", {
            className: "max-w-4xl mx-auto space-y-6",
            children: [
                e.jsxs(O, {
                    className: "p-8 text-center",
                    children: [
                        e.jsx("div", {
                            className: "w-20 h-20 rounded-full bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center mx-auto mb-4",
                            children: e.jsx(kt, {
                                className: "w-10 h-10 text-white"
                            })
                        }),
                        e.jsx("h2", {
                            className: "text-3xl font-bold mb-2",
                            children: "🎉 恭喜完成创作！"
                        }),
                        e.jsxs("p", {
                            className: "text-muted-foreground mb-6",
                            children: [
                                "您已完成 ",
                                a?.completedChapters || 0,
                                " 章，共计 ",
                                a?.totalWordCount?.toLocaleString() || 0,
                                " 字"
                            ]
                        }),
                        e.jsxs(C, {
                            size: "lg",
                            onClick: h,
                            children: [
                                e.jsx(Et, {
                                    className: "w-5 h-5 mr-2"
                                }),
                                "导出小说"
                            ]
                        })
                    ]
                }),
                d && e.jsxs(O, {
                    className: "p-6",
                    children: [
                        e.jsxs("h3", {
                            className: "text-lg font-semibold mb-3 flex items-center gap-2",
                            children: [
                                e.jsx($, {
                                    className: "w-5 h-5 text-green-500"
                                }),
                                "全书摘要"
                            ]
                        }),
                        e.jsx("div", {
                            className: "text-sm text-muted-foreground whitespace-pre-wrap",
                            children: d.data.summary
                        })
                    ]
                }),
                m && e.jsxs(O, {
                    className: "p-6",
                    children: [
                        e.jsxs("h3", {
                            className: "text-lg font-semibold mb-3 flex items-center gap-2",
                            children: [
                                e.jsx($, {
                                    className: "w-5 h-5 text-green-500"
                                }),
                                "推荐语"
                            ]
                        }),
                        e.jsxs("div", {
                            className: "space-y-3",
                            children: [
                                e.jsxs("div", {
                                    children: [
                                        e.jsx("div", {
                                            className: "text-xs font-medium text-muted-foreground mb-1",
                                            children: "简短版："
                                        }),
                                        e.jsx("div", {
                                            className: "text-sm",
                                            children: m.data.shortVersion
                                        })
                                    ]
                                }),
                                e.jsxs("div", {
                                    children: [
                                        e.jsx("div", {
                                            className: "text-xs font-medium text-muted-foreground mb-1",
                                            children: "详细版："
                                        }),
                                        e.jsx("div", {
                                            className: "text-sm text-muted-foreground",
                                            children: m.data.longVersion
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                p && e.jsxs(O, {
                    className: "p-6",
                    children: [
                        e.jsxs("h3", {
                            className: "text-lg font-semibold mb-3 flex items-center gap-2",
                            children: [
                                e.jsx($, {
                                    className: "w-5 h-5 text-green-500"
                                }),
                                "导读"
                            ]
                        }),
                        e.jsx("div", {
                            className: "text-sm text-muted-foreground whitespace-pre-wrap",
                            children: p.data.guide
                        })
                    ]
                }),
                f && e.jsxs(O, {
                    className: "p-6",
                    children: [
                        e.jsxs("h3", {
                            className: "text-lg font-semibold mb-3 flex items-center gap-2",
                            children: [
                                e.jsx($, {
                                    className: "w-5 h-5 text-green-500"
                                }),
                                "作者的话"
                            ]
                        }),
                        e.jsx("div", {
                            className: "text-sm text-muted-foreground whitespace-pre-wrap",
                            children: f.data.note
                        })
                    ]
                }),
                _ && e.jsxs(O, {
                    className: "p-6",
                    children: [
                        e.jsxs("h3", {
                            className: "text-lg font-semibold mb-3 flex items-center gap-2",
                            children: [
                                e.jsx($, {
                                    className: "w-5 h-5 text-green-500"
                                }),
                                "封面描述（用于 AI 绘图）"
                            ]
                        }),
                        e.jsx("div", {
                            className: "text-sm text-muted-foreground whitespace-pre-wrap",
                            children: _.data.description
                        })
                    ]
                })
            ]
        }) : e.jsxs("div", {
            className: "max-w-4xl mx-auto space-y-6",
            children: [
                e.jsxs(O, {
                    className: "p-6",
                    children: [
                        e.jsx("h2", {
                            className: "text-2xl font-bold mb-4",
                            children: "小说完结处理中"
                        }),
                        e.jsxs("div", {
                            className: "space-y-4",
                            children: [
                                e.jsxs("div", {
                                    className: `flex items-center gap-3 ${i ? "text-green-600" : "text-muted-foreground"}`,
                                    children: [
                                        i ? e.jsx($, {
                                            className: "w-5 h-5"
                                        }) : e.jsx("div", {
                                            className: "w-5 h-5 rounded-full border-2"
                                        }),
                                        e.jsx("span", {
                                            children: "完结检查"
                                        })
                                    ]
                                }),
                                e.jsxs("div", {
                                    className: `flex items-center gap-3 ${d ? "text-green-600" : "text-muted-foreground"}`,
                                    children: [
                                        d ? e.jsx($, {
                                            className: "w-5 h-5"
                                        }) : e.jsx("div", {
                                            className: "w-5 h-5 rounded-full border-2"
                                        }),
                                        e.jsx("span", {
                                            children: "生成全书摘要"
                                        })
                                    ]
                                }),
                                e.jsxs("div", {
                                    className: `flex items-center gap-3 ${m ? "text-green-600" : "text-muted-foreground"}`,
                                    children: [
                                        m ? e.jsx($, {
                                            className: "w-5 h-5"
                                        }) : e.jsx("div", {
                                            className: "w-5 h-5 rounded-full border-2"
                                        }),
                                        e.jsx("span", {
                                            children: "生成推荐语"
                                        })
                                    ]
                                }),
                                e.jsxs("div", {
                                    className: `flex items-center gap-3 ${p ? "text-green-600" : "text-muted-foreground"}`,
                                    children: [
                                        p ? e.jsx($, {
                                            className: "w-5 h-5"
                                        }) : e.jsx("div", {
                                            className: "w-5 h-5 rounded-full border-2"
                                        }),
                                        e.jsx("span", {
                                            children: "生成导读"
                                        })
                                    ]
                                }),
                                e.jsxs("div", {
                                    className: `flex items-center gap-3 ${f ? "text-green-600" : "text-muted-foreground"}`,
                                    children: [
                                        f ? e.jsx($, {
                                            className: "w-5 h-5"
                                        }) : e.jsx("div", {
                                            className: "w-5 h-5 rounded-full border-2"
                                        }),
                                        e.jsx("span", {
                                            children: "生成作者的话"
                                        })
                                    ]
                                }),
                                e.jsxs("div", {
                                    className: `flex items-center gap-3 ${_ ? "text-green-600" : "text-muted-foreground"}`,
                                    children: [
                                        _ ? e.jsx($, {
                                            className: "w-5 h-5"
                                        }) : e.jsx("div", {
                                            className: "w-5 h-5 rounded-full border-2"
                                        }),
                                        e.jsx("span", {
                                            children: "生成封面描述"
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                N && r && e.jsx(O, {
                    className: "p-6",
                    children: e.jsxs("div", {
                        className: "flex items-start gap-3",
                        children: [
                            e.jsx(W, {
                                className: "w-5 h-5 animate-spin text-primary mt-1"
                            }),
                            e.jsxs("div", {
                                className: "flex-1",
                                children: [
                                    e.jsx("h3", {
                                        className: "text-sm font-semibold mb-2",
                                        children: "AI 生成中..."
                                    }),
                                    e.jsx("div", {
                                        className: "text-sm text-muted-foreground whitespace-pre-wrap",
                                        children: r.data.content || ""
                                    })
                                ]
                            })
                        ]
                    })
                }),
                e.jsx("div", {
                    className: "text-xs text-muted-foreground p-3 bg-muted/30 rounded",
                    children: "💡 提示：AI 正在为您的小说生成完结资料，包括摘要、推荐语、导读等，请稍候..."
                })
            ]
        });
    };
    pr = (t)=>{
        const [s, n] = j.useState(!1), [r, a] = j.useState(!1), i = K(o), { data: d = [] } = dt((g)=>g.from({
                s: lt
            })), m = d.find((g)=>g.id === t.sessionId);
        j.useEffect(()=>{
            let g = !1;
            if (!m) return;
            if (o.currentSession?.id === m.id && o.contextManager) {
                a(!0);
                return;
            }
            return (async ()=>{
                try {
                    await o.loadSession(m), g || a(!0);
                } catch (u) {
                    console.error("Load session error", u);
                }
            })(), ()=>{
                g = !0;
            };
        }, [
            m?.id,
            m
        ]);
        const { runLoop: p, startDesign: f } = de(), _ = async ()=>{
            if (s) return;
            const g = o.sessionManager, x = o.contextManager;
            if (g && x) {
                n(!0);
                try {
                    g.getActualCurrentPhase(x) === "design_worldview" ? await f() : await p(m.id);
                } finally{
                    n(!1);
                }
            }
        };
        if (!(m && r)) return e.jsxs("div", {
            className: "flex flex-col items-center justify-center h-full text-muted-foreground gap-4",
            children: [
                e.jsx("div", {
                    className: "w-12 h-12 rounded-2xl bg-muted animate-pulse flex items-center justify-center",
                    children: e.jsx(Se, {
                        className: "w-6 h-6 opacity-20"
                    })
                }),
                e.jsx("p", {
                    className: "text-xs font-medium tracking-widest uppercase opacity-50",
                    children: "正在加载小说项目..."
                })
            ]
        });
        const N = o.sessionManager && o.contextManager ? o.sessionManager.getActualCurrentUIState(o.contextManager) : i.currentSession?.modeState?.currentUIState || "idle", h = i.currentSession?.modeState?.currentPhase, y = Qs[N], v = ()=>h ? h.startsWith("design_") ? e.jsx(kn, {
                sessionId: t.sessionId
            }) : h === "ai_review" || h === "user_revision" ? e.jsx(En, {
                sessionId: t.sessionId
            }) : h.startsWith("chapter_") || h.startsWith("block_") || h === "re_planning_check" || h === "knowledge_update" ? e.jsx(Rn, {
                sessionId: t.sessionId
            }) : h === "completion_check" || h.includes("_generation") || h === "completed" ? e.jsx(Dn, {
                sessionId: t.sessionId
            }) : null : null;
        return e.jsxs("div", {
            className: "flex flex-col h-full bg-background",
            children: [
                e.jsxs("div", {
                    className: "flex items-center justify-between px-4 py-3 border-b bg-muted/30",
                    children: [
                        e.jsxs("div", {
                            className: "flex items-center gap-3",
                            children: [
                                e.jsx("div", {
                                    className: "w-8 h-8 rounded-lg bg-linear-to-br from-purple-500 to-pink-500 flex items-center justify-center",
                                    children: e.jsx(le, {
                                        className: "w-4 h-4 text-white"
                                    })
                                }),
                                e.jsxs("div", {
                                    children: [
                                        e.jsx("h2", {
                                            className: "text-sm font-semibold",
                                            children: i.currentSession?.modeConfig?.projectName || "新小说项目"
                                        }),
                                        e.jsx("p", {
                                            className: "text-xs text-muted-foreground",
                                            children: y?.label || N
                                        })
                                    ]
                                })
                            ]
                        }),
                        e.jsxs("div", {
                            className: "flex items-center gap-2",
                            children: [
                                i.currentSession?.modeState?.progressTracking && e.jsxs("div", {
                                    className: "text-xs text-muted-foreground",
                                    children: [
                                        "已完成 ",
                                        i.currentSession.modeState.progressTracking.completedChapters,
                                        " 章 · ",
                                        i.currentSession.modeState.progressTracking.totalWordCount.toLocaleString(),
                                        " 字"
                                    ]
                                }),
                                N === "idle" && e.jsxs(C, {
                                    size: "sm",
                                    onClick: _,
                                    disabled: s,
                                    children: [
                                        e.jsx(ke, {
                                            className: "w-4 h-4 mr-2"
                                        }),
                                        "开始创作"
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                e.jsx(ut, {
                    className: "flex-1",
                    children: N === "idle" ? e.jsxs("div", {
                        className: "flex flex-col items-center justify-center h-full gap-6 p-8",
                        children: [
                            e.jsx("div", {
                                className: "w-20 h-20 rounded-2xl bg-linear-to-br from-purple-500/10 to-pink-500/10 flex items-center justify-center",
                                children: e.jsx(le, {
                                    className: "w-10 h-10 text-purple-500"
                                })
                            }),
                            e.jsxs("div", {
                                className: "text-center space-y-2",
                                children: [
                                    e.jsx("h3", {
                                        className: "text-xl font-semibold",
                                        children: "小说创作模式"
                                    }),
                                    e.jsx("p", {
                                        className: "text-sm text-muted-foreground max-w-md",
                                        children: "AI 辅助的小说创作工具，从世界观设计到章节写作，全程协助您完成创作"
                                    })
                                ]
                            }),
                            e.jsxs(C, {
                                size: "lg",
                                onClick: _,
                                disabled: s,
                                className: "mt-4",
                                children: [
                                    e.jsx(ke, {
                                        className: "w-5 h-5 mr-2"
                                    }),
                                    "开始设计"
                                ]
                            })
                        ]
                    }) : e.jsx("div", {
                        className: "p-4",
                        children: v()
                    })
                }),
                y?.inputEnabled && e.jsx("div", {
                    className: "border-t p-4 bg-muted/30",
                    children: e.jsx("div", {
                        className: "text-xs text-muted-foreground text-center",
                        children: y.placeholder
                    })
                })
            ]
        });
    };
});
export { pr as SessionMainForNovelWriting, __tla };
