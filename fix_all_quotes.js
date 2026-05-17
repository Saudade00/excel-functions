const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'index.html');
let content = fs.readFileSync(filePath, 'utf8');

// 修复所有缺少闭合引号的字段
// 模式: "字段名":"...文字...�?,"下一个字段"
// 应该是: "字段名":"...文字...值","下一个字段"

const fields = ['description', 'category', 'usage', 'params', 'notes', 'example', 'rating', 'stars'];

fields.forEach((field, i) => {
  const nextField = fields[i + 1] || 'hasDetail';
  // 匹配 "field":"...�?,"nextField"
  const pattern = new RegExp(`"${field}":"([^"]*)\\ufffd\\?,"${nextField}"`, 'g');
  const replacement = `"${field}":"$1值","${nextField}"`;
  const before = content;
  content = content.replace(pattern, replacement);
  const count = (before.match(pattern) || []).length;
  if (count > 0) {
    console.log(`✅ 修复 ${field} 字段: ${count} 处`);
  }
});

// 也处理 "name" 字段（如果有）
content = content.replace(/"name":"([^"]*)\ufffd\?,"description"/g, '"name":"$1值","description"');

fs.writeFileSync(filePath, content, 'utf8');
console.log('✅ 所有引号修复完成');
