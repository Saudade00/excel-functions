const fs = require('fs');
const path = 'A:/workbuddy代码项目/函数工具/Excel函数大全.html';
let html = fs.readFileSync(path, 'utf8');

// 第12批：剩余无题函数（来自之前 list_no_quiz.js 的准确输出）
// 共分3批插入，每批约24个
const batchA = [
  "ERFC","BINOMDIST","CHINV","DEVSQ","EXPONDIST","FDIST","FINV","FACTDOUBLE",
  "GAMMADIST","GAMMAINV","GEOMEAN","HYPGEOMDIST","KURT","LOGINV","LOGNORMDIST",
  "MAXA","MINA","MIRR","MULTINOMIAL","NEGBINOMDIST","NORMDIST","NORMINV",
  "NORMSDIST","PEARSON","PERCENTILE","PERCENTRANK","POISSON","PROB","QUARTILE",
  "SKEW","STANDARDIZE","STDEVA","STDEVP","STDEVPA","TDIST","TINV","TRIMMEAN",
  "TTEST","VAR","VARA","VARP","VARPA","WEIBULL","ZTEST"
];

// 第13批
const batchB = [
  "COUPDAYBS","COUPDAYS","COUPDAYSNC","COUPNCD","COUPNUM","COUPPCD",
  "DISC","DOLLARDE","DOLLARFR","FVSCHEDULE","INTRATE","ISPMT","MDURATION",
  "MIRR","NOMINAL","ODDFPRICE","ODDFYIELD","ODDLPRICE","ODDLYIELD","PPMT",
  "PRICE","PRICEDISC","PRICEMAT","RECEIVED","SLN","SYD","TBILLEQ",
  "TBILLPRICE","TBILLYIELD","VDB","XIRR","XNPV","YIELD","YIELDDISC","YIELDMAT"
];

// 第14批
const batchC = [
  "CALL","EUROCONVERT","COMPLEX","DEC2BIN","DEC2HEX","DEC2OCT","DELTA",
  "ERF","GESTEP","HEX2BIN","HEX2DEC","HEX2OCT","IMARGUMENT","IMLN",
  "IMLOG10","IMLOG2","IMPOWER","OCT2BIN","OCT2DEC","OCT2HEX",
  "CEILING","PRODUCT","SERIESSUM","SIGN","SQRTPI","SUBTOTAL","TRUNC",
  "DSTDEVP","DVAR","DVARP","ERF","ERFC",
  "ISNONTEXT","NA","FINDB","REPLACEB","WEEKNUM","YEARFRAC","ROWS","RTD","XLOOKUP"
];

// 合并所有批次
const allNew = [].concat(batchA, batchB, batchC);
console.log('计划插入函数数:', allNew.length);

// 找到 QUIZ_DATA 范围
const qMarker = 'const QUIZ_DATA = {';
const qStart = html.indexOf(qMarker);
let d = 0, qEnd = qStart + qMarker.length;
while (qEnd < html.length) {
  if (html[qEnd] === '{') d++;
  if (html[qEnd] === '}') { d--; if (d === 0) break; }
  qEnd++;
}
const qInner = html.substring(qStart + qMarker.length, qEnd);

// 已有的函数
const existing = [];
const re = /[\n\r]  "(\w+)":\s*\[/g;
let m;
while ((m = re.exec(qInner)) !== null) existing.push(m[1]);
console.log('已有题函数数:', existing.length);

// 只插入真正缺失的
const toAddNames = allNew.filter(n => !existing.includes(n));
console.log('实际需要插入:', toAddNames.length, '个');

if (toAddNames.length === 0) {
  console.log('全部已存在，无需插入');
  process.exit(0);
}

// 为这些函数生成简单定义题
const newBatch = {};
toAddNames.forEach(name => {
  newBatch[name] = [{ type: 'definition', question: name + ' 函数的作用是什么？', answer: '' }];
});

// 生成 JS 格式字符串（键名不带引号）
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

// 插入位置：qInner 中最后一个 ] 之后
const lastBracket = qInner.lastIndexOf(']');
const insertAt = qStart + qMarker.length + lastBracket + 1;
const before = html.substring(0, insertAt);
const after = html.substring(insertAt);
const newHtml = before + ',\n' + objToJS(newBatch) + after;

// 写入文件
fs.writeFileSync(path, newHtml, 'utf8');
console.log('✅ 已写入文件');

// 统计
const aqStart = newHtml.indexOf(qMarker);
let ad = 0, aqEnd = aqStart + qMarker.length;
while (aqEnd < newHtml.length) {
  if (newHtml[aqEnd] === '{') ad++;
  if (newHtml[aqEnd] === '}') { ad--; if (ad === 0) break; }
  aqEnd++;
}
const aInner = newHtml.substring(aqStart + qMarker.length, aqEnd);
const total = (aInner.match(/type:/g) || []).length;
const fc = (aInner.match(/[\n\r]  "\w+":\s*\[/g) || []).length;
console.log('📊 有题函数数:', fc);
console.log('📊 练习题总数:', total);
