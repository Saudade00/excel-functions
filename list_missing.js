const fs = require('fs');
const html = fs.readFileSync('Excel函数大全.html', 'utf8');

// 提取 FUNCTIONS 数组
const m = html.match(/const FUNCTIONS = (\[[\s\S]*?\]);/);
const functions = JSON.parse(m[1]);
const allNames = functions.map(f => f.name);

// 用正则从 QUIZ_DATA 中提取所有函数名
const qm = html.match(/const QUIZ_DATA = ([\s\S]*?);/);
const quizStr = qm[1];
const keyPattern = /"([A-Z][A-Z0-9_]*)"\s*:/g;
const quizNames = new Set();
let match;
while ((match = keyPattern.exec(quizStr)) !== null) {
  quizNames.add(match[1]);
}

console.log('总函数数:', allNames.length);
console.log('有练习题的函数数量:', quizNames.size);
console.log('没有练习题的函数数量:', allNames.length - quizNames.size);
console.log('');

// 按原顺序输出没有练习题的函数，并附上分类信息
const missing = functions.filter(f => !quizNames.has(f.name));
console.log('=== 没有练习题的函数（含分类）===');
missing.forEach((f, i) => {
  const line = `${f.name}(${f.category})`;
  process.stdout.write(line + (i % 3 === 2 ? '\n' : ', '));
});
if (missing.length % 3 !== 0) console.log('');
