const fs = require('fs');
const vm = require('vm');
const html = fs.readFileSync('Excel函数大全.html', 'utf8');

const scriptMatch = html.match(/<script>([\s\S]*?)<\/script>/);
if (!scriptMatch) { console.log('未找到 script'); process.exit(1); }
const script = scriptMatch[1];

const sandbox = {
  localStorage: { _d:{}, getItem(k){ return this._d[k]||null; }, setItem(k,v){ this._d[k]=String(v); } },
  document: {
    getElementById(){ return { style:{}, innerHTML:'' }; },
    querySelector(){ return { style:{}, classList:{ add(){}, remove(){} }, innerHTML:'' }; },
    querySelectorAll(){ return []; }
  },
  window: {},
  console: { log(){}, warn(){}, error(){} }
};
sandbox.window = sandbox;

try {
  vm.createContext(sandbox);
  vm.runInContext(script, sandbox);
  const q = sandbox.QUIZ_DATA;
  if (!q) { console.log('QUIZ_DATA 未定义'); process.exit(1); }
  const fns = Object.keys(q);
  let total = 0;
  fns.forEach(fn => total += q[fn].length);
  console.log('有练习题的函数数:', fns.length);
  console.log('练习题总数:', total);
  console.log('\n前10个函数:', fns.slice(0,10).join(', '));
  console.log('后10个函数:', fns.slice(-10).join(', '));
} catch(e) {
  console.log('执行错误:', e.message);
  process.exit(1);
}
