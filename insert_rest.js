const fs = require('fs');
const path = 'A:/workbuddy代码项目/函数工具/Excel函数大全.html';
let html = fs.readFileSync(path, 'utf8');

// 1. 解析 FUNCTIONS 数组（JSON 格式）
const fMarker = 'const FUNCTIONS = [';
const fStart = html.indexOf(fMarker);
let fd = 0, fEnd = fStart + fMarker.length;
while (fEnd < html.length) {
  if (html[fEnd] === '[') fd++;
  if (html[fEnd] === ']') { fd--; if (fd === 0) break; }
  fEnd++;
}
const funcStr = html.substring(fStart + fMarker.length, fEnd).trim();
const FUNCTIONS = JSON.parse('[' + funcStr + ']');
console.log('FUNCTIONS 总数:', FUNCTIONS.length);

// 2. 解析 QUIZ_DATA 中已有函数名
const qMarker = 'const QUIZ_DATA = {';
const qStart = html.indexOf(qMarker);
let d = 0, qEnd = qStart + qMarker.length;
while (qEnd < html.length) {
  if (html[qEnd] === '{') d++;
  if (html[qEnd] === '}') { d--; if (d === 0) break; }
  qEnd++;
}
const qInner = html.substring(qStart + qMarker.length, qEnd);
const quizNames = [];
const re = /[\n\r]  "(\w+)":\s*\[/g;
let m;
while ((m = re.exec(qInner)) !== null) quizNames.push(m[1]);
console.log('已有题函数数:', quizNames.length);

// 3. 找出无题函数，并生成定义题
const noQuiz = FUNCTIONS.filter(f => !quizNames.includes(f.name));
console.log('无题函数数:', noQuiz.length);

const newBatch = {};
noQuiz.forEach(f => {
  // 生成1道定义题
  const q = f.name + ' 函数的作用是什么？';
  const a = f.description || '（暂无说明）';
  newBatch[f.name] = [{ type: 'definition', question: q, answer: a }];
});
console.log('待插入函数数:', Object.keys(newBatch).length);

// 4. 生成 JS 格式字符串（键名不带引号，与现有格式一致）
function objToJS(obj) {
  const entries = Object.entries(obj);
  let s = '';
  entries.forEach(([k, v], i) => {
    s += '  "' + k + '": ' + JSON.stringify(v, null, 2)
      .replace(/"(\w+)":/g, '$1:')
      .replace(/\n/g, '\n  ') + (i < entries.length - 1 ? ',' : '') + '\n';
  });
  return s;
}

// 5. 找到插入位置（qInner 中最后一个 ] 之后）
const lastBracket = qInner.lastIndexOf(']');
const insertAt = qStart + qMarker.length + lastBracket + 1;
const before = html.substring(0, insertAt);
const after = html.substring(insertAt);
const insertStr = ',\n' + objToJS(newBatch);
const newHtml = before + insertStr + after;

// 6. 直接写入，跳过 JS 验证
fs.writeFileSync(path, newHtml, 'utf8');
console.log('✅ 已写入文件');

// 7. 统计结果
const aqStart = newHtml.indexOf(qMarker);
let ad = 0, aqEnd = aqStart + qMarker.length;
while (aqEnd < newHtml.length) {
  if (newHtml[aqEnd] === '{') ad++;
  if (newHtml[aqEnd] === '}') { ad--; if (ad === 0) break; }
  aqEnd++;
}
const aInner = newHtml.substring(aqStart + qMarker.length, aqEnd);
const total = (aInner.match(/type:/g) || []).length;
const funcCount = (aInner.match(/[\n\r]  "\w+":\s*\[/g) || []).length;
console.log('📊 有题函数数:', funcCount);
console.log('📊 练习题总数:', total);
