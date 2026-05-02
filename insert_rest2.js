const fs = require('fs');
const path = 'A:/workbuddy代码项目/函数工具/Excel函数大全.html';
let html = fs.readFileSync(path, 'utf8');

// 找到 QUIZ_DATA 范围
const qMarker = 'const QUIZ_DATA = {';
const qStart = html.indexOf(qMarker);
let d = 0, qEnd = qStart + qMarker.length;
while (qEnd < html.length) {
  if (html[qEnd] === '{') d++;
  if (html[qEnd] === '}') { d--; if (d === 0) break; }
  qEnd++;
}
const qInner = html.substring(qStart + qMarker.length, qEnd);

// 已有题函数
const existing = [];
const re = /[\n\r]  "(\w+)":\s*\[/g;
let m;
while ((m = re.exec(qInner)) !== null) existing.push(m[1]);
console.log('已有题函数数:', existing.length);

// 从 FUNCTIONS 数组提取所有函数名（用正则，不 parse JSON）
const fMarker = 'const FUNCTIONS = [';
const fStart = html.indexOf(fMarker);
let fd = 0, fEnd = fStart + fMarker.length;
while (fEnd < html.length) {
  if (html[fEnd] === '[') fd++;
  if (html[fEnd] === ']') { fd--; if (fd === 0) break; }
  fEnd++;
}
const fStr = html.substring(fStart + fMarker.length, fEnd).trim();
// 用正则提取所有 name 字段
const nameRe = /"name":"(\w+)"/g;
const allNames = [];
while ((m = nameRe.exec(fStr)) !== null) allNames.push(m[1]);
console.log('FUNCTIONS 总数:', allNames.length);

// 无题函数
const noQuiz = allNames.filter(n => !existing.includes(n));
console.log('无题函数数:', noQuiz.length);
console.log('无题函数列表:', noQuiz.join(', '));

// 为每个无题函数生成1道定义题（question 和 answer 用通用格式）
// answer 留空字符串，让用户后续补充
const newBatch = {};
noQuiz.forEach(name => {
  newBatch[name] = [{ type: 'definition', question: name + ' 函数的作用是什么？', answer: '' }];
});
console.log('待插入函数数:', Object.keys(newBatch).length);

// 生成 JS 格式字符串（键名不带引号，与现有格式一致）
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

// 找到 qInner 中最后一个 ] 的位置
const lastBracket = qInner.lastIndexOf(']');
const insertAt = qStart + qMarker.length + lastBracket + 1;
const before = html.substring(0, insertAt);
const after = html.substring(insertAt);
const newHtml = before + ',\n' + objToJS(newBatch) + after;

// 写入文件
fs.writeFileSync(path, newHtml, 'utf8');
console.log('✅ 已写入文件');

// 统计
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
