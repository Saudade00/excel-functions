const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'index.html');
let content = fs.readFileSync(filePath, 'utf8');

// 修复所有缺少闭合引号的 description 字段
// 模式: "description":"...文字...�?,"category"
// 应该是: "description":"...文字...值","category"

// 先处理最常见的情况：�? 后面缺少 "
content = content.replace(/"description":"([^"]*)\ufffd\?,"category"/g, '"description":"$1值","category"');

// 也处理其他可能缺少引号的字段
content = content.replace(/"description":"([^"]*)\ufffd\?,"usage"/g, '"description":"$1值","usage"');
content = content.replace(/"description":"([^"]*)\ufffd\?,"params"/g, '"description":"$1值","params"');

fs.writeFileSync(filePath, content, 'utf8');
console.log('✅ 引号修复完成');
