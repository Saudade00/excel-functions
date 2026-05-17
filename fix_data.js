const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'index.html');
let content = fs.readFileSync(filePath, 'utf8');

// 修复：把 "100[{" 恢复为 "const FUNCTIONS = [{"
const wrongPattern = '100[{"name":"ABS","description":"返回参数的绝对值';
const correctPrefix = 'const FUNCTIONS = ';

if (content.includes(wrongPattern)) {
  // 找到 100[{"name":"ABS" 的位置
  const idx = content.indexOf(wrongPattern);
  if (idx > 0) {
    // 替换 "100" 为 "const FUNCTIONS = "
    content = content.substring(0, idx) + correctPrefix + content.substring(idx + 3);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('✅ 已修复 FUNCTIONS 数据定义');
    console.log('   位置:', idx);
  }
} else {
  console.log('⚠️  未找到损坏的数据模式');
}
