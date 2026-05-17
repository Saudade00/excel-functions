const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'index.html');
let content = fs.readFileSync(filePath, 'utf8');

// 简单的 SVG favicon (data URI)
const faviconTag = '<link rel="icon" href="data:image/svg+xml,<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 100 100\'><text y=\'.9em\' font-size=\'90\'>📊</text></svg>">\n';

// 在 </title> 后插入
const insertPoint = '</title>\n';
if (content.includes(insertPoint)) {
  content = content.replace(insertPoint, '</title>\n' + faviconTag);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('✅ Favicon 已添加');
} else {
  console.log('⚠️  未找到 </title> 标签');
}
