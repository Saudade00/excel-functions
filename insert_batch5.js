// insert_batch5.js
// 第五批：向 QUIZ_DATA 插入 30 个新函数的练习题

const fs = require('fs');
const path = 'Excel函数大全.html';
let html = fs.readFileSync(path, 'utf8');

// 找到 QUIZ_DATA 对象范围
const qStart = html.indexOf('const QUIZ_DATA = {');
if (qStart === -1) { console.error('QUIZ_DATA not found'); process.exit(1); }

let depth = 0;
let i = qStart + 'const QUIZ_DATA = '.length;
while (i < html.length) {
  if (html[i] === '{') depth++;
  if (html[i] === '}') { depth--; if (depth === 0) break; }
  i++;
}
const objEnd = i; // QUIZ_DATA 对象体结束的 }

// 在对象体内找到最后一个 ]（最后一个数组的结尾）
const inner = html.substring(qStart + 'const QUIZ_DATA = '.length, objEnd);
const lastBracket = inner.lastIndexOf(']');
// 实际位置需要加上偏移
const actualLastBracket = qStart + 'const QUIZ_DATA = '.length + lastBracket;

const newBatch = {
  "ABS": [
    {
      type: "choice",
      question: "ABS 函数的作用是什么？",
      options: ["返回数字的绝对值", "对数字四舍五入", "返回数字的平方根", "返回数字的符号"],
      answer: 0,
      explanation: "ABS(number) 返回一个数的绝对值，即去掉负号的数值。"
    }
  ],
  "ACCRINT": [
    {
      type: "choice",
      question: "ACCRINT 函数属于哪一类函数？",
      options: ["统计函数", "财务函数", "文本函数", "逻辑函数"],
      answer: 1,
      explanation: "ACCRINT 是财务函数，用于计算定期付息有价证券的应计利息。"
    }
  ],
  "ACCRINTM": [
    {
      type: "choice",
      question: "ACCRINTM 函数计算的是什么？",
      options: ["定期付息债券的应计利息", "到期付息债券的应计利息", "股票的股息", "贷款的利息"],
      answer: 1,
      explanation: "ACCRINTM 是财务函数，计算在到期日支付利息的有价证券的应计利息。"
    }
  ],
  "ACOS": [
    {
      type: "choice",
      question: "ACOS(0) 的返回值是多少？",
      options: ["0", "1", "π/2（约1.5708）", "π（约3.1416）"],
      answer: 2,
      explanation: "ACOS是反余弦函数，ACOS(0)=π/2≈1.5708（弧度）。"
    }
  ],
  "ACOSH": [
    {
      type: "choice",
      question: "ACOSH 函数是什么的反函数？",
      options: ["COS", "SIN", "COSH（双曲余弦）", "SINH"],
      answer: 2,
      explanation: "ACOSH 是反双曲余弦函数，是 COSH 的反函数。"
    }
  ],
  "ADDRESS": [
    {
      type: "choice",
      question: "ADDRESS(1,1) 默认返回什么？",
      options: ["A1", "$A$1", "R1C1", "1A"],
      answer: 1,
      explanation: "ADDRESS(row_num,column_num) 默认返回绝对引用的单元格地址文本，ADDRESS(1,1) 返回 $A$1。"
    }
  ],
  "AMORDEGRC": [
    {
      type: "choice",
      question: "AMORDEGRC 函数用于计算什么？",
      options: ["折旧", "利息", "应计利息", "投资回报"],
      answer: 0,
      explanation: "AMORDEGRC 是财务函数，使用折旧系数计算每个记账期的折旧值。"
    }
  ],
  "AMORLINC": [
    {
      type: "choice",
      question: "AMORLINC 函数计算折旧的方式是？",
      options: ["余额递减法", "直线法", "双倍余额递减法", "年数总和法"],
      answer: 1,
      explanation: "AMORLINC 使用直线法（比例递减）计算折旧。"
    }
  ],
  "AND": [
    {
      type: "choice",
      question: "AND(TRUE, FALSE, TRUE) 的返回值是什么？",
      options: ["TRUE", "FALSE", "0", "1"],
      answer: 1,
      explanation: "AND 函数所有参数为 TRUE 时才返回 TRUE，有一个 FALSE 就返回 FALSE。"
    }
  ],
  "AREAS": [
    {
      type: "choice",
      question: "AREAS 函数返回的是什么？",
      options: ["单元格的个数", "引用中包含的区域个数", "工作表的数量", "列的宽度"],
      answer: 1,
      explanation: "AREAS(reference) 返回引用中包含的连续单元格区域个数。例如 AREAS((A1:B2,D3:E4)) 返回 2。"
    }
  ],
  "ASC": [
    {
      type: "choice",
      question: "ASC 函数的作用是什么？",
      options: ["将全角字符转换为半角字符", "将半角字符转换为全角字符", "将文本转换为大写", "将文本转换为小写"],
      answer: 0,
      explanation: "ASC 函数将字符串中的全角（双字节）英文字母或片假名转换为半角（单字节）字符。"
    }
  ],
  "ASIN": [
    {
      type: "choice",
      question: "ASIN(1) 的返回值是多少（弧度）？",
      options: ["0", "π/2", "π", "2π"],
      answer: 1,
      explanation: "ASIN 是反正弦函数，ASIN(1)=π/2≈1.5708。"
    }
  ],
  "ASINH": [
    {
      type: "choice",
      question: "ASINH 函数代表什么？",
      options: ["反正弦", "反双曲正弦", "反余弦", "反双曲余弦"],
      answer: 1,
      explanation: "ASINH 是反双曲正弦函数（Area Hyperbolic Sine）。"
    }
  ],
  "ATAN": [
    {
      type: "choice",
      question: "ATAN(1) 的返回值约等于多少（弧度）？",
      options: ["0.785（π/4）", "1.0", "1.5708（π/2）", "3.1416（π）"],
      answer: 0,
      explanation: "ATAN 是反正切函数，ATAN(1)=π/4≈0.785 弧度（即 45°）。"
    }
  ],
  "ATAN2": [
    {
      type: "choice",
      question: "ATAN2 函数与 ATAN 函数的主要区别是？",
      options: ["ATAN2 需要 x 和 y 两个坐标", "ATAN2 只接受一个参数", "ATAN2 返回角度（度）", "没有区别"],
      answer: 0,
      explanation: "ATAN2(y,x) 接受纵坐标 y 和横坐标 x 两个参数，可以正确判断象限；ATAN(x) 只接受一个比值参数。"
    }
  ],
  "ATANH": [
    {
      type: "choice",
      question: "ATANH 函数是什么的反函数？",
      options: ["TAN", "TANH（双曲正切）", "ATAN", "SINH"],
      answer: 1,
      explanation: "ATANH 是反双曲正切函数，是 TANH 的反函数。"
    }
  ],
  "AVEDEV": [
    {
      type: "choice",
      question: "AVEDEV 函数计算的是什么？",
      options: ["平均值", "平均绝对偏差", "标准差", "方差"],
      answer: 1,
      explanation: "AVEDEV 返回一组数据点与它们的平均值之间的平均绝对偏差，衡量数据的离散程度。"
    }
  ],
  "AVERAGE": [
    {
      type: "choice",
      question: "关于 AVERAGE 函数，以下说法正确的是？",
      options: ["会计算空白单元格", "会计算文本值", "忽略空白单元格和文本值", "将所有文本视为0"],
      answer: 2,
      explanation: "AVERAGE 函数忽略空白单元格和文本，只对数值求平均。若要包含文本（视为0），用 AVERAGEA。"
    }
  ],
  "AVERAGEIF": [
    {
      type: "choice",
      question: "AVERAGEIF 函数最多可以设置几个条件？",
      options: ["1个", "2个", "多个", "没有限制"],
      answer: 0,
      explanation: "AVERAGEIF 只支持单个条件。多个条件用 AVERAGEIFS（注意S在末尾）。"
    }
  ],
  "AVERAGEA": [
    {
      type: "choice",
      question: "AVERAGEA 与 AVERAGE 的主要区别是？",
      options: ["AVERAGEA 速度更快", "AVERAGEA 将文本视为0，将TRUE/FALSE视为1/0", "没有区别", "AVERAGEA 只能处理整数"],
      answer: 1,
      explanation: "AVERAGEA 把文本当成 0，TRUE 当成 1，FALSE 当成 0，而 AVERAGE 直接忽略它们。"
    }
  ],
  "BAHTTEXT": [
    {
      type: "choice",
      question: "BAHTTEXT 函数的作用是什么？",
      options: ["将数字转换为泰铢文本", "将数字转换为人民币文本", "将文本转换为数字", "将泰铢转换为美元"],
      answer: 0,
      explanation: "BAHTTEXT 是泰国专用函数，将数字转换为带泰铢符号（฿）的文本。"
    }
  ],
  "BESSELI": [
    {
      type: "choice",
      question: "BESSELI 函数属于哪一类函数？",
      options: ["统计函数", "工程函数", "财务函数", "数学函数"],
      answer: 1,
      explanation: "BESSELI 是工程函数，返回修正贝塞尔函数 In(x) 的值。"
    }
  ],
  "BESSELJ": [
    {
      type: "choice",
      question: "BESSELJ 函数返回的是第几类贝塞尔函数？",
      options: ["第一类", "第二类", "第三类", "修正型"],
      answer: 0,
      explanation: "BESSELJ 返回第一类贝塞尔函数 Jn(x) 的值。"
    }
  ],
  "BESSELK": [
    {
      type: "choice",
      question: "BESSELK 函数返回的是哪种贝塞尔函数？",
      options: ["第一类", "第二类", "修正第二类", "球贝塞尔函数"],
      answer: 2,
      explanation: "BESSELK 返回修正贝塞尔函数 Kn(x)（第二类修正贝塞尔函数）的值。"
    }
  ],
  "BESSELY": [
    {
      type: "choice",
      question: "BESSELY 函数返回的是第几类贝塞尔函数？",
      options: ["第一类", "第二类（诺伊曼函数）", "修正型", "球贝塞尔函数"],
      answer: 1,
      explanation: "BESSELY 返回第二类贝塞尔函数 Yn(x)（也称诺伊曼函数）的值。"
    }
  ],
  "BETADIST": [
    {
      type: "choice",
      question: "BETADIST 函数描述的是哪种分布？",
      options: ["正态分布", "Beta 分布", "二项分布", "泊松分布"],
      answer: 1,
      explanation: "BETADIST 返回 Beta 累积分布函数的值，常用于项目评估（PERT 分析）。"
    }
  ],
  "BETAINV": [
    {
      type: "choice",
      question: "BETAINV 函数与 BETADIST 的关系是？",
      options: ["BETAINV 是 BETADIST 的反函数", "没有关系", "BETAINV 是 BETADIST 的平方", "BETAINV 计算标准差"],
      answer: 0,
      explanation: "BETAINV 返回 Beta 累积分布的反函数（给定概率，求对应的 x 值）。"
    }
  ],
  "BIN2DEC": [
    {
      type: "choice",
      question: "BIN2DEC(1010) 的返回值是多少？",
      options: ["10", "1010", "5", "2"],
      answer: 0,
      explanation: "BIN2DEC 将二进制数转换为十进制。二进制 1010 = 1×8 + 0×4 + 1×2 + 0×1 = 10。"
    }
  ],
  "BIN2HEX": [
    {
      type: "choice",
      question: "BIN2HEX(1111) 的返回值是多少？",
      options: ["15", "F", "1111", "17"],
      answer: 1,
      explanation: "BIN2HEX 将二进制数转换为十六进制。二进制 1111 = 十进制 15 = 十六进制 F。"
    }
  ],
  "BIN2OCT": [
    {
      type: "choice",
      question: "BIN2OCT(1000) 的返回值是多少？",
      options: ["8", "10", "1000", "20"],
      answer: 1,
      explanation: "BIN2OCT 将二进制数转换为八进制。二进制 1000 = 十进制 8 = 八进制 10。"
    }
  ]
};

// 手动拼接 JS 对象字符串（保持与源文件风格一致）
function objToJS(obj) {
  const entries = Object.entries(obj).map(([k, v]) => {
    const items = v.map(q => {
      const opts = q.options ? JSON.stringify(q.options) : undefined;
      const ans = typeof q.answer === 'number' ? q.answer : JSON.stringify(q.answer);
      return `    { type: "${q.type}", question: ${JSON.stringify(q.question)}, options: ${opts}, answer: ${ans}, explanation: ${JSON.stringify(q.explanation)} }`;
    }).join(',\n');
    return `  ${k}: [\n${items}\n  ]`;
  }).join(',\n');
  return entries;
}

const newDataStr = objToJS(newBatch);

// 在最后一个 ] 后插入新数据
const finalHtml = html.substring(0, actualLastBracket + 1)
  + ',\n'
  + newDataStr
  + '\n'
  + html.substring(actualLastBracket + 1);

fs.writeFileSync(path, finalHtml, 'utf8');
console.log('✅ 已插入', Object.keys(newBatch).length, '个新函数的练习题');
