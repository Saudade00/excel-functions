const XLSX = require('xlsx');
const path = require('path');
const fs = require('fs');

const filePath = 'C:\\Users\\74779\\Desktop\\Excel函数大全完整版.xls';
const workbook = XLSX.readFile(filePath);

// Read full index to get all function info
const indexSheet = workbook.Sheets['函数索引'];
const indexData = XLSX.utils.sheet_to_json(indexSheet, { header: 1, defval: '' });

// Collect all function entries from index
const functions = [];
let currentCategory = '';

for (let i = 0; i < indexData.length; i++) {
  const row = indexData[i];
  const cell0 = String(row[0]).trim();
  const cell1 = String(row[1]).trim();
  
  // Category headers like "A 类", "B 类"
  if (cell0.match(/^[A-Z]\s类$/)) {
    currentCategory = cell0;
    continue;
  }
  
  // Function entries: cell0 is function name (uppercase), cell1 is description
  if (cell0 && cell0 === cell0.toUpperCase() && cell0.match(/^[A-Z]/) && cell1 && !cell0.includes('类')) {
    functions.push({
      name: cell0,
      description: cell1,
      category: currentCategory
    });
  }
}

// Now read each function sheet for detail
const sheetDetails = {};
workbook.SheetNames.forEach(sheetName => {
  const sheet = workbook.Sheets[sheetName];
  const data = XLSX.utils.sheet_to_json(sheet, { header: 1, defval: '' });
  
  // Extract key info from each function sheet
  let fnName = sheetName;
  let summary = '';
  let usage = '';
  let params = '';
  let notes = '';
  let examples = [];
  let rating = '';
  let category_tag = '';
  
  data.forEach((row, i) => {
    const r0 = String(row[0]).trim();
    const r1 = String(row[1]).trim();
    
    if (i === 0 && row.some(c => c)) {
      summary = row.filter(c => c).join(' ').trim();
    }
    
    // Get rating stars
    if (r1 && r1.includes('★')) {
      rating = r1;
    }
    
    if (r0 === '说明:' || r0 === '说明') {
      summary = r1 || summary;
    }
    if (r0 === '使用格式：' || r0 === '使用格式:') {
      usage = r1;
    }
    if (r0 === '参数定义:' || r0 === '参数定义：') {
      params = r1;
    }
    if (r0 === '要点:' || r0 === '要点：' || r0 === '特别提醒：' || r0 === '特别提醒:') {
      notes = (notes ? notes + ' ' : '') + r1;
    }
    if (r0 === '应用实例:' || r0 === '应用实例：') {
      examples.push(r1);
    }
  });
  
  sheetDetails[sheetName] = { fnName, summary, usage, params, notes, examples, rating };
});

// Read the category info from 目录
const dirSheet = workbook.Sheets['目录'];
const dirData = XLSX.utils.sheet_to_json(dirSheet, { header: 1, defval: '' });

// Build category map
const categoryMap = {};
let catName = '';
dirData.forEach(row => {
  const r0 = String(row[0]).trim();
  const r1 = String(row[1]).trim();
  const r4 = String(row[4]).trim();
  
  // Category definitions like "一、日期与时间函数"
  if (r0.match(/^[一二三四五六七八九十]+、$/) && r1) {
    catName = r1;
  }
  // Function to category mapping
  if (r1 && catName && r4 && r1 !== catName) {
    // entries under a category
  }
});

// Build final data structure - enhanced functions list
const functionsWithDetails = functions.map(fn => {
  const detail = sheetDetails[fn.name] || 
                 Object.entries(sheetDetails).find(([k]) => k.toUpperCase() === fn.name.toUpperCase())?.[1] || {};
  return {
    ...fn,
    ...detail,
    description: fn.description || detail.summary || ''
  };
});

// Determine function categories from 目录 sheet
const bigCategories = {
  '日期与时间函数': [],
  '数学与三角函数': [],
  '逻辑函数': [],
  '查找与引用函数': [],
  '数据库函数': [],
  '文本函数': [],
  '统计函数': [],
  '财务函数': [],
  '工程函数': [],
  '信息函数': [],
  '外部函数': [],
  '其他函数': []
};

// Map functions to big categories based on directory
let currentBigCat = '';
let inFuncSection = false;

dirData.forEach(row => {
  const r0 = String(row[0]).trim();
  const r1 = String(row[1]).trim();
  const r2 = String(row[2]).trim();
  const r4 = String(row[4]).trim();
  
  // Detect big category
  if (r0.match(/^[一二三四五六七八九十]+、$/) && r1 && bigCategories[r1] !== undefined) {
    currentBigCat = r1;
  }
  
  // Function entries in the directory (row with function name in col2 or col4)
  if (currentBigCat && r2 && r2.match(/^[A-Z]/) && r2 === r2.toUpperCase()) {
    if (!bigCategories[currentBigCat].includes(r2)) {
      bigCategories[currentBigCat].push(r2);
    }
  }
});

// Export data as JSON for HTML
const exportData = {
  functions: functionsWithDetails,
  categories: bigCategories,
  sheetDetails
};

fs.writeFileSync('C:\\Users\\74779\\Desktop\\functions_data.json', JSON.stringify(exportData, null, 2), 'utf8');
console.log('Exported', functionsWithDetails.length, 'functions');
console.log('Categories:', Object.keys(bigCategories));

// Print sample
console.log('\nSample functions:');
functionsWithDetails.slice(0, 5).forEach(f => {
  console.log(`  ${f.name}: ${f.description}`);
  console.log(`    usage: ${f.usage}`);
  console.log(`    rating: ${f.rating}`);
});
