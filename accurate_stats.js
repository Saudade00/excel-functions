const fs = require('fs');
const html = fs.readFileSync('A:/workbuddy代码项目/函数工具/Excel函数大全.html', 'utf8');

// 1. 统计 FUNCTIONS 数组中的函数名
const fMarker = 'const FUNCTIONS = [';
const fStart = html.indexOf(fMarker);
let fd = 0, fEnd = fStart + fMarker.length;
while (fEnd < html.length) {
  if (html[fEnd] === '[') fd++;
  if (html[fEnd] === ']') { fd--; if (fd === 0) break; }
  fEnd++;
}
const fStr = html.substring(fStart + fMarker.length, fEnd).trim();
// 用正则提取所有 "name":"XXX"
const nameRe = /"name":"(\w+)"/g;
let m;
const funcNames = [];
while ((m = nameRe.exec(fStr)) !== null) funcNames.push(m[1]);
console.log('FUNCTIONS 数组函数总数:', funcNames.length);

// 2. 统计 QUIZ_DATA 中的函数名（只匹配 "函数名": [ 格式）
const qMarker = 'const QUIZ_DATA = {';
const qStart = html.indexOf(qMarker);
let d = 0, qEnd = qStart + qMarker.length;
while (qEnd < html.length) {
  if (html[qEnd] === '{') d++;
  if (html[qEnd] === '}') { d--; if (d === 0) break; }
  qEnd++;
}
const qInner = html.substring(qStart + qMarker.length, qEnd);
const quizRe = /[\n\r]+\s+"(\w+)":\s*\[/g;
const quizNames = [];
while ((m = quizRe.exec(qInner)) !== null) quizNames.push(m[1]);
console.log('QUIZ_DATA 中条目数（含重复）:', quizNames.length);

// 3. 去重
const uniqueNames = [...new Set(quizNames)];
console.log('去重后函数数:', uniqueNames.length);
console.log('覆盖率:', (uniqueNames.length / funcNames.length * 100).toFixed(1) + '%');

// 4. 找出不在 FUNCTIONS 数组中的函数名（垃圾数据）
const garbage = uniqueNames.filter(n => !funcNames.includes(n));
console.log('不在 FUNCTIONS 中的函数名（垃圾）:', garbage.length > 0 ? '\n' + garbage.join(', ') : '无');

// 5. 找出缺失的函数（FUNCTIONS 有，但 QUIZ_DATA 没有）
const missing = funcNames.filter(n => !uniqueNames.includes(n));
console.log('缺失函数数:', missing.length);
if (missing.length > 0 && missing.length <= 20) {
  console.log('缺失函数（前20）:', missing.slice(0, 20).join(', '));
}
