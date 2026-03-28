const XLSX = require('xlsx');
const path = require('path');
const fs = require('fs');

const filePath = path.join('C:\\Users\\74779\\Desktop', 'Excel函数大全完整版.xls');
const workbook = XLSX.readFile(filePath);

const allData = {};

workbook.SheetNames.forEach(sheetName => {
  const sheet = workbook.Sheets[sheetName];
  const data = XLSX.utils.sheet_to_json(sheet, { header: 1, defval: '' });
  allData[sheetName] = data;
});

fs.writeFileSync('C:\\Users\\74779\\Desktop\\excel_data.json', JSON.stringify(allData, null, 2), 'utf8');
console.log('Done! Sheets:', workbook.SheetNames.length);

// Print index sheet summary
const indexSheet = allData['函数索引'];
if (indexSheet) {
  console.log('\n=== 函数索引 (first 100 rows) ===');
  indexSheet.slice(0, 100).forEach((row, i) => {
    if (row.some(c => c !== '')) console.log(`  [${i}] ${JSON.stringify(row)}`);
  });
}
