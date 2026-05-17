const fs = require('fs');
const path = require('path');

// 读取 HTML（使用相对路径）
const htmlPath = path.join(__dirname, '../index.html');
const html = fs.readFileSync(htmlPath, 'utf8');

// ── Step 1：找到 QUIZ_DATA 的精确起止位置（括号匹配）───
const defIdx = html.indexOf('const QUIZ_DATA = {');
if (defIdx === -1) { 
  console.error('❌ 找不到 QUIZ_DATA 定义'); 
  process.exit(1); 
}

const bracePos = html.indexOf('{', defIdx);

// 括号匹配：找到真正匹配的 }
let depth = 0;
let endPos = -1;
for (let i = bracePos; i < html.length; i++) {
  if (html[i] === '{') depth++;
  if (html[i] === '}') {
    depth--;
    if (depth === 0) { endPos = i; break; }
  }
}
if (endPos === -1) { 
  console.error('❌ 找不到匹配的 }'); 
  process.exit(1); 
}

console.log('✅ 定位 QUIZ_DATA: 位置', bracePos, '~', endPos);

const before = html.substring(0, bracePos);   // 不包含 '{'
const after  = html.substring(endPos + 1);    // 不包含 '}'（即 '};' 之后的内容）

// ── Step 2：重建 QUIZ_DATA ──
const funcMatch = html.match(/const FUNCTIONS = (\[[\s\S]*?\]);/);
if (!funcMatch) {
  console.error('❌ 找不到 FUNCTIONS 数据');
  process.exit(1);
}

let FUNCTIONS;
try {
  FUNCTIONS = eval(funcMatch[1]);
  console.log('✅ FUNCTIONS 数量：', FUNCTIONS.length);
} catch(e) {
  console.error('❌ 无法解析 FUNCTIONS:', e.message);
  process.exit(1);
}

// 尝试解析已有 QUIZ_DATA（如果能解析就用它作为基础）
let QUIZ_DATA = {};
try {
  const quizText = html.substring(bracePos, endPos + 1);
  QUIZ_DATA = new Function('return (' + quizText + ')')();  // 注意：需要调用函数
  console.log('✅ 已有 QUIZ_DATA 解析成功，函数数量：', Object.keys(QUIZ_DATA).length);
} catch(e) {
  console.log('⚠️ 已有 QUIZ_DATA 解析失败:', e.message, '，将从空对象开始');
  QUIZ_DATA = {};
}

// 提取所有分类（用于生成错误选项）
const categories = [...new Set(FUNCTIONS.map(f => f.category))].filter(c => c);

// 为每个函数确保至少3道题
let added = 0;
FUNCTIONS.forEach(func => {
  if (!func.name || !func.category) return;
  let quizzes = QUIZ_DATA[func.name] || [];

  while (quizzes.length < 3) {
    const wrongCats = categories.filter(c => c !== func.category).sort(() => Math.random()-0.5).slice(0,3);

    // 题型1：分类题
    const q1 = {
      type: "choice",
      question: func.name + " 函数属于哪一类？",
      options: [func.category, ...wrongCats],
      answer: 0,
      explanation: func.name + " 属于 " + func.category + "。"
    };

    // 题型2：定义题（需要 description）
    let q2 = null;
    if (func.description) {
      const otherDescs = FUNCTIONS
        .map(f => f.description)
        .filter(d => d && d !== func.description)
        .sort(() => Math.random()-0.5).slice(0, 3);
      if (otherDescs.length >= 3) {
        q2 = {
          type: "choice",
          question: "以下哪个是 " + func.name + " 函数的正确功能描述？",
          options: [func.description, ...otherDescs],
          answer: 0,
          explanation: func.name + " 函数的功能是：" + func.description
        };
      }
    }

    // 添加不重复的题目
    if (!quizzes.some(q => q.question === q1.question)) {
      quizzes.push(q1); added++;
    } else if (q2 && !quizzes.some(q => q.question === q2.question)) {
      quizzes.push(q2); added++;
    } else {
      break; // 无法添加更多不重复题目
    }
  }

  QUIZ_DATA[func.name] = quizzes;
});

console.log('共添加', added, '道题目');

// ── Step 3：序列化为 JS 对象字符串（保持原有格式）───
// 安全序列化：过滤不能序列化的内容
let jsonStr;
try {
  jsonStr = JSON.stringify(QUIZ_DATA, (key, val) => {
    if (typeof val === 'function') return undefined;
    if (typeof val === 'undefined') return undefined;
    return val;
  }, 2);
  console.log('✅ JSON.stringify 成功，长度：', jsonStr.length);
} catch(e) {
  console.log('❌ JSON.stringify 失败：', e.message);
  // Fallback：手动构建字符串
  jsonStr = '{\n';
  for (const [fn, quizzes] of Object.entries(QUIZ_DATA)) {
    jsonStr += '  "' + fn + '": [\n';
    quizzes.forEach((q, qi) => {
      jsonStr += '    { type:"' + q.type + '"';
      jsonStr += ', question:"' + String(q.question || '').replace(/"/g, '\\"') + '"';
      jsonStr += ', options:[' + (q.options||[]).map(o => '"' + String(o||'').replace(/"/g,'\\"') + '"').join(',') + ']';
      jsonStr += ', answer:' + q.answer;
      jsonStr += ', explanation:"' + String(q.explanation||'').replace(/"/g, '\\"') + '" }';
      jsonStr += (qi < quizzes.length-1 ? ',\n' : '\n');
    });
    jsonStr += '  ]';
    jsonStr += (Object.keys(QUIZ_DATA).indexOf(fn) < Object.keys(QUIZ_DATA).length-1 ? ',\n' : '\n');
  }
  jsonStr += '}';
  console.log('✅ Fallback 手动构建成功');
}

// 去掉函数名的引号（"IF": [ → "IF": [）── 不需要，函数名保持有引号
// 去掉题目对象键名的引号（"type": → type:）
jsonStr = jsonStr.replace(/"type":/g, 'type:');
jsonStr = jsonStr.replace(/"question":/g, 'question:');
jsonStr = jsonStr.replace(/"options":/g, 'options:');
jsonStr = jsonStr.replace(/"answer":/g, 'answer:');
jsonStr = jsonStr.replace(/"explanation":/g, 'explanation:');

// ── Step 4：验证新生成的 jsonStr 是否语法正确 ──
try {
  new Function('return (' + jsonStr + ')')();  // 注意：需要调用函数
  console.log('✅ 新生成的 QUIZ_DATA 语法正确！');
} catch(e) {
  console.error('❌ 语法错误：', e.message);
  const debugPath = path.join(__dirname, '../_debug.txt');
  fs.writeFileSync(debugPath, jsonStr);
  console.error('已写入 _debug.txt:', debugPath);
  process.exit(1);
}

// ── Step 5：拼接回 HTML ──
const newHtml = before + jsonStr + ';\n' + after;
fs.writeFileSync(htmlPath, newHtml);
console.log('✅ 已更新 HTML 文件:', htmlPath);

// ── Step 6：最终统计 ──
let f1=0, f2=0, f3=0;
for (const [k,v] of Object.entries(QUIZ_DATA)) {
  if (v.length===1) f1++;
  else if (v.length===2) f2++;
  else if (v.length>=3) f3++;
}
console.log('\n最终分布：1道题=%d, 2道题=%d, 3道题以上=%d', f1, f2, f3);
console.log('总函数数：', Object.keys(QUIZ_DATA).length);
console.log('总题目数：', Object.values(QUIZ_DATA).reduce((a,b)=>a+b.length, 0));
