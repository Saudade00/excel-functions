const fs = require('fs');

let html = fs.readFileSync('Excel函数大全.html', 'utf8');

// 提取 FUNCTIONS 数组
const m = html.match(/(const FUNCTIONS = )(\[[\s\S]*?\])(;\s*\n)/);
if (!m) { console.log('❌ 未找到 FUNCTIONS 数组'); process.exit(1); }

const prefix = m[1];   // "const FUNCTIONS = "
const arrStr = m[2];   // 数组字符串
const suffix = m[3];   // ";\n"

let arr;
try {
  arr = JSON.parse(arrStr);
} catch(e) {
  console.log('❌ JSON 解析失败:', e.message);
  process.exit(1);
}

console.log(`当前 FUNCTIONS 数量: ${arr.length}`);

// 新函数定义（按顺序插入到 VLOOKUP 后面）
const newFuncs = [
  {
    name: "XLOOKUP",
    description: "Office 365 新函数，在表格中按行或列查找值，支持向左/向右/模糊查找",
    category: "查找与引用函数",
    usage: "XLOOKUP(lookup_value, lookup_array, return_array, [if_not_found], [match_mode], [search_mode])",
    params: "lookup_value：要查找的值；lookup_array：查找数组（行或列）；return_array：返回数组；if_not_found：找不到时返回的值（省略则返回#N/A）；match_mode：匹配模式（0=精确匹配，1=近似匹配，-1=精确匹配或下一个更小值，2=通配符匹配）；search_mode：搜索模式（1=从上到下，-1=从下到上，2=二进制升序，-2=二进制降序）",
    notes: "XLOOKUP 是 VLOOKUP 的升级版，可以向左查找、不需要排序列、默认精确匹配。支持模糊查找和反向查找。",
    example: "=XLOOKUP(\"苹果\", A:A, B:B, \"未找到\") —— 在 A 列查找「苹果」，返回 B 列对应值，找不到返回「未找到」",
    rating: "★★★★★",
    stars: "★★★★★",
    hasDetail: true
  },
  {
    name: "FILTER",
    description: "根据条件筛选数组，返回匹配条件的所有行/列（动态数组函数）",
    category: "查找与引用函数",
    usage: "FILTER(array, include, [if_empty])",
    params: "array：要筛选的数组或范围；include：布尔值数组（TRUE/FALSE），指定筛选条件；if_empty：可选，当没有匹配项时返回的值（省略则返回#CALC!）",
    notes: "FILTER 返回动态数组，结果会自动溢出到相邻单元格。可以按多列条件组合筛选。",
    example: "=FILTER(A2:C100, B2:B100>80) —— 筛选出 B 列大于 80 的所有行，返回 A:C 列对应数据",
    rating: "★★★★★",
    stars: "★★★★★",
    hasDetail: true
  },
  {
    name: "UNIQUE",
    description: "返回数组中的唯一值（去重），Office 365 动态数组函数",
    category: "文本函数",
    usage: "UNIQUE(array, [by_col], [exactly_once])",
    params: "array：要提取唯一值的数组或范围；by_col：可选，TRUE 按列比较，FALSE 或省略按行比较；exactly_once：可选，TRUE 只返回只出现一次的值，FALSE 或省略返回所有唯一值",
    notes: "UNIQUE 返回动态数组。搭配 COUNTA 可以统计不重复个数：=COUNTA(UNIQUE(A:A))。",
    example: "=UNIQUE(A2:A100) —— 提取 A2:A100 中的所有不重复值",
    rating: "★★★★★",
    stars: "★★★★★",
    hasDetail: true
  },
  {
    name: "SORT",
    description: "对数组进行排序，Office 365 动态数组函数",
    category: "文本函数",
    usage: "SORT(array, [sort_index], [sort_order], [by_col])",
    params: "array：要排序的数组或范围；sort_index：可选，按第几列/行排序（默认1）；sort_order：可选，1=升序（默认），-1=降序；by_col：可选，TRUE 按列排序，FALSE 或省略按行排序",
    notes: "SORT 返回动态数组。可以按多列排序，嵌套 SORT 即可：SORT(SORT(array,1,1),2,-1)。",
    example: "=SORT(A2:C100, 3, -1) —— 按第 3 列降序排列 A:C 的数据",
    rating: "★★★★☆",
    stars: "★★★★☆",
    hasDetail: true
  }
];

// AVERAGEIF 定义
const avgIfFunc = {
  name: "AVERAGEIF",
  description: "对满足给定条件的单元格计算算术平均值",
  category: "统计函数",
  usage: "AVERAGEIF(range, criteria, [average_range])",
  params: "range：条件判断的范围；criteria：条件（支持比较运算符和通配符）；average_range：可选，实际求平均的范围（省略则对 range 求平均）",
  notes: "AVERAGEIF 忽略空白单元格和文本。条件需要用引号括起来，如 \">80\"。通配符 ? 和 * 可用在条件中。",
  example: "=AVERAGEIF(B2:B100, \">80\") —— 计算 B2:B100 中大于 80 的数值的平均值",
  rating: "★★★★☆",
  stars: "★★★★☆",
  hasDetail: true
};

// 找到插入位置
const vlookupIdx = arr.findIndex(f => f.name === 'VLOOKUP');
const avgIdx = arr.findIndex(f => f.name === 'AVERAGE');

console.log(`VLOOKUP 索引: ${vlookupIdx}`);
console.log(`AVERAGE 索引: ${avgIdx}`);

if (vlookupIdx === -1) { console.log('❌ 未找到 VLOOKUP'); process.exit(1); }
if (avgIdx === -1) { console.log('❌ 未找到 AVERAGE'); process.exit(1); }

// 在 VLOOKUP 后插入 4 个函数
arr.splice(vlookupIdx + 1, 0, ...newFuncs);
console.log(`✅ 在 VLOOKUP 后插入了 ${newFuncs.length} 个函数`);

// 注意：插入后索引会变化，AVERAGE 的索引需要重新计算
// 因为 newFuncs 插在 VLOOKUP 后面，如果 AVERAGE 在 VLOOKUP 前面则不受影响
// AVERAGE 的索引是 17，VLOOKUP 是 319，所以 AVERAGE 不受影响
// 但为了防止顺序变化，重新查找
const avgIdx2 = arr.findIndex(f => f.name === 'AVERAGE');
arr.splice(avgIdx2 + 1, 0, avgIfFunc);
console.log(`✅ 在 AVERAGE 后插入了 AVERAGEIF`);

console.log(`插入后 FUNCTIONS 数量: ${arr.length}`);

// 重新生成数组字符串（格式化）
const newArrStr = JSON.stringify(arr, null, 0); // 压缩格式，和原文件一致

// 替换原文件中的 FUNCTIONS 定义
const newStatement = prefix + newArrStr + suffix;
html = html.replace(/(const FUNCTIONS = )\[[\s\S]*?\](;\s*\n)/, newStatement);

// 验证 JS 语法
try {
  const scriptMatch = html.match(/<script>([\s\S]*?)<\/script>/);
  if (scriptMatch) {
    new Function(scriptMatch[1]);
    console.log('✅ JS 语法验证通过');
  }
} catch(e) {
  console.log('❌ JS 语法错误:', e.message);
  process.exit(1);
}

// 保存
fs.writeFileSync('Excel函数大全.html', html, 'utf8');
console.log('✅ FUNCTIONS 数组更新完成！');
console.log(`新增函数: XLOOKUP, FILTER, UNIQUE, SORT, AVERAGEIF`);
