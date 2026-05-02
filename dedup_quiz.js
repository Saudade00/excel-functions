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

// 2. 提取 QUIZ_DATA 对象内容（不包括外层的 {}）
const inner = html.substring(qStart + qMarker.length, qEnd);
console.log('inner 长度:', inner.length);

// 3. 用 eval 解析（会自动去重重复键名）
// 注意：inner 中的键名有的带引号、有的不带，eval 可以处理
const QUIZ_DATA = eval('(' + inner + ')');
const keys = Object.keys(QUIZ_DATA);
console.log('去重后函数数:', keys.length);

// 4. 重新生成 QUIZ_DATA 字符串（JS 格式，键名不带引号）
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

const newInner = objToJS(QUIZ_DATA);

// 5. 替换文件中的旧 QUIZ_DATA 内容
const newHtml = html.substring(0, qStart + qMarker.length)
  + newInner
  + html.substring(qEnd);

// 6. 写回文件
fs.writeFileSync(path, newHtml, 'utf8');
console.log('✅ 已去重并写回文件');

// 7. 统计
const re = /[\n\r]+\s+"(\w+)":\s*\[/g;
let m, names = [];
while ((m = re.exec(newInner)) !== null) names.push(m[1]);
const total = (newInner.match(/type:/g) || []).length;
console.log('📊 去重后有题函数数:', names.length);
console.log('📊 练习题总数:', total);
