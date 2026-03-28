const d = require('./functions_data.json');
const cats = {};
d.functions.forEach(function(f) {
  cats[f.category] = (cats[f.category] || 0) + 1;
});
console.log('总函数数:', d.functions.length);
Object.keys(cats).forEach(function(k) {
  console.log(k + ':', cats[k]);
});
// 看看哪些有detail
const withDetail = d.functions.filter(function(f){ return f.hasDetail; });
console.log('\nhasDetail 数量:', withDetail.length);
// 看几个典型函数的数据结构
const sample = d.functions.find(function(f){ return f.hasDetail && f.params; });
if (sample) console.log('\n典型函数示例:\n', JSON.stringify(sample, null, 2));
