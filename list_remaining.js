// list_remaining.js
// 列出所有还没有练习题的函数（按 FUNCTIONS 数组顺序）

const fs = require('fs');
const html = fs.readFileSync('Excel函数大全.html', 'utf8');

// 解析 FUNCTIONS 数组
const m = html.match(/(const FUNCTIONS = )(\[[\s\S]*?\])(;\s*\n)/);
const arr = JSON.parse(m[2]);

// 提取 QUIZ_DATA 中已有的函数名
const q = html.indexOf('const QUIZ_DATA = {');
let d = 0, i = q;
while (i < html.length) {
  if (html[i] === '{') d++;
  if (html[i] === '}') { d--; if (d === 0) break; }
  i++;
}
const inner = html.substring(q + 'const QUIZ_DATA = '.length, i);
const re = /[\n\r]  "(\w+)":\s*\[/g;
let mm, names = [];
while ((mm = re.exec(inner)) !== null) names.push(mm[1]);

const missing = arr.filter(f => !names.includes(f.name));
console.log('剩余无题函数:', missing.length);
console.log('\n前60个（按分类分组）:');
let lastCat = '';
missing.slice(0, 60).forEach((f, idx) => {
  if (f.category !== lastCat) {
    console.log(`\n[${f.category}]`);
    lastCat = f.category;
  }
  console.log(`  ${(idx+1).toString().padStart(2)}. ${f.name}`);
});
