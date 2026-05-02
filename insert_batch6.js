// insert_batch6.js
// 第六批：向 QUIZ_DATA 插入 30 个新函数的练习题
// 格式与源文件一致："FUNC": [

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

// 在对象体内找到最后一个 ]
const inner = html.substring(qStart + qMarker.length, objEnd);
const lastBracket = inner.lastIndexOf(']');
if (lastBracket === -1) { console.error('未找到 ]'); process.exit(1); }
const actualLastBracket = qStart + qMarker.length + lastBracket;

// 收集已有函数名，避免重复插入
const existingNames = [];
const reKey = /[\n\r]  "(\w+)":\s*\[/g;
let mm;
while ((mm = reKey.exec(inner)) !== null) existingNames.push(mm[1]);
console.log('已有题函数数:', existingNames.length);

const newBatch = {
  "AVERAGEIFS": [
    {
      type: "choice",
      question: "AVERAGEIFS 与 AVERAGEIF 的主要区别是？",
      options: ["AVERAGEIFS 支持多个条件", "AVERAGEIFS 只支持一个条件", "没有区别", "AVERAGEIFS 已被弃用"],
      answer: 0,
      explanation: "AVERAGEIFS 支持多个条件区域/条件对，AVERAGEIF 只支持单个条件。"
    }
  ],
  "CEILING": [
    {
      type: "choice",
      question: "CEILING(2.5, 1) 的返回值是多少？",
      options: ["2", "3", "2.5", "0"],
      answer: 1,
      explanation: "CEILING(数值, 倍数) 将数值向上舍入到指定倍数的最接近值。CEILING(2.5,1)=3。"
    }
  ],
  "CHAR": [
    {
      type: "choice",
      question: "CHAR(65) 返回什么？",
      options: ["A", "65", "a", "错误"],
      answer: 0,
      explanation: "CHAR(数字) 返回数字对应的 ASCII 字符。ASCII 65 = 大写字母 A。"
    }
  ],
  "CHOOSE": [
    {
      type: "choice",
      question: "CHOOSE(2, \"红\",\"绿\",\"蓝\") 的返回值是什么？",
      options: ["红", "绿", "蓝", "错误"],
      answer: 1,
      explanation: "CHOOSE(索引, 值1, 值2, ...) 根据索引返回对应的值。索引2返回第2个值：绿。"
    }
  ],
  "CLEAN": [
    {
      type: "choice",
      question: "CLEAN 函数的作用是什么？",
      options: ["删除文本中的不可打印字符", "删除文本中的所有空格", "删除文本中的数字", "将文本转换为干净格式"],
      answer: 0,
      explanation: "CLEAN 函数删除文本中所有不可打印的字符（ASCII 0-31）。"
    }
  ],
  "CODE": [
    {
      type: "choice",
      question: "CODE(\"A\") 返回什么？",
      options: ["65", "97", "A", "1"],
      answer: 0,
      explanation: "CODE(文本) 返回文本第一个字符的 ASCII 码。大写 A 的 ASCII 码是 65。"
    }
  ],
  "COLUMN": [
    {
      type: "choice",
      question: "如果公式 =COLUMN() 写在 D 列，返回值是？",
      options: ["4", "D", "3", "错误"],
      answer: 0,
      explanation: "COLUMN(引用) 返回引用的列号。A=1, B=2, C=3, D=4。不带参数时返回公式所在列的列号。"
    }
  ],
  "COLUMNS": [
    {
      type: "choice",
      question: "COLUMNS(A1:C5) 返回什么？",
      options: ["3", "5", "15", "A"],
      answer: 0,
      explanation: "COLUMNS(数组) 返回数组或引用中的列数。A1:C5 有 3 列（A、B、C），所以返回 3。"
    }
  ],
  "COMBIN": [
    {
      type: "choice",
      question: "COMBIN(5,2) 返回什么？（5个中选2个的组合数）",
      options: ["10", "20", "5", "25"],
      answer: 0,
      explanation: "COMBIN(n,k) 返回从 n 个对象中选 k 个的组合数。C(5,2)=5!/(2!×3!)=10。"
    }
  ],
  "CONCATENATE": [
    {
      type: "choice",
      question: "CONCATENATE(\"Hello \",\"World\") 返回什么？",
      options: ["Hello World", "HelloWorld", "Hello,World", "错误"],
      answer: 0,
      explanation: "CONCATENATE 将多个文本字符串合并为一个。结果：\"Hello World\"（注意原字符串中的空格）。"
    }
  ],
  "COS": [
    {
      type: "choice",
      question: "COS(0) 的返回值是多少？",
      options: ["0", "1", "-1", "0.5"],
      answer: 1,
      explanation: "COS 是余弦函数。COS(0)=1，COS(π)=-1。"
    }
  ],
  "COSH": [
    {
      type: "choice",
      question: "COSH(0) 的返回值是多少？",
      options: ["0", "1", "-1", "0.5"],
      answer: 1,
      explanation: "COSH 是双曲余弦函数。COSH(0)=1，与 COS(0) 的值相同。"
    }
  ],
  "COUNT": [
    {
      type: "choice",
      question: "关于 COUNT 函数，以下说法正确的是？",
      options: ["只统计包含数字的单元格", "统计所有非空单元格", "统计包含文本的单元格", "统计空白单元格"],
      answer: 0,
      explanation: "COUNT 函数只统计包含数字（或能转换为数字）的单元格。文本和空白单元格被忽略。"
    }
  ],
  "COUNTA": [
    {
      type: "choice",
      question: "COUNTA 与 COUNT 的主要区别是？",
      options: ["COUNTA 统计所有非空单元格（含文本）", "COUNTA 只统计数字", "没有区别", "COUNTA 已被弃用"],
      answer: 0,
      explanation: "COUNTA 统计所有非空单元格，包括文本、数字、错误值等。COUNT 只统计数字。"
    }
  ],
  "COUNTBLANK": [
    {
      type: "choice",
      question: "COUNTBLANK 函数统计什么？",
      options: ["空白单元格", "包含0的单元格", "包含空格的单元格", "所有单元格"],
      answer: 0,
      explanation: "COUNTBLANK 统计范围内的空白单元格数量。注意：包含空文本（\"\"）的单元格也被认为是空白。"
    }
  ],
  "COUNTIF": [
    {
      type: "choice",
      question: "要统计 A1:A10 中大于 60 的单元格个数，正确的公式是？",
      options: ["=COUNTIF(A1:A10,\">60\")", "=COUNTIF(A1:A10,>60)", "=COUNTIF(A1:A10,60)", "=COUNTIFS(A1:A10,\">60\")"],
      answer: 0,
      explanation: "COUNTIF(范围,条件) 条件需要用引号包裹。>60 作为文本条件写作 \">60\"。"
    }
  ],
  "DATE": [
    {
      type: "choice",
      question: "DATE(2025,12,31) 返回什么？",
      options: ["2025年12月31日的日期序列号", "2025-12-31（文本）", "12/31/2025", "错误"],
      answer: 0,
      explanation: "DATE(年,月,日) 返回对应日期的 Excel 日期序列号（整数），可以参与日期计算。"
    }
  ],
  "DAY": [
    {
      type: "choice",
      question: "DAY(\"2025/12/31\") 返回什么？",
      options: ["31", "12", "2025", "错误"],
      answer: 0,
      explanation: "DAY(日期) 返回日期中的「日」部分（1-31）。Excel 会自动将文本日期转换为日期序列号。"
    }
  ],
  "DAYS": [
    {
      type: "choice",
      question: "DAYS 函数计算的是什么？",
      options: ["两个日期之间的天数差", "日期中的天数", "一年中的第几天", "剩余天数"],
      answer: 0,
      explanation: "DAYS(结束日,开始日) 返回两个日期之间的天数差。例如 DAYS(\"2025/12/31\",\"2025/1/1\")=364。"
    }
  ],
  "DATEDIF": [
    {
      type: "choice",
      question: "关于 DATEDIF 函数，以下说法正确的是？",
      options: ["是隐藏函数，用于计算日期差", "是新增函数，推荐使用", "已被 DAYS 完全替代", "不存在此函数"],
      answer: 0,
      explanation: "DATEDIF 是 Excel 的隐藏函数（不会出现在函数列表中），但功能强大，支持多种日期差计算方式（\"Y\"\"M\"\"D\"等）。"
    }
  ],
  "DATEVALUE": [
    {
      type: "choice",
      question: "DATEVALUE(\"2025/12/31\") 返回什么？",
      options: ["日期序列号", "文本 2025/12/31", "错误", "日期格式"],
      answer: 0,
      explanation: "DATEVALUE(日期文本) 将日期文本转换为 Excel 日期序列号，与 DATE 函数类似但接受文本参数。"
    }
  ],
  "DB": [
    {
      type: "choice",
      question: "DB 函数使用什么折旧法？",
      options: ["固定余额递减法", "直线法", "年数总和法", "双倍余额递减法"],
      answer: 0,
      explanation: "DB(成本,残值,寿命,期间) 使用固定余额递减法（Fixed Declining Balance）计算折旧。"
    }
  ],
  "DCOUNT": [
    {
      type: "choice",
      question: "DCOUNT 函数与 COUNT 函数的区别是？",
      options: ["DCOUNT 对数据库区域按条件统计", "没有区别", "DCOUNT 只统计文本", "DCOUNT 已被弃用"],
      answer: 0,
      explanation: "DCOUNT(数据库,字段,条件) 是数据库函数，根据条件统计数据库中符合条件的数字单元格个数。"
    }
  ],
  "DCOUNTA": [
    {
      type: "choice",
      question: "DCOUNTA 与 DCOUNT 的区别是？",
      options: ["DCOUNTA 统计非空单元格（含文本）", "DCOUNTA 只统计数字", "没有区别", "DCOUNTA 已被弃用"],
      answer: 0,
      explanation: "DCOUNTA 统计数据库中符合条件的非空单元格（包括文本），DCOUNT 只统计数字。"
    }
  ],
  "DGET": [
    {
      type: "choice",
      question: "DGET 函数的作用是？",
      options: ["从数据库中提取符合条件的单个值", "获取数据库的行数", "获取数据库的列数", "删除数据库中的记录"],
      answer: 0,
      explanation: "DGET(数据库,字段,条件) 从数据库中提取符合条件的单个值。如果匹配到多条记录会返回错误 #NUM！。"
    }
  ],
  "DMAX": [
    {
      type: "choice",
      question: "DMAX 函数返回什么？",
      options: ["数据库中符合条件的最大值", "数据库中符合条件的最小值", "数据库中符合条件的平均值", "数据库中的总行数"],
      answer: 0,
      explanation: "DMAX(数据库,字段,条件) 返回数据库中符合条件的记录中指定字段的最大值。"
    }
  ],
  "DMIN": [
    {
      type: "choice",
      question: "DMIN 函数返回什么？",
      options: ["数据库中符合条件的最小值", "数据库中符合条件的最大值", "数据库中符合条件的平均值", "数据库中的总行数"],
      answer: 0,
      explanation: "DMIN(数据库,字段,条件) 返回数据库中符合条件的记录中指定字段的最小值。"
    }
  ],
  "DPRODUCT": [
    {
      type: "choice",
      question: "DPRODUCT 函数的作用是？",
      options: ["将数据库中符合条件的字段值相乘", "将数据库中符合条件的字段值相加", "计算数据库中符合条件的字段平均值", "计算数据库中符合条件的字段最大值"],
      answer: 0,
      explanation: "DPRODUCT(数据库,字段,条件) 将数据库中符合条件的记录中指定字段的值相乘。"
    }
  ],
  "DSTDEV": [
    {
      type: "choice",
      question: "DSTDEV 函数计算的是什么？",
      options: ["样本标准差", "总体标准差", "方差", "平均值"],
      answer: 0,
      explanation: "DSTDEV 将数据库中符合条件的记录中指定字段的值作为样本，计算样本标准差。总体标准差用 DSTDEVP。"
    }
  ],
  "DSUM": [
    {
      type: "choice",
      question: "DSUM 函数的作用是？",
      options: ["对数据库中符合条件的字段值求和", "对数据库中符合条件的字段值求平均", "对数据库中符合条件的字段值计数", "对数据库中符合条件的字段值求最大值"],
      answer: 0,
      explanation: "DSUM(数据库,字段,条件) 对数据库中符合条件的记录中指定字段的值求和。"
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
