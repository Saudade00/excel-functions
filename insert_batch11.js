const fs = require('fs');
const path = 'A:/workbuddy代码项目/函数工具/Excel函数大全.html';
let html = fs.readFileSync(path, 'utf8');

// 第十一批：30个无题函数（JS格式，键名不带引号）
const newBatch = {
  "ERFC": [{ type: "definition", question: "ERFC 函数与 ERF 函数的关系是什么？", answer: "ERFC(x) = 1 - ERF(x)，即互补误差函数" }],
  "BINOMDIST": [{ type: "definition", question: "BINOMDIST 函数计算什么？", answer: "返回一元二项式分布的概率" }],
  "CHINV": [{ type: "definition", question: "CHINV 函数返回什么？", answer: "返回 χ²（卡方）分布的反函数（右尾概率对应的卡方值）" }],
  "DEVSQ": [{ type: "definition", question: "DEVSQ 函数计算什么？", answer: "返回数据点与各自均值偏差的平方和" }],
  "EXPONDIST": [{ type: "definition", question: "EXPONDIST 函数用于什么分布？", answer: "返回指数分布的值" }],
  "FDIST": [{ type: "definition", question: "FDIST 函数返回什么？", answer: "返回 F 概率分布的值" }],
  "FINV": [{ type: "definition", question: "FINV 函数的作用是什么？", answer: "返回 F 概率分布的反函数值" }],
  "FACTDOUBLE": [{ type: "definition", question: "FACTDOUBLE 函数计算什么？", answer: "返回参数的双阶乘（n!!）" }],
  "GAMMADIST": [{ type: "definition", question: "GAMMADIST 函数返回什么？", answer: "返回伽玛分布的函数值" }],
  "GAMMAINV": [{ type: "definition", question: "GAMMAINV 函数的作用是什么？", answer: "返回伽玛分布累积函数的反函数值" }],
  "GEOMEAN": [{ type: "definition", question: "GEOMEAN 函数计算什么？", answer: "返回正数数组的几何平均值" }],
  "HYPGEOMDIST": [{ type: "definition", question: "HYPGEOMDIST 函数用于什么分布？", answer: "返回超几何分布的概率" }],
  "KURT": [{ type: "definition", question: "KURT 函数测量什么？", answer: "返回数据集的峰度系数" }],
  "LOGINV": [{ type: "definition", question: "LOGINV 函数返回什么？", answer: "返回对数正态分布的反函数值" }],
  "LOGNORMDIST": [{ type: "definition", question: "LOGNORMDIST 函数用于什么分布？", answer: "返回对数正态分布的累积函数值" }],
  "MAXA": [{ type: "definition", question: "MAXA 函数与 MAX 的区别是什么？", answer: "MAXA 可以将逻辑值和文本计入（TRUE=1，FALSE=0，文本=0），MAX 只计算数字" }],
  "MINA": [{ type: "definition", question: "MINA 函数与 MIN 的区别是什么？", answer: "MINA 可以将逻辑值和文本计入，MIN 只计算数字" }],
  "MULTINOMIAL": [{ type: "definition", question: "MULTINOMIAL 函数计算什么？", answer: "返回多项式的阶乘商，即 (sum of values)!/(product of factorials)" }],
  "NEGBINOMDIST": [{ type: "definition", question: "NEGBINOMDIST 函数用于什么分布？", answer: "返回负二项式分布的概率" }],
  "NORMDIST": [{ type: "definition", question: "NORMDIST 函数返回什么？", answer: "返回正态分布的累积函数或概率密度函数值" }],
  "NORMINV": [{ type: "definition", question: "NORMINV 函数的作用是什么？", answer: "返回正态分布累积函数的反函数值" }],
  "NORMSDIST": [{ type: "definition", question: "NORMSDIST 函数用于什么？", answer: "返回标准正态分布的累积函数值（均值为0，标准差为1）" }],
  "ODD": [{ type: "definition", question: "ODD 函数的作用是什么？", answer: "将数字向上舍入到最近的奇数" }],
  "PEARSON": [{ type: "definition", question: "PEARSON 函数返回什么？", answer: "返回皮尔逊乘积矩相关系数 r（反映两个数据集的线性相关程度）" }],
  "PERCENTILE": [{ type: "definition", question: "PERCENTILE 函数的作用是什么？", answer: "返回区域中第 k 个百分点的值" }],
  "PERCENTRANK": [{ type: "definition", question: "PERCENTRANK 函数返回什么？", answer: "返回某数值在数据集中出现的百分比排位" }],
  "POISSON": [{ type: "definition", question: "POISSON 函数用于什么分布？", answer: "返回泊松分布的概率" }],
  "PROB": [{ type: "definition", question: "PROB 函数计算什么？", answer: "返回区域中数值落在指定区间内的概率" }]
};

// 找到 QUIZ_DATA 对象范围
const qMarker = 'const QUIZ_DATA = {';
const qStart = html.indexOf(qMarker);
let d = 0, qEnd = qStart + qMarker.length;
while (qEnd < html.length) {
  if (html[qEnd] === '{') d++;
  if (html[qEnd] === '}') { d--; if (d === 0) break; }
  qEnd++;
}
const inner = html.substring(qStart + qMarker.length, qEnd);

// 检查已存在
const existing = [];
const re = /[\n\r]  "(\w+)":\s*\[/g;
let m;
while ((m = re.exec(inner)) !== null) existing.push(m[1]);
console.log('已存在函数数:', existing.length);

// 过滤
const toAdd = {};
let skip = 0;
for (const [k, v] of Object.entries(newBatch)) {
  if (existing.includes(k)) { skip++; continue; }
  toAdd[k] = v;
}
console.log('跳过:', skip, '个，新增:', Object.keys(toAdd).length, '个');
if (Object.keys(toAdd).length === 0) { console.log('无新增，退出'); process.exit(0); }

// 生成 JS 格式字符串（键名不带引号）
function objToJS(obj) {
  const entries = Object.entries(obj);
  let s = '';
  entries.forEach(([k, v], i) => {
    s += '  "' + k + '": ' + JSON.stringify(v, null, 2).replace(/"(\w+)":/g, '$1:').replace(/\n/g, '\n  ') + (i < entries.length - 1 ? ',' : '') + '\n';
  });
  return s;
}

// 找到 inner 中最后一个 ] 位置
const lastBracket = inner.lastIndexOf(']');
const insertAt = qStart + qMarker.length + lastBracket + 1;
const before = html.substring(0, insertAt);
const after = html.substring(insertAt);
const newHtml = before + ',\n' + objToJS(toAdd) + after;

// 直接写入，跳过 JS 验证
fs.writeFileSync(path, newHtml, 'utf8');
console.log('✅ 已写入文件');

// 统计
const aInner = newHtml.substring(newHtml.indexOf(qMarker) + qMarker.length, newHtml.indexOf('};', newHtml.indexOf(qMarker)));
const total = (aInner.match(/type:/g) || []).length;
console.log('📊 练习题总数:', total);
