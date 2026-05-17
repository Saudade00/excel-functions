const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8080;
const HOST = 'localhost';

const mimeTypes = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
};

const server = http.createServer((req, res) => {
  let filePath = path.join(__dirname, req.url === '/' ? 'index.html' : req.url);
  
  // 安全性：防止目录遍历
  if (!filePath.startsWith(__dirname)) {
    res.writeHead(403);
    res.end('403 Forbidden');
    return;
  }
  
  const ext = path.extname(filePath);
  const contentType = mimeTypes[ext] || 'application/octet-stream';
  
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>404 Not Found</h1>', 'utf8');
      } else {
        res.writeHead(500);
        res.end('500 Internal Server Error');
      }
      return;
    }
    res.writeHead(200, { 'Content-Type': contentType + '; charset=utf-8' });
    res.end(content, 'utf8');
  });
});

server.listen(PORT, HOST, () => {
  console.log(`✅ 服务器启动成功！`);
  console.log(`📍 访问地址：`);
  console.log(`   http://${HOST}:${PORT}`);
  console.log(``);
  console.log(`⚠️  按 Ctrl+C 停止服务器`);
});
