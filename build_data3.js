const XLSX = require('xlsx');
const fs = require('fs');

const filePath = 'C:\\Users\\74779\\Desktop\\Excel函数大全完整版.xls';
const workbook = XLSX.readFile(filePath);

// Category definitions - manually map based on standard Excel classification
const categoryMap = {
  // 日期与时间函数
  '日期与时间函数': [
    'DATE','DATEDIF','DATEVALUE','DAY','DAYS360','EDATE','EOMONTH','HOUR',
    'MINUTE','MONTH','NETWORKDAYS','NOW','SECOND','TIME','TIMEVALUE',
    'TODAY','WEEKDAY','WEEKNUM','WORKDAY','YEAR','YEARFRAC'
  ],
  // 数学与三角函数
  '数学与三角函数': [
    'ABS','ACOS','ACOSH','ASIN','ASINH','ATAN','ATAN2','ATANH','CEILING',
    'CEILNG','COMBIN','COS','COSH','DEGREES','EVEN','EXP','FACT','FACTDOUBLE',
    'FLOOR','GCD','INT','LCM','LN','LOG','LOG10','MDETERM','MINVERSE','MMULT',
    'MOD','MROUND','MULTINOMIAL','ODD','PI','POWER','PRODUCT','QUOTIENT',
    'RADIANS','RAND','RANDBETWEEN','ROMAN','ROUND','ROUNDDOWN','ROUNDUP',
    'SERIESSUM','SIGN','SIN','SINH','SQRT','SQRTPI','SUBTOTAL','SUM','SUMIF',
    'SUMPRODUCT','SUMSQ','SUMX2MY2','SUMX2PY2','SUMXMY2','TAN','TANH',
    'TRUNC','RANK','SUMIFS'
  ],
  // 逻辑函数
  '逻辑函数': [
    'AND','FALSE','IF','IFERROR','IFNA','NOT','OR','TRUE','XOR'
  ],
  // 查找与引用函数
  '查找与引用函数': [
    'ADDRESS','AREAS','CHOOSE','COLUMN','COLUMNS','GETPIVOTDATA','HLOOKUP',
    'HYPERLINK','INDEX','INDIRECT','LOOKUP','MATCH','OFFSET','ROW','ROWS',
    'RTD','TRANSPOSE','VLOOKUP'
  ],
  // 数据库函数
  '数据库函数': [
    'DAVERAGE','DCOUNT','DCOUNTA','DGET','DMAX','DMIN','DPRODUCT',
    'DSTDEV','DSTDEVP','DSUM','DVAR','DVARP'
  ],
  // 文本函数
  '文本函数': [
    'ASC','BAHTTEXT','CHAR','CLEAN','CODE','CONCATENATE','DOLLAR','EXACT',
    'FIND','FINDB','FIXED','JIS','LEFT','LEFTB','LEN','LENB','LOWER','MID',
    'MIDB','PHONETIC','PROPER','REPLACE','REPLACEB','REPT','RIGHT','RIGHTB',
    'RMB','SEARCH','SEARCHB','SUBSTITUTE','T','TEXT','TRIM','UPPER','VALUE',
    'WIDECHAR','ASC','NUMBERSTRING'
  ],
  // 统计函数
  '统计函数': [
    'AVEDEV','AVERAGE','AVERAGEA','AVERAGEIF','AVERAGEIFS','BETADIST',
    'BETAINV','BINOMDIST','CHIDIST','CHINV','CHITEST','CONFIDENCE','CORREL',
    'COUNT','COUNTA','COUNTBLANK','COUNTIF','COUNTIFS','COVAR','CRITBINOM',
    'DEVSQ','EXPONDIST','FDIST','FINV','FISHER','FISHERINV','FORECAST',
    'FREQUENCY','FTEST','GAMMADIST','GAMMAINV','GAMMALN','GEOMEAN',
    'GROWTH','HARMEAN','HYPGEOMDIST','INTERCEPT','KURT','LARGE','LINEST',
    'LOGEST','LOGINV','LOGNORMDIST','MAX','MAXA','MEDIAN','MIN','MINA',
    'MODE','NEGBINOMDIST','NORMDIST','NORMINV','NORMSDIST','NORMSINV',
    'PEARSON','PERCENTILE','PERCENTRANK','PERMUT','POISSON','PROB',
    'QUARTILE','RANK','RSQ','SKEW','SLOPE','SMALL','STANDARDIZE','STDEV',
    'STDEVA','STDEVP','STDEVPA','STEYX','TDIST','TINV','TREND','TRIMMEAN',
    'TTEST','VAR','VARA','VARP','VARPA','WEIBULL','ZTEST'
  ],
  // 财务函数
  '财务函数': [
    'ACCRINT','ACCRINTM','AMORDEGRC','AMORLINC','COUPDAYBS','COUPDAYS',
    'COUPDAYSNC','COUPNCD','COUPNUM','COUPPCD','CUMIPMT','CUMPRINC','DB',
    'DDB','DISC','DOLLARDE','DOLLARFR','DURATION','EFFECT','FV','FVSCHEDULE',
    'INTRATE','IPMT','IRR','ISPMT','MDURATION','MIRR','NOMINAL','NPER','NPV',
    'ODDFPRICE','ODDFYIELD','ODDLPRICE','ODDLYIELD','PMT','PPMT','PRICE',
    'PRICEDISC','PRICEMAT','PV','RATE','RECEIVED','SLN','SYD','TBILLEQ',
    'TBILLPRICE','TBILLYIELD','VDB','XIRR','XNPV','YIELD','YIELDDISC','YIELDMAT'
  ],
  // 工程函数
  '工程函数': [
    'BESSELI','BESSELJ','BESSELK','BESSELY','BIN2DEC','BIN2HEX','BIN2OCT',
    'COMPLEX','CONVERT','DEC2BIN','DEC2HEX','DEC2OCT','DELTA','ERF','ERFC',
    'GESTEP','HEX2BIN','HEX2DEC','HEX2OCT','IMABS','IMAGINARY','IMARGUMENT',
    'IMCONJUGATE','IMCOS','IMDIV','IMEXP','IMLN','IMLOG10','IMLOG2',
    'IMPOWER','IMPRODUCT','IMREAL','IMSIN','IMSQRT','IMSUB','IMSUM','OCT2BIN',
    'OCT2DEC','OCT2HEX'
  ],
  // 信息函数
  '信息函数': [
    'CELL','ERROR.TYPE','INFO','ISBLANK','ISERR','ISERROR','ISEVEN',
    'ISLOGICAL','ISNA','ISNONTEXT','ISNUMBER','ISODD','ISREF','ISTEXT','N','NA','TYPE'
  ],
  // 外部函数
  '外部函数': ['CALL','REGISTER.ID','SQL.REQUEST','EUROCONVERT'],
};

// Read index sheet
const indexSheet = workbook.Sheets['函数索引'];
const indexData = XLSX.utils.sheet_to_json(indexSheet, { header: 1, defval: '' });

// Build full function list from index
const indexFunctions = {};
for (let i = 4; i < indexData.length; i++) {
  const row = indexData[i];
  const cell0 = String(row[0] || '').trim();
  const cell1 = String(row[1] || '').trim();
  
  if (!cell0 || !cell1) continue;
  if (cell0.match(/^[A-Z]\s类$/)) continue;
  if (cell0 === cell1) continue;
  if (!cell0.match(/^[A-Z2]/)) continue;
  // Skip single letter entries
  if (cell0.length === 1) continue;
  
  indexFunctions[cell0] = cell1;
}

console.log(`Index functions count: ${Object.keys(indexFunctions).length}`);

// Read each sheet for details
const functionDetails = {};
workbook.SheetNames.forEach(sheetName => {
  const sheet = workbook.Sheets[sheetName];
  const data = XLSX.utils.sheet_to_json(sheet, { header: 1, defval: '' });
  if (data.length < 2) return;
  
  let topTitle = data[0] ? data[0].filter(c => c !== '').join('').trim() : '';
  let fnDisplayName = sheetName;
  let summary = '';
  let usage = '';
  let params = '';
  let notes = '';
  let example = '';
  let rating = '';
  
  for (let i = 0; i < Math.min(data.length, 25); i++) {
    const row = data[i];
    const r0 = String(row[0] || '').trim();
    const r1 = String(row[1] || '').trim();
    const r4 = String(row[4] || '').trim();
    
    if (i === 1 && r0.match(/^[A-Z]/)) fnDisplayName = r0;
    if (r4.includes('★')) rating = r4;
    else if (r1.includes('★')) rating = r1;
    
    if (r0 === '说明:' || r0 === '说明') summary = r1;
    if (r0 === '使用格式：' || r0 === '使用格式:' || r0 === '语法：' || r0 === '语法:') usage = r1;
    if (r0 === '参数定义:' || r0 === '参数定义：') params = r1;
    if (r0 === '要点:' || r0 === '要点：') notes = r1;
    if (r0 === '特别提醒：' || r0 === '特别提醒:') notes = (notes ? notes + ' ' : '') + r1;
    if (r0 === '应用实例:' || r0 === '应用实例：') example = r1;
  }
  
  if (!summary && topTitle && topTitle !== sheetName) summary = topTitle;
  
  functionDetails[sheetName] = { topTitle, fnDisplayName, summary, usage, params, notes, example, rating };
});

// Build final enriched list
const allFunctions = Object.entries(indexFunctions).map(([name, description]) => {
  // Find category
  let category = '其他函数';
  for (const [cat, names] of Object.entries(categoryMap)) {
    if (names.includes(name)) {
      category = cat;
      break;
    }
  }
  
  const detail = functionDetails[name] || {};
  
  return {
    name,
    description,
    category,
    usage: detail.usage || '',
    params: detail.params || '',
    notes: detail.notes || '',
    example: detail.example || '',
    rating: detail.rating || '',
    hasDetail: !!functionDetails[name]
  };
});

// Count by category
const categoryCounts = {};
allFunctions.forEach(f => {
  categoryCounts[f.category] = (categoryCounts[f.category] || 0) + 1;
});

console.log('\nCategory distribution:');
Object.entries(categoryCounts).sort((a,b) => b[1]-a[1]).forEach(([cat, count]) => {
  console.log(`  ${cat}: ${count}`);
});

const output = { functions: allFunctions };
fs.writeFileSync('C:\\Users\\74779\\Desktop\\functions_data.json', JSON.stringify(output, null, 2), 'utf8');
console.log(`\nTotal: ${allFunctions.length} functions exported`);
