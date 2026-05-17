const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'index.html');
let content = fs.readFileSync(filePath, 'utf8');

let count = 0;
const fieldPairs = [
  ['description', 'category'],
  ['category', 'usage'],
  ['usage', 'params'],
  ['params', 'notes'],
  ['notes', 'example'],
  ['example', 'rating'],
  ['rating', 'stars'],
  ['stars', 'hasDetail'],
];

fieldPairs.forEach(([field, nextField]) => {
  // 简单替换: "field":"...\uFFFD?,"nextField" -> "field":"...值","nextField"
  // 使用字符串替换而非正则
  const searchStr = `\uFFFD?,"${nextField}"`;
  const replaceStr = `值","${nextField}"`;
  
  let index = 0;
  while (true) {
    const idx = content.indexOf(searchStr, index);
    if (idx === -1) break;
    
    // 检查前面是否是 "field":"
    const prefix = content.substring(idx - 50, idx);
    if (prefix.includes(`"${field}":"`)) {
      content = content.substring(0, idx) + replaceStr + content.substring(idx + searchStr.length);
      count++;
      index = idx + replaceStr.length;
    } else {
      index = idx + 1;
    }
  }
});

fs.writeFileSync(filePath, content, 'utf8');
console.log(`✅ 共修复 ${count} 处`);
