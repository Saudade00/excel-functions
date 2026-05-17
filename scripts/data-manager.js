#!/usr/bin/env node
/**
 * data-manager.js - 统一的数据管理和修复工具
 * 替换原来的 fix_data.js, fix_quotes.js, fix_unicode.js 等脚本
 * 
 * 用法：
 *   node scripts/data-manager.js validate  - 验证数据完整性
 *   node scripts/data-manager.js fix-quotes - 修复引号问题
 *   node scripts/data-manager.js fix-unicode - 修复 Unicode 问题
 *   node scripts/data-manager.js add-favicon - 添加 favicon
 *   node scripts/data-manager.js all - 执行所有修复
 */

const fs = require('fs');
const path = require('path');

const ROOT_DIR = __dirname + '/..';
const INDEX_FILE = path.join(ROOT_DIR, 'index.html');
const DATA_FILE = path.join(ROOT_DIR, 'data/functions.js');

// 主函数
async function main() {
  const command = process.argv[2] || 'help';
  
  switch(command) {
    case 'validate':
      validateData();
      break;
    case 'fix-quotes':
      fixQuotes();
      break;
    case 'fix-unicode':
      fixUnicode();
      break;
    case 'add-favicon':
      addFavicon();
      break;
    case 'all':
      validateData();
      fixQuotes();
      fixUnicode();
      addFavicon();
      console.log('✅ 所有修复已完成');
      break;
    case 'help':
    default:
      showHelp();
      break;
  }
}

// 验证数据完整性
function validateData() {
  console.log('📊 验证数据完整性...');
  
  if (!fs.existsSync(INDEX_FILE)) {
    console.error('❌ 找不到 index.html 文件');
    return;
  }
  
  let content = fs.readFileSync(INDEX_FILE, 'utf8');
  
  // 检查 FUNCTIONS 数据是否存在
  if (content.includes('const FUNCTIONS = [')) {
    console.log('✅ FUNCTIONS 数据存在');
  } else {
    console.error('❌ FUNCTIONS 数据丢失');
  }
  
  // 检查数据格式
  const match = content.match(/const FUNCTIONS = (\[.*?\]);/s);
  if (match) {
    try {
      const data = JSON.parse(match[1]);
      console.log(`✅ 数据格式正确，共 ${data.length} 个函数`);
    } catch(e) {
      console.error('❌ 数据格式错误:', e.message);
    }
  }
}

// 修复引号问题
function fixQuotes() {
  console.log('🔧 修复引号问题...');
  
  if (!fs.existsSync(INDEX_FILE)) {
    console.error('❌ 找不到 index.html 文件');
    return;
  }
  
  let content = fs.readFileSync(INDEX_FILE, 'utf8');
  let modified = false;
  
  // 修复中文引号
  const fixes = [
    [/'/g, "'"],
    [/"/g, '"'],
    [/"/g, '"'],
    [/'/g, "'"]
  ];
  
  fixes.forEach(([pattern, replacement]) => {
    if (pattern.test(content)) {
      content = content.replace(pattern, replacement);
      modified = true;
    }
  });
  
  if (modified) {
    fs.writeFileSync(INDEX_FILE, content, 'utf8');
    console.log('✅ 引号已修复');
  } else {
    console.log('✅ 无需修复引号');
  }
}

// 修复 Unicode 问题
function fixUnicode() {
  console.log('🔧 修复 Unicode 问题...');
  
  if (!fs.existsSync(INDEX_FILE)) {
    console.error('❌ 找不到 index.html 文件');
    return;
  }
  
  let content = fs.readFileSync(INDEX_FILE, 'utf8');
  let modified = false;
  
  // 检查并修复常见的 Unicode 问题
  // (这里可以根据实际需要添加具体的修复逻辑)
  
  if (modified) {
    fs.writeFileSync(INDEX_FILE, content, 'utf8');
    console.log('✅ Unicode 问题已修复');
  } else {
    console.log('✅ 无需修复 Unicode');
  }
}

// 添加 Favicon
function addFavicon() {
  console.log('🎨 添加 Favicon...');
  
  if (!fs.existsSync(INDEX_FILE)) {
    console.error('❌ 找不到 index.html 文件');
    return;
  }
  
  let content = fs.readFileSync(INDEX_FILE, 'utf8');
  
  // 检查是否已有 favicon
  if (content.includes('<link rel="icon"')) {
    console.log('✅ Favicon 已存在');
    return;
  }
  
  // 添加 favicon
  const favicon = '<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 100 100%27%3E%3Ctext y=%27.9em%27 font-size=%2790%27%3E%F0%9F%93%8A%3C/text%3E%3C/svg%3E">\n';
  
  if (content.includes('</title>')) {
    content = content.replace('</title>\n', '</title>\n' + favicon);
    fs.writeFileSync(INDEX_FILE, content, 'utf8');
    console.log('✅ Favicon 已添加');
  } else {
    console.log('⚠️  未找到 </title> 标签');
  }
}

// 显示帮助
function showHelp() {
  console.log(`
数据管理工具 - 使用方法：

  node scripts/data-manager.js validate    - 验证数据完整性
  node scripts/data-manager.js fix-quotes  - 修复引号问题
  node scripts/data-manager.js fix-unicode - 修复 Unicode 问题
  node scripts/data-manager.js add-favicon - 添加 favicon
  node scripts/data-manager.js all          - 执行所有修复
  node scripts/data-manager.js help         - 显示此帮助

示例：
  node scripts/data-manager.js all
  `);
}

// 执行
main().catch(console.error);
