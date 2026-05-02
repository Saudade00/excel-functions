// insert_batch8.js
// 第八批：向 QUIZ_DATA 插入 30 个新函数的练习题

const fs = require('fs');
const path = 'Excel函数大全.html';
let html = fs.readFileSync(path, 'utf8');

const qMarker = 'const QUIZ_DATA = {';
const qStart = html.indexOf(qMarker);
if (qStart === -1) { console.error('QUIZ_DATA not found'); process.exit(1); }

let depth = 0;
let i = qStart + qMarker.length;
while (i < html.length) {
  if (html[i] === '{') depth++;
  if (html[i] === '}') { depth--; if (depth === 0) break; }
  i++;
}
const objEnd = i;
const inner = html.substring(qStart + qMarker.length, objEnd);
const lastBracket = inner.lastIndexOf(']');
if (lastBracket === -1) { console.error('未找到 ]'); process.exit(1); }
const actualLastBracket = qStart + qMarker.length + lastBracket;

const existingNames = [];
const reKey = /[\n\r]  "(\w+)":\s*\[/g;
let mm;
while ((mm = reKey.exec(inner)) !== null) existingNames.push(mm[1]);
console.log('已有题函数数:', existingNames.length);

const newBatch = {
  "FLOOR": [
    {
      type: "choice",
      question: "FLOOR(2.9) 的返回值是多少？",
      options: ["2", "3", "2.9", "0"],
      answer: 0,
      explanation: "FLOOR(数值,倍数) 将数值向下舍入到指定倍数的最接近值。FLOOR(2.9)=2。"
    }
  ],
  "RADIANS": [
    {
      type: "choice",
      question: "RADIANS(180) 约等于？",
      options: ["3.1416（π）", "180", "0.01745", "57.2958"],
      answer: 0,
      explanation: "RADIANS(角度) 将角度转换为弧度。180°=π≈3.1416 弧度。"
    }
  ],
  "REPT": [
    {
      type: "choice",
      question: 'REPT("-", 5) 返回什么？',
      options: ["-----", "5", "- 5", "错误"],
      answer: 0,
      explanation: "REPT(文本,次数) 将文本重复指定次数。REPT(\"-\",5)=\"-----\"。"
    }
  ],
  "RIGHTB": [
    {
      type: "choice",
      question: "RIGHTB 与 RIGHT 的区别是？",
      options: ["RIGHTB 按字节数提取（双字节字符算2）", "没有区别", "RIGHTB 已弃用", "RIGHTB 只用于英文"],
      answer: 0,
      explanation: "RIGHTB 按字节数提取，中文等双字节字符算2个字节。RIGHT 按字符数提取。"
    }
  ],
  "ROMAN": [
    {
      type: "choice",
      question: "ROMAN(1999) 返回什么？",
      options: ["MCMXCIX", "1999", "XIX", "错误"],
      answer: 0,
      explanation: "ROMAN(阿拉伯数字) 将数字转换为罗马数字。1999=MCMXCIX。"
    }
  ],
  "ROUND": [
    {
      type: "choice",
      question: "ROUND(3.14159, 2) 的返回值是多少？",
      options: ["3.14", "3.1", "3.14159", "3.142"],
      answer: 0,
      explanation: "ROUND(数字,小数位数) 按指定位数四舍五入。ROUND(3.14159,2)=3.14。"
    }
  ],
  "SIN": [
    {
      type: "choice",
      question: "SIN(0) 的返回值是多少？",
      options: ["0", "1", "-1", "0.5"],
      answer: 0,
      explanation: "SIN 是正弦函数。SIN(0)=0，SIN(π/2)=1。"
    }
  ],
  "SQRT": [
    {
      type: "choice",
      question: "SQRT(144) 的返回值是多少？",
      options: ["12", "72", "144", "错误"],
      answer: 0,
      explanation: "SQRT(数字) 返回正数的平方根。√144=12。"
    }
  ],
  "TAN": [
    {
      type: "choice",
      question: "TAN(0) 的返回值是多少？",
      options: ["0", "1", "无穷大", "0.5"],
      answer: 0,
      explanation: "TAN 是正切函数。TAN(0)=0，TAN(π/4)=1。"
    }
  ],
  "TEXT": [
    {
      type: "choice",
      question: 'TEXT(44780, "yyyy/mm/dd") 的作用是？',
      options: ["将日期序列号格式化为文本", "将文本转换为日期", "计算日期差", "返回日期序列号"],
      answer: 0,
      explanation: "TEXT(值,格式) 将数值转换为指定格式的文本。日期序列号 44780 对应 2022/08/04 左右。"
    }
  ],
  "TODAY": [
    {
      type: "choice",
      question: "关于 TODAY 函数，以下说法正确的是？",
      options: ["返回当前日期（不含时间），易失函数", "返回当前日期和时间", "返回当前时间（不含日期）", "已被 NOW 替代"],
      answer: 0,
      explanation: "TODAY() 返回当前日期（序列号，小数部分为0）。是易失函数，每次编辑工作表会重新计算。"
    }
  ],
  "TRIM": [
    {
      type: "choice",
      question: "TRIM 函数的作用是？",
      options: ["删除文本首尾空格，并将中间多个空格合并为一个", "删除文本中所有空格", "删除文本末尾空格", "删除文本开头空格"],
      answer: 0,
      explanation: "TRIM(文本) 删除首尾空格，并将文本中间的多个连续空格合并为一个。"
    }
  ],
  "VALUE": [
    {
      type: "choice",
      question: "VALUE(\"123.45\") 的返回值是多少？",
      options: ["123.45（数字）", "123.45（文本）", "错误", "12345"],
      answer: 0,
      explanation: "VALUE(文本) 将表示数值的文本字符串转换为数值。"
    }
  ],
  "WEEKDAY": [
    {
      type: "choice",
      question: "WEEKDAY 函数返回什么？",
      options: ["日期对应的星期几（1-7）", "日期对应的星期几（0-6）", "日期对应的周数", "日期对应的年份"],
      answer: 0,
      explanation: "WEEKDAY(日期,类型) 返回日期对应的星期几。默认：1=周日，2=周一，...，7=周六。"
    }
  ],
  "YEAR": [
    {
      type: "choice",
      question: "YEAR(\"2025/12/31\") 返回什么？",
      options: ["2025", "12", "31", "错误"],
      answer: 0,
      explanation: "YEAR(日期) 返回日期中的年份。Excel 会自动将文本日期转换为日期序列号。"
    }
  ],
  "CUMIPMT": [
    {
      type: "choice",
      question: "CUMIPMT 函数计算的是什么？",
      options: ["贷款在指定期间累计支付的利息", "贷款在指定期间累计支付的本金", "贷款的现值", "贷款的未来值"],
      answer: 0,
      explanation: "CUMIPMT(利率,期数,现值,起始期,结束期,类型) 返回累计利息。"
    }
  ],
  "CUMPRINC": [
    {
      type: "choice",
      question: "CUMPRINC 与 CUMIPMT 的区别是？",
      options: ["CUMPRINC 返回累计本金，CUMIPMT 返回累计利息", "没有区别", "CUMPRINC 已弃用", "CUMPRINC 计算单期本金"],
      answer: 0,
      explanation: "CUMPRINC 返回贷款在指定期间累计支付的本金，CUMIPMT 返回累计利息。"
    }
  ],
  "DDB": [
    {
      type: "choice",
      question: "DDB 函数使用什么折旧法？",
      options: ["双倍余额递减法", "直线法", "年数总和法", "固定余额递减法"],
      answer: 0,
      explanation: "DDB(成本,残值,寿命,期间,倍数) 使用双倍余额递减法（默认倍数=2）计算折旧。"
    }
  ],
  "DURATION": [
    {
      type: "choice",
      question: "DURATION 函数计算的是什么？",
      options: ["债券的麦考利久期", "债券的到期收益率", "债券的现值", "债券的应计利息"],
      answer: 0,
      explanation: "DURATION(结算日,到期日,息票率,收益率,频率) 返回债券的麦考利久期（以年为单位）。"
    }
  ],
  "EFFECT": [
    {
      type: "choice",
      question: "EFFECT 函数的作用是？",
      options: ["将名义年利率转换为实际年利率", "将实际年利率转换为名义年利率", "计算贷款的利率", "计算存款的利息"],
      answer: 0,
      explanation: "EFFECT(名义利率,复利次数) 返回实际年利率。例如 EFFECT(0.12,12)=12.68%。"
    }
  ],
  "FV": [
    {
      type: "choice",
      question: "FV 函数返回什么？",
      options: ["投资的未来值", "投资的现值", "投资的利息", "投资的本金"],
      answer: 0,
      explanation: "FV(利率,期数,每期付款,现值,类型) 返回基于固定利率和等额分期付款的未来值。"
    }
  ],
  "IPMT": [
    {
      type: "choice",
      question: "IPMT 与 PPMT 的区别是？",
      options: ["IPMT 返回某期支付的利息，PPMT 返回某期支付的本金", "没有区别", "IPMT 已弃用", "IPMT 计算总利息"],
      answer: 0,
      explanation: "IPMT(利率,期数,现值,类型) 返回指定期数内支付的利息，PPMT 返回指定期数内支付的本金。"
    }
  ],
  "IRR": [
    {
      type: "choice",
      question: "IRR 函数计算的是什么？",
      options: ["一系列现金流的内部收益率", "一系列现金流的净现值", "一系列现金流的未来值", "一系列现金流的现值指数"],
      answer: 0,
      explanation: "IRR(现金流范围,预估值) 返回一系列定期现金流的内部收益率（使净现值为0的利率）。"
    }
  ],
  "MATCH": [
    {
      type: "choice",
      question: "MATCH 与 LOOKUP 的主要区别是？",
      options: ["MATCH 返回位置，LOOKUP 返回值", "没有区别", "MATCH 已弃用", "LOOKUP 返回位置"],
      answer: 0,
      explanation: "MATCH 返回查找值在数组中的相对位置，LOOKUP 返回数组中最接近的匹配值。"
    }
  ],
  "NPER": [
    {
      type: "choice",
      question: "NPER 函数计算的是什么？",
      options: ["投资的期数", "投资的现值", "投资的未来值", "投资的利率"],
      answer: 0,
      explanation: "NPER(利率,每期付款,现值,未来值,类型) 返回投资的期数。"
    }
  ],
  "PMT": [
    {
      type: "choice",
      question: "PMT 函数返回什么？",
      options: ["贷款的每期付款额", "贷款的现值", "贷款的未来值", "贷款的利率"],
      answer: 0,
      explanation: "PMT(利率,期数,现值,未来值,类型) 返回基于固定利率和等额分期付款的每期付款额。"
    }
  ],
  "PV": [
    {
      type: "choice",
      question: "PV 函数返回什么？",
      options: ["投资的现值", "投资的未来值", "投资的期数", "投资的利率"],
      answer: 0,
      explanation: "PV(利率,期数,每期付款,未来值,类型) 返回投资的现值（未来现金流的当前价值）。"
    }
  ],
  "RATE": [
    {
      type: "choice",
      question: "RATE 函数计算的是什么？",
      options: ["年金的每期利率", "年金的期数", "年金的现值", "年金的未来值"],
      answer: 0,
      explanation: "RATE(期数,每期付款,现值,未来值,类型,预估值) 返回年金的每期利率。"
    }
  ]
};

const toInsert = {};
for (const [k, v] of Object.entries(newBatch)) {
  if (!existingNames.includes(k)) toInsert[k] = v;
}
console.log('本次实际插入:', Object.keys(toInsert).length, '个函数');

if (Object.keys(toInsert).length === 0) {
  console.log('没有新函数需要插入，退出');
  process.exit(0);
}

function objToJS(obj) {
  const entries = Object.entries(obj).map(([k, v]) => {
    const items = v.map(q => {
      const opts = q.options ? JSON.stringify(q.options) : undefined;
      const ans = typeof q.answer === 'number' ? q.answer : JSON.stringify(q.answer);
      return `    { type: "${q.type}", question: ${JSON.stringify(q.question)}, options: ${opts}, answer: ${ans}, explanation: ${JSON.stringify(q.explanation)} }`;
    }).join(',\n');
    return `  "${k}": [\n${items}\n  ]`;
  }).join(',\n');
  return entries;
}

const newDataStr = objToJS(toInsert);

const finalHtml = html.substring(0, actualLastBracket + 1)
  + ',\n'
  + newDataStr
  + '\n'
  + html.substring(actualLastBracket + 1);

fs.writeFileSync(path, finalHtml, 'utf8');
console.log('✅ 已插入', Object.keys(toInsert).length, '个新函数的练习题');
