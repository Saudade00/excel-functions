// verify_count.js
// 统计 QUIZ_DATA 中有题函数数和题目总数（正则方式）

const fs = require('fs');
const html = fs.readFileSync('Excel函数大全.html', 'utf8');

const q = html.indexOf('const QUIZ_DATA = {');
if (q === -1) { console.error('QUIZ_DATA not found'); process.exit(1); }

let d = 0, i = q;
while (i < html.length) {
  if (html[i] === '{') d++;
  if (html[i] === '}') { d--; if (d === 0) break; }
  i++;
}
const inner = html.substring(q + 'const QUIZ_DATA = '.length, i);

// 匹配 "FUNC": [ 格式的函数名
const re = /[\n\r]  "(\w+)":\s*\[/g;
let m, names = [];
while ((m = re.exec(inner)) !== null) names.push(m[1]);

// 统计题目总数
const typeRe = /\{ type:/g;
const total = (inner.match(typeRe) || []).length;

console.log('有题函数数:', names.length);
console.log('题目总数:', total);
console.log('前5个:', names.slice(0, 5).join(', '));
console.log('最后10个:', names.slice(-10).join(', '));

// 验证第六批
const batch6 = ['AVERAGEIFS','CEILING','CHAR','CHOOSE','CLEAN','CODE','COLUMN','COLUMNS','COMBIN','CONCATENATE','COS','COSH','COUNT','COUNTA','COUNTBLANK','COUNTIF','DATE','DAY','DAYS','DATEDIF','DATEVALUE','DB','DCOUNT','DCOUNTA','DGET','DMAX','DMIN','DPRODUCT','DSTDEV','DSUM'];
const found = batch6.filter(n => names.includes(n));
console.log('\n第六批已插入:', found.length, '/ 30');
if (found.length < 30) console.log('未插入:', batch6.filter(n => !names.includes(n)).join(', '));
