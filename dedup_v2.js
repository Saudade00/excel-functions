const fs = require('fs');
const path = 'A:/workbuddy代码项目/函数工具/Excel函数大全.html';
let html = fs.readFileSync(path, 'utf8');

// 1. 找到 QUIZ_DATA 对象范围
const qMarker = 'const QUIZ_DATA = {';
const qStart = html.indexOf(qMarker);
let d = 0, qEnd = qStart + qMarker.length;
while (qEnd < html.length) {
  if (html[qEnd] === '{') d++;
  if (html[qEnd] === '}') { d--; if (d === 0) break; }
  qEnd++;
}
console.log('QUIZ_DATA 范围:', qStart, '-', qEnd);

// 2. 提取 QUIZ_DATA 内层的文本（不包括外层的 {}）
const inner = html.substring(qStart + qMarker.length, qEnd);
console.log('inner 长度:', inner.length);

// 3. 用正则+栈提取每个函数条目
//    匹配模式：换行 + 空格 + "函数名": [ ... ]
const entries = []; // 每个元素：{ name, start, end }
let idx = 0;
const entryRe = /[\n\r]+\s+"(\w+)":\s*\[/g;
let m;
while ((m = entryRe.exec(inner)) !== null) {
  const name = m[1];
  const bodyStart = m.index + m[0].length - 1; // [ 的位置
  // 找到匹配的 ]
  let depth = 1, pos = bodyStart + 1;
  while (pos < inner.length && depth > 0) {
    if (inner[pos] === '[') depth++;
    if (inner[pos] === ']') { depth--; if (depth === 0) break; }
    pos++;
  }
  const bodyEnd = pos; // ] 的位置
  entries.push({ name, start: m.index, end: pos + 1 });
}
console.log('提取到条目数:', entries.length);

// 4. 去重：只保留每个函数名第一次出现
const seen = {};
const keep = [];
entries.forEach(e => {
  if (!seen[e.name]) { seen[e.name] = true; keep.push(e); }
  else { console.log('去重，删除重复:', e.name); }
});
console.log('去重后条目数:', keep.length);

// 5. 重新组装 inner（按原顺序，只保留第一次出现）
//    方法：遍历 keep，从 inner 中提取每个条目，然后拼接
let newInner = '';
for (let i = 0; i < keep.length; i++) {
  const e = keep[i];
  newInner += inner.substring(e.start, e.end);
  if (i < keep.length - 1) newInner += ',';
  newInner += '\n';
}
console.log('newInner 长度:', newInner.length);

// 6. 替换文件中的 QUIZ_DATA 内容
const newHtml = html.substring(0, qStart + qMarker.length)
  + newInner
  + html.substring(qEnd);

// 7. 写回文件
fs.writeFileSync(path, newHtml, 'utf8');
console.log('✅ 已去重并写回文件');

// 8. 统计
const reCount = /[\n\r]+\s+"(\w+)":\s*\[/g;
let names = [];
while ((m = reCount.exec(newInner)) !== null) names.push(m[1]);
const total = (newInner.match(/type:/g) || []).length;
console.log('📊 有题函数数:', names.length);
console.log('📊 练习题总数:', total);
