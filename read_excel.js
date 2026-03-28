const fs = require('fs');
const path = require('path');

// Check if xlsx is available
try {
  const XLSX = require('xlsx');
  const filePath = path.join(__dirname, 'Excel函数大全完整版.xls');
  const workbook = XLSX.readFile(filePath);
  
  console.log('Sheet names:', workbook.SheetNames);
  
  workbook.SheetNames.forEach(sheetName => {
    console.log('\n===== Sheet:', sheetName, '=====');
    const sheet = workbook.Sheets[sheetName];
    const data = XLSX.utils.sheet_to_json(sheet, { header: 1, defval: '' });
    data.slice(0, 50).forEach((row, i) => {
      if (row.some(cell => cell !== '')) {
        console.log(`Row ${i}:`, JSON.stringify(row));
      }
    });
    console.log('Total rows:', data.length);
  });
} catch(e) {
  console.error('Error:', e.message);
  // Try to install xlsx
  console.log('xlsx not available');
}
