// insert_batch7.js
// 第七批：向 QUIZ_DATA 插入 30 个新函数的练习题

const fs = require('fs');
const path = 'Excel函数大全.html';
let html = fs.readFileSync(path, 'utf8');

// 找到 QUIZ_DATA 对象体范围
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

// 收集已有函数名
const existingNames = [];
const reKey = /[\n\r]  "(\w+)":\s*\[/g;
let mm;
while ((mm = reKey.exec(inner)) !== null) existingNames.push(mm[1]);
console.log('已有题函数数:', existingNames.length);

const newBatch = {
  "CEILING": [
    {
      type: "choice",
      question: "CEILING 与 FLOOR 的区别是？",
      options: ["CEILING 向上舍入，FLOOR 向下舍入", "CEILING 向下舍入，FLOOR 向上舍入", "没有区别", "CEILING 已弃用"],
      answer: 0,
      explanation: "CEILING(数值,倍数) 向上舍入到指定倍数，FLOOR 向下舍入。"
    }
  ],
  "CONVERT": [
    {
      type: "choice",
      question: "CONVERT(100, \"m\", \"ft\") 的作用是？",
      options: ["将100米转换为英尺", "将100英尺转换为米", "将100米转换为厘米", "计算100米的平方"],
      answer: 0,
      explanation: "CONVERT(数值,从单位,到单位) 将数字从一个度量单位转换为另一个。\"m\"=米，\"ft\"=英尺。"
    }
  ],
  "DDB": [
    {
      type: "choice",
      question: "DDB 函数使用什么折旧法？",
      options: ["双倍余额递减法", "直线法", "年数总和法", "固定余额递减法"],
      answer: 0,
      explanation: "DDB(成本,残值,寿命,期间) 使用双倍余额递减法计算折旧。"
    }
  ],
  "DEGREES": [
    {
      type: "choice",
      question: "DEGREES(PI()) 的返回值是多少？",
      options: ["180", "3.1416", "0.01745", "360"],
      answer: 0,
      explanation: "DEGREES(弧度) 将弧度转换为角度。PI()=π≈3.1416 弧度=180°。"
    }
  ],
  "ERROR.TYPE": [
    {
      type: "choice",
      question: "ERROR.TYPE(#N/A) 的返回值是多少？",
      options: ["1", "2", "3", "4"],
      answer: 0,
      explanation: "ERROR.TYPE(错误值) 返回错误类型的数字：#N/A=1，#VALUE!=2，#REF!=3，#DIV/0!=4，#NUM!=5，#NAME?=6，#NULL!=7。"
    }
  ],
  "EVEN": [
    {
      type: "choice",
      question: "EVEN(3) 的返回值是多少？",
      options: ["4", "3", "2", "0"],
      answer: 0,
      explanation: "EVEN(数字) 将数字向上舍入到最接近的偶数。EVEN(3)=4。"
    }
  ],
  "EXP": [
    {
      type: "choice",
      question: "EXP(1) 约等于？",
      options: ["2.71828（自然常数 e）", "3.14159（π）", "1", "0"],
      answer: 0,
      explanation: "EXP(数字) 返回 e 的指定次幂。EXP(1)=e≈2.71828。"
    }
  ],
  "FACT": [
    {
      type: "choice",
      question: "FACT(5) 的返回值是多少？",
      options: ["120", "25", "5", "1"],
      answer: 0,
      explanation: "FACT(数字) 返回数字的阶乘。5!=5×4×3×2×1=120。"
    }
  ],
  "FIND": [
    {
      type: "choice",
      question: "FIND(\"世界\",\"Hello世界\") 的返回值是多少？",
      options: ["6", "1", "错误", "0"],
      answer: 0,
      explanation: "FIND(查找文本,源文本) 返回查找文本在源文本中的起始位置（区分大小写）。\"世界\"在\"Hello世界\"中从第6个字符开始。"
    }
  ],
  "GETPIVOTDATA": [
    {
      type: "choice",
      question: "GETPIVOTDATA 函数用于？",
      options: ["从数据透视表中提取数据", "创建数据透视表", "删除数据透视表", "刷新数据透视表"],
      answer: 0,
      explanation: "GETPIVOTDATA(数据字段,透视表引用,字段1,条件1...) 从数据透视表中提取汇总数据。"
    }
  ],
  "HYPERLINK": [
    {
      type: "choice",
      question: "HYPERLINK 函数的作用是？",
      options: ["创建超链接", "删除超链接", "检查超链接", "打开网页"],
      answer: 0,
      explanation: "HYPERLINK(链接地址,显示文本) 创建一个快捷方式（超链接），点击可跳转到指定位置。"
    }
  ],
  "INDEX": [
    {
      type: "choice",
      question: "INDEX(A1:C3, 2, 3) 返回什么？",
      options: ["A1:C3 区域中第2行第3列的值", "A1:C3 区域中第2行的值", "A1:C3 区域中第3列的值", "错误"],
      answer: 0,
      explanation: "INDEX(数组,行号,列号) 返回数组中指定行列交叉处的值。"
    }
  ],
  "INDIRECT": [
    {
      type: "choice",
      question: "INDIRECT(\"A1\") 返回什么？",
      options: ["A1 单元格的引用（即 A1 的值）", "文本 \"A1\"", "错误", "A1 的地址"],
      answer: 0,
      explanation: "INDIRECT(文本引用) 将文本字符串转换为实际的单元格引用。INDIRECT(\"A1\") 返回 A1 单元格的值。"
    }
  ],
  "INT": [
    {
      type: "choice",
      question: "INT(-3.7) 的返回值是多少？",
      options: ["-4", "-3", "3.7", "错误"],
      answer: 0,
      explanation: "INT(数字) 将数字向下舍入到最接近的整数。INT(-3.7)=-4（不是-3）。"
    }
  ],
  "ISEVEN": [
    {
      type: "choice",
      question: "ISEVEN(3) 的返回值是什么？",
      options: ["FALSE", "TRUE", "0", "错误"],
      answer: 0,
      explanation: "ISEVEN(数字) 判断数字是否为偶数，是则返回 TRUE，否则返回 FALSE。"
    }
  ],
  "ISODD": [
    {
      type: "choice",
      question: "ISODD 与 ISEVEN 的关系是？",
      options: ["互为反函数", "完全相同", "没有关联", "ISODD 已弃用"],
      answer: 0,
      explanation: "ISODD(数字) 判断数字是否为奇数。对于任意整数 n，ISODD(n) = NOT(ISEVEN(n))。"
    }
  ],
  "LEFT": [
    {
      type: "choice",
      question: "LEFT(\"Hello\", 3) 返回什么？",
      options: ["Hel", "llo", "Hello", "错误"],
      answer: 0,
      explanation: "LEFT(文本,字符数) 从文本左侧提取指定个数的字符。"
    }
  ],
  "LEN": [
    {
      type: "choice",
      question: "LEN(\"Hello世界\") 的返回值是多少？",
      options: ["7", "5", "10", "错误"],
      answer: 0,
      explanation: "LEN(文本) 返回文本字符串的字符个数。\"Hello世界\"有 5个英文字符+2个中文字符=7个字符。"
    }
  ],
  "MATCH": [
    {
      type: "choice",
      question: "MATCH(\"苹果\", A1:A5, 0) 的作用是？",
      options: ["查找\"苹果\"在 A1:A5 中的位置", "查找 A1:A5 中大于\"苹果\"的值", "返回\"苹果\"", "创建匹配规则"],
      answer: 0,
      explanation: "MATCH(查找值,查找数组,匹配类型) 返回查找值在数组中的相对位置。0=精确匹配。"
    }
  ],
  "MID": [
    {
      type: "choice",
      question: "MID(\"HelloWorld\", 6, 5) 返回什么？",
      options: ["World", "Hello", "Worl", "错误"],
      answer: 0,
      explanation: "MID(文本,起始位置,字符数) 从文本指定位置开始提取指定个数的字符。第6个字符是 W，提取5个字符=World。"
    }
  ],
  "MOD": [
    {
      type: "choice",
      question: "MOD(10, 3) 的返回值是多少？",
      options: ["1", "3", "0", "10"],
      answer: 0,
      explanation: "MOD(被除数,除数) 返回两数相除的余数。10÷3=3 余 1，所以 MOD(10,3)=1。"
    }
  ],
  "MONTH": [
    {
      type: "choice",
      question: "MONTH(\"2025/12/31\") 返回什么？",
      options: ["12", "31", "2025", "错误"],
      answer: 0,
      explanation: "MONTH(日期) 返回日期中的月份（1-12）。Excel 会自动将文本日期转换为日期序列号。"
    }
  ],
  "NOW": [
    {
      type: "choice",
      question: "关于 NOW 函数，以下说法正确的是？",
      options: ["返回当前日期和时间（易失函数，会重新计算）", "返回当前日期（不含时间）", "返回当前时间（不含日期）", "已被 TODAY 替代"],
      answer: 0,
      explanation: "NOW() 返回当前日期和时间。它是易失函数，编辑单元格时会重新计算。"
    }
  ],
  "OFFSET": [
    {
      type: "choice",
      question: "OFFSET(A1, 2, 3) 返回什么？",
      options: ["D3 单元格的引用", "A1 单元格的值", "D3 单元格的值", "错误"],
      answer: 0,
      explanation: "OFFSET(起始引用,行偏移,列偏移) 返回对指定偏移量处的单元格的引用。A1 向下2行、向右3列 = D3。"
    }
  ],
  "PI": [
    {
      type: "choice",
      question: "PI() 函数返回的值是多少（精确到4位小数）？",
      options: ["3.1416", "3.14", "3.142", "3.1415"],
      answer: 0,
      explanation: "PI() 返回圆周率 π 的值，约等于 3.14159265358979。四舍五入到4位小数为 3.1416。"
    }
  ],
  "POWER": [
    {
      type: "choice",
      question: "POWER(2, 10) 的返回值是多少？",
      options: ["1024", "20", "100", "2048"],
      answer: 0,
      explanation: "POWER(底数,指数) 返回底数的指定次幂。2^10=1024。"
    }
  ],
  "RAND": [
    {
      type: "choice",
      question: "关于 RAND 函数，以下说法正确的是？",
      options: ["返回 0 到 1 之间的随机小数", "返回 0 到 1 之间的随机整数", "返回 1 到 100 之间的随机小数", "返回固定值 0.5"],
      answer: 0,
      explanation: "RAND() 返回大于等于 0 且小于 1 的均匀分布随机实数。每次计算工作表时都会重新计算。"
    }
  ],
  "RANDBETWEEN": [
    {
      type: "choice",
      question: "RANDBETWEEN(1, 100) 的返回值范围是多少？",
      options: ["1 到 100 之间的随机整数", "1 到 100 之间的随机小数", "0 到 100 之间的随机整数", "1 到 99 之间的随机整数"],
      answer: 0,
      explanation: "RANDBETWEEN(下限,上限) 返回介于两个整数之间的随机整数（包含上下限）。"
    }
  ],
  "RIGHT": [
    {
      type: "choice",
      question: "RIGHT(\"Hello\", 2) 返回什么？",
      options: ["lo", "He", "Hello", "错误"],
      answer: 0,
      explanation: "RIGHT(文本,字符数) 从文本右侧提取指定个数的字符。"
    }
  ],
  "SUBSTITUTE": [
    {
      type: "choice",
      question: "SUBSTITUTE(\"Hello World\", \" \", \"-\") 返回什么？",
      options: ["Hello-World", "HelloWorld", "Hello World", "错误"],
      answer: 0,
      explanation: "SUBSTITUTE(文本,旧文本,新文本) 将文本中的指定文本替换为新文本。"
    }
  ]
};

// 过滤掉已存在的函数
const toInsert = {};
for (const [k, v] of Object.entries(newBatch)) {
  if (!existingNames.includes(k)) toInsert[k] = v;
}
console.log('本次实际插入:', Object.keys(toInsert).length, '个函数');

if (Object.keys(toInsert).length === 0) {
  console.log('没有新函数需要插入，退出');
  process.exit(0);
}

// 生成带引号键的 JS 对象字符串
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

// 在最后一个 ] 后插入新数据
const finalHtml = html.substring(0, actualLastBracket + 1)
  + ',\n'
  + newDataStr
  + '\n'
  + html.substring(actualLastBracket + 1);

fs.writeFileSync(path, finalHtml, 'utf8');
console.log('✅ 已插入', Object.keys(toInsert).length, '个新函数的练习题');
