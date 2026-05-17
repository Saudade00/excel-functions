const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'index.html');
let content = fs.readFileSync(filePath, 'utf8');

// SVG favicon as data URI (properly encoded)
const faviconTag = '<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 100 100%27%3E%3Ctext y=%27.9em%27 font-size=%2790%27%3E%F0%9F%93%8A%3C/text%3E%3C/svg%3E">\n';

// Insert after </title>
const insertPoint = '</title>\n';
if (content.includes(insertPoint)) {
  content = content.replace(insertPoint, '</title>\n' + faviconTag);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('✅ Favicon 已添加');
} else {
  console.log('⚠️ 未找到 </title> 标签');
}
