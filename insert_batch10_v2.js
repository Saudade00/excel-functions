const fs = require('fs');
const path = 'A:/workbuddy代码项目/函数工具/Excel函数大全.html';
let html = fs.readFileSync(path, 'utf8');

// 第十批无题函数练习题（JS 格式，键名不带引号，与现有格式一致）
const newBatch = {
  "XLOOKUP": [
    { type: "definition", question: "XLOOKUP 函数的作用是什么？", answer: "在数组的第一行或列中查找值，并在数组的最后一行或列中返回相同位置的值" },
    { type: "fill-blank", question: "XLOOKUP 函数的基本语法是：XLOOKUP(lookup_value, lookup_array, _______, [if_not_found], [match_mode], [search_mode])", answer: "return_array", explanation: "return_array 是要返回值的数组或区域" },
    { type: "scenario", question: "需要在 A 列查找值，并返回 B 列对应结果，如果找不到返回'未找到'，应使用什么公式？", options: ["=VLOOKUP(A1, A:B, 2, FALSE)", "=XLOOKUP(A1, A:A, B:B, \"未找到\")", "=INDEX(B:B, MATCH(A1, A:A, 0))", "以上都可以"], answer: "=XLOOKUP(A1, A:A, B:B, \"未找到\")", explanation: "XLOOKUP 可以直接指定查找数组、返回数组和未找到时的返回值" }
  ],
  "ROWS": [
    { type: "definition", question: "ROWS 函数返回什么？", answer: "返回引用或数组中的行数" },
    { type: "fill-blank", question: "=ROWS(A1:C5) 的返回值是 ______", answer: "5", explanation: "A1:C5 包含 5 行，ROWS 函数返回行数" }
  ],
  "ISNUMBER": [
    { type: "definition", question: "ISNUMBER 函数的作用是什么？", answer: "检查值是否为数字，返回 TRUE 或 FALSE" },
    { type: "scenario", question: "A1 单元格包含公式 =VLOOKUP(...)，如何判断 VLOOKUP 是否返回了数字结果？", options: ["=ISNUMBER(A1)", "=ISVALUE(A1)", "=ISDIGIT(A1)", "=NUMBER(A1)"], answer: "=ISNUMBER(A1)", explanation: "ISNUMBER 函数用于检查值是否为数字类型" }
  ],
  "CEILING": [
    { type: "definition", question: "CEILING 函数的作用是什么？（注意：新版 Excel 中为 CEILING.MATH）", answer: "将数字向上舍入到最近的指定倍数的整数" },
    { type: "fill-blank", question: "=CEILING(2.5, 1) 的返回值是 ______", answer: "3", explanation: "CEILING 向上舍入到指定倍数，2.5 向上舍入到 1 的倍数为 3" }
  ],
  "TRUNC": [
    { type: "definition", question: "TRUNC 函数与 INT 函数的主要区别是什么？", answer: "TRUNC 直接截断小数部分，不四舍五入；INT 向下取整（对负数处理不同）" },
    { type: "judge", question: "=TRUNC(-1.9) 的返回值是 -2。", answer: false, explanation: "TRUNC(-1.9) 返回 -1，直接截断小数；INT(-1.9) 才返回 -2" }
  ],
  "WEEKNUM": [
    { type: "definition", question: "WEEKNUM 函数返回什么？", answer: "返回给定日期在一年中的周数（1-53）" }
  ],
  "YEARFRAC": [
    { type: "definition", question: "YEARFRAC 函数返回什么？", answer: "返回两个日期之间的完整天数占全年天数的百分比（小数形式）" }
  ],
  "SUBTOTAL": [
    { type: "definition", question: "SUBTOTAL 函数的第一个参数 function_num 为 9 时表示什么运算？", answer: "SUM（求和），且会忽略隐藏行的数据" },
    { type: "judge", question: "SUBTOTAL 函数可以只对可见单元格进行计算，自动忽略被筛选隐藏的行。", answer: true, explanation: "SUBTOTAL 是少数能忽略隐藏行的聚合函数" }
  ],
  "PRODUCT": [
    { type: "definition", question: "PRODUCT 函数的作用是什么？", answer: "将所有参数相乘，返回乘积" },
    { type: "fill-blank", question: "=PRODUCT(2, 3, 4) 的返回值是 ______", answer: "24", explanation: "PRODUCT(2,3,4) = 2×3×4 = 24" }
  ],
  "SIGN": [
    { type: "definition", question: "SIGN 函数返回什么值？", answer: "返回数字的符号：正数返回 1，零返回 0，负数返回 -1" }
  ],
  "ISNONTEXT": [
    { type: "definition", question: "ISNONTEXT 函数检查什么？", answer: "检查值是否不是文本，返回 TRUE 或 FALSE" }
  ],
  "NA": [
    { type: "definition", question: "NA 函数返回什么值？", answer: "返回错误值 #N/A（表示值不可用）" }
  ],
  "FINDB": [
    { type: "definition", question: "FINDB 函数与 FIND 函数的主要区别是什么？", answer: "FINDB 按字节计算（双字节字符算2），FIND 按字符计算" }
  ],
  "REPLACEB": [
    { type: "definition", question: "REPLACEB 函数与 REPLACE 函数的主要区别是什么？", answer: "REPLACEB 按字节数替换文本，REPLACE 按字符数替换" }
  ],
  "DAVERAGE": [
    { type: "definition", question: "DAVERAGE 函数的作用是什么？", answer: "返回数据库中选择的记录字段（列）的平均值" }
  ],
  "DSTDEVP": [
    { type: "definition", question: "DSTDEVP 函数与 DSTDEV 的区别是什么？", answer: "DSTDEVP 将数据库视为总体计算标准差，DSTDEV 视为抽样样本" }
  ],
  "DVAR": [
    { type: "definition", question: "DVAR 函数返回什么？", answer: "返回数据库中选择的记录字段（列）的方差（样本方差）" }
  ],
  "COMPLEX": [
    { type: "definition", question: "COMPLEX 函数的作用是什么？", answer: "将实系数和虚系数转换为复数（如 x + yi 或 x + yj）" }
  ],
  "DEC2BIN": [
    { type: "definition", question: "DEC2BIN 函数的作用是什么？", answer: "将十进制数转换为二进制数" },
    { type: "fill-blank", question: "=DEC2BIN(10) 返回 ______", answer: "1010", explanation: "十进制 10 等于二进制 1010" }
  ],
  "DEC2HEX": [
    { type: "definition", question: "DEC2HEX 函数的作用是什么？", answer: "将十进制数转换为十六进制数" }
  ],
  "DEC2OCT": [
    { type: "definition", question: "DEC2OCT 函数的作用是什么？", answer: "将十进制数转换为八进制数" }
  ],
  "DELTA": [
    { type: "definition", question: "DELTA 函数的作用是什么？", answer: "测试两个值是否相等，相等返回 1，不相等返回 0" }
  ],
  "ERF": [
    { type: "definition", question: "ERF 函数返回什么？", answer: "返回误差函数在上下限之间的积分（正态分布相关）" }
  ],
  "ERFC": [
    { type: "definition", question: "ERFC 函数与 ERF 函数的关系是什么？", answer: "ERFC(x) = 1 - ERF(x)，即互补误差函数" }
  ],
  "BINOMDIST": [
    { type: "definition", question: "BINOMDIST 函数计算什么概率？", answer: "计算一元二项式分布的概率（成功次数的概率）" }
  ],
  "CHINV": [
    { type: "definition", question: "CHINV 函数返回什么？", answer: "返回 χ²（卡方）分布的反函数（右尾概率对应的卡方值）" }
  ],
  "DEVSQ": [
    { type: "definition", question: "DEVSQ 函数计算什么？", answer: "计算数据点与平均值之差（偏差）的平方和" }
  ]
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
console.log('QUIZ_DATA 范围:', qStart, '-', qEnd);

// 提取 QUIZ_DATA 内层的函数名（已有）
const inner = html.substring(qStart + qMarker.length, qEnd);
const existingNames = [];
const re = /[\n\r]  "(\w+)":\s*\[/g;
let m;
while ((m = re.exec(inner)) !== null) existingNames.push(m[1]);
console.log('已存在函数数:', existingNames.length);

// 过滤掉已存在的
const toAdd = {};
let skipped = 0;
for (const [k, v] of Object.entries(newBatch)) {
  if (existingNames.includes(k)) { skipped++; continue; }
  toAdd[k] = v;
}
console.log('跳过已存在:', skipped, '个');
console.log('本次新增:', Object.keys(toAdd).length, '个');

if (Object.keys(toAdd).length === 0) {
  console.log('没有新函数需要添加');
  process.exit(0);
}

// 生成要插入的文本（JS 格式，键名不带引号，与现有格式一致）
function objToJS(obj) {
  const entries = Object.entries(obj);
  let s = '';
  entries.forEach(([k, v], i) => {
    s += '  "' + k + '": ';
    // 手动序列化数组，键名不带引号
    s += JSON.stringify(v, null, 2).replace(/"(\w+)":/g, '$1:')
      .replace(/\n/g, '\n  ') + (i < entries.length - 1 ? ',' : '') + '\n';
  });
  return s;
}

// 找到 inner 中最后一个 ] 的位置，在其后插入
const lastBracket = inner.lastIndexOf(']');
const insertAt = qStart + qMarker.length + lastBracket + 1; // ] 后面的位置

const before = html.substring(0, insertAt);  // 包括 ]
const after = html.substring(insertAt);        // ] 后面的内容（应该是换行 + }）
const insertStr = ',\n' + objToJS(toAdd);
const newHtml = before + insertStr + after;

// 写回文件（不验证 JS 语法，直接写入）
fs.writeFileSync(path, newHtml, 'utf8');
console.log('✅ 已写入文件');

// 统计
const afterInner = newHtml.substring(newHtml.indexOf(qMarker) + qMarker.length, newHtml.indexOf('};', newHtml.indexOf(qMarker)));
const total = (afterInner.match(/\{ type:/g) || []).length;
console.log('📊 练习题总数:', total);
