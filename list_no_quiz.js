const fs = require('fs');
const html = fs.readFileSync('A:/workbuddy代码项目/函数工具/Excel函数大全.html', 'utf8');

// 找到 FUNCTIONS 和 QUIZ_DATA 的位置
const fMarker = 'const FUNCTIONS = [';
const qMarker = 'const QUIZ_DATA = {';
const fStart = html.indexOf(fMarker);
const qStart = html.indexOf(qMarker);

console.log('FUNCTIONS 开始:', fStart);
console.log('QUIZ_DATA 开始:', qStart);

// 在 fStart 和 qStart 之间查找所有 {"name":"XXX"} 模式
const range = html.substring(fStart, qStart);
console.log('范围长度:', range.length);

// 用正则提取所有函数名和分类
const funcRe = /\{"name":"(\w+)","description":"([^"]*)","category":"([^"]*)"/g;
let m;
const allFuncs = [];
while ((m = funcRe.exec(range)) !== null) {
  allFuncs.push({ name: m[1], desc: m[2], category: m[3] });
}
console.log('\nFUNCTIONS 数组函数总数:', allFuncs.length);

// 提取 QUIZ_DATA 中有题的函数
const qEnd = html.indexOf('};', qStart);
const qInner = html.substring(qStart + 'const QUIZ_DATA = '.length, qEnd);
const quizNames = [];
const quizRe = /[\n\r]  "(\w+)":\s*\[/g;
let m2;
while ((m2 = quizRe.exec(qInner)) !== null) quizNames.push(m2[1]);
console.log('QUIZ_DATA 中有题函数数:', quizNames.length);

// 找出无题函数
const noQuiz = allFuncs.filter(f => !quizNames.includes(f.name));
console.log('无题函数数:', noQuiz.length);

// 按分类分组
const byCat = {};
noQuiz.forEach(f => {
  if (!byCat[f.category]) byCat[f.category] = [];
  byCat[f.category].push(f.name);
});

console.log('\n=== 按分类列出无题函数 ===');
const cats = Object.keys(byCat).sort();
for (const cat of cats) {
  console.log('\n【' + cat + '】(' + byCat[cat].length + '个):');
  const names = byCat[cat];
  for (let i = 0; i < names.length; i += 8) {
    console.log('  ' + names.slice(i, i + 8).join(', '));
  }
}

// 统计题目总数
const totalQuizzes = (qInner.match(/\{ type:/g) || []).length;
console.log('\n=== 统计汇总 ===');
console.log('FUNCTIONS 数组函数总数:', allFuncs.length);
console.log('有题函数数:', quizNames.length);
console.log('无题函数数:', noQuiz.length);
console.log('练习题总数:', totalQuizzes);
console.log('覆盖率:', (quizNames.length / allFuncs.length * 100).toFixed(1) + '%');

// 输出无题函数名（用于生成练习题）
console.log('\n=== 无题函数名列表（用于批处理）===');
noQuiz.forEach((f, i) => {
  process.stdout.write(f.name + (i < noQuiz.length - 1 ? ', ' : '\n'));
});
