const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/db-master-DKnNNmTP.js","assets/@tanstack-D67abzz0.js","assets/react-CAuF6Uwp.js","assets/vendor-R_RbF-Qb.js","assets/formatting-DFtRXkW1.js","assets/@radix-ui-BQCqNqg0.js","assets/immer-BCQU3qJI.js","assets/dexie-CZ_H1TYX.js","assets/zod-D7Re9cnc.js"])))=>i.map(i=>d[i]);
import { a5 as fe, a6 as ot, ak as Ie, aH as _e, r as T, t as C, j as e, u as Y } from "./react-CAuF6Uwp.js";
import { h as it, m as je, S as ct } from "./db-master-DKnNNmTP.js";
import { j as ae, k as oe, i as lt } from "./@tanstack-D67abzz0.js";
import { _ as dt, __tla as __tla_0 } from "./index-C4wlxMXN.js";
import { C as mt, A as pt } from "./AutoScrollDownArea-hJ97JLYP.js";
import { S as ut } from "./session-manager.class-BRPwaTjg.js";
import { n as k } from "./id-BY9c7rfI.js";
import { o as M, n as I, s as w, _ as U, a as L, c as ye, b as ue, r as ht, l as xt } from "./zod-D7Re9cnc.js";
import { D as gt } from "./dexie-CZ_H1TYX.js";
import { B as j } from "./button-B6v19V-K.js";
import { u as se, a as q } from "./global-llm-config.store-BSRZEgc6.js";
import { T as G } from "./textarea-CFS4_TcP.js";
import { L as W } from "./label-aTtBzjKl.js";
import { l as Ce } from "./formatting-DFtRXkW1.js";
import { D as _t, a as ft, b as wt, c as St, d as yt, e as Nt } from "./dialog-5F19wRbJ.js";
import { a1 as z, L as H, P as vt, aC as bt, Z as he, j as It, af as jt, aD as Ct, ao as De, aE as $, a8 as F, aq as Te, a5 as Tt, R as $e, h as ie, as as we, r as At, a0 as kt, aw as Ae } from "./icons-Cmb87C8b.js";
import { I as ke } from "./input-CEZpKHBj.js";
import { C as O } from "./card-DVFH5vt6.js";
import { C as Et } from "./CharacterAvatar-yPJ36Fh6.js";
import { S as Ee, a as Me, b as Pe, c as Oe, d as de } from "./select-5K7YeshT.js";
import "./vendor-R_RbF-Qb.js";
import "./@radix-ui-BQCqNqg0.js";
import "./immer-BCQU3qJI.js";
import "./es-toolkit-9bjl2JfA.js";
import "./shadcn-utils-Cnr6N47i.js";
import "./components-and-styling-lnR2ABT4.js";
import "./@tailwind-CPcsbTWB.js";
let lr;
let __tla = Promise.all([
    (()=>{
        try {
            return __tla_0;
        } catch  {}
    })()
]).then(async ()=>{
    const Mt = `
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
`.trim(), Pt = `
你是世界观设计助手，负责根据已有信息生成世界观的特定字段内容。

要求：
- 与已有字段保持一致性
- 内容详细但不过于冗长（200-500字）
- 符合小说创作需求
`.trim(), Ot = `
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
`.trim(), Rt = `
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
`.trim(), Dt = `
你是角色深化专家，负责完善角色描述，增加细节、背景故事、性格特点等。

要求：
- 保持角色的核心设定不变
- 增加外貌细节、性格细节、背景故事
- 补充角色动机、目标、恐惧、欲望等
- 增加角色的独特习惯、口头禅等小细节
- 让角色更加立体和真实

输出完善后的完整角色描述（JSON 格式）。
`.trim(), $t = `
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
`.trim(), Lt = `
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
`.trim(), Ut = `
你是情节设计专家，负责根据经典故事结构模板生成情节脉络。

用户选择的结构模板和格式将在 user 消息中提供。

请按照指定格式和结构生成 5-12 个关键情节点。

要求：
- 严格遵循选择的故事结构
- 情节要有起承转合
- 冲突要递进、有张力
- 符合世界观、角色、主题
- 每个情节点要清晰、具体
`.trim(), Bt = `
你是情节设计专家，负责自由创作有吸引力的情节脉络。

不限结构，但要确保：
- 有明确的开端、发展、高潮、结局
- 冲突递进、有张力
- 节奏合理
- 符合世界观、角色、主题

生成 5-12 个关键情节点。

如果用户提供了提示（如"包含复仇元素"），要体现在情节中。
`.trim(), Ft = `
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
`.trim(), Ht = `
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
`.trim(), Wt = `
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
`.trim(), Gt = `
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
`.trim(), Yt = `
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
`.trim(), zt = `
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
`.trim(), Kt = `
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
`.trim(), Vt = `
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
`.trim(), qt = `
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
`.trim(), Jt = `
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
`.trim(), Zt = `
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
`.trim(), Xt = `
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
`.trim(), Qt = `
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
`.trim(), es = `
你是内容扩写专家，负责将大纲式内容扩展为详细的小说文本。

任务：
- 将用户的大纲式内容（如："主角进入密林，发现古老遗迹"）
- 扩展为详细的小说文本（500-1000字）

要求：
- 保持原意不变
- 增加细节描写
- 增加画面感
- 符合小说风格
`.trim(), ts = `
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
`.trim(), ss = `
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
`.trim(), ns = `
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
`.trim(), rs = `
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
`.trim(), as = `
你是内容修正专家，根据评估结果和改进建议，自动修正内容。

要求：
- 保持原文的核心内容和情节
- 针对性地改进低分维度
- 不过度修改
- 保持作者的写作风格

输出：
- 修正后的完整文本
- 简要说明修改点
`.trim(), os = `
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
`.trim(), is = `
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
`.trim(), cs = `
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
`.trim(), ls = `
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
`.trim(), ds = `
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
`.trim(), ms = `
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
`.trim(), ps = `
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
`.trim(), us = `
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
`.trim(), hs = `
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
`.trim(), xs = `
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
`.trim(), gs = `
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
        WORLDVIEW_GENERATION: Mt,
        WORLDVIEW_FIELD: Pt,
        CHARACTERS_BATCH_GENERATION: Ot,
        SINGLE_CHARACTER_GENERATION: Rt,
        CHARACTER_ENHANCEMENT: Dt,
        THEME_GENERATION: $t,
        THEME_ANALYSIS: Lt,
        PLOT_GENERATION_TEMPLATE: Ut,
        PLOT_GENERATION_FREE: Bt,
        PLOT_OPTIMIZATION: Ft,
        CHAPTER_OUTLINE_GENERATION: Ht,
        CHAPTER_OUTLINE_OPTIMIZATION: Wt,
        DESIGN_REVIEW: Gt,
        CHAPTER_PREP_REVIEW: Yt,
        INTEREST_ANALYSIS: zt,
        EMOTION_DESIGN: Kt,
        CHAPTER_PLAN_GENERATION: Vt,
        BLOCK_WRITE_DIRECT: qt,
        BLOCK_WRITE_GUIDED: Jt,
        INSTRUCTION_SUGGESTION: Zt,
        BLOCK_POLISH: Xt,
        WRITING_HINT: Qt,
        CONTENT_EXPANSION: es,
        BLOCK_WRITE_ROLEPLAY: ts,
        ACTION_SUGGESTION: ss,
        BLOCK_EVALUATION: ns,
        IMPROVEMENT_SUGGESTIONS: rs,
        AUTO_CORRECTION: as,
        CHAPTER_EVALUATION: os,
        CHAPTER_IMPROVEMENT_SUGGESTIONS: is,
        CHAPTER_OPTIMIZATION: cs,
        CHAPTER_SUMMARY: ls,
        KNOWLEDGE_EXTRACTION: ds,
        COMPLETION_CHECK: ms,
        BOOK_SUMMARY: ps,
        RECOMMENDATION: us,
        READING_GUIDE: hs,
        AUTHOR_NOTE: xs,
        COVER_DESCRIPTION: gs
    };
    function R(t) {
        return `【小说标题】：${t.modeConfig.projectName || "未命名小说"}
`;
    }
    function J(t) {
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
    function K(t) {
        const s = t.modeConfig.theme;
        return s ? [
            `**主旨**：${s.mainIdea}`,
            `**立意**：${s.intention}`,
            `**风格**：${s.style}`
        ].join(`
`) : "（暂无主题设定）";
    }
    function ne(t) {
        const s = t.modeConfig.plotOutline;
        if (!s) return "（暂无情节脉络）";
        if (s.rawText) return s.rawText;
        const n = s.structure ? `**故事结构**：${s.structure}

` : "", r = s.keyPlots.map((a, i)=>`${i + 1}. **${a.name}**
${a.description}`).join(`

`);
        return n + r;
    }
    function Le(t) {
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
    function me(t) {
        const s = t.modeState.chapterSummaries;
        return !s || s.length === 0 ? "（暂无已完成章节）" : s.map((n)=>`**第${n.chapterNumber}章**：${n.summary}`).join(`

`);
    }
    function V(t) {
        const s = t.modeState.currentChapter;
        return !s || !s.blocks || s.blocks.length === 0 ? "（本章暂无已写内容）" : s.blocks.map((n, r)=>`【分块 ${r + 1}】（${n.wordCount}字）
${n.content}`).join(`

`);
    }
    function re(t) {
        const s = t.modeState.progressTracking.currentInterestPoints;
        return !s || s.length === 0 ? "（暂无兴趣点）" : s.map((n, r)=>`${r + 1}. 【${n.type}】${n.content}（优先级：${n.priority}）`).join(`
`);
    }
    function Ne(t) {
        const n = t.modeState.progressTracking.foreshadows.filter((r)=>r.status === "pending" || r.status === "in-progress");
        return n.length === 0 ? "（暂无未完成的伏笔）" : n.map((r)=>{
            const a = `第${r.introducedAt.chapter}章-分块${r.introducedAt.block}`;
            return `- 【${r.importance}】${r.content}（引入于：${a}）`;
        }).join(`
`);
    }
    function _s(t) {
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
    function fs(t, s) {
        const n = t.modeState.tempData?.worldviewHint || "", r = R(t), a = J(t);
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
    function ws(t, s) {
        const n = t.modeState.tempData?.currentField || "", r = t.modeState.tempData?.worldviewHint || "", a = R(t), i = t.modeConfig.worldview || {}, d = J(t);
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
    function Ss(t, s) {
        const n = R(t), r = D(t), a = K(t), i = t.modeState.tempData?.characterHint || "", d = J(t);
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
    function ys(t, s) {
        const n = R(t), r = D(t), a = B(t), i = t.modeState.tempData?.characterHint || "", d = J(t);
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
    function Ns(t, s) {
        const n = R(t), r = t.modeState.tempData?.targetCharacterId || "", a = t.modeConfig.keyCharacters.find((p)=>p.id === r), i = t.modeState.tempData?.characterHint || "", d = J(t);
        if (!a) throw new Error(`Character ${r} not found`);
        const u = D(t);
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
${u}`,
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
    function vs(t, s) {
        const n = R(t), r = D(t), a = B(t), i = t.modeState.tempData?.themeHint || "", d = J(t);
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
    function bs(t, s) {
        const n = R(t), r = D(t), a = B(t), i = K(t);
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
    function Is(t, s) {
        const n = R(t), r = t.modeState.tempData?.plotStructure || "三幕剧", a = t.modeState.tempData?.plotFormat || "markdown", i = t.modeState.tempData?.plotHint || "", d = J(t), u = D(t), p = B(t), g = K(t), S = ne(t), y = S && !S.includes("暂无情节脉络"), c = a === "yaml" ? "请以 YAML 格式输出（参考 system prompt 中的格式要求）。" : "请以 Markdown 格式输出（参考 system prompt 中的格式要求）。";
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
${u}`,
                    `【角色】
${p}`,
                    `【主题】
${g}`,
                    y ? `【当前情节草稿】
${S}` : "",
                    i ? `【用户提示】：
${i}` : "",
                    `【选择的结构】：${r}`,
                    `
${c}`,
                    d
                ].filter(Boolean).join(`

`)
            }
        ];
    }
    function js(t, s) {
        const n = R(t), r = t.modeState.tempData?.plotFormat || "markdown", a = t.modeState.tempData?.plotHint || "", i = J(t), d = D(t), u = B(t), p = K(t), g = ne(t), S = g && !g.includes("暂无情节脉络"), y = r === "yaml" ? "请以 YAML 格式输出。" : "请以 Markdown 格式输出。";
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
${u}`,
                    `【主题】
${p}`,
                    S ? `【当前情节草稿】
${g}` : "",
                    a ? `【用户提示】
${a}` : "",
                    `
${y}`,
                    i
                ].filter(Boolean).join(`

`)
            }
        ];
    }
    function Cs(t, s) {
        const n = R(t), r = t.modeState.tempData?.plotText || ne(t), a = t.modeConfig.plotOutline?.format || "markdown", i = t.modeState.tempData?.plotHint || "", d = J(t), u = D(t), p = B(t), g = K(t);
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
${u}`,
                    `【角色】
${p}`,
                    `【主题】
${g}`,
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
    function Ts(t, s) {
        const n = R(t), r = t.modeState.tempData?.chapterCount || 12, a = t.modeState.tempData?.outlineFormat || "markdown", i = t.modeState.tempData?.outlineHint || "", d = J(t), u = D(t), p = B(t), g = K(t), S = ne(t), y = a === "yaml" ? "请以 YAML 格式输出。" : "请以 Markdown 格式输出。";
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
${u}`,
                    `【角色】
${p}`,
                    `【主题】
${g}`,
                    `【情节脉络】
${S}`,
                    i ? `【用户提示】：
${i}` : "",
                    `
请生成约 ${r} 章的章节大纲。

${y}`,
                    d
                ].filter(Boolean).join(`

`)
            }
        ];
    }
    function As(t, s) {
        const n = R(t), r = t.modeState.tempData?.outlineText || Le(t), a = t.modeState.tempData?.outlineFormat || "markdown", i = t.modeState.tempData?.outlineHint || "", d = J(t), u = ne(t);
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
${u}`,
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
    function Ue(t, s) {
        const n = R(t), r = D(t), a = B(t), i = K(t), d = ne(t), u = t.modeConfig.chapterOutlineRawText, g = t.modeConfig.chapterOutline && t.modeConfig.chapterOutline.length > 0 || !!u ? Le(t) : "（用户选择跳过大纲设计）";
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
${g}`,
                    "请对以上设计进行全面评审。"
                ].join(`

`)
            }
        ];
    }
    function Be(t, s) {
        const n = R(t), r = D(t), a = B(t), i = me(t), d = t.modeState.currentChapterIndex + 1, u = t.modeConfig.chapterOutline?.find((g)=>g.chapterNumber === d), p = u ? `【本章大纲】
第${u.chapterNumber}章：${u.title}
${u.summary}` : "（本章无大纲）";
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
    function Fe(t, s) {
        const n = R(t), r = me(t), a = V(t), i = Ne(t);
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
    function He(t, s) {
        const n = R(t), r = t.modeState.progressTracking.emotionSequence.slice(-10).map((p)=>`第${p.chapterNumber}章-块${p.blockIndex}：${p.emotion}（强度${p.intensity}）`).join(`
`) || "（暂无历史情绪）", a = t.modeState.currentChapterIndex + 1, i = t.modeConfig.chapterOutline?.find((p)=>p.chapterNumber === a), d = i ? `第${i.chapterNumber}章：${i.title}
${i.summary}` : "（本章无大纲）", u = re(t);
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
${u}`,
                    "请为本章设计情绪曲线。"
                ].join(`

`)
            }
        ];
    }
    function We(t, s) {
        const n = R(t), r = t.modeState.currentChapterIndex + 1, a = t.modeConfig.chapterOutline?.find((S)=>S.chapterNumber === r), i = a ? `第${a.chapterNumber}章：${a.title}
摘要：${a.summary}
关键事件：
${a.keyEvents.map((S)=>`- ${S}`).join(`
`)}` : "（本章无大纲）", d = t.modeState.tempData?.chapterPrepReview || "（无前情回顾）", u = Ne(t), p = re(t), g = t.modeState.tempData?.emotionDesign || "（无情绪设计）";
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
${u}`,
                    `【兴趣点列表】
${p}`,
                    `【情绪曲线设计】
${g}`,
                    "请生成本章的详细规划。"
                ].join(`

`)
            }
        ];
    }
    function Se(t, s) {
        const n = R(t), r = D(t), a = B(t), i = t.modeState.currentChapter?.plan || "（无章节规划）", d = V(t), u = re(t), p = t.modeState.tempData?.emotionDesign || "（无情绪设计）", g = t.modeState.tempData?.userInstruction || "";
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
${u}`,
                    `【情绪设计】
${p}`,
                    g ? `【续写提示】：
${g}` : "",
                    "请续写下一个分块（500-1000字）。"
                ].filter(Boolean).join(`

`)
            }
        ];
    }
    function Ge(t, s) {
        const n = R(t), r = t.modeState.tempData?.userInstruction || "", a = D(t), i = B(t), d = t.modeState.currentChapter?.plan || "（无章节规划）", u = V(t);
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
${u}`,
                    `【用户指令】
${r}`,
                    `
请根据用户指令续写（500-1000字）。`
                ].join(`

`)
            }
        ];
    }
    function ks(t, s) {
        const n = t.modeState.currentChapter?.plan || "（无章节规划）", r = V(t), a = re(t);
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
    function Ye(t, s) {
        const n = R(t), r = t.modeState.tempData?.userContent || "", a = t.modeState.tempData?.polishStyle || "文学润色", i = t.modeState.tempData?.customRequirement || "", d = D(t), u = B(t);
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
${u}`,
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
    function Es(t, s) {
        const n = t.modeState.tempData?.writtenContent || "", r = t.modeState.currentChapter?.plan || "（无章节规划）", a = V(t);
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
    function Ms(t, s) {
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
    function ze(t, s) {
        const n = R(t), r = t.modeState.tempData?.selectedCharacterId || "", a = t.modeConfig.keyCharacters.find((y)=>y.id === r), i = t.modeState.tempData?.actionType || "", d = t.modeState.tempData?.action || "";
        if (!a) throw new Error(`Character ${r} not found`);
        const u = D(t), p = B(t), g = t.modeState.currentChapter?.plan || "（无章节规划）", S = V(t);
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
${u}`,
                    `【角色】
${p}`,
                    `【章节规划】
${g}`,
                    `【已写内容】
${S}`,
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
    function Ps(t, s) {
        const n = R(t), r = t.modeState.tempData?.selectedCharacterId || "", a = t.modeConfig.keyCharacters.find((p)=>p.id === r);
        if (!a) throw new Error(`Character ${r} not found`);
        const i = t.modeState.currentChapter?.plan || "（无章节规划）", d = V(t), u = re(t);
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
${u}`,
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
    function Os(t, s) {
        const n = t.modeState.tempData?.blockContent || "", r = t.modeState.currentChapter?.plan || "（无章节规划）", a = D(t), i = re(t), d = t.modeState.tempData?.emotionDesign || "（无情绪设计）";
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
    function Rs(t, s) {
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
    function Ds(t, s) {
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
    function $s(t, s) {
        const n = t.modeState.currentChapterIndex + 1, r = t.modeConfig.chapterOutline?.find((g)=>g.chapterNumber === n), a = r ? `第${r.chapterNumber}章：${r.title}
${r.summary}` : "（本章无大纲）", i = V(t), d = D(t), u = re(t), p = t.modeState.tempData?.emotionDesign || "（无情绪设计）";
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
${u}

【情绪设计】
${p}

【章节完整内容】
${i}

请评估以上章节内容。`
            }
        ];
    }
    function Ls(t, s) {
        const n = V(t), r = t.modeState.tempData?.chapterEvaluation || {};
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
    function Us(t, s) {
        const n = V(t), r = t.modeState.tempData?.chapterEvaluation || {}, a = D(t), i = B(t);
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
    function Ke(t, s) {
        const n = V(t), r = t.modeState.tempData?.summaryStyle || "standard";
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
    function Ve(t, s) {
        const n = me(t), r = V(t), a = _s(t);
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
    function qe(t, s) {
        const n = D(t), r = B(t), a = K(t), i = ne(t), d = me(t), u = V(t), p = Ne(t);
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
${u}

【未完成伏笔】
${p}

请评估故事是否自然完结。`
            }
        ];
    }
    function Je(t, s) {
        const n = D(t), r = B(t), a = K(t), i = me(t);
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
    function Ze(t, s) {
        const n = t.modeState.tempData?.bookSummary || "", r = K(t);
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
    function Xe(t, s) {
        const n = D(t), r = K(t), a = t.modeState.tempData?.bookSummary || "";
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
    function Qe(t, s) {
        const n = K(t), r = t.modeConfig.projectName;
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
    function et(t, s) {
        const n = K(t), r = B(t), a = D(t);
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
    const Z = {
        makeMessagesForWorldviewGeneration: fs,
        makeMessagesForWorldviewField: ws,
        makeMessagesForCharactersBatchGeneration: Ss,
        makeMessagesForSingleCharacterGeneration: ys,
        makeMessagesForCharacterEnhancement: Ns,
        makeMessagesForThemeGeneration: vs,
        makeMessagesForThemeAnalysis: bs,
        makeMessagesForPlotGenerationWithTemplate: Is,
        makeMessagesForPlotGenerationFree: js,
        makeMessagesForPlotOptimization: Cs,
        makeMessagesForChapterOutlineGeneration: Ts,
        makeMessagesForChapterOutlineOptimization: As,
        makeMessagesForDesignReview: Ue,
        makeMessagesForChapterPrepReview: Be,
        makeMessagesForInterestAnalysis: Fe,
        makeMessagesForEmotionDesign: He,
        makeMessagesForChapterPlanGeneration: We,
        makeMessagesForBlockWriteDirect: Se,
        makeMessagesForBlockWriteGuided: Ge,
        makeMessagesForInstructionSuggestion: ks,
        makeMessagesForBlockPolish: Ye,
        makeMessagesForWritingHint: Es,
        makeMessagesForContentExpansion: Ms,
        makeMessagesForBlockWriteRoleplay: ze,
        makeMessagesForActionSuggestion: Ps,
        makeMessagesForBlockEvaluation: Os,
        makeMessagesForImprovementSuggestions: Rs,
        makeMessagesForAutoCorrection: Ds,
        makeMessagesForChapterEvaluation: $s,
        makeMessagesForChapterImprovementSuggestions: Ls,
        makeMessagesForChapterOptimization: Us,
        makeMessagesForChapterSummary: Ke,
        makeMessagesForKnowledgeExtraction: Ve,
        makeMessagesForCompletionCheck: qe,
        makeMessagesForBookSummary: Je,
        makeMessagesForRecommendation: Ze,
        makeMessagesForReadingGuide: Xe,
        makeMessagesForAuthorNote: Qe,
        makeMessagesForCoverDescription: et
    };
    class Bs extends ut {
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
                        messages: Ue(this.session),
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
                        messages: Be(this.session),
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
                        messages: Fe(this.session),
                        callbackPhase: "chapter_prep_interest",
                        llmRequestType: "interest_analysis"
                    }) : (this.setCurrentUIState("chapter_prep_ready"), {
                        type: "WAIT_FOR_INPUT"
                    });
                case "chapter_prep_emotion":
                    return this.session.modeState.currentUIState === "chapter_prep_running" || this.session.modeState.currentUIState === "chapter_prep_ready" ? (this.session.modeState.currentUIState === "chapter_prep_ready" && this.setCurrentUIState("chapter_prep_running"), {
                        type: "LLM_CALL",
                        messages: He(this.session),
                        callbackPhase: "chapter_prep_emotion",
                        llmRequestType: "emotion_design"
                    }) : (this.setCurrentUIState("chapter_prep_ready"), {
                        type: "WAIT_FOR_INPUT"
                    });
                case "chapter_plan_generation":
                    return this.session.modeState.currentUIState === "chapter_plan_running" || this.session.modeState.currentUIState === "chapter_plan_ready" ? (this.session.modeState.currentUIState === "chapter_plan_ready" && this.setCurrentUIState("chapter_plan_running"), {
                        type: "LLM_CALL",
                        messages: We(this.session),
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
                                a = Se(this.session);
                                break;
                            case "ai_guided":
                                a = Ge(this.session);
                                break;
                            case "user_polish":
                                a = Ye(this.session);
                                break;
                            case "roleplay":
                                a = ze(this.session);
                                break;
                            default:
                                a = Se(this.session);
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
                        messages: Ke(this.session),
                        callbackPhase: "chapter_summary_generation",
                        llmRequestType: "chapter_summary"
                    }) : (this.setCurrentUIState("chapter_complete"), {
                        type: "WAIT_FOR_INPUT"
                    });
                case "knowledge_update":
                    return this.session.modeState.currentUIState === "chapter_complete_running" || this.session.modeState.currentUIState === "chapter_complete" ? (this.session.modeState.currentUIState === "chapter_complete" && this.setCurrentUIState("chapter_complete_running"), {
                        type: "LLM_CALL",
                        messages: Ve(this.session),
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
                        messages: qe(this.session),
                        callbackPhase: "completion_check",
                        llmRequestType: "completion_check"
                    }) : (this.setCurrentUIState("completion_ready"), {
                        type: "WAIT_FOR_INPUT"
                    });
                case "book_summary_generation":
                    return this.session.modeState.currentUIState === "completion_running" || this.session.modeState.currentUIState === "completion_ready" ? (this.session.modeState.currentUIState === "completion_ready" && this.setCurrentUIState("completion_running"), {
                        type: "LLM_CALL",
                        messages: Je(this.session),
                        callbackPhase: "book_summary_generation",
                        llmRequestType: "book_summary"
                    }) : (this.setCurrentUIState("completion_ready"), {
                        type: "WAIT_FOR_INPUT"
                    });
                case "recommendation_generation":
                    return this.session.modeState.currentUIState === "completion_running" || this.session.modeState.currentUIState === "completion_ready" ? (this.session.modeState.currentUIState === "completion_ready" && this.setCurrentUIState("completion_running"), {
                        type: "LLM_CALL",
                        messages: Ze(this.session),
                        callbackPhase: "recommendation_generation",
                        llmRequestType: "recommendation"
                    }) : (this.setCurrentUIState("completion_ready"), {
                        type: "WAIT_FOR_INPUT"
                    });
                case "reading_guide_generation":
                    return this.session.modeState.currentUIState === "completion_running" || this.session.modeState.currentUIState === "completion_ready" ? (this.session.modeState.currentUIState === "completion_ready" && this.setCurrentUIState("completion_running"), {
                        type: "LLM_CALL",
                        messages: Xe(this.session),
                        callbackPhase: "reading_guide_generation",
                        llmRequestType: "reading_guide"
                    }) : (this.setCurrentUIState("completion_ready"), {
                        type: "WAIT_FOR_INPUT"
                    });
                case "author_note_generation":
                    return this.session.modeState.currentUIState === "completion_running" || this.session.modeState.currentUIState === "completion_ready" ? (this.session.modeState.currentUIState === "completion_ready" && this.setCurrentUIState("completion_running"), {
                        type: "LLM_CALL",
                        messages: Qe(this.session),
                        callbackPhase: "author_note_generation",
                        llmRequestType: "author_note"
                    }) : (this.setCurrentUIState("completion_ready"), {
                        type: "WAIT_FOR_INPUT"
                    });
                case "cover_description_generation":
                    return this.session.modeState.currentUIState === "completion_running" || this.session.modeState.currentUIState === "completion_ready" ? (this.session.modeState.currentUIState === "completion_ready" && this.setCurrentUIState("completion_running"), {
                        type: "LLM_CALL",
                        messages: et(this.session),
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
                const i = await this.novelDB.getChapters().then((d)=>d.find((u)=>u.id === a.chapterId));
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
                const d = (await this.novelDB.getForeshadows()).find((u)=>u.id === s);
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
    const Fs = M({
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
        evaluation: ye().optional()
    }), Hs = M({
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
        outline: ye().optional(),
        createdAt: I(),
        updatedAt: I()
    }), Ws = M({
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
    }), Gs = M({
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
    }), Ys = M({
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
    }), zs = M({
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
    function Ks(t) {
        return typeof t == "object" && t !== null && ot(t) !== void 0;
    }
    function ee(t) {
        if (Ks(t)) return fe(t);
        if (Array.isArray(t)) return t.map((s)=>ee(s));
        if (t && typeof t == "object") {
            const s = {};
            for (const [n, r] of Object.entries(t))s[n] = ee(r);
            return s;
        }
        return t;
    }
    function Vs(t) {
        const s = `silly-tavern-novel-${t}`, n = new gt(s);
        return n.version(4).stores({
            blocks: "id, chapterId, status",
            chapters: "id, projectId, chapterNumber, status",
            entities: "id, projectId, type",
            events: "id, projectId, type",
            rules: "id, projectId, category",
            foreshadows: "id, projectId, status, importance"
        }), {
            blocks: ae(oe({
                id: "blocks",
                schema: Fs,
                getKey: (r)=>r.id,
                dbName: s
            })),
            chapters: ae(oe({
                id: "chapters",
                schema: Hs,
                getKey: (r)=>r.id,
                dbName: s
            })),
            entities: ae(oe({
                id: "entities",
                schema: Ws,
                getKey: (r)=>r.id,
                dbName: s
            })),
            events: ae(oe({
                id: "events",
                schema: Gs,
                getKey: (r)=>r.id,
                dbName: s
            })),
            rules: ae(oe({
                id: "rules",
                schema: Ys,
                getKey: (r)=>r.id,
                dbName: s
            })),
            foreshadows: ae(oe({
                id: "foreshadows",
                schema: zs,
                getKey: (r)=>r.id,
                dbName: s
            })),
            dexieInstance: n
        };
    }
    const Re = new Map;
    class qs {
        projectId;
        database;
        constructor(s){
            this.projectId = s, this.database = this.initDatabase();
        }
        initDatabase() {
            let s = Re.get(this.projectId);
            return s || (s = Vs(this.projectId), Re.set(this.projectId, s)), s;
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
    const o = Ie({
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
                const s = new qs(t.id);
                o.novelDB = _e(s);
                const n = await s.getEntities(), r = await s.getEvents(), a = await s.getRules();
                if (o.currentSession) {
                    o.currentSession.modeState.knowledgeBase = {
                        entities: n.map((c)=>({
                                type: c.type === "character" ? "角色" : c.type === "location" ? "地点" : "物品",
                                name: c.name,
                                description: c.description,
                                alias: c.aliases
                            })),
                        events: r.map((c)=>({
                                type: c.type === "state_change" ? "状态变化" : "关系变化",
                                description: c.description,
                                chapterNumber: 0,
                                timestamp: c.createdAt
                            })),
                        rules: a.map((c)=>({
                                type: c.category === "world" ? "时代背景" : c.category === "social" ? "社会制度" : c.category === "tech" ? "技术体系" : c.category === "power" ? "能力体系" : "其他",
                                name: c.name,
                                description: c.content
                            }))
                    };
                    const i = await s.getChapters(), d = o.currentSession.modeState.currentChapterIndex, u = i.find((c)=>c.chapterNumber === d + 1);
                    if (u && o.currentSession) {
                        const c = await s.getBlocks(u.id);
                        o.currentSession.modeState.currentChapter = {
                            id: u.id,
                            number: u.chapterNumber,
                            title: u.title,
                            status: u.status,
                            wordCount: u.wordCount,
                            targetWordCount: 4e3,
                            blocks: c.map((l)=>({
                                    id: l.id,
                                    content: l.content,
                                    wordCount: l.wordCount,
                                    writeMode: l.writeMode,
                                    createdAt: l.createdAt
                                })),
                            summary: u.summary || "",
                            plan: u.plan || ""
                        };
                    }
                    const p = await s.getForeshadows();
                    p.length > 0 && (o.currentSession.modeState.progressTracking.foreshadows = p.map((c)=>({
                            id: c.id,
                            content: c.content,
                            importance: c.importance,
                            status: c.status === "in_progress" ? "in-progress" : c.status,
                            introducedAt: {
                                chapter: Number.parseInt(c.introducedAt.chapterId) || 0,
                                block: Number.parseInt(c.introducedAt.blockId || "0") || 0
                            },
                            resolvedAt: c.resolvedAt ? {
                                chapter: Number.parseInt(c.resolvedAt.chapterId) || 0,
                                block: Number.parseInt(c.resolvedAt.blockId || "0") || 0
                            } : void 0
                        })));
                    const g = new Bs(o.currentSession, s);
                    o.sessionManager = _e(g);
                    const S = o.currentSession.modeState.tempData?.reviewHistory || [], y = Ie({
                        historyItems: S,
                        processingItem: void 0
                    });
                    o.contextManager = _e(new mt(y));
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
                const { masterDb: t } = await dt(async ()=>{
                    const { masterDb: r } = await import("./db-master-DKnNNmTP.js").then((a)=>a.w);
                    return {
                        masterDb: r
                    };
                }, __vite__mapDeps([0,1,2,3,4,5,6,7,8])), s = fe(o.currentSession.modeConfig), n = fe(o.currentSession.modeState);
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
    function ce() {
        const t = se((c)=>c.config), s = T.useRef(!1), n = async (c, l, b, _, x = {})=>{
            const h = o.contextManager;
            if (!h) return {
                content: ""
            };
            const m = {
                id: k(),
                type: b,
                orderRef: 0,
                timestamp: Date.now(),
                data: {
                    content: "",
                    ...x
                }
            };
            h.setProcessingItem(m);
            let f = "";
            return await q(c, l, [], (N, v)=>{
                if (_?.(N), f = v, o.contextManager) {
                    const E = o.contextManager.state.processingItem;
                    E && (E.data = {
                        ...E.data,
                        content: v
                    });
                }
            }), h.completeProcessingItem(), {
                content: f
            };
        }, r = async (c, l)=>{
            const b = o.sessionManager, _ = o.contextManager;
            if (!(b && _)) return;
            const x = await b.executeCurrentStateLogic(_);
            if (console.log("[NovelWriting Loop] Action:", x), x.type === "WAIT_FOR_INPUT" || x.type === "STOP") {
                await o.updateSessionInDB(), s.current = !1;
                return;
            }
            if (x.type === "STATE_CHANGE") {
                await o.updateSessionInDB(), setTimeout(()=>p(c.id), 0);
                return;
            }
            if (x.type === "LLM_CALL") {
                x.callbackPhase && b.setCurrentUIState("block_write_running"), await o.updateSessionInDB();
                const h = await n(l, x.messages.map((m)=>({
                        ...m,
                        id: k()
                    })), x.llmRequestType, void 0, x.dataExtra);
                await o.saveNewContextItemsToDB(c.id, _.getHistoryItems()), await a(x, h.content, c.id), await o.saveNewContextItemsToDB(c.id, _.getHistoryItems()), await o.updateSessionInDB(), setTimeout(()=>p(c.id), 0);
            }
        }, a = async (c, l, b)=>{
            const _ = o.sessionManager, x = o.contextManager;
            switch(c.callbackPhase){
                case "ai_review":
                    try {
                        const h = i(l);
                        x.addHistoryItem({
                            id: k(),
                            type: "novel_ai_review",
                            idx: 0,
                            orderRef: 0,
                            timestamp: Date.now(),
                            data: h,
                            hidden: !1
                        }), await o.saveNewContextItemsToDB(b, x.getHistoryItems()), h.recommendation === "pass" ? _.enterNextState("chapter_prep_review") : _.enterNextState("user_revision");
                    } catch (h) {
                        console.error("Failed to parse AI review", h), C.error("AI 评审解析失败"), _.enterNextState("user_revision");
                    }
                    break;
                case "chapter_prep_review":
                    x.addHistoryItem({
                        id: k(),
                        type: "novel_chapter_prep_review",
                        idx: 0,
                        orderRef: 0,
                        timestamp: Date.now(),
                        data: {
                            chapterNumber: _.session.modeState.currentChapterIndex + 1,
                            reviewText: l,
                            generatedAt: Date.now()
                        },
                        hidden: !1
                    });
                    break;
                case "interest_analysis":
                    try {
                        const h = d(l);
                        x.addHistoryItem({
                            id: k(),
                            type: "novel_chapter_prep_interest",
                            idx: 0,
                            orderRef: 0,
                            timestamp: Date.now(),
                            data: {
                                chapterNumber: _.session.modeState.currentChapterIndex + 1,
                                interestPoints: h,
                                analysisText: l
                            },
                            hidden: !1
                        }), _.updateInterestPoints(h);
                    } catch (h) {
                        console.error("Failed to parse interest points", h);
                    }
                    break;
                case "emotion_design":
                    o.updateTempData({
                        emotionDesign: l
                    }), x.addHistoryItem({
                        id: k(),
                        type: "novel_chapter_prep_emotion",
                        idx: 0,
                        orderRef: 0,
                        timestamp: Date.now(),
                        data: {
                            chapterNumber: _.session.modeState.currentChapterIndex + 1,
                            emotionDesign: l,
                            emotionNodes: []
                        },
                        hidden: !1
                    });
                    break;
                case "chapter_plan_generation":
                    _.session.modeState.currentChapter && (_.session.modeState.currentChapter.plan = l), x.addHistoryItem({
                        id: k(),
                        type: "novel_chapter_plan_generation",
                        idx: 0,
                        orderRef: 0,
                        timestamp: Date.now(),
                        data: {
                            chapterNumber: _.session.modeState.currentChapterIndex + 1,
                            plan: l,
                            generatedAt: Date.now()
                        },
                        hidden: !1
                    });
                    break;
                case "block_write":
                    {
                        const h = _.session.modeState.tempData?.writeMode || "ai_direct", m = await _.addBlock(l, h);
                        x.addHistoryItem({
                            id: k(),
                            type: "novel_block_write",
                            idx: 0,
                            orderRef: 0,
                            timestamp: Date.now(),
                            data: {
                                chapterNumber: _.session.modeState.currentChapterIndex + 1,
                                blockIndex: _.session.modeState.currentChapter.blocks.length - 1,
                                content: l,
                                wordCount: m.wordCount,
                                writeMode: h
                            },
                            hidden: !1
                        }), _.enterNextState("block_confirm");
                    }
                    break;
                case "chapter_summary":
                    {
                        const h = _.session.modeState.currentChapterIndex + 1;
                        _.addChapterSummary(h, l), x.addHistoryItem({
                            id: k(),
                            type: "novel_chapter_summary",
                            idx: 0,
                            orderRef: 0,
                            timestamp: Date.now(),
                            data: {
                                chapterNumber: h,
                                summary: l,
                                style: "standard",
                                generatedAt: Date.now()
                            },
                            hidden: !1
                        }), _.enterNextState("knowledge_update");
                    }
                    break;
                case "knowledge_extraction":
                    try {
                        const h = u(l);
                        x.addHistoryItem({
                            id: k(),
                            type: "novel_knowledge_update",
                            idx: 0,
                            orderRef: 0,
                            timestamp: Date.now(),
                            data: {
                                chapterNumber: _.session.modeState.currentChapterIndex + 1,
                                updates: h,
                                approved: !1
                            },
                            hidden: !1
                        }), _.enterNextState("re_planning_check");
                    } catch (h) {
                        console.error("Failed to parse knowledge updates", h), _.enterNextState("re_planning_check");
                    }
                    break;
                case "completion_check":
                    try {
                        const h = l.includes("已完结") || l.includes("完结");
                        if (x.addHistoryItem({
                            id: k(),
                            type: "novel_completion_check",
                            idx: 0,
                            orderRef: 0,
                            timestamp: Date.now(),
                            data: {
                                isCompleted: h,
                                completionReason: h ? "natural_ending" : void 0,
                                aiAssessment: l
                            },
                            hidden: !1
                        }), h) _.enterNextState("book_summary_generation");
                        else {
                            const m = _.session.modeState.currentChapterIndex + 2;
                            _.initializeNewChapter(m), _.enterNextState("chapter_prep_review");
                        }
                    } catch (h) {
                        console.error("Failed to parse completion check", h);
                    }
                    break;
                case "book_summary":
                    o.updateTempData({
                        bookSummary: l
                    }), x.addHistoryItem({
                        id: k(),
                        type: "novel_book_summary",
                        idx: 0,
                        orderRef: 0,
                        timestamp: Date.now(),
                        data: {
                            summary: l,
                            generatedAt: Date.now()
                        },
                        hidden: !1
                    }), _.enterNextState("recommendation_generation");
                    break;
                case "recommendation":
                    {
                        const [h, m] = l.split(`

`).filter(Boolean);
                        x.addHistoryItem({
                            id: k(),
                            type: "novel_recommendation",
                            idx: 0,
                            orderRef: 0,
                            timestamp: Date.now(),
                            data: {
                                shortVersion: h || l,
                                longVersion: m || l,
                                generatedAt: Date.now()
                            },
                            hidden: !1
                        }), _.enterNextState("reading_guide_generation");
                    }
                    break;
                case "reading_guide":
                    x.addHistoryItem({
                        id: k(),
                        type: "novel_reading_guide",
                        idx: 0,
                        orderRef: 0,
                        timestamp: Date.now(),
                        data: {
                            guide: l,
                            generatedAt: Date.now()
                        },
                        hidden: !1
                    }), _.enterNextState("author_note_generation");
                    break;
                case "author_note":
                    x.addHistoryItem({
                        id: k(),
                        type: "novel_author_note",
                        idx: 0,
                        orderRef: 0,
                        timestamp: Date.now(),
                        data: {
                            note: l,
                            generatedAt: Date.now()
                        },
                        hidden: !1
                    }), _.enterNextState("cover_description_generation");
                    break;
                case "cover_description":
                    x.addHistoryItem({
                        id: k(),
                        type: "novel_cover_description",
                        idx: 0,
                        orderRef: 0,
                        timestamp: Date.now(),
                        data: {
                            description: l,
                            generatedAt: Date.now()
                        },
                        hidden: !1
                    }), _.enterNextState("completed");
                    break;
                default:
                    console.warn("Unknown callback phase:", c.callbackPhase);
            }
        };
        function i(c) {
            const l = {
                worldviewCompleteness: 0,
                characterDesign: 0,
                themeDepth: 0,
                plotLogic: 0,
                outlineFeasibility: 0
            }, b = c.match(/世界观完整性[：:]\s*(\d+)/), _ = c.match(/角色设计合理性[：:]\s*(\d+)/), x = c.match(/主题深度[：:]\s*(\d+)/), h = c.match(/情节逻辑[：:]\s*(\d+)/), m = c.match(/大纲可行性[：:]\s*(\d+)/), f = c.match(/综合评分[：:]?\s*(\d+(\.\d+)?)/);
            b && (l.worldviewCompleteness = parseInt(b[1])), _ && (l.characterDesign = parseInt(_[1])), x && (l.themeDepth = parseInt(x[1])), h && (l.plotLogic = parseInt(h[1])), m && (l.outlineFeasibility = parseInt(m[1]));
            let N = 0;
            if (f) N = parseFloat(f[1]);
            else {
                const v = Object.values(l).filter((E)=>E > 0);
                v.length > 0 && (N = v.reduce((E, X)=>E + X, 0) / v.length);
            }
            return {
                reviewResult: c,
                scores: l,
                overallScore: parseFloat(N.toFixed(1)),
                recommendation: c.includes("【建议通过】") ? "pass" : "revise",
                suggestions: []
            };
        }
        function d(c) {
            const l = [], b = c.matchAll(/[〖\[【](?:\d+)?[\)\]】][〖\[【]([^】\]]+)[\)\]】][〖\[【]([^〗\]】]+)[〗\]】]/g);
            for (const _ of b)l.push({
                type: _[1],
                content: _[2],
                priority: 5
            });
            if (l.length === 0) {
                const _ = c.split(`
`).filter((x)=>x.includes("】") || x.includes("]"));
                for (const x of _.slice(0, 5)){
                    const h = x.split(/[】\]]/);
                    h.length >= 2 && l.push({
                        type: "看点",
                        content: h[h.length - 1].trim().replace(/^[：:\s〖\[【]+/, ""),
                        priority: 5
                    });
                }
            }
            return l.slice(0, 5);
        }
        function u(c) {
            const l = c.split(`
`).filter((h)=>h.trim().startsWith("{")), b = [], _ = [], x = [];
            for (const h of l)try {
                const m = JSON.parse(h);
                m.type === "角色" || m.type === "地点" || m.type === "物品" ? b.push(m) : m.type?.includes("状态") || m.type?.includes("关系") ? _.push(m) : x.push(m);
            } catch  {
                console.warn("Failed to parse knowledge line:", h);
            }
            return {
                newEntities: b.filter((h)=>h.method !== "update"),
                updatedEntities: b.filter((h)=>h.method === "update"),
                newEvents: _,
                newRules: x
            };
        }
        const p = T.useCallback(async (c, l = !1)=>{
            const b = o.currentSession;
            if (!b || b.id !== c) {
                console.warn("[Loop] Session mismatch or not loaded");
                return;
            }
            if (s.current && !l) {
                console.warn("[Loop] Already calling, skip");
                return;
            }
            s.current = !0;
            try {
                await r(b, t);
            } catch (_) {
                console.error("[Loop] Error:", _), C.error("执行出错，请检查控制台"), s.current = !1;
            }
        }, [
            t
        ]), g = T.useCallback(async ()=>{
            if (!o.currentSession) return;
            const l = o.sessionManager;
            l && (l.setCurrentUIState("design_worldview_ready"), await o.updateSessionInDB());
        }, []), S = T.useCallback(async (c)=>{
            const l = o.currentSession;
            if (!l) return;
            const b = o.sessionManager;
            b && (b.enterNextState(c), await o.updateSessionInDB(), p(l.id));
        }, [
            p
        ]), y = T.useCallback(async (c)=>{
            const l = o.currentSession;
            if (!l) return;
            const b = o.contextManager;
            b && (b.addHistoryItem({
                id: k(),
                type: "participant_message",
                idx: 0,
                orderRef: 0,
                timestamp: Date.now(),
                data: {
                    content: c,
                    role: "user"
                },
                hidden: !1
            }), await o.saveNewContextItemsToDB(l.id, b.getHistoryItems()), p(l.id));
        }, [
            p
        ]);
        return {
            runLoop: p,
            startDesign: g,
            continueToNextPhase: S,
            submitUserInput: y
        };
    }
    const Js = U([
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
    ]), Zs = U([
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
    ]), Xs = {
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
    }, Qs = U([
        "ai_direct",
        "ai_guided",
        "user_polish",
        "roleplay"
    ]), en = M({
        timePeriod: w().optional().describe("时代背景"),
        socialSystem: w().optional().describe("社会制度"),
        techSystem: w().optional().describe("技术体系"),
        powerSystem: w().optional().describe("能力体系"),
        otherSettings: w().optional().describe("其他设定")
    }), tn = M({
        id: w().describe("角色 ID"),
        name: w().describe("角色名称"),
        role: w().describe("角色定位（主角/配角/反派等）"),
        description: w().describe("角色详细描述"),
        avatar: w().optional().describe("角色头像 URI 或 Base64"),
        importedFrom: w().optional().describe("如果从角色库导入，记录来源 ID")
    }), sn = M({
        mainIdea: w().describe("主旨"),
        intention: w().describe("立意"),
        style: w().describe("风格")
    }), nn = M({
        id: w().describe("情节点 ID"),
        name: w().describe("情节名称"),
        description: w().describe("情节描述"),
        order: I().describe("顺序编号")
    }), rn = M({
        structure: w().optional().describe("故事结构（如：三幕剧、英雄之旅等）"),
        keyPlots: L(nn).describe("关键情节点列表"),
        rawText: w().optional().describe("原始文本（Markdown 或 YAML）"),
        format: U([
            "markdown",
            "yaml"
        ]).optional().describe("格式类型")
    }), an = M({
        id: w().describe("章节 ID"),
        chapterNumber: I().describe("章节号"),
        title: w().describe("章节标题"),
        summary: w().describe("章节摘要"),
        keyEvents: L(w()).describe("关键事件列表")
    }), on = M({
        type: U([
            "好奇",
            "伏笔",
            "主线",
            "线索",
            "突破"
        ]).describe("兴趣类型"),
        content: w().describe("兴趣点内容"),
        priority: I().describe("优先级 1-10")
    }), cn = M({
        chapterNumber: I().describe("章节号"),
        blockIndex: I().describe("分块索引"),
        emotion: w().describe("情绪类型（如：紧张、舒缓、激昂等）"),
        intensity: I().describe("强度 1-10")
    }), ln = M({
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
    }), dn = M({
        type: U([
            "角色",
            "地点",
            "物品"
        ]).describe("实体类型"),
        name: w().describe("名称"),
        alias: L(w()).optional().describe("别名"),
        description: L(w()).describe("描述列表"),
        relatedEntities: L(w()).optional().describe("相关实体")
    }), mn = M({
        type: U([
            "状态声明",
            "状态变化",
            "关系声明",
            "关系变化"
        ]).describe("事件类型"),
        description: w().describe("事件描述"),
        chapterNumber: I().describe("发生章节"),
        timestamp: I().describe("记录时间戳")
    }), pn = M({
        type: U([
            "时代背景",
            "社会制度",
            "技术体系",
            "能力体系",
            "其他"
        ]).describe("规则类型"),
        name: w().describe("规则名称"),
        description: w().describe("规则描述")
    }), un = M({
        entities: L(dn).describe("实体列表"),
        events: L(mn).describe("事件列表"),
        rules: L(pn).describe("规则列表")
    }), hn = M({
        id: w().describe("分块 ID"),
        content: w().describe("分块内容"),
        wordCount: I().describe("字数"),
        writeMode: Qs.describe("写作模式"),
        createdAt: I().describe("创建时间")
    }), xn = M({
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
        blocks: L(hn).describe("分块列表"),
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
    const gn = M({
        projectName: w().describe("小说项目名称"),
        worldview: en.optional().describe("世界观"),
        keyCharacters: L(tn).describe("关键角色列表"),
        theme: sn.optional().describe("主题"),
        plotOutline: rn.optional().describe("情节脉络"),
        chapterOutline: L(an).optional().describe("章节大纲"),
        hasOutline: ue().default(!1).describe("是否有大纲")
    }), _n = M({
        currentPhase: Js.describe("当前阶段"),
        currentUIState: Zs.describe("当前 UI 状态"),
        designCompleted: ue().default(!1).describe("设计是否完成"),
        reviewPassed: ue().default(!1).describe("评审是否通过"),
        currentChapterIndex: I().default(0).describe("当前章节索引"),
        currentChapter: xn.optional().describe("当前章节"),
        progressTracking: M({
            completedChapters: I().default(0).describe("已完成章节数"),
            totalPlannedChapters: I().default(0).describe("计划总章节数"),
            totalWordCount: I().default(0).describe("总字数"),
            currentInterestPoints: L(on).describe("当前兴趣点"),
            emotionSequence: L(cn).describe("情绪序列"),
            foreshadows: L(ln).describe("伏笔列表")
        }).describe("进度追踪"),
        knowledgeBase: un.describe("知识库"),
        isCompleted: ue().default(!1).describe("是否完结"),
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
        tempData: ht(w(), ye()).optional().describe("临时数据")
    });
    it.extend({
        mode: xt("novel-writing").describe("模式"),
        modeConfig: gn.describe("Novel Writing 模式配置"),
        modeState: _n.describe("Novel Writing 模式状态")
    });
    function fn(t) {
        return t.trim().replace(/<think>[\s\S]*<\/think>/g, "").trim().replace(/^[\s]*```[^\n]*|```[\s]*$/g, "").trim();
    }
    let ve, pe, wn, Sn, yn, Nn, vn, bn, In, jn, Cn, Tn, An, kn, En, Mn, Pn, On, Rn;
    ve = (t)=>{
        const s = fn(t);
        try {
            return Ce.parse(s);
        } catch (n) {
            try {
                return s === "" ? "" : Ce.parse(s.slice(1));
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
    pe = ({ isOpen: t, onClose: s, onConfirm: n, title: r = "AI 辅助生成", description: a = "请输入您的要求或关键词，AI 将根据您的提示进行创作。", placeholder: i = "例如：希望时代背景是蒸汽朋克风格，带有一些克苏鲁元素...", defaultValue: d = "" })=>{
        const [u, p] = T.useState(d), g = ()=>{
            n(u), s();
        };
        return e.jsx(_t, {
            open: t,
            onOpenChange: (S)=>!S && s(),
            children: e.jsxs(ft, {
                className: "sm:max-w-[500px]",
                children: [
                    e.jsxs(wt, {
                        children: [
                            e.jsxs(St, {
                                className: "flex items-center gap-2",
                                children: [
                                    e.jsx(z, {
                                        className: "w-5 h-5 text-primary"
                                    }),
                                    r
                                ]
                            }),
                            e.jsx(yt, {
                                children: a
                            })
                        ]
                    }),
                    e.jsx("div", {
                        className: "py-4",
                        children: e.jsx(G, {
                            value: u,
                            onChange: (S)=>p(S.target.value),
                            placeholder: i,
                            rows: 5,
                            className: "resize-none",
                            autoFocus: !0
                        })
                    }),
                    e.jsxs(Nt, {
                        children: [
                            e.jsx(j, {
                                variant: "outline",
                                onClick: s,
                                children: "取消"
                            }),
                            e.jsx(j, {
                                onClick: g,
                                children: "确认生成"
                            })
                        ]
                    })
                ]
            })
        });
    };
    wn = ()=>{
        const t = Y(o), s = se((l)=>l.config), [n, r] = T.useState(!1), [a, i] = T.useState(!1), d = t.currentSession?.modeConfig?.worldview, u = t.currentSession?.modeState?.tempData?.latestReviewSuggestions, [p, g] = T.useState({
            timePeriod: "",
            socialSystem: "",
            techSystem: "",
            powerSystem: "",
            otherSettings: ""
        });
        T.useEffect(()=>{
            d && g({
                timePeriod: d.timePeriod || "",
                socialSystem: d.socialSystem || "",
                techSystem: d.techSystem || "",
                powerSystem: d.powerSystem || "",
                otherSettings: d.otherSettings || ""
            });
        }, [
            d
        ]);
        const S = (l, b)=>{
            g((_)=>({
                    ..._,
                    [l]: b
                }));
        }, y = ()=>{
            o.updateModeConfig({
                worldview: {
                    ...p
                }
            });
        }, c = async (l)=>{
            r(!0);
            try {
                const b = o.contextManager;
                if (!o.currentSession || !b) {
                    C.error("会话未初始化");
                    return;
                }
                const _ = Object.entries(p).filter(([N, v])=>v && v.trim()).map(([N, v])=>`${N}: ${v}`).join(`
`);
                let x = "";
                l && (x += `用户期望：${l}
`), _ && (x += `现有设定：
${_}`), x && o.updateTempData({
                    worldviewHint: x
                });
                const h = Z.makeMessagesForWorldviewGeneration(o.currentSession, b);
                let m = "";
                await q(s, h.map((N)=>({
                        role: N.role,
                        content: N.content,
                        id: k()
                    })), [], (N, v)=>{
                    m = v;
                });
                const f = ve(m);
                if (f && typeof f == "object") {
                    const N = {
                        timePeriod: f.timePeriod || p.timePeriod || "",
                        socialSystem: f.socialSystem || p.socialSystem || "",
                        techSystem: f.techSystem || p.techSystem || "",
                        powerSystem: f.powerSystem || p.powerSystem || "",
                        otherSettings: f.otherSettings || p.otherSettings || ""
                    };
                    o.updateModeConfig({
                        worldview: N
                    }), C.success(u ? "AI 已根据评审建议优化世界观" : "AI 生成世界观成功");
                } else o.updateModeConfig({
                    worldview: {
                        ...p,
                        otherSettings: (p.otherSettings ? p.otherSettings + `

` : "") + m
                    }
                }), C.info("未能完全解析 JSON，内容已存入其他设定");
            } catch (b) {
                console.error("AI generation error:", b), C.error("AI 生成失败");
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
                    children: e.jsx(j, {
                        size: "sm",
                        variant: "outline",
                        onClick: ()=>i(!0),
                        disabled: n,
                        children: n ? e.jsxs(e.Fragment, {
                            children: [
                                e.jsx(H, {
                                    className: "w-4 h-4 mr-2 animate-spin"
                                }),
                                "生成中..."
                            ]
                        }) : e.jsxs(e.Fragment, {
                            children: [
                                e.jsx(z, {
                                    className: "w-4 h-4 mr-2"
                                }),
                                u ? "根据建议重新生成" : "一键 AI 生成/补全"
                            ]
                        })
                    })
                }),
                e.jsx(pe, {
                    isOpen: a,
                    onClose: ()=>i(!1),
                    onConfirm: c,
                    title: "世界观 AI 生成",
                    description: "请输入您对世界观的期望（如：赛博朋克、克苏鲁、东方玄幻等），AI 将为您生成完整的设定。"
                }),
                e.jsxs("div", {
                    className: "space-y-4",
                    children: [
                        e.jsxs("div", {
                            className: "space-y-2",
                            children: [
                                e.jsx(W, {
                                    children: "时代背景"
                                }),
                                e.jsx(G, {
                                    value: p.timePeriod,
                                    onChange: (l)=>S("timePeriod", l.target.value),
                                    onBlur: y,
                                    placeholder: "描述故事发生的时代、地理环境等...",
                                    rows: 2,
                                    className: "resize-none"
                                })
                            ]
                        }),
                        e.jsxs("div", {
                            className: "space-y-2",
                            children: [
                                e.jsx(W, {
                                    children: "社会体系"
                                }),
                                e.jsx(G, {
                                    value: p.socialSystem,
                                    onChange: (l)=>S("socialSystem", l.target.value),
                                    onBlur: y,
                                    placeholder: "政治制度、经济状况、文化风俗...",
                                    rows: 3,
                                    className: "resize-none"
                                })
                            ]
                        }),
                        e.jsxs("div", {
                            className: "space-y-2",
                            children: [
                                e.jsx(W, {
                                    children: "技术体系"
                                }),
                                e.jsx(G, {
                                    value: p.techSystem,
                                    onChange: (l)=>S("techSystem", l.target.value),
                                    onBlur: y,
                                    placeholder: "科技水平、交通工具、通讯方式...",
                                    rows: 3,
                                    className: "resize-none"
                                })
                            ]
                        }),
                        e.jsxs("div", {
                            className: "space-y-2",
                            children: [
                                e.jsx(W, {
                                    children: "力量体系"
                                }),
                                e.jsx(G, {
                                    value: p.powerSystem,
                                    onChange: (l)=>S("powerSystem", l.target.value),
                                    onBlur: y,
                                    placeholder: "魔法、武功、异能或其他超自然力量设定...",
                                    rows: 3,
                                    className: "resize-none"
                                })
                            ]
                        }),
                        e.jsxs("div", {
                            className: "space-y-2",
                            children: [
                                e.jsx(W, {
                                    children: "其他设定"
                                }),
                                e.jsx(G, {
                                    value: p.otherSettings,
                                    onChange: (l)=>S("otherSettings", l.target.value),
                                    onBlur: y,
                                    placeholder: "任何其他重要的世界观补充...",
                                    rows: 4,
                                    className: "resize-none"
                                })
                            ]
                        })
                    ]
                }),
                u && e.jsxs("div", {
                    className: "mt-4 p-3 bg-yellow-500/10 border border-yellow-500/20 rounded text-xs text-yellow-600",
                    children: [
                        e.jsx("strong", {
                            children: "当前参考的评审建议："
                        }),
                        e.jsx("p", {
                            className: "mt-1 line-clamp-2",
                            children: u
                        })
                    ]
                })
            ]
        });
    };
    Sn = (t)=>e.jsx(wn, {
            ...t
        });
    yn = ({ character: t, onUpdate: s, onRemove: n, onExport: r, onEnhance: a, isEnhancing: i })=>{
        const [d, u] = T.useState(t);
        T.useEffect(()=>{
            u(t);
        }, [
            t
        ]);
        const p = (S, y)=>{
            u((c)=>({
                    ...c,
                    [S]: y
                }));
        }, g = ()=>{
            (d.name !== t.name || d.role !== t.role || d.description !== t.description) && s(t.id, d);
        };
        return e.jsx(O, {
            className: "p-4 space-y-3",
            children: e.jsxs("div", {
                className: "flex gap-4",
                children: [
                    e.jsx("div", {
                        className: "shrink-0 pt-6",
                        children: e.jsx(Et, {
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
                                            e.jsx(W, {
                                                children: "角色名"
                                            }),
                                            e.jsx(ke, {
                                                placeholder: "例如：张三",
                                                value: d.name,
                                                onChange: (S)=>p("name", S.target.value),
                                                onBlur: g
                                            })
                                        ]
                                    }),
                                    e.jsxs("div", {
                                        className: "space-y-2",
                                        children: [
                                            e.jsx(W, {
                                                children: "定位/角色"
                                            }),
                                            e.jsx(ke, {
                                                placeholder: "例如：主角、配角、反派",
                                                value: d.role,
                                                onChange: (S)=>p("role", S.target.value),
                                                onBlur: g
                                            })
                                        ]
                                    })
                                ]
                            }),
                            e.jsxs("div", {
                                className: "space-y-2",
                                children: [
                                    e.jsx(W, {
                                        children: "角色描述"
                                    }),
                                    e.jsx(G, {
                                        placeholder: "性格、背景、特点、关系等...",
                                        value: d.description,
                                        onChange: (S)=>p("description", S.target.value),
                                        onBlur: g,
                                        rows: 3
                                    })
                                ]
                            })
                        ]
                    }),
                    e.jsxs("div", {
                        className: "flex flex-col gap-2",
                        children: [
                            e.jsx(j, {
                                size: "sm",
                                variant: "ghost",
                                onClick: ()=>a(t.id),
                                disabled: i,
                                title: "AI 完善角色",
                                children: i ? e.jsx(H, {
                                    className: "w-4 h-4 animate-spin text-primary"
                                }) : e.jsx(he, {
                                    className: "w-4 h-4 text-primary"
                                })
                            }),
                            e.jsx(j, {
                                size: "sm",
                                variant: "ghost",
                                onClick: ()=>n(t.id),
                                title: "删除角色",
                                children: e.jsx(It, {
                                    className: "w-4 h-4 text-destructive"
                                })
                            }),
                            e.jsx(j, {
                                size: "sm",
                                variant: "ghost",
                                onClick: ()=>r(d),
                                title: "导出到角色库",
                                children: e.jsx(jt, {
                                    className: "w-4 h-4 text-primary"
                                })
                            })
                        ]
                    })
                ]
            })
        });
    };
    Nn = ()=>{
        const t = Y(o), s = se((m)=>m.config), [n, r] = T.useState(!1), [a, i] = T.useState(!1), [d, u] = T.useState(null), p = T.useRef(0), g = t.currentSession?.modeConfig?.keyCharacters || [], S = t.currentSession?.modeState?.tempData?.latestReviewSuggestions, y = ()=>{
            const m = {
                id: k(),
                name: "",
                role: "",
                description: ""
            };
            o.updateModeConfig({
                keyCharacters: [
                    ...g,
                    m
                ]
            });
        }, c = async ()=>{
            try {
                const f = await (await je.characters.getTable()).toArray();
                if (f.length === 0) {
                    C.error("角色库为空，请先创建角色卡");
                    return;
                }
                const N = new Set(g.map((E)=>E.name)), v = f.find((E)=>!N.has(E.name));
                if (v) {
                    const E = {
                        id: k(),
                        name: v.name,
                        role: "主要角色",
                        description: v.description || v.personality || "",
                        avatar: v.avatar || "",
                        importedFrom: v.id
                    };
                    o.updateModeConfig({
                        keyCharacters: [
                            ...g,
                            E
                        ]
                    }), C.success(`已从角色库导入：${v.name}`);
                } else C.info("角色库中的角色已全部在列表中");
            } catch (m) {
                console.error("Import error:", m), C.error("导入失败");
            }
        }, l = async (m)=>{
            if (!m.name || !m.description) {
                C.error("角色名称和描述不能为空");
                return;
            }
            try {
                const f = await je.characters.getTable();
                if (await f.where("name").equals(m.name).first()) {
                    C.error(`角色库中已存在名为“${m.name}”的角色`);
                    return;
                }
                await f.add({
                    id: k(),
                    name: m.name,
                    description: m.description,
                    personality: m.description,
                    first_mes: `我是${m.name}，${m.role}。`,
                    avatar: "",
                    chat_history: [],
                    tags: [
                        "小说导出",
                        m.role
                    ],
                    creator_notes: "从小说模式导出",
                    system_prompt: "",
                    post_history_instructions: "",
                    alternate_greetings: [],
                    character_book: void 0,
                    creator: "User",
                    character_version: "1.0.0",
                    extensions: {}
                }), C.success(`已将“${m.name}”导出到角色库`);
            } catch (f) {
                console.error("Export error:", f), C.error("导出失败");
            }
        }, b = (m)=>{
            o.updateModeConfig({
                keyCharacters: g.filter((f)=>f.id !== m)
            });
        }, _ = (m, f)=>{
            o.updateModeConfig({
                keyCharacters: g.map((N)=>N.id === m ? {
                        ...N,
                        ...f
                    } : N)
            });
        }, x = async (m)=>{
            u(m);
            try {
                const f = o.currentSession, N = o.contextManager;
                if (!f || !N) return;
                o.updateTempData({
                    targetCharacterId: m
                });
                const v = Z.makeMessagesForCharacterEnhancement(f, N);
                let E = "";
                await q(s, v.map((Q)=>({
                        role: Q.role,
                        content: Q.content,
                        id: k()
                    })), [], (Q, le)=>{
                    E = le;
                });
                const X = ve(E);
                if (X && typeof X == "object") _(m, {
                    name: X.name || void 0,
                    role: X.role || void 0,
                    description: X.description || void 0
                }), C.success("角色完善成功");
                else {
                    const Q = g.find((le)=>le.id === m);
                    Q && _(m, {
                        description: (Q.description ? Q.description + `

` : "") + E
                    }), C.info("内容已追加到角色描述");
                }
            } catch (f) {
                console.error("AI enhancement error:", f), C.error("AI 完善失败");
            } finally{
                u(null), o.updateTempData({
                    targetCharacterId: void 0
                });
            }
        }, h = async (m)=>{
            r(!0), p.current = 0;
            try {
                const f = o.contextManager;
                if (!o.currentSession || !f) {
                    C.error("会话未初始化");
                    return;
                }
                m && o.updateTempData({
                    characterHint: m
                });
                const N = Z.makeMessagesForCharactersBatchGeneration(o.currentSession, f);
                await q(s, N.map((v)=>({
                        role: v.role,
                        content: v.content,
                        id: k()
                    })), [], (v, E)=>{}), await o.updateSessionInDB(), C.success(S ? "AI 已根据评审建议优化并生成角色" : "AI 角色生成完成");
            } catch (f) {
                console.error("AI generation error:", f), C.error("AI 生成失败");
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
                                e.jsxs(j, {
                                    size: "sm",
                                    variant: "outline",
                                    onClick: y,
                                    children: [
                                        e.jsx(vt, {
                                            className: "w-4 h-4 mr-2"
                                        }),
                                        "手动添加"
                                    ]
                                }),
                                e.jsxs(j, {
                                    size: "sm",
                                    variant: "outline",
                                    onClick: c,
                                    children: [
                                        e.jsx(bt, {
                                            className: "w-4 h-4 mr-2"
                                        }),
                                        "从角色库导入"
                                    ]
                                })
                            ]
                        }),
                        e.jsx(j, {
                            size: "sm",
                            variant: "outline",
                            onClick: ()=>i(!0),
                            disabled: n,
                            children: n ? e.jsxs(e.Fragment, {
                                children: [
                                    e.jsx(H, {
                                        className: "w-4 h-4 mr-2 animate-spin"
                                    }),
                                    "AI 批量生成中..."
                                ]
                            }) : e.jsxs(e.Fragment, {
                                children: [
                                    e.jsx(z, {
                                        className: "w-4 h-4 mr-2"
                                    }),
                                    S ? "根据建议重新生成" : "AI 批量生成"
                                ]
                            })
                        })
                    ]
                }),
                e.jsx(pe, {
                    isOpen: a,
                    onClose: ()=>i(!1),
                    onConfirm: h,
                    title: "角色 AI 批量生成",
                    description: "请输入您对角色的期望（如：性格、职业、种族、关系等），AI 将为您生成一组角色。"
                }),
                S && e.jsxs("div", {
                    className: "p-3 bg-yellow-500/10 border border-yellow-500/20 rounded text-xs text-yellow-600",
                    children: [
                        "参考建议：",
                        S.substring(0, 100),
                        "..."
                    ]
                }),
                g.length === 0 ? e.jsx("div", {
                    className: "text-center py-12 text-muted-foreground",
                    children: e.jsx("p", {
                        children: "暂无角色，点击上方按钮添加或 AI 生成"
                    })
                }) : e.jsx("div", {
                    className: "space-y-4",
                    children: g.map((m)=>e.jsx(yn, {
                            character: m,
                            onUpdate: _,
                            onRemove: b,
                            onExport: l,
                            onEnhance: x,
                            isEnhancing: d === m.id
                        }, m.id))
                }),
                e.jsx("div", {
                    className: "text-xs text-muted-foreground p-3 bg-muted/30 rounded",
                    children: "💡 提示：可以手动添加角色，也可以用 AI 批量生成。角色可以随时增删改。点击保存图标可将新角色导出到广场。"
                })
            ]
        });
    };
    vn = ()=>{
        const t = Y(o), s = se((x)=>x.config), [n, r] = T.useState(!1), [a, i] = T.useState(!1), [d, u] = T.useState(!1), p = t.currentSession?.modeConfig?.theme, g = t.currentSession?.modeState?.tempData?.latestReviewSuggestions, [S, y] = T.useState({
            mainIdea: "",
            intention: "",
            style: ""
        });
        T.useEffect(()=>{
            p && y({
                mainIdea: p.mainIdea || "",
                intention: p.intention || "",
                style: p.style || ""
            });
        }, [
            p
        ]);
        const c = (x, h)=>{
            y((m)=>({
                    ...m,
                    [x]: h
                }));
        }, l = ()=>{
            o.updateModeConfig({
                theme: {
                    ...S
                }
            });
        }, b = async ()=>{
            i(!0);
            try {
                const x = o.currentSession, h = o.contextManager;
                if (!x || !h) return;
                const m = Z.makeMessagesForThemeAnalysis(x, h);
                let f = "";
                await q(s, m.map((N)=>({
                        role: N.role,
                        content: N.content,
                        id: k()
                    })), [], (N, v)=>{
                    f = v;
                }), C.info("AI 主题分析完成", {
                    description: f,
                    duration: 1e4
                });
            } catch (x) {
                console.error("AI analysis error:", x), C.error("AI 分析失败");
            } finally{
                i(!1);
            }
        }, _ = async (x)=>{
            r(!0);
            try {
                const h = o.contextManager;
                if (!o.currentSession || !h) {
                    C.error("会话未初始化");
                    return;
                }
                x && o.updateTempData({
                    themeHint: x
                });
                const m = Z.makeMessagesForThemeGeneration(o.currentSession, h);
                let f = "";
                await q(s, m.map((v)=>({
                        role: v.role,
                        content: v.content,
                        id: k()
                    })), [], (v, E)=>{
                    f = E;
                });
                const N = ve(f);
                if (N && typeof N == "object") o.updateModeConfig({
                    theme: {
                        mainIdea: N.mainIdea || "",
                        intention: N.intention || "",
                        style: N.style || ""
                    }
                }), C.success(g ? "AI 已根据评审建议优化主题" : "AI 生成主题成功");
                else {
                    const v = {
                        ...S,
                        mainIdea: f
                    };
                    o.updateModeConfig({
                        theme: v
                    }), C.info("内容已存入核心思想");
                }
            } catch (h) {
                console.error("AI generation error:", h), C.error("AI 生成失败");
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
                        e.jsx(j, {
                            size: "sm",
                            variant: "outline",
                            onClick: b,
                            disabled: a || n,
                            children: a ? e.jsxs(e.Fragment, {
                                children: [
                                    e.jsx(H, {
                                        className: "mr-2 h-4 w-4 animate-spin"
                                    }),
                                    "分析中..."
                                ]
                            }) : e.jsxs(e.Fragment, {
                                children: [
                                    e.jsx(Ct, {
                                        className: "mr-2 h-4 w-4"
                                    }),
                                    "AI 深度分析"
                                ]
                            })
                        }),
                        e.jsx(j, {
                            size: "sm",
                            variant: "outline",
                            onClick: ()=>u(!0),
                            disabled: n || a,
                            children: n ? e.jsxs(e.Fragment, {
                                children: [
                                    e.jsx(H, {
                                        className: "mr-2 h-4 w-4 animate-spin"
                                    }),
                                    "生成中..."
                                ]
                            }) : e.jsxs(e.Fragment, {
                                children: [
                                    e.jsx(z, {
                                        className: "mr-2 h-4 w-4"
                                    }),
                                    g ? "根据建议重新生成" : "一键 AI 生成"
                                ]
                            })
                        })
                    ]
                }),
                e.jsx(pe, {
                    isOpen: d,
                    onClose: ()=>u(!1),
                    onConfirm: _,
                    title: "主题 AI 生成",
                    description: "请输入您对故事主题的期望（如：成长、复仇、爱与和平等），AI 将为您生成核心思想和创作意图。"
                }),
                e.jsxs("div", {
                    className: "space-y-4",
                    children: [
                        e.jsxs("div", {
                            className: "space-y-2",
                            children: [
                                e.jsx(W, {
                                    children: "核心思想"
                                }),
                                e.jsx(G, {
                                    value: S.mainIdea,
                                    onChange: (x)=>c("mainIdea", x.target.value),
                                    onBlur: l,
                                    rows: 3
                                })
                            ]
                        }),
                        e.jsxs("div", {
                            className: "space-y-2",
                            children: [
                                e.jsx(W, {
                                    children: "创作意图"
                                }),
                                e.jsx(G, {
                                    value: S.intention,
                                    onChange: (x)=>c("intention", x.target.value),
                                    onBlur: l,
                                    rows: 3
                                })
                            ]
                        }),
                        e.jsxs("div", {
                            className: "space-y-2",
                            children: [
                                e.jsx(W, {
                                    children: "风格基调"
                                }),
                                e.jsx(G, {
                                    value: S.style,
                                    onChange: (x)=>c("style", x.target.value),
                                    onBlur: l,
                                    rows: 2
                                })
                            ]
                        })
                    ]
                }),
                g && e.jsxs("div", {
                    className: "mt-4 p-3 bg-yellow-500/10 border border-yellow-500/20 rounded text-xs text-yellow-600 italic",
                    children: [
                        "正在参考评审建议：",
                        g.substring(0, 100),
                        "..."
                    ]
                })
            ]
        });
    };
    bn = (t)=>e.jsx(vn, {
            ...t
        });
    In = ()=>{
        const t = Y(o), s = se((h)=>h.config), [n, r] = T.useState(!1), [a, i] = T.useState(!1), [d, u] = T.useState(!1), p = t.currentSession?.modeConfig?.plotOutline, g = p?.rawText || "", S = t.currentSession?.modeState?.tempData?.latestReviewSuggestions, [y, c] = T.useState("");
        T.useEffect(()=>{
            c(g);
        }, [
            g
        ]);
        const l = (h)=>{
            const m = h.split(`
`).filter((N)=>N.trim()), f = [];
            m.forEach((N, v)=>{
                /^[\d\-\*]/.test(N.trim()) && f.push({
                    id: k(),
                    name: N.replace(/^[\d\-\*\.\s]+/, "").trim(),
                    description: "",
                    order: v
                });
            }), o.updateModeConfig({
                plotOutline: {
                    structure: p?.structure || "",
                    keyPlots: f,
                    rawText: h,
                    format: "markdown"
                }
            });
        }, b = ()=>{
            l(y);
        }, _ = async ()=>{
            if (!y.trim()) {
                C.error("请先输入情节脉络内容");
                return;
            }
            i(!0);
            try {
                const h = o.currentSession, m = o.contextManager;
                if (!h || !m) return;
                const f = Z.makeMessagesForPlotOptimization(h, m);
                await q(s, f.map((N)=>({
                        role: N.role,
                        content: N.content,
                        id: k()
                    })), [], (N, v)=>{
                    l(v);
                }), await o.updateSessionInDB(), C.success("AI 优化情节脉络完成");
            } catch (h) {
                console.error("AI optimization error:", h), C.error("AI 优化失败");
            } finally{
                i(!1);
            }
        }, x = async (h)=>{
            r(!0);
            try {
                const m = o.contextManager;
                if (!o.currentSession || !m) {
                    C.error("会话未初始化");
                    return;
                }
                o.updateTempData({
                    plotFormat: "markdown",
                    plotHint: h || void 0
                });
                const f = Z.makeMessagesForPlotGenerationFree(o.currentSession, m);
                await q(s, f.map((N)=>({
                        role: N.role,
                        content: N.content,
                        id: k()
                    })), [], (N, v)=>{
                    l(v);
                }), await o.updateSessionInDB(), C.success(S ? "AI 已根据评审建议优化情节" : "AI 生成情节脉络成功");
            } catch (m) {
                console.error("AI generation error:", m), C.error("AI 生成失败");
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
                                e.jsx(De, {
                                    className: "w-4 h-4"
                                }),
                                "支持 Markdown 格式，实时自动保存"
                            ]
                        }),
                        e.jsxs("div", {
                            className: "flex gap-2",
                            children: [
                                e.jsx(j, {
                                    size: "sm",
                                    variant: "outline",
                                    onClick: _,
                                    disabled: a || n,
                                    children: a ? e.jsxs(e.Fragment, {
                                        children: [
                                            e.jsx(H, {
                                                className: "w-4 h-4 mr-2 animate-spin"
                                            }),
                                            "优化中..."
                                        ]
                                    }) : e.jsxs(e.Fragment, {
                                        children: [
                                            e.jsx(he, {
                                                className: "w-4 h-4 mr-2"
                                            }),
                                            "AI 优化"
                                        ]
                                    })
                                }),
                                e.jsx(j, {
                                    size: "sm",
                                    variant: "outline",
                                    onClick: ()=>u(!0),
                                    disabled: n || a,
                                    children: n ? e.jsxs(e.Fragment, {
                                        children: [
                                            e.jsx(H, {
                                                className: "w-4 h-4 mr-2 animate-spin"
                                            }),
                                            "生成中..."
                                        ]
                                    }) : e.jsxs(e.Fragment, {
                                        children: [
                                            e.jsx(z, {
                                                className: "w-4 h-4 mr-2"
                                            }),
                                            S ? "根据建议重新生成" : "AI 生成"
                                        ]
                                    })
                                })
                            ]
                        })
                    ]
                }),
                e.jsx(pe, {
                    isOpen: d,
                    onClose: ()=>u(!1),
                    onConfirm: x,
                    title: "情节脉络 AI 生成",
                    description: "请输入您对情节的期望（如：起承转合、高潮点、结局走向等），AI 将为您生成完整的情节大纲。"
                }),
                e.jsx(G, {
                    value: y,
                    onChange: (h)=>c(h.target.value),
                    onBlur: b,
                    rows: 20,
                    className: "font-mono text-sm"
                }),
                S && e.jsxs("div", {
                    className: "p-3 bg-yellow-500/10 border border-yellow-500/20 rounded text-xs text-yellow-600",
                    children: [
                        "参考建议：",
                        S.substring(0, 100),
                        "..."
                    ]
                })
            ]
        });
    };
    jn = (t)=>e.jsx(In, {
            ...t
        });
    Cn = ()=>{
        const t = Y(o), s = se((x)=>x.config), [n, r] = T.useState(!1), [a, i] = T.useState(!1), [d, u] = T.useState(!1), p = t.currentSession?.modeConfig?.chapterOutlineRawText || "", g = t.currentSession?.modeState?.tempData?.latestReviewSuggestions, [S, y] = T.useState("");
        T.useEffect(()=>{
            y(p);
        }, [
            p
        ]);
        const c = (x)=>{
            const h = x.split(`
`), m = [];
            let f = null;
            h.forEach((N)=>{
                const v = N.trim(), E = v.match(/^#+\s*第?(\d+)[章节][\s:：]*(.*)/);
                E ? (f && m.push(f), f = {
                    id: k(),
                    chapterNumber: parseInt(E[1]),
                    title: E[2] || `第${E[1]}章`,
                    summary: "",
                    keyEvents: []
                }) : f && v && (v.startsWith("-") || v.startsWith("*") ? f.keyEvents.push(v.replace(/^[\-\*]\s*/, "")) : f.summary += (f.summary ? `
` : "") + v);
            }), f && m.push(f), o.updateModeConfig({
                chapterOutline: m,
                chapterOutlineRawText: x,
                hasOutline: m.length > 0
            });
        }, l = ()=>{
            c(S);
        }, b = async ()=>{
            if (!S.trim()) {
                C.error("请先输入章节大纲内容");
                return;
            }
            i(!0);
            try {
                const x = o.currentSession, h = o.contextManager;
                if (!x || !h) return;
                const m = Z.makeMessagesForChapterOutlineOptimization(x, h);
                await q(s, m.map((f)=>({
                        role: f.role,
                        content: f.content,
                        id: k()
                    })), [], (f, N)=>{
                    c(N);
                }), await o.updateSessionInDB(), C.success("AI 优化章节大纲完成");
            } catch (x) {
                console.error("AI optimization error:", x), C.error("AI 优化失败");
            } finally{
                i(!1);
            }
        }, _ = async (x)=>{
            r(!0);
            try {
                const h = o.contextManager;
                if (!o.currentSession || !h) {
                    C.error("会话未初始化");
                    return;
                }
                o.updateTempData({
                    outlineFormat: "markdown",
                    chapterCount: 12,
                    outlineHint: x || void 0
                });
                const m = Z.makeMessagesForChapterOutlineGeneration(o.currentSession, h);
                await q(s, m.map((f)=>({
                        role: f.role,
                        content: f.content,
                        id: k()
                    })), [], (f, N)=>{
                    c(N);
                }), await o.updateSessionInDB(), C.success(g ? "AI 已根据评审建议优化大纲" : "AI 生成章节大纲成功");
            } catch (h) {
                console.error("AI generation error:", h), C.error("AI 生成失败");
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
                                e.jsx(De, {
                                    className: "w-4 h-4"
                                }),
                                "支持 Markdown 格式，自由编写，实时自动保存"
                            ]
                        }),
                        e.jsxs("div", {
                            className: "flex gap-2",
                            children: [
                                e.jsx(j, {
                                    size: "sm",
                                    variant: "outline",
                                    onClick: b,
                                    disabled: a || n,
                                    children: a ? e.jsxs(e.Fragment, {
                                        children: [
                                            e.jsx(H, {
                                                className: "w-4 h-4 mr-2 animate-spin"
                                            }),
                                            "优化中..."
                                        ]
                                    }) : e.jsxs(e.Fragment, {
                                        children: [
                                            e.jsx(he, {
                                                className: "w-4 h-4 mr-2"
                                            }),
                                            "AI 优化"
                                        ]
                                    })
                                }),
                                e.jsx(j, {
                                    size: "sm",
                                    variant: "outline",
                                    onClick: ()=>u(!0),
                                    disabled: n || a,
                                    children: n ? e.jsxs(e.Fragment, {
                                        children: [
                                            e.jsx(H, {
                                                className: "w-4 h-4 mr-2 animate-spin"
                                            }),
                                            "AI 生成中..."
                                        ]
                                    }) : e.jsxs(e.Fragment, {
                                        children: [
                                            e.jsx(z, {
                                                className: "w-4 h-4 mr-2"
                                            }),
                                            g ? "根据建议重新生成" : "AI 生成"
                                        ]
                                    })
                                })
                            ]
                        })
                    ]
                }),
                e.jsx(pe, {
                    isOpen: d,
                    onClose: ()=>u(!1),
                    onConfirm: _,
                    title: "章节大纲 AI 生成",
                    description: "请输入您对章节大纲的期望（如：章节数量、每章重点、节奏快慢等），AI 将为您生成详细的章节列表。"
                }),
                e.jsx(G, {
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
                    value: S,
                    onChange: (x)=>y(x.target.value),
                    onBlur: l,
                    rows: 20,
                    className: "font-mono text-sm"
                }),
                e.jsx("div", {
                    className: "text-xs text-muted-foreground p-3 bg-muted/30 rounded",
                    children: "💡 提示：直接在文本框中自由编写章节大纲，所有的修改都会实时自动保存。"
                }),
                g && e.jsxs("div", {
                    className: "mt-2 p-3 bg-yellow-500/10 border border-yellow-500/20 rounded text-xs text-yellow-600",
                    children: [
                        "参考建议：",
                        g.substring(0, 100),
                        "..."
                    ]
                })
            ]
        });
    };
    Tn = (t)=>e.jsx(Cn, {
            ...t
        });
    An = ({ sessionId: t })=>{
        const s = Y(o), n = s.currentSession?.modeState?.currentPhase, r = async ()=>{
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
                            e.jsx(Sn, {
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
                            e.jsx(Nn, {
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
                            e.jsx(bn, {
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
                            e.jsx(jn, {
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
                            e.jsx(Tn, {
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
                        e.jsx(F, {
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
                        e.jsx(F, {
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
                        e.jsx(F, {
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
                        e.jsx(F, {
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
                        e.jsx(j, {
                            variant: "outline",
                            onClick: a,
                            disabled: n === "design_worldview",
                            children: "上一步"
                        }),
                        e.jsxs(j, {
                            onClick: r,
                            disabled: !d(),
                            children: [
                                n === "design_chapter_outline" ? "提交评审" : "下一步",
                                e.jsx(F, {
                                    className: "w-4 h-4 ml-2"
                                })
                            ]
                        })
                    ]
                })
            ]
        });
    };
    kn = ({ sessionId: t })=>{
        const s = Y(o), { runLoop: n } = ce(), r = s.currentSession?.modeState?.currentPhase, a = s.contextManager?.state.processingItem, d = [
            ...s.contextManager?.state.historyItems || []
        ].reverse().find((y)=>y.type === "novel_ai_review"), u = a !== void 0, p = async ()=>{
            o.setPhase("ai_review"), o.setUIState("ai_review_running");
            const y = o.contextManager;
            y && (y.state.historyItems = []), await o.updateSessionInDB(), n(t);
        }, g = async ()=>{
            o.setPhase("chapter_prep_review"), o.setUIState("chapter_prep_ready"), await o.updateSessionInDB();
        }, S = async ()=>{
            if (d) {
                const y = d.data;
                o.updateTempData({
                    latestReviewSuggestions: y.reviewResult + `
` + (y.suggestions?.join(`
`) || "")
                });
            }
            o.setPhase("design_worldview"), o.setUIState("design_worldview_ready"), await o.updateSessionInDB();
        };
        if (r === "ai_review") {
            if (!d && !u) return e.jsx("div", {
                className: "max-w-4xl mx-auto space-y-6",
                children: e.jsxs(O, {
                    className: "p-12 text-center border-dashed",
                    children: [
                        e.jsx("div", {
                            className: "w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4",
                            children: e.jsx(z, {
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
                                e.jsxs(j, {
                                    variant: "outline",
                                    onClick: S,
                                    className: "px-6",
                                    children: [
                                        e.jsx(Te, {
                                            className: "w-4 h-4 mr-2"
                                        }),
                                        "返回修改"
                                    ]
                                }),
                                e.jsxs(j, {
                                    size: "lg",
                                    onClick: p,
                                    className: "px-8",
                                    children: [
                                        e.jsx(z, {
                                            className: "w-5 h-5 mr-2"
                                        }),
                                        "立即开始评审"
                                    ]
                                }),
                                e.jsxs(j, {
                                    variant: "ghost",
                                    onClick: g,
                                    className: "px-6 text-muted-foreground hover:text-primary",
                                    children: [
                                        "跳过评审直接写作",
                                        e.jsx(F, {
                                            className: "w-4 h-4 ml-2"
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            });
            if (u) return e.jsx("div", {
                className: "max-w-4xl mx-auto space-y-6",
                children: e.jsxs(O, {
                    className: "p-12 text-center",
                    children: [
                        e.jsx(H, {
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
            const y = d.data, c = y.recommendation === "pass";
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
                                                    className: `w-12 h-12 rounded-full flex items-center justify-center ${c ? "bg-green-500/10" : "bg-yellow-500/10"}`,
                                                    children: c ? e.jsx($, {
                                                        className: "w-6 h-6 text-green-500"
                                                    }) : e.jsx(Tt, {
                                                        className: "w-6 h-6 text-yellow-500"
                                                    })
                                                }),
                                                e.jsxs("div", {
                                                    children: [
                                                        e.jsxs("h3", {
                                                            className: "text-lg font-bold",
                                                            children: [
                                                                "评审结论：",
                                                                c ? "建议通过" : "建议修改"
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
                                        e.jsxs(j, {
                                            variant: "ghost",
                                            size: "sm",
                                            onClick: p,
                                            className: "text-primary hover:text-primary/80",
                                            children: [
                                                e.jsx($e, {
                                                    className: "w-4 h-4 mr-2"
                                                }),
                                                "重新评审"
                                            ]
                                        })
                                    ]
                                }),
                                e.jsx("div", {
                                    className: "text-sm text-muted-foreground bg-muted/30 p-4 rounded-lg whitespace-pre-wrap",
                                    children: y.reviewResult
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
                                                    children: y.scores?.worldviewCompleteness || 0
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
                                                    children: y.scores?.characterDesign || 0
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
                                                    children: y.scores?.themeDepth || 0
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
                                                    children: y.scores?.plotLogic || 0
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
                                                    children: y.overallScore || 0
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
                            e.jsxs(j, {
                                variant: "outline",
                                onClick: S,
                                className: "flex-1 max-w-50",
                                children: [
                                    e.jsx(Te, {
                                        className: "w-4 h-4 mr-2"
                                    }),
                                    "返回修改"
                                ]
                            }),
                            e.jsxs(j, {
                                onClick: g,
                                className: "flex-1 max-w-75 bg-green-600 hover:bg-green-700",
                                children: [
                                    "接受并开始写作",
                                    e.jsx(F, {
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
    En = ({ sessionId: t })=>{
        const s = Y(o), n = Y(o.contextManager.state), { runLoop: r } = ce(), a = s.currentSession?.modeState?.currentPhase, i = s.currentSession?.modeState?.currentChapter, d = n.historyItems || [], u = n.processingItem, p = [
            ...d
        ].reverse().find((m)=>m.type === "novel_chapter_prep_review"), g = [
            ...d
        ].reverse().find((m)=>m.type === "novel_chapter_prep_interest"), S = [
            ...d
        ].reverse().find((m)=>m.type === "novel_chapter_prep_emotion"), y = [
            ...d
        ].reverse().find((m)=>m.type === "novel_chapter_plan_generation"), c = async ()=>{
            console.log("[ChapterPrep] Starting step, current phase:", o.currentSession?.modeState.currentPhase), o.setUIState("chapter_prep_running"), await o.updateSessionInDB(), r(t, !0);
        }, l = async ()=>{
            const m = o.currentSession;
            if (!m) {
                console.error("[ChapterPrep] No active session found");
                return;
            }
            const f = m.modeState.currentPhase;
            console.log("[ChapterPrep] handleNextStep called. Current phase:", f), f === "chapter_prep_review" ? m.modeState.currentPhase = "chapter_prep_interest" : f === "chapter_prep_interest" ? m.modeState.currentPhase = "chapter_prep_emotion" : f === "chapter_prep_emotion" ? m.modeState.currentPhase = "chapter_plan_generation" : f === "chapter_plan_generation" && (m.modeState.currentPhase = "chapter_plan_approval"), m.modeState.currentUIState = "idle", m.updatedAt = Date.now(), await o.updateSessionInDB();
        }, b = async ()=>{
            const m = o.sessionManager;
            m && (m.enterNextState("block_write"), await o.updateSessionInDB());
        }, _ = async ()=>{
            const m = o.sessionManager;
            m && (m.enterNextState("chapter_plan_generation"), o.setUIState("chapter_prep_running"), await o.updateSessionInDB(), r(t, !0));
        }, x = u !== void 0, h = (i?.number || 1) === 1;
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
                                children: h ? "开篇准备中" : "章节准备中"
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
                                h ? "开篇寄语" : "前情回顾"
                            ]
                        }),
                        e.jsx(F, {
                            className: "w-3 h-3 text-muted-foreground/30"
                        }),
                        e.jsxs("div", {
                            className: `flex items-center gap-1 ${[
                                "chapter_prep_interest"
                            ].includes(a || "") ? "text-primary font-bold" : g ? "text-green-600" : "text-muted-foreground"}`,
                            children: [
                                g ? e.jsx($, {
                                    className: "w-3 h-3"
                                }) : e.jsx("div", {
                                    className: "w-3 h-3 rounded-full border border-current"
                                }),
                                "兴趣点分析"
                            ]
                        }),
                        e.jsx(F, {
                            className: "w-3 h-3 text-muted-foreground/30"
                        }),
                        e.jsxs("div", {
                            className: `flex items-center gap-1 ${[
                                "chapter_prep_emotion"
                            ].includes(a || "") ? "text-primary font-bold" : S ? "text-green-600" : "text-muted-foreground"}`,
                            children: [
                                S ? e.jsx($, {
                                    className: "w-3 h-3"
                                }) : e.jsx("div", {
                                    className: "w-3 h-3 rounded-full border border-current"
                                }),
                                "情绪设计"
                            ]
                        }),
                        e.jsx(F, {
                            className: "w-3 h-3 text-muted-foreground/30"
                        }),
                        e.jsxs("div", {
                            className: `flex items-center gap-1 ${[
                                "chapter_plan_generation",
                                "chapter_plan_approval"
                            ].includes(a || "") ? "text-primary font-bold" : y ? "text-green-600" : "text-muted-foreground"}`,
                            children: [
                                y ? e.jsx($, {
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
                            children: e.jsx(ie, {
                                className: "w-8 h-8 text-primary"
                            })
                        }),
                        e.jsx("h3", {
                            className: "text-lg font-bold mb-2",
                            children: h ? "开启您的创作之旅" : "准备开始新章节"
                        }),
                        e.jsx("p", {
                            className: "text-sm text-muted-foreground mb-8 max-w-md mx-auto",
                            children: h ? "AI 将根据您的世界观和角色设定，为您生成开篇建议和创作灵感。" : "AI 将回顾之前的剧情，分析当前的伏笔，为您规划本章的写作方向。"
                        }),
                        e.jsxs(j, {
                            size: "lg",
                            onClick: c,
                            className: "px-8",
                            children: [
                                e.jsx(z, {
                                    className: "w-4 h-4 mr-2"
                                }),
                                h ? "开始开篇准备" : "开始章节准备"
                            ]
                        })
                    ]
                }),
                !g && !x && a === "chapter_prep_interest" && e.jsxs(O, {
                    className: "p-12 text-center border-dashed",
                    children: [
                        e.jsx("div", {
                            className: "w-16 h-16 rounded-full bg-orange-500/10 flex items-center justify-center mx-auto mb-4",
                            children: e.jsx(z, {
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
                        e.jsx(j, {
                            size: "lg",
                            onClick: c,
                            className: "px-8 bg-orange-600 hover:bg-orange-700",
                            children: "开始分析"
                        })
                    ]
                }),
                !S && !x && a === "chapter_prep_emotion" && e.jsxs(O, {
                    className: "p-12 text-center border-dashed",
                    children: [
                        e.jsx("div", {
                            className: "w-16 h-16 rounded-full bg-pink-500/10 flex items-center justify-center mx-auto mb-4",
                            children: e.jsx(we, {
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
                        e.jsx(j, {
                            size: "lg",
                            onClick: c,
                            className: "px-8 bg-pink-600 hover:bg-pink-700",
                            children: "开始设计"
                        })
                    ]
                }),
                !y && !x && a === "chapter_plan_generation" && e.jsxs(O, {
                    className: "p-12 text-center border-dashed",
                    children: [
                        e.jsx("div", {
                            className: "w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center mx-auto mb-4",
                            children: e.jsx(ie, {
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
                        e.jsx(j, {
                            size: "lg",
                            onClick: c,
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
                                e.jsx(ie, {
                                    className: "w-4 h-4 text-blue-500"
                                }),
                                h ? "开篇寄语" : "前情回顾"
                            ]
                        }),
                        e.jsx("div", {
                            className: "text-sm text-muted-foreground whitespace-pre-wrap leading-relaxed",
                            children: p.data.reviewText
                        }),
                        a === "chapter_prep_review" && !x && e.jsx("div", {
                            className: "mt-4 flex justify-end",
                            children: e.jsxs(j, {
                                size: "sm",
                                onClick: l,
                                children: [
                                    "分析兴趣点",
                                    e.jsx(F, {
                                        className: "w-4 h-4 ml-2"
                                    })
                                ]
                            })
                        })
                    ]
                }),
                g && e.jsxs(O, {
                    className: "p-4 border-l-4 border-l-orange-500",
                    children: [
                        e.jsxs("h3", {
                            className: "text-sm font-semibold mb-2 flex items-center gap-2",
                            children: [
                                e.jsx(z, {
                                    className: "w-4 h-4 text-orange-500"
                                }),
                                "🎯 兴趣点分析"
                            ]
                        }),
                        (g.data.interestPoints || []).length > 0 ? e.jsx("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 gap-3",
                            children: (g.data.interestPoints || []).map((m, f)=>e.jsxs("div", {
                                    className: "flex items-start gap-2 p-2 rounded bg-muted/50",
                                    children: [
                                        e.jsx("span", {
                                            className: "text-[10px] font-bold px-1.5 py-0.5 rounded bg-orange-500/10 text-orange-600 uppercase",
                                            children: m.type
                                        }),
                                        e.jsx("span", {
                                            className: "text-sm text-muted-foreground",
                                            children: m.content
                                        })
                                    ]
                                }, f))
                        }) : e.jsx("div", {
                            className: "text-sm text-muted-foreground whitespace-pre-wrap leading-relaxed",
                            children: g.data.analysisText || g.data.content
                        }),
                        a === "chapter_prep_interest" && !x && e.jsx("div", {
                            className: "mt-4 flex justify-end",
                            children: e.jsxs(j, {
                                size: "sm",
                                onClick: l,
                                children: [
                                    "设计情绪曲线",
                                    e.jsx(F, {
                                        className: "w-4 h-4 ml-2"
                                    })
                                ]
                            })
                        })
                    ]
                }),
                S && e.jsxs(O, {
                    className: "p-4 border-l-4 border-l-pink-500",
                    children: [
                        e.jsxs("h3", {
                            className: "text-sm font-semibold mb-2 flex items-center gap-2",
                            children: [
                                e.jsx(we, {
                                    className: "w-4 h-4 text-pink-500"
                                }),
                                "💭 情绪设计"
                            ]
                        }),
                        e.jsx("div", {
                            className: "text-sm text-muted-foreground whitespace-pre-wrap leading-relaxed",
                            children: S.data.emotionDesign
                        }),
                        a === "chapter_prep_emotion" && !x && e.jsx("div", {
                            className: "mt-4 flex justify-end",
                            children: e.jsxs(j, {
                                size: "sm",
                                onClick: l,
                                children: [
                                    "生成章节规划",
                                    e.jsx(F, {
                                        className: "w-4 h-4 ml-2"
                                    })
                                ]
                            })
                        })
                    ]
                }),
                y && e.jsxs(O, {
                    className: "p-4",
                    children: [
                        e.jsx("h3", {
                            className: "text-sm font-semibold mb-2",
                            children: "📝 章节规划"
                        }),
                        e.jsx("div", {
                            className: "text-sm text-muted-foreground whitespace-pre-wrap",
                            children: y.data.plan
                        })
                    ]
                }),
                x && u && e.jsx(O, {
                    className: "p-4",
                    children: e.jsxs("div", {
                        className: "flex items-start gap-3",
                        children: [
                            e.jsx(H, {
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
                                        children: u.data.content || ""
                                    })
                                ]
                            })
                        ]
                    })
                }),
                a === "chapter_plan_approval" && e.jsxs("div", {
                    className: "flex justify-end gap-3 pt-4 border-t",
                    children: [
                        e.jsx(j, {
                            variant: "outline",
                            onClick: _,
                            children: "重新生成规划"
                        }),
                        e.jsxs(j, {
                            onClick: b,
                            children: [
                                "确认规划，开始写作",
                                e.jsx(F, {
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
    Mn = ({ sessionId: t })=>{
        const s = Y(o), n = se((P)=>P.config), { runLoop: r } = ce(), a = s.currentSession?.modeState?.currentPhase, i = s.currentSession?.modeState?.currentChapter, d = s.contextManager?.state.processingItem, u = s.currentSession?.modeState?.tempData || {}, p = u.writeMode || "ai_direct", g = u.userInstruction || "", S = u.userContent || "", y = u.selectedCharacter || "", c = i?.blocks || [], l = i?.targetWordCount || 4e3, b = i?.wordCount || 0, _ = Math.min(b / l * 100, 100), [x, h] = T.useState(""), [m, f] = T.useState(""), [N, v] = T.useState(!1);
        T.useEffect(()=>{
            h(g);
        }, [
            g
        ]), T.useEffect(()=>{
            f(S);
        }, [
            S
        ]);
        const E = (P)=>{
            o.updateTempData(P);
        }, X = ()=>{
            E({
                userInstruction: x
            });
        }, Q = ()=>{
            E({
                userContent: m
            });
        }, le = async ()=>{
            v(!0);
            try {
                const P = o.currentSession, te = o.contextManager;
                if (!P || !te) return;
                const rt = Z.makeMessagesForInstructionSuggestion(P, te);
                let xe = "";
                await q(n, rt.map((ge)=>({
                        role: ge.role,
                        content: ge.content,
                        id: k()
                    })), [], (ge, at)=>{
                    xe = at;
                }), h(xe), E({
                    userInstruction: xe
                }), C.success("AI 已建议写作指令");
            } catch (P) {
                console.error("AI suggestion error:", P), C.error("AI 建议失败");
            } finally{
                v(!1);
            }
        }, tt = async ()=>{
            if (o.sessionManager) {
                if (E({
                    userInstruction: x,
                    userContent: m
                }), p === "ai_direct" && !x) {
                    const te = "请根据章节规划续写剧情。";
                    h(te), E({
                        userInstruction: te
                    });
                }
                o.setUIState("block_write_running"), await o.updateSessionInDB(), r(t, !0);
            }
        }, st = async ()=>{
            o.sessionManager && (h(""), f(""), E({
                userInstruction: "",
                userContent: "",
                latestBlockEvaluation: null
            }), b >= l ? (o.setPhase("chapter_check"), o.setUIState("chapter_complete")) : o.setUIState("block_write_ready"), await o.updateSessionInDB());
        }, nt = async ()=>{
            r(t, !0);
        }, be = d !== void 0;
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
                                            b.toLocaleString(),
                                            " / ",
                                            l.toLocaleString(),
                                            " 字"
                                        ]
                                    }),
                                    e.jsx("div", {
                                        className: "flex-1 h-2 bg-muted rounded-full overflow-hidden max-w-xs",
                                        children: e.jsx("div", {
                                            className: "h-full bg-primary transition-all",
                                            style: {
                                                width: `${_}%`
                                            }
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                }),
                c.length > 0 && e.jsxs("div", {
                    className: "space-y-3",
                    children: [
                        e.jsxs("h3", {
                            className: "text-sm font-semibold",
                            children: [
                                "已完成片段 (",
                                c.length,
                                ")"
                            ]
                        }),
                        c.map((P, te)=>e.jsxs(O, {
                                className: "p-4",
                                children: [
                                    e.jsxs("div", {
                                        className: "flex items-start justify-between mb-2",
                                        children: [
                                            e.jsxs("span", {
                                                className: "text-xs font-medium text-muted-foreground",
                                                children: [
                                                    "片段 ",
                                                    te + 1,
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
                be && d && e.jsxs(O, {
                    className: "p-4 border-primary bg-primary/5",
                    children: [
                        e.jsxs("div", {
                            className: "flex items-start gap-3 mb-2",
                            children: [
                                e.jsx(H, {
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
                a === "block_write" && !be && e.jsx(O, {
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
                                            e.jsx(z, {
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
                                            e.jsx(W, {
                                                children: "写作模式"
                                            }),
                                            e.jsxs(Ee, {
                                                value: p,
                                                onValueChange: (P)=>E({
                                                        writeMode: P
                                                    }),
                                                children: [
                                                    e.jsx(Me, {
                                                        children: e.jsx(Pe, {})
                                                    }),
                                                    e.jsxs(Oe, {
                                                        children: [
                                                            e.jsx(de, {
                                                                value: "ai_direct",
                                                                children: "AI 直接写作"
                                                            }),
                                                            e.jsx(de, {
                                                                value: "ai_guided",
                                                                children: "AI 引导写作"
                                                            }),
                                                            e.jsx(de, {
                                                                value: "user_polish",
                                                                children: "用户提供初稿，AI 润色"
                                                            }),
                                                            e.jsx(de, {
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
                                            e.jsx(W, {
                                                children: "选择角色"
                                            }),
                                            e.jsxs(Ee, {
                                                value: y,
                                                onValueChange: (P)=>E({
                                                        selectedCharacter: P
                                                    }),
                                                children: [
                                                    e.jsx(Me, {
                                                        children: e.jsx(Pe, {
                                                            placeholder: "选择角色..."
                                                        })
                                                    }),
                                                    e.jsx(Oe, {
                                                        children: (s.currentSession?.modeConfig?.keyCharacters || []).map((P)=>e.jsx(de, {
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
                                            e.jsxs(W, {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    "写作指令",
                                                    e.jsx("span", {
                                                        className: "text-[10px] font-normal text-muted-foreground",
                                                        children: "(可选，留空则由 AI 自主发挥)"
                                                    })
                                                ]
                                            }),
                                            e.jsxs(j, {
                                                size: "xs",
                                                variant: "ghost",
                                                className: "h-7 text-xs",
                                                onClick: le,
                                                disabled: N,
                                                children: [
                                                    N ? e.jsx(H, {
                                                        className: "w-3 h-3 mr-1 animate-spin"
                                                    }) : e.jsx(he, {
                                                        className: "w-3 h-3 mr-1"
                                                    }),
                                                    "AI 建议指令"
                                                ]
                                            })
                                        ]
                                    }),
                                    e.jsx(G, {
                                        placeholder: "例如：描写主角进入酒馆时的心理活动，或者增加一段关于环境的描写...",
                                        value: x,
                                        onChange: (P)=>h(P.target.value),
                                        onBlur: X,
                                        rows: 3,
                                        className: "resize-none"
                                    })
                                ]
                            }),
                            p === "user_polish" && e.jsxs("div", {
                                className: "space-y-2",
                                children: [
                                    e.jsx(W, {
                                        children: "您的初稿"
                                    }),
                                    e.jsx(G, {
                                        placeholder: "在这里输入您的草稿，AI 将为您进行文学化润色...",
                                        value: m,
                                        onChange: (P)=>f(P.target.value),
                                        onBlur: Q,
                                        rows: 6
                                    })
                                ]
                            }),
                            e.jsxs(j, {
                                onClick: tt,
                                className: "w-full py-6 text-lg font-bold shadow-lg hover:shadow-primary/20 transition-all",
                                children: [
                                    e.jsx(z, {
                                        className: "w-5 h-5 mr-2"
                                    }),
                                    c.length === 0 ? "开始撰写第一章" : "继续撰写下一段"
                                ]
                            })
                        ]
                    })
                }),
                a === "block_confirm" && e.jsxs("div", {
                    className: "flex justify-end gap-3 pt-4 border-t",
                    children: [
                        e.jsxs(j, {
                            variant: "outline",
                            onClick: nt,
                            children: [
                                e.jsx($e, {
                                    className: "w-4 h-4 mr-2"
                                }),
                                "重新生成"
                            ]
                        }),
                        e.jsxs(j, {
                            onClick: st,
                            children: [
                                "接受并继续",
                                e.jsx(F, {
                                    className: "w-4 h-4 ml-2"
                                })
                            ]
                        })
                    ]
                })
            ]
        });
    };
    Pn = ({ sessionId: t })=>{
        const s = Y(o), { runLoop: n } = ce(), r = s.currentSession?.modeState?.currentPhase, a = s.currentSession?.modeState?.currentChapter, i = s.contextManager?.state.historyItems || [], d = s.contextManager?.state.processingItem, u = [
            ...i
        ].reverse().find((c)=>c.type === "novel_chapter_summary"), p = [
            ...i
        ].reverse().find((c)=>c.type === "novel_knowledge_update"), g = async ()=>{
            const c = o.sessionManager;
            c && (c.completeCurrentChapter(), c.enterNextState("completion_check"), await o.updateSessionInDB(), n(t, !0));
        }, S = async ()=>{
            const c = o.sessionManager;
            if (!c) return;
            c.completeCurrentChapter();
            const l = (a?.number || 1) + 1;
            c.initializeNewChapter(l), c.enterNextState("chapter_prep_review"), await o.updateSessionInDB(), n(t, !0);
        }, y = d !== void 0;
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
                u && e.jsxs(O, {
                    className: "p-4",
                    children: [
                        e.jsx("h3", {
                            className: "text-sm font-semibold mb-2",
                            children: "📄 章节摘要"
                        }),
                        e.jsx("div", {
                            className: "text-sm text-muted-foreground whitespace-pre-wrap",
                            children: u.data.summary
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
                                            children: p.data.updates.newEntities.map((c, l)=>e.jsxs("div", {
                                                    className: "text-muted-foreground",
                                                    children: [
                                                        "· ",
                                                        c.name || c.id
                                                    ]
                                                }, l))
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
                                            children: p.data.updates.newEvents.map((c, l)=>e.jsxs("div", {
                                                    className: "text-muted-foreground",
                                                    children: [
                                                        "· ",
                                                        c.description || c.id
                                                    ]
                                                }, l))
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                y && d && e.jsx(O, {
                    className: "p-4",
                    children: e.jsxs("div", {
                        className: "flex items-start gap-3",
                        children: [
                            e.jsx(H, {
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
                r === "re_planning_check" && !y && e.jsxs("div", {
                    className: "flex justify-end gap-3 pt-4 border-t",
                    children: [
                        e.jsx(j, {
                            variant: "outline",
                            onClick: g,
                            children: "完成小说（进入完结流程）"
                        }),
                        e.jsxs(j, {
                            onClick: S,
                            children: [
                                "继续下一章",
                                e.jsx(F, {
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
    On = ({ sessionId: t })=>{
        const s = Y(o), { runLoop: n } = ce(), r = s.currentSession?.modeState?.currentPhase, a = s.currentSession?.modeState?.currentChapter, i = async ()=>{
            const d = o.sessionManager;
            d && (d.initializeNewChapter(1), d.enterNextState("chapter_prep_review"), await o.updateSessionInDB(), n(t, !0));
        };
        return r === "chapter_prep_review" || r === "chapter_prep_foreshadow" || r === "chapter_prep_interest" || r === "chapter_prep_emotion" || r === "chapter_plan_generation" || r === "chapter_plan_approval" ? e.jsx("div", {
            className: "max-w-4xl mx-auto",
            children: e.jsx(En, {
                sessionId: t
            })
        }) : r === "block_write" || r === "block_check" || r === "block_confirm" ? e.jsx("div", {
            className: "max-w-5xl mx-auto",
            children: e.jsx(Mn, {
                sessionId: t
            })
        }) : r === "chapter_check" || r === "chapter_confirm" || r === "chapter_summary_generation" || r === "knowledge_update" || r === "re_planning_check" ? e.jsx("div", {
            className: "max-w-4xl mx-auto",
            children: e.jsx(Pn, {
                sessionId: t
            })
        }) : a ? e.jsx("div", {
            className: "max-w-4xl mx-auto",
            children: e.jsx(O, {
                className: "p-6",
                children: e.jsxs("div", {
                    className: "text-center py-8 text-muted-foreground",
                    children: [
                        e.jsx(H, {
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
                            children: e.jsx(ie, {
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
                        e.jsxs(j, {
                            onClick: i,
                            children: [
                                "开始第一章",
                                e.jsx(F, {
                                    className: "w-4 h-4 ml-2"
                                })
                            ]
                        })
                    ]
                })
            })
        });
    };
    Rn = ()=>{
        const t = Y(o), s = t.currentSession?.modeState?.currentPhase, n = t.contextManager?.state.historyItems || [], r = t.contextManager?.state.processingItem, a = t.currentSession?.modeState?.progressTracking, i = [
            ...n
        ].reverse().find((l)=>l.type === "novel_completion_check"), d = [
            ...n
        ].reverse().find((l)=>l.type === "novel_book_summary"), u = [
            ...n
        ].reverse().find((l)=>l.type === "novel_recommendation"), p = [
            ...n
        ].reverse().find((l)=>l.type === "novel_reading_guide"), g = [
            ...n
        ].reverse().find((l)=>l.type === "novel_author_note"), S = [
            ...n
        ].reverse().find((l)=>l.type === "novel_cover_description"), y = r !== void 0, c = ()=>{
            C.info("导出功能开发中...");
        };
        return s === "completed" ? e.jsxs("div", {
            className: "max-w-4xl mx-auto space-y-6",
            children: [
                e.jsxs(O, {
                    className: "p-8 text-center",
                    children: [
                        e.jsx("div", {
                            className: "w-20 h-20 rounded-full bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center mx-auto mb-4",
                            children: e.jsx(At, {
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
                        e.jsxs(j, {
                            size: "lg",
                            onClick: c,
                            children: [
                                e.jsx(kt, {
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
                u && e.jsxs(O, {
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
                                            children: u.data.shortVersion
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
                                            children: u.data.longVersion
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
                g && e.jsxs(O, {
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
                            children: g.data.note
                        })
                    ]
                }),
                S && e.jsxs(O, {
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
                            children: S.data.description
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
                                    className: `flex items-center gap-3 ${u ? "text-green-600" : "text-muted-foreground"}`,
                                    children: [
                                        u ? e.jsx($, {
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
                                    className: `flex items-center gap-3 ${g ? "text-green-600" : "text-muted-foreground"}`,
                                    children: [
                                        g ? e.jsx($, {
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
                                    className: `flex items-center gap-3 ${S ? "text-green-600" : "text-muted-foreground"}`,
                                    children: [
                                        S ? e.jsx($, {
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
                y && r && e.jsx(O, {
                    className: "p-6",
                    children: e.jsxs("div", {
                        className: "flex items-start gap-3",
                        children: [
                            e.jsx(H, {
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
    lr = (t)=>{
        const [s, n] = T.useState(!1), [r, a] = T.useState(!1), i = Y(o), { data: d = [] } = lt((_)=>_.from({
                s: ct
            })), u = d.find((_)=>_.id === t.sessionId);
        T.useEffect(()=>{
            let _ = !1;
            if (!u) return;
            if (o.currentSession?.id === u.id && o.contextManager) {
                a(!0);
                return;
            }
            return (async ()=>{
                try {
                    await o.loadSession(u), _ || a(!0);
                } catch (h) {
                    console.error("Load session error", h);
                }
            })(), ()=>{
                _ = !0;
            };
        }, [
            u?.id,
            u
        ]);
        const { runLoop: p, startDesign: g } = ce(), S = async ()=>{
            if (s) return;
            const _ = o.sessionManager, x = o.contextManager;
            if (_ && x) {
                n(!0);
                try {
                    _.getActualCurrentPhase(x) === "design_worldview" ? await g() : await p(u.id);
                } finally{
                    n(!1);
                }
            }
        };
        if (!(u && r)) return e.jsxs("div", {
            className: "flex flex-col items-center justify-center h-full text-muted-foreground gap-4",
            children: [
                e.jsx("div", {
                    className: "w-12 h-12 rounded-2xl bg-muted animate-pulse flex items-center justify-center",
                    children: e.jsx(we, {
                        className: "w-6 h-6 opacity-20"
                    })
                }),
                e.jsx("p", {
                    className: "text-xs font-medium tracking-widest uppercase opacity-50",
                    children: "正在加载小说项目..."
                })
            ]
        });
        const y = o.sessionManager && o.contextManager ? o.sessionManager.getActualCurrentUIState(o.contextManager) : i.currentSession?.modeState?.currentUIState || "idle", c = i.currentSession?.modeState?.currentPhase, l = Xs[y], b = ()=>c ? c.startsWith("design_") ? e.jsx(An, {
                sessionId: t.sessionId
            }) : c === "ai_review" || c === "user_revision" ? e.jsx(kn, {
                sessionId: t.sessionId
            }) : c.startsWith("chapter_") || c.startsWith("block_") || c === "re_planning_check" || c === "knowledge_update" ? e.jsx(On, {
                sessionId: t.sessionId
            }) : c === "completion_check" || c.includes("_generation") || c === "completed" ? e.jsx(Rn, {
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
                                    children: e.jsx(ie, {
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
                                            children: l?.label || y
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
                                y === "idle" && e.jsxs(j, {
                                    size: "sm",
                                    onClick: S,
                                    disabled: s,
                                    children: [
                                        e.jsx(Ae, {
                                            className: "w-4 h-4 mr-2"
                                        }),
                                        "开始创作"
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                e.jsx(pt, {
                    className: "flex-1",
                    children: y === "idle" ? e.jsxs("div", {
                        className: "flex flex-col items-center justify-center h-full gap-6 p-8",
                        children: [
                            e.jsx("div", {
                                className: "w-20 h-20 rounded-2xl bg-linear-to-br from-purple-500/10 to-pink-500/10 flex items-center justify-center",
                                children: e.jsx(ie, {
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
                            e.jsxs(j, {
                                size: "lg",
                                onClick: S,
                                disabled: s,
                                className: "mt-4",
                                children: [
                                    e.jsx(Ae, {
                                        className: "w-5 h-5 mr-2"
                                    }),
                                    "开始设计"
                                ]
                            })
                        ]
                    }) : e.jsx("div", {
                        className: "p-4",
                        children: b()
                    })
                }),
                l?.inputEnabled && e.jsx("div", {
                    className: "border-t p-4 bg-muted/30",
                    children: e.jsx("div", {
                        className: "text-xs text-muted-foreground text-center",
                        children: l.placeholder
                    })
                })
            ]
        });
    };
});
export { lr as SessionMainForNovelWriting, __tla };
