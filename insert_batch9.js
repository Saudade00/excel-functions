// insert_batch9.js
// 第九批：向 QUIZ_DATA 插入 30 个新函数的练习题

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

// 可靠提取已有函数名：用 verify_count.js 中验证过的正则
const reKey = /[\n\r]  \"(\w+)\":\s*\[/g;
let mm;
const existingNames = [];
while ((mm = reKey.exec(inner)) !== null) existingNames.push(mm[1]);
console.log('已有题函数数（正则）:', existingNames.length);

const newBatch = {
  "LOG": [
    {
      type: "choice",
      question: "LOG(100, 10) 的返回值是多少？",
      options: ["2", "100", "10", "0.01"],
      answer: 0,
      explanation: "LOG(数字,底数) 返回以指定底数的对数。LOG(100,10)=2（因为 10²=100）。"
    }
  ],
  "LOG10": [
    {
      type: "choice",
      question: "LOG10(1000) 的返回值是多少？",
      options: ["3", "1000", "30", "0.001"],
      answer: 0,
      explanation: "LOG10(数字) 返回以 10 为底的对数（常用对数）。LOG10(1000)=3。"
    }
  ],
  "LN": [
    {
      type: "choice",
      question: "LN(1) 的返回值是多少？",
      options: ["0", "1", "2.71828", "错误"],
      answer: 0,
      explanation: "LN(数字) 返回自然对数（以 e 为底）。LN(1)=0（因为 e⁰=1）。"
    }
  ],
  "SINH": [
    {
      type: "choice",
      question: "SINH 函数是什么？",
      options: ["双曲正弦函数", "正弦函数", "反正弦函数", "双曲余弦函数"],
      answer: 0,
      explanation: "SINH 是双曲正弦函数（Hyperbolic Sine）。SINH(x)=(eˣ-e⁻ˣ)/2。"
    }
  ],
  "TANH": [
    {
      type: "choice",
      question: "TANH(0) 的返回值是多少？",
      options: ["0", "1", "无穷大", "-1"],
      answer: 0,
      explanation: "TANH 是双曲正切函数。TANH(0)=0，TANH(∞)→1。"
    }
  ],
  "IMABS": [
    {
      type: "choice",
      question: "IMABS 函数用于处理什么类型的数据？",
      options: ["复数（虚数）", "实数", "矩阵", "向量"],
      answer: 0,
      explanation: "IMABS(复数) 返回复数的绝对值（模）。是工程函数，处理 x+yi 格式的复数。"
    }
  ],
  "IMAGINARY": [
    {
      type: "choice",
      question: "IMAGINARY(\"3+4i\") 的返回值是多少？",
      options: ["4", "3", "5", "错误"],
      answer: 0,
      explanation: "IMAGINARY(复数) 返回复数的虚部系数。\"3+4i\"的虚部是 4。"
    }
  ],
  "IMREAL": [
    {
      type: "choice",
      question: "IMREAL(\"3+4i\") 的返回值是多少？",
      options: ["3", "4", "5", "错误"],
      answer: 0,
      explanation: "IMREAL(复数) 返回复数的实部系数。\"3+4i\"的实部是 3。"
    }
  ],
  "IMSUM": [
    {
      type: "choice",
      question: "IMSUM 函数的作用是？",
      options: ["计算多个复数的和", "计算多个复数的差", "计算多个复数的积", "计算多个复数的商"],
      answer: 0,
      explanation: "IMSUM(复数1,复数2,...) 返回多个复数的和。"
    }
  ],
  "IMSUB": [
    {
      type: "choice",
      question: "IMSUB(\"3+4i\",\"1+2i\") 的返回值是多少？",
      options: ["2+2i", "4+6i", "3+4i", "错误"],
      answer: 0,
      explanation: "IMSUB(复数1,复数2) 返回两个复数的差。(3+4i)-(1+2i)=2+2i。"
    }
  ],
  "IMPRODUCT": [
    {
      type: "choice",
      question: "IMPRODUCT 函数的作用是？",
      options: ["计算多个复数的积", "计算多个复数的和", "计算多个复数的差", "计算复数的共轭"],
      answer: 0,
      explanation: "IMPRODUCT(复数1,复数2,...) 返回多个复数的乘积。"
    }
  ],
  "IMDIV": [
    {
      type: "choice",
      question: "IMDIV 函数用于？",
      options: ["计算两个复数的商", "计算两个复数的和", "计算两个复数的积", "计算复数的模"],
      answer: 0,
      explanation: "IMDIV(复数1,复数2) 返回两个复数的商（复数1÷复数2）。"
    }
  ],
  "IMCONJUGATE": [
    {
      type: "choice",
      question: "IMCONJUGATE(\"3+4i\") 的返回值是多少？",
      options: ["3-4i", "3+4i", "-3+4i", "错误"],
      answer: 0,
      explanation: "IMCONJUGATE(复数) 返回复数的共轭复数（虚部符号取反）。"
    }
  ],
  "IMEXP": [
    {
      type: "choice",
      question: "IMEXP 函数计算的是什么？",
      options: ["复数的 e 次幂", "复数的自然对数", "复数的正弦", "复数的余弦"],
      answer: 0,
      explanation: "IMEXP(复数) 返回 e 的复数次幂。IMEXP(xi)=eˣ(cos y + i sin y)。"
    }
  ],
  "IMSIN": [
    {
      type: "choice",
      question: "IMSIN 函数计算的是什么？",
      options: ["复数的正弦", "复数的余弦", "复数的指数", "复数的对数"],
      answer: 0,
      explanation: "IMSIN(复数) 返回复数的正弦值。"
    }
  ],
  "IMCOS": [
    {
      type: "choice",
      question: "IMCOS 函数计算的是什么？",
      options: ["复数的余弦", "复数的正弦", "复数的指数", "复数的对数"],
      answer: 0,
      explanation: "IMCOS(复数) 返回复数的余弦值。"
    }
  ],
  "IMSQRT": [
    {
      type: "choice",
      question: "IMSQRT 函数计算的是什么？",
      options: ["复数的平方根", "复数的平方", "复数的对数", "复数的指数"],
      answer: 0,
      explanation: "IMSQRT(复数) 返回复数的平方根（返回两个结果中的一个）。"
    }
  ],
  "FISHER": [
    {
      type: "choice",
      question: "FISHER 函数用于？",
      options: ["将 Pearson 相关系数转换为 Fisher Z'", "将 Fisher Z' 转换回相关系数", "计算回归系数", "计算卡方值"],
      answer: 0,
      explanation: "FISHER(数值) 将 Pearson 积矩相关系数 r 转换为 Fisher Z' 值，用于正态分布假设检验。"
    }
  ],
  "FISHERINV": [
    {
      type: "choice",
      question: "FISHERINV 与 FISHER 的关系是？",
      options: ["FISHERINV 是 FISHER 的反函数", "没有关系", "FISHERINV 计算标准差", "FISHERINV 计算方差"],
      answer: 0,
      explanation: "FISHERINV(z) 返回 Fisher Z' 变换的反函数，将 z 值转换回 Pearson 相关系数 r。"
    }
  ],
  "GAMMA": [
    {
      type: "choice",
      question: "GAMMA(5) 的返回值是多少？（Γ(5)=4!）",
      options: ["24", "120", "5", "1"],
      answer: 0,
      explanation: "GAMMA(数字) 返回 Gamma 函数的值。Γ(n)=(n-1)!，所以 Γ(5)=4!=24。"
    }
  ],
  "GAMMALN": [
    {
      type: "choice",
      question: "GAMMALN 与 GAMMA 的区别是？",
      options: ["GAMMALN 返回自然对数结果", "没有区别", "GAMMALN 已弃用", "GAMMALN 返回平方根"],
      answer: 0,
      explanation: "GAMMALN(数字) 返回 GAMMA(数字) 的自然对数。即 GAMMALN(x)=LN(GAMMA(x))。"
    }
  ],
  "FTEST": [
    {
      type: "choice",
      question: "FTEST 函数用于？",
      options: ["双样本 F 检验（方差是否相等）", "单样本 t 检验", "卡方检验", "回归显著性检验"],
      answer: 0,
      explanation: "FTEST(数组1,数组2) 返回 F 检验的双尾概率值，检验两样本方差是否相等。"
    }
  ],
  "CHIDIST": [
    {
      type: "choice",
      question: "CHIDIST 函数用于？",
      options: ["计算卡方分布的右尾概率", "计算卡方分布的反函数", "计算 t 分布的概率", "计算 F 分布的概率"],
      answer: 0,
      explanation: "CHIDIST(x,自由度) 返回卡方分布的右尾概率。Excel 2010 后建议用 CHISQ.DIST.RT 替代。"
    }
  ],
  "CHIINV": [
    {
      type: "choice",
      question: "CHIINV 与 CHIDIST 的关系是？",
      options: ["CHIINV 是 CHIDIST 的反函数", "没有关系", "CHIINV 计算均值", "CHIINV 计算方差"],
      answer: 0,
      explanation: "CHIINV(概率,自由度) 返回卡方分布的右尾临界值（CHIDIST 的反函数）。"
    }
  ],
  "CHITEST": [
    {
      type: "choice",
      question: "CHITEST 函数用于？",
      options: ["卡方独立性检验", "卡方拟合优度检验", "t 检验", "F 检验"],
      answer: 0,
      explanation: "CHITEST(实际范围,理论范围) 返回卡方检验的 p 值，检验两个分类变量是否独立。"
    }
  ],
  "CRITBINOM": [
    {
      type: "choice",
      question: "CRITBINOM 函数返回什么？",
      options: ["使累积二项分布≥临界概率的最小整数", "二项分布的概率", "二项分布的均值", "二项分布的标准差"],
      answer: 0,
      explanation: "CRITBINOM(试验数,成功概率,临界概率) 返回使累积二项式分布≥α的最小整数。"
    }
  ],
  "CONFIDENCE": [
    {
      type: "choice",
      question: "CONFIDENCE 函数用于计算？",
      options: ["总体均值的置信区间半径", "样本均值", "样本方差", "总体标准差"],
      answer: 0,
      explanation: "CONFIDENCE(α,标准差,样本量) 返回总体均值的置信区间半径。置信区间=样本均值±CONFIDENCE。"
    }
  ],
  "COVAR": [
    {
      type: "choice",
      question: "COVAR 函数计算的是什么？",
      options: ["协方差", "相关系数", "回归系数", "方差"],
      answer: 0,
      explanation: "COVAR(数组1,数组2) 返回两个数据集的协方差（各数据点与各自均值离差乘积的平均值）。"
    }
  ]
};

// 过滤已存在函数
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
