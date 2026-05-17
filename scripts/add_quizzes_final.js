const fs = require('fs');
const path = require('path');

const htmlPath = path.join(__dirname, '../index.html');
console.log('📄 读取文件:', htmlPath);
const html = fs.readFileSync(htmlPath, 'utf8');

// 提取 FUNCTIONS 数组
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

// 提取 QUIZ_DATA 对象
const quizMatch = html.match(/const QUIZ_DATA = (\{[\s\S]*?\});/);
let QUIZ_DATA = {};
if (quizMatch) {
  try {
    // 使用 new Function 而不是 eval，更安全
    QUIZ_DATA = new Function('return (' + quizMatch[1] + ')')();
    console.log('✅ QUIZ_DATA 数量：', Object.keys(QUIZ_DATA).length);
  } catch(e) {
    console.log('⚠️ 无法解析 QUIZ_DATA:', e.message, '，将从空对象开始');
  }
} else {
  console.log('⚠️ 找不到 QUIZ_DATA，将从空对象开始');
}

// 为所有少于3道题的函数补充题目
let addedCount = 0;
const categories = [...new Set(FUNCTIONS.map(f => f.category))].filter(c => c);

FUNCTIONS.forEach(func => {
  if (!func.name || !func.category) return;
  
  let quizzes = QUIZ_DATA[func.name] || [];
  
  while (quizzes.length < 3) {
    // 生成分类题
    const wrongCats = categories.filter(c => c !== func.category).sort(() => Math.random() - 0.5).slice(0, 3);
    const quiz = {
      type: "choice",
      question: `${func.name} 函数属于哪一类？`,
      options: [func.category, ...wrongCats],
      answer: 0,
      explanation: `${func.name} 属于 ${func.category}。`
    };
    
    // 检查是否重复
    const exists = quizzes.some(q => q.question === quiz.question);
    if (!exists) {
      quizzes.push(quiz);
      addedCount++;
    } else {
      break;
    }
  }
  
  QUIZ_DATA[func.name] = quizzes;
});

console.log('共添加了 ' + addedCount + ' 道题目');

// 将 QUIZ_DATA 转换为字符串（保持原有格式）
let newQuizStr = '{\n';
const funcNames = Object.keys(QUIZ_DATA);

funcNames.forEach((funcName, idx) => {
  const quizzes = QUIZ_DATA[funcName];
  newQuizStr += '  "' + funcName + '": [\n';
  
  quizzes.forEach((q, qIdx) => {
    let qStr = '    { type:"' + String(q.type || '') + '"';
    qStr += ', question:"' + String(q.question || '').replace(/"/g, '\\"') + '"';
    
    // 处理 options 数组
    const opts = (q.options || []).map(o => String(o || ''));
    qStr += ', options:[' + opts.map(o => '"' + o.replace(/"/g, '\\"') + '"').join(',') + ']';
    
    qStr += ', answer:' + q.answer;
    qStr += ', explanation:"' + String(q.explanation || '').replace(/"/g, '\\"') + '" }';
    
    if (qIdx < quizzes.length - 1) qStr += ',';
    newQuizStr += qStr + '\n';
  });
  
  newQuizStr += '  ]';
  if (idx < funcNames.length - 1) newQuizStr += ',';
  newQuizStr += '\n';
});

newQuizStr += '}';

// 替换 HTML 中的 QUIZ_DATA
const newHtml = html.replace(/const QUIZ_DATA = \{[\s\S]*?\};\s*/, 'const QUIZ_DATA = ' + newQuizStr + ';\n');

// 写入文件
fs.writeFileSync(htmlPath, newHtml);

console.log('✅ 已更新 HTML 文件');

// 验证语法
try {
  const testData = new Function('return (' + newQuizStr + ')')();  // 需要调用函数
  console.log('✅ QUIZ_DATA 语法正确！');
  
  // 统计
  let f1 = 0, f2 = 0, f3 = 0, f5plus = 0;
  for (const [k, v] of Object.entries(testData)) {
    if (v.length === 1) f1++;
    else if (v.length === 2) f2++;
    else if (v.length === 3) f3++;
    else if (v.length >= 5) f5plus++;
  }
  console.log('\n📊 更新后的题目分布：');
  console.log('  1道题：', f1);
  console.log('  2道题：', f2);
  console.log('  3道题：', f3);
  console.log('  5道题以上：', f5plus);
  console.log('  总函数数：', Object.keys(testData).length);
  console.log('  总题目数：', Object.values(testData).reduce((a,b)=>a+b.length, 0));
} catch(e) {
  console.error('❌ 语法错误：', e.message);
  process.exit(1);
}
