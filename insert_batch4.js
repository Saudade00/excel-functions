const fs = require('fs');
const html = fs.readFileSync('Excel函数大全.html', 'utf8');

// 60 个实用函数，每个 1 道选择题
const newBatch = {
  "CHAR": [
    { type:"choice", question:"=CHAR(65) 的结果是？", options:["A","65","a","错误"], answer:0, explanation:"CHAR 根据 ASCII 码返回对应字符，65 对应大写字母 A。" }
  ],
  "CODE": [
    { type:"choice", question:"=CODE(\"A\") 的结果是？", options:["65","A","97","错误"], answer:0, explanation:"CODE 返回文本第一个字符的 ASCII 码，A 的 ASCII 码是 65。" }
  ],
  "CLEAN": [
    { type:"choice", question:"CLEAN 函数的主要作用是？", options:["删除文本中的不可打印字符","删除所有空格","删除数字","删除指定字符"], answer:0, explanation:"CLEAN 删除文本中所有不可打印的字符（ASCII 0-31），常用于清理从其他系统导入的数据。" }
  ],
  "CONCATENATE": [
    { type:"choice", question:"=CONCATENATE(\"Hello\", \" \", \"World\") 的结果是？", options:["Hello World","HelloWorld","Hello+World","错误"], answer:0, explanation:"CONCATENATE 将多个文本拼接成一个，\"Hello\"&\" \"&\"World\" = \"Hello World\"。" }
  ],
  "DOLLAR": [
    { type:"choice", question:"=DOLLAR(1234.5) 的默认结果是？", options:["$1,234.50","1234.5","¥1234.50","$1234.5"], answer:0, explanation:"DOLLAR 将数字转为货币格式文本，默认用 $ 和两位小数，带千位分隔符。" }
  ],
  "EXACT": [
    { type:"choice", question:"=EXACT(\"ABC\", \"abc\") 的结果是？", options:["FALSE","TRUE","ABC","错误"], answer:0, explanation:"EXACT 区分大小写比较两个文本，\"ABC\" 和 \"abc\" 不相同，返回 FALSE。" }
  ],
  "FIXED": [
    { type:"choice", question:"=FIXED(1234.567, 1) 的结果是？", options:["1,234.6","1234.567","1234.6","\"1234.6\""], answer:0, explanation:"FIXED 将数字转为带千位分隔符的文本并保留指定位数，四舍五入后为 \"1,234.6\"（文本）。" }
  ],
  "T": [
    { type:"choice", question:"=T(A1) 当 A1=123 时的结果是？", options:["\"\"（空文本）","123","\"123\"","错误"], answer:0, explanation:"T 函数只返回文本值，如果参数不是文本则返回空文本 \"\"。123 是数字，所以返回 \"\"。" }
  ],
  "TEXTJOIN": [
    { type:"choice", question:"TEXTJOIN 和 CONCATENATE 的主要区别是？", options:["TEXTJOIN 可以忽略空值并指定分隔符","TEXTJOIN 只能合并两列","CONCATENATE 支持数组","两者完全相同"], answer:0, explanation:"TEXTJOIN(delimiter, ignore_empty, text1, ...) 可以用分隔符连接，并选择是否忽略空单元格。" }
  ],
  "CHOOSE": [
    { type:"choice", question:"=CHOOSE(2, \"苹果\", \"香蕉\", \"橙子\") 的结果是？", options:["香蕉","苹果","橙子","错误"], answer:0, explanation:"CHOOSE 根据索引值返回参数列表中的对应值，索引 2 对应第二个参数「香蕉」。" }
  ],
  "LOOKUP": [
    { type:"choice", question:"LOOKUP 函数与 VLOOKUP 的区别是？", options:["LOOKUP 只能向量查找，且需排序列","LOOKUP 功能更强","VLOOKUP 需要排序列","两者完全相同"], answer:0, explanation:"LOOKUP 有两种形式：向量型和数组型。向量型需要在第一列查找并返回第二列，且查找列必须升序排列。" }
  ],
  "TRANSPOSE": [
    { type:"choice", question:"TRANSPOSE 函数的作用是？", options:["将行转换成列（转置）","将列转换成行","删除重复行","查找数据"], answer:0, explanation:"TRANSPOSE 将数组的行和列互换（转置）。在 Office 365 中直接输入即可，旧版本需要 Ctrl+Shift+Enter。" }
  ],
  "CELL": [
    { type:"choice", question:"=CELL(\"address\", A1) 返回的是？", options:["A1 的单元格地址（如 $A$1）","A1 的值","A1 的列号","错误"], answer:0, explanation:"CELL(info_type, reference) 返回引用单元格的格式、位置或内容信息。\"address\" 返回单元格地址。" }
  ],
  "ERROR.TYPE": [
    { type:"choice", question:"=ERROR.TYPE(#DIV/0!) 的结果是？", options:["2","1","#DIV/0!","错误"], answer:0, explanation:"ERROR.TYPE 返回错误值对应的数字：#NULL! =1，#DIV/0! =2，#VALUE! =3，#REF! =4，#NAME? =5，#NUM! =6，#N/A =7。" }
  ],
  "INFO": [
    { type:"choice", question:"=INFO(\"version\") 返回的是？", options:["Excel 版本号","当前文件名","当前操作系统","错误"], answer:0, explanation:"INFO(type_text) 返回当前操作环境的信息。\"version\" 返回 Excel 版本号（如 \"16.0\"）。" }
  ],
  "ISFORMULA": [
    { type:"choice", question:"=ISFORMULA(A1) 当 A1 中含有 =SUM(B1:B10) 时结果是？", options:["TRUE","FALSE","#FORMULA!","错误"], answer:0, explanation:"ISFORMULA 判断单元格是否包含公式，A1 含有公式时返回 TRUE。" }
  ],
  "N": [
    { type:"choice", question:"=N(\"123\") 和 =N(123) 的结果分别是？", options:["0 和 123","\"123\" 和 123","123 和 0","错误"], answer:0, explanation:"N 将值转为数字：数字保持不变，日期转为序列号，TRUE=1，FALSE=0，文本=0。" }
  ],
  "TYPE": [
    { type:"choice", question:"=TYPE(A1) 当 A1 中是公式 =SUM(B1:B10) 时返回？", options:["16（公式返回数组）","1（数字）","2（文本）","64"], answer:0, explanation:"TYPE 返回值类型：1=数字，2=文本，4=逻辑值，16=错误值，64=数组。Excel 2019+ 中公式返回数组时 TYPE=16。" }
  ],
  "DATEVALUE": [
    { type:"choice", question:"=DATEVALUE(\"2024-3-28\") 返回的是？", options:["日期序列号","\"2024-3-28\"","45378（类似数字）","错误"], answer:2, explanation:"DATEVALUE 将文本格式的日期转为 Excel 日期序列号（45378 对应 2024-3-28），可以用格式化显示为日期。" }
  ],
  "DAYS360": [
    { type:"choice", question:"DAYS360 函数的作用是？", options:["按360天/年（每月30天）计算两个日期之差","计算实际天数差","计算工作日数","计算日期对应的星期"], answer:0, explanation:"DAYS360 按每月30天、每年360天的规则计算日期差，常用于财务计算。" }
  ],
  "HOUR": [
    { type:"choice", question:"=HOUR(0.75) 的结果是？", options:["18","0.75","75","错误"], answer:0, explanation:"HOUR 返回时间值的小时数。0.75 表示 18:00（18小时），所以 HOUR(0.75)=18。" }
  ],
  "MINUTE": [
    { type:"choice", question:"=MINUTE(0.5125) 的结果是？（0.5125 = 12:18:00）", options:["18","12","51","错误"], answer:0, explanation:"MINUTE 返回时间值的分钟数。0.5125 对应 12:18:00，分钟部分是 18。" }
  ],
  "SECOND": [
    { type:"choice", question:"=SECOND(0.5125) 的结果是？（0.5125 = 12:18:00）", options:["0","18","12","25"], answer:0, explanation:"SECOND 返回时间值的秒数。0.5125 对应 12:18:00，秒部分是 0。" }
  ],
  "TIME": [
    { type:"choice", question:"=TIME(14, 30, 0) 的结果是？", options:["0.60417（即 14:30:00）","14:30:00","\"14:30\"","错误"], answer:0, explanation:"TIME(时,分,秒) 返回对应的小数值。14:30:00 = 14.5/24 = 0.60417。" }
  ],
  "TIMEVALUE": [
    { type:"choice", question:"=TIMEVALUE(\"14:30:00\") 的结果是？", options:["0.60417","\"14:30\"","14:30:00","错误"], answer:0, explanation:"TIMEVALUE 将文本格式的时间转为小数部分（序列号）。14:30 = 0.60417。" }
  ],
  "COUNT": [
    { type:"choice", question:"A1:A5 = {1, \"a\", 3, TRUE, 5}，=COUNT(A1:A5) 的结果是？", options:["3","5","1","错误"], answer:0, explanation:"COUNT 只统计包含数字的单元格，{1, \"a\", 3, TRUE, 5} 中数字有 1、3、5 共 3 个（TRUE 不计入）。" }
  ],
  "COUNTA": [
    { type:"choice", question:"A1:A5 = {1, \"a\", , TRUE, 5}，=COUNTA(A1:A5) 的结果是？", options:["4","5","3","错误"], answer:0, explanation:"COUNTA 统计非空单元格。A3 是空单元格，其余 4 个非空，所以结果是 4。" }
  ],
  "COUNTBLANK": [
    { type:"choice", question:"A1:A5 = {1, \"a\", , TRUE, }，=COUNTBLANK(A1:A5) 的结果是？", options:["2","3","0","5"], answer:0, explanation:"COUNTBLANK 统计空单元格个数。A3 和 A5 是空的，共 2 个。" }
  ],
  "FREQUENCY": [
    { type:"choice", question:"FREQUENCY 函数的返回值是？", options:["每个区间的频数（数组）","最大值","平均值","总个数"], answer:0, explanation:"FREQUENCY(data_array, bins_array) 返回每个区间的频数，结果是一个数组，需要用 Ctrl+Shift+Enter（旧版）或直接支持动态数组（365）。" }
  ],
  "LINEST": [
    { type:"choice", question:"LINEST 函数用于？", options:["线性回归分析，返回斜率和截距","计算平均值","计算中位数","查找数据"], answer:0, explanation:"LINEST 返回线性回归线的参数（斜率、截距等），可用于趋势预测。返回数组，需用 Ctrl+Shift+Enter。" }
  ],
  "LOGEST": [
    { type:"choice", question:"LOGEST 和 LINEST 的区别是？", options:["LOGEST 用于指数回归，LINEST 用于线性回归","LOGEST 用于线性，LINEST 用于指数","两者完全相同","LOGEST 只能处理整数"], answer:0, explanation:"LOGEST 用于拟合指数曲线 y = b*m^x，LINEST 用于拟合直线 y = mx + b。" }
  ],
  "RSQ": [
    { type:"choice", question:"RSQ 函数返回的是？", options:["相关系数的平方（决定系数）","相关系数","标准差","平均值"], answer:0, explanation:"RSQ 返回 Pearson 相关系数的平方（R²），表示回归直线对数据的拟合程度，越接近 1 拟合越好。" }
  ],
  "STEYX": [
    { type:"choice", question:"STEYX 函数用于？", options:["返回回归预测值的标准误差","返回斜率","返回截距","返回相关系数"], answer:0, explanation:"STEYX 返回通过线性回归法预测 y 值时产生的标准误差，用于衡量预测的准确性。" }
  ],
  "TREND": [
    { type:"choice", question:"TREND 函数的作用是？", options:["返回线性回归的预测值（趋势值）","返回实际值","返回误差","返回斜率"], answer:0, explanation:"TREND(known_y, known_x, new_x) 根据已知数据用线性回归预测新 x 对应的 y 值。" }
  ],
  "GROWTH": [
    { type:"choice", question:"GROWTH 和 TREND 的区别是？", options:["GROWTH 用于指数增长预测，TREND 用于线性预测","GROWTH 用于线性，TREND 用于指数","两者完全相同","GROWTH 只处理整数"], answer:0, explanation:"GROWTH 用于指数增长趋势的预测（y = b*m^x），TREND 用于线性趋势（y = mx + b）。" }
  ],
  "FORECAST": [
    { type:"choice", question:"=FORECAST(10, B2:B10, A2:A10) 的含义是？", options:["用线性回归预测当 x=10 时的 y 值","求 B 列的平均值","求 A 列的最大值","返回错误"], answer:0, explanation:"FORECAST(x, known_y, known_x) 根据已知 x 和 y 用线性回归预测指定 x 对应的 y 值。" }
  ],
  "SLOPE": [
    { type:"choice", question:"=SLOPE(B2:B10, A2:A10) 返回的是？", options:["线性回归线的斜率","截距","R²","平均值"], answer:0, explanation:"SLOPE(known_y, known_x) 返回线性回归线的斜率（m），即 y = mx + b 中的 m。" }
  ],
  "INTERCEPT": [
    { type:"choice", question:"=INTERCEPT(B2:B10, A2:A10) 返回的是？", options:["线性回归线的截距","斜率","R²","平均值"], answer:0, explanation:"INTERCEPT(known_y, known_x) 返回线性回归线的截距（b），即 y = mx + b 中的 b。" }
  ],
  "COVAR": [
    { type:"choice", question:"COVAR 函数计算的是？", options:["两个数组的协方差（总体）","相关系数","平均值","标准差"], answer:0, explanation:"COVAR(array1, array2) 返回两个数组的协方差（总体协方差）。协方差为正表示两个变量同向变化。" }
  ],
  "CORREL": [
    { type:"choice", question:"=CORREL(A1:A10, B1:B10) 返回的是？", options:["相关系数（-1 到 1）","协方差","斜率","平均值"], answer:0, explanation:"CORREL 返回两个数组的 Pearson 相关系数，范围 -1 到 1。1 表示完全正相关，-1 表示完全负相关。" }
  ],
  "RANDBETWEEN": [
    { type:"choice", question:"=RANDBETWEEN(1, 100) 的特点是？", options:["返回 1~100 之间的随机整数，按 F9 刷新","只返回 1 或 100","返回小数","不变化"], answer:0, explanation:"RANDBETWEEN 返回指定范围内的随机整数，每次计算工作表（按 F9）时会重新生成。" }
  ],
  "COMBIN": [
    { type:"choice", question:"=COMBIN(5, 2) 的结果是？", options:["10","20","5","错误"], answer:0, explanation:"COMBIN(n, k) 返回从 n 个对象中取 k 个的组合数。C(5,2) = 5!/(2!×3!) = 10。" }
  ],
  "PERMUT": [
    { type:"choice", question:"=PERMUT(5, 2) 的结果是？", options:["20","10","5","错误"], answer:0, explanation:"PERMUT(n, k) 返回从 n 个对象中取 k 个的排列数。P(5,2) = 5×4 = 20。" }
  ],
  "GCD": [
    { type:"choice", question:"=GCD(12, 18) 的结果是？", options:["6","3","12","错误"], answer:0, explanation:"GCD 返回最大公约数。12 和 18 的最大公约数是 6。" }
  ],
  "LCM": [
    { type:"choice", question:"=LCM(4, 6) 的结果是？", options:["12","24","6","错误"], answer:0, explanation:"LCM 返回最小公倍数。4 和 6 的最小公倍数是 12。" }
  ],
  "MROUND": [
    { type:"choice", question:"=MROUND(10, 3) 的结果是？", options:["9","10","12","3"], answer:0, explanation:"MROUND(数值, 基数) 四舍五入到基数的最近倍数。10 四舍五入到 3 的最近倍数是 9（3×3）。" }
  ],
  "QUOTIENT": [
    { type:"choice", question:"=QUOTIENT(17, 5) 的结果是？", options:["3","2","3.4","错误"], answer:0, explanation:"QUOTIENT 返回除法的整数部分（商），舍弃余数。17÷5 = 3 余 2，所以返回 3。" }
  ],
  "MMULT": [
    { type:"choice", question:"MMULT 函数用于？", options:["矩阵乘法","求矩阵的逆","求矩阵的行列式","求平均值"], answer:0, explanation:"MMULT(array1, array2) 返回两个矩阵的乘积。结果是一个数组，旧版 Excel 需要 Ctrl+Shift+Enter。" }
  ],
  "MINVERSE": [
    { type:"choice", question:"MINVERSE 函数用于？", options:["求矩阵的逆矩阵","求矩阵的转置","求矩阵的乘积","求矩阵的和"], answer:0, explanation:"MINVERSE(array) 返回矩阵的逆矩阵。只有方阵（行数=列数）且行列式不为 0 的矩阵才有逆矩阵。" }
  ],
  "MDETERM": [
    { type:"choice", question:"MDETERM 函数返回的是？", options:["矩阵的行列式的值","矩阵的逆","矩阵的乘积","矩阵的和"], answer:0, explanation:"MDETERM(array) 返回一个方阵的行列式的值。行列式为 0 的矩阵没有逆矩阵。" }
  ],
  "SUMSQ": [
    { type:"choice", question:"=SUMSQ(3, 4) 的结果是？", options:["25","7","12","5"], answer:0, explanation:"SUMSQ 返回所有参数的平方和。3² + 4² = 9 + 16 = 25。" }
  ],
  "SUMX2MY2": [
    { type:"choice", question:"SUMX2MY2 计算的是？", options:["两数组对应值之差的平方和","两数组对应值的平方和","两数组对应值的乘积和","两数组之和"], answer:0, explanation:"SUMX2MY2(array_x, array_y) 返回 Σ(x² - y²)，即两数组对应值之差的平方和。" }
  ],
  "SUMX2PY2": [
    { type:"choice", question:"SUMX2PY2 计算的是？", options:["两数组对应值的平方和","两数组对应值之差的平方和","两数组对应值的乘积","两数组之和"], answer:0, explanation:"SUMX2PY2(array_x, array_y) 返回 Σ(x² + y²)，即两数组对应值的平方和。" }
  ],
  "SUMXMY2": [
    { type:"choice", question:"SUMXMY2 计算的是？", options:["两数组对应值之差的平方和","两数组对应值的平方和","两数组对应值的乘积","两数组之和"], answer:0, explanation:"SUMXMY2(array_x, array_y) 返回 Σ((x-y)²)，即两数组对应值之差的平方和。" }
  ]
};

// 转成 JS 对象字符串
function objToJS(obj) {
  const entries = Object.entries(obj).map(([k, v]) => {
    const arrStr = JSON.stringify(v, null, 0);
    return `  "${k}": ${arrStr}`;
  });
  return entries.join(',\n');
}

const newDataStr = objToJS(newBatch);

// 找到 QUIZ_DATA 中最后一个 ] 的位置（在 }; 之前）
const qStart = html.indexOf('const QUIZ_DATA = {');
if (qStart === -1) { console.log('❌ 未找到 QUIZ_DATA'); process.exit(1); }

// 找到 QUIZ_DATA 对象的结束位置
let depth = 0;
let inStr = false;
let escape = false;
let quoteChar = null;
let i = html.indexOf('{', qStart);
const objStart = i;
while (i < html.length) {
  const ch = html[i];
  if (escape) { escape = false; i++; continue; }
  if (ch === '\\' && inStr) { escape = true; i++; continue; }
  if ((ch === '"' || ch === "'" || ch === '`') && !inStr) {
    inStr = true; quoteChar = ch;
  } else if (ch === quoteChar && inStr) {
    inStr = false;
  } else if (!inStr) {
    if (ch === '{') depth++;
    else if (ch === '}') { depth--; if (depth === 0) break; }
  }
  i++;
}
const objEnd = i; // 指向 }

// 在 } 之前插入新数据（前面加逗号）
const before = html.substring(0, objEnd);
const after = html.substring(objEnd);

// 找最后一个 ] 在 objStart 和 objEnd 之间
const lastBracket = html.lastIndexOf(']', objEnd);
if (lastBracket === -1) { console.log('❌ 未找到最后一个 ]'); process.exit(1); }

const finalHtml = html.substring(0, lastBracket + 1) 
  + ',\n' + newDataStr + '\n'
  + html.substring(lastBracket + 1);

// 验证 JS 语法
const scriptMatch = finalHtml.match(/<script>([\s\S]*?)<\/script>/);
if (scriptMatch) {
  try {
    new Function(scriptMatch[1]);
    console.log('✅ JS 语法验证通过');
  } catch(e) {
    console.log('❌ JS 语法错误:', e.message);
    process.exit(1);
  }
}

fs.writeFileSync('Excel函数大全.html', finalHtml, 'utf8');
console.log(`✅ 插入完成！新增 ${Object.keys(newBatch).length} 个函数，共 ${Object.values(newBatch).reduce((s,a)=>s+a.length,0)} 道题`);
