// verify_quiz_count.js
// 从 HTML 文件中提取 QUIZ_DATA 对象并统计函数数和题目数
// 方法：找到 "const QUIZ_DATA = {" 和配对的 "};"，提取对象字面量直接求值

const fs = require('fs');
const vm = require('vm');

const html = fs.readFileSync('Excel函数大全.html', 'utf8');
const script = html.substring(html.indexOf('<script>') + 8, html.indexOf('</script>'));

// 找到 QUIZ_DATA 对象的位置
const qMarker = 'const QUIZ_DATA = {';
const qStart = script.indexOf(qMarker);
if (qStart === -1) { console.error('QUIZ_DATA not found'); process.exit(1); }

// 找到配对的大括号（QUIZ_DATA 对象体）
let depth = 0;
let pos = qStart + qMarker.length - 1; // -1 是因为 qMarker 包含 "{"
while (pos < script.length) {
  if (script[pos] === '{') depth++;
  if (script[pos] === '}') {
    depth--;
    if (depth === 0) break;
  }
  pos++;
}
const objEnd = pos; // 指向 QUIZ_DATA 对象的结束 }

// 提取对象字面量（包含花括号）
const objLiteral = script.substring(qStart + qMarker.length - 1, objEnd + 1);

// 在沙箱中求值这个对象字面量
const sb = {};
const ctx = vm.createContext(sb);
vm.runInContext('__tmp__ = ' + objLiteral, ctx);

const QUIZ_DATA = sb.__tmp__;
const names = Object.keys(QUIZ_DATA);
const total = names.reduce((s, k) => s + QUIZ_DATA[k].length, 0);

console.log('有题函数数:', names.length);
console.log('题目总数:', total);
console.log('前5个:', names.slice(0, 5).join(', '));
console.log('最后5个:', names.slice(-5).join(', '));
