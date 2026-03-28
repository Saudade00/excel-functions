const XLSX = require('xlsx');
const fs = require('fs');

const filePath = 'C:\\Users\\74779\\Desktop\\Excel函数大全完整版.xls';
const workbook = XLSX.readFile(filePath);

// Read full index 
const indexSheet = workbook.Sheets['函数索引'];
const indexData = XLSX.utils.sheet_to_json(indexSheet, { header: 1, defval: '' });

// Collect functions from index (skip the first few header rows)
const allFunctions = [];
for (let i = 4; i < indexData.length; i++) {
  const row = indexData[i];
  const cell0 = String(row[0]).trim();
  const cell1 = String(row[1]).trim();
  
  // Skip category headers and empty rows
  if (!cell0 || cell0 === '函数索引' || cell0 === '函数字母索引') continue;
  if (cell0.match(/^[A-Z]\s类$/)) continue; // "A 类" etc.
  if (!cell1 || cell0 === cell1) continue;
  
  // Valid function entry
  if (cell0.match(/^[A-Z2]/)) {
    allFunctions.push({
      name: cell0,
      description: cell1
    });
  }
}

console.log(`Found ${allFunctions.length} functions in index`);

// Read each function's detail sheet
const functionDetails = {};

workbook.SheetNames.forEach(sheetName => {
  const sheet = workbook.Sheets[sheetName];
  const data = XLSX.utils.sheet_to_json(sheet, { header: 1, defval: '' });
  
  if (data.length === 0) return;
  
  let topTitle = '';
  let fnName = sheetName;
  let summary = '';
  let usage = '';
  let params = '';
  let notes = '';
  let example = '';
  let rating = '';
  
  // Row 0: title/category description
  if (data[0] && data[0].some(c => c)) {
    topTitle = data[0].filter(c => c !== '').join(' / ').trim();
  }
  
  for (let i = 0; i < Math.min(data.length, 30); i++) {
    const row = data[i];
    const r0 = String(row[0] || '').trim();
    const r1 = String(row[1] || '').trim();
    const r3 = String(row[3] || '').trim();
    const r4 = String(row[4] || '').trim();
    
    // Function name (usually row 1, col 0)
    if (i === 1 && r0 && r0.match(/^[A-Z]/)) {
      fnName = r0;
    }
    
    // Rating stars
    if (r4 && r4.includes('★')) {
      rating = r4;
    } else if (r1 && r1.includes('★')) {
      rating = r1;
    }
    
    if (r0 === '说明:' || r0 === '说明') {
      summary = r1;
    }
    if (r0 === '使用格式：' || r0 === '使用格式:') {
      usage = r1;
    }
    if (r0 === '参数定义:' || r0 === '参数定义：') {
      params = r1;
    }
    if (r0 === '要点:' || r0 === '要点：') {
      notes = r1;
    }
    if (r0 === '特别提醒：' || r0 === '特别提醒:') {
      notes = (notes ? notes + '\n' : '') + r1;
    }
    if (r0 === '应用实例:' || r0 === '应用实例：') {
      example = r1;
    }
  }
  
  functionDetails[sheetName] = {
    topTitle,
    fnName,
    summary: summary || topTitle,
    usage,
    params,
    notes,
    example,
    rating
  };
});

// Build category mapping from 目录 sheet
const dirSheet = workbook.Sheets['目录'];
const dirData = XLSX.utils.sheet_to_json(dirSheet, { header: 1, defval: '' });

const bigCategories = {
  '日期与时间函数': { icon: '📅', color: '#4299e1', functions: [] },
  '数学与三角函数': { icon: '📐', color: '#48bb78', functions: [] },
  '逻辑函数': { icon: '🔀', color: '#ed8936', functions: [] },
  '查找与引用函数': { icon: '🔍', color: '#9f7aea', functions: [] },
  '数据库函数': { icon: '🗄️', color: '#f56565', functions: [] },
  '文本函数': { icon: '📝', color: '#38b2ac', functions: [] },
  '统计函数': { icon: '📊', color: '#667eea', functions: [] },
  '财务函数': { icon: '💰', color: '#ecc94b', functions: [] },
  '工程函数': { icon: '⚙️', color: '#fc8181', functions: [] },
  '信息函数': { icon: 'ℹ️', color: '#76e4f7', functions: [] },
  '外部函数': { icon: '🔌', color: '#b794f4', functions: [] },
  '其他函数': { icon: '📦', color: '#a0aec0', functions: [] }
};

let currentBigCat = '';
dirData.forEach(row => {
  const r0 = String(row[0] || '').trim();
  const r1 = String(row[1] || '').trim();
  const r2 = String(row[2] || '').trim();
  
  if (r0.match(/^[一二三四五六七八九十]+[、。,]?$/) && r1 && bigCategories[r1]) {
    currentBigCat = r1;
    return;
  }
  if (r0 === '返回' || r0 === '') {
    if (r1.match(/^[一二三四五六七八九十]/)) {
      // sub-category label, skip
      return;
    }
  }
  
  // Pick up function names in col2 or col1
  const fnCandidate = r2 || '';
  if (currentBigCat && fnCandidate && fnCandidate.match(/^[A-Z2]/) && !fnCandidate.includes(' ')) {
    if (!bigCategories[currentBigCat].functions.includes(fnCandidate)) {
      bigCategories[currentBigCat].functions.push(fnCandidate);
    }
  }
});

// Enhance allFunctions with details and category
const enrichedFunctions = allFunctions
  .filter(f => f.name && !['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'].includes(f.name))
  .map(f => {
    // Find category
    let cat = '其他函数';
    for (const [catName, catData] of Object.entries(bigCategories)) {
      if (catData.functions.includes(f.name)) {
        cat = catName;
        break;
      }
    }
    
    // Get details from sheet
    const detail = functionDetails[f.name] || {};
    
    return {
      name: f.name,
      description: f.description,
      category: cat,
      usage: detail.usage || '',
      params: detail.params || '',
      notes: detail.notes || '',
      example: detail.example || '',
      rating: detail.rating || '',
      topTitle: detail.topTitle || '',
      hasDetail: !!functionDetails[f.name]
    };
  });

// Assign unassigned functions to categories
enrichedFunctions.forEach(f => {
  if (f.category === '其他函数') {
    // Try to guess from name patterns
    const name = f.name;
    const desc = f.description;
    
    if (['DATE','DAY','MONTH','YEAR','NOW','TODAY','TIME','HOUR','MINUTE','SECOND','WEEKDAY','WEEKNUM','WORKDAY','NETWORKDAYS','DATEDIF','DATEVALUE','TIMEVALUE','DAYS360','EDATE','EOMONTH'].includes(name)) {
      f.category = '日期与时间函数';
    } else if (['IF','AND','OR','NOT','TRUE','FALSE','IFERROR','IFNA'].includes(name)) {
      f.category = '逻辑函数';
    } else if (['VLOOKUP','HLOOKUP','LOOKUP','INDEX','MATCH','OFFSET','ADDRESS','INDIRECT','ROW','ROWS','COLUMN','COLUMNS','CHOOSE','AREAS','HYPERLINK','GETPIVOTDATA','TRANSPOSE'].includes(name)) {
      f.category = '查找与引用函数';
    } else if (name.startsWith('D') && ['DAVERAGE','DCOUNT','DCOUNTA','DMAX','DMIN','DPRODUCT','DSTDEV','DSTDEVP','DSUM','DVAR','DVARP','DGET'].includes(name)) {
      f.category = '数据库函数';
    } else if (['SUM','SUMIF','SUMPRODUCT','SUMSQ','SUMX2MY2','SUMX2PY2','SUMXMY2','ABS','SQRT','POWER','MOD','INT','ROUND','ROUNDUP','ROUNDDOWN','FLOOR','CEILING','RAND','RANDBETWEEN','PRODUCT','FACT','COMBIN','PERMUT','GCD','LCM','LOG','LOG10','LN','EXP','PI','DEGREES','RADIANS','SIN','COS','TAN','ASIN','ACOS','ATAN','ATAN2','SINH','COSH','TANH','ASINH','ACOSH','ATANH','MMULT','MDETERM','MINVERSE','MUNIT','SUBTOTAL','RANK','SIGN','EVEN','ODD','TRUNC','QUOTIENT'].includes(name)) {
      f.category = '数学与三角函数';
    } else if (['COUNT','COUNTA','COUNTBLANK','COUNTIF','COUNTIFS','AVERAGE','AVERAGEA','AVERAGEIF','AVERAGEIFS','MAX','MIN','MAXA','MINA','MEDIAN','MODE','STDEV','STDEVA','STDEVP','STDEVPA','VAR','VARA','VARP','VARPA','LARGE','SMALL','RANK','PERCENTILE','QUARTILE','PERCENTRANK','FREQUENCY','CORREL','COVAR','FORECAST','TREND','GROWTH','SLOPE','INTERCEPT','RSQ','STEYX','AVEDEV','DEVSQ','NORMDIST','NORMSDIST','NORMINV','NORMSINV','BINOMDIST','POISSON','HYPGEOMDIST','NEGBINOMDIST','TDIST','TINV','FDIST','FINV','CHIDIST','CHINV','CONFIDENCE','CRITBINOM','GEOMEAN','HARMEAN','TRIMMEAN','BETADIST','BETAINV','EXPONDIST','GAMMADIST','GAMMAINV','LOGNORMDIST','LOGINV','WEIBULL','PROB','TTEST','FTEST','CHITEST','ZTEST'].includes(name)) {
      f.category = '统计函数';
    } else if (['LEN','LENB','LEFT','LEFTB','RIGHT','RIGHTB','MID','MIDB','FIND','FINDB','SEARCH','SEARCHB','REPLACE','REPLACEB','SUBSTITUTE','UPPER','LOWER','PROPER','TRIM','CLEAN','REPT','TEXT','VALUE','CHAR','CODE','CONCATENATE','EXACT','FIXED','DOLLAR','RMB','ASC','JIS','WIDECHAR','BAHTTEXT','PHONETIC','T'].includes(name)) {
      f.category = '文本函数';
    } else if (['PV','FV','NPV','IRR','PMT','NPER','RATE','IPMT','PPMT','XNPV','XIRR','MIRR','SLN','SYD','DB','DDB','VDB','AMORLINC','AMORDEGRC','ACCRINT','ACCRINTM','DISC','INTRATE','PRICEDISC','PRICEMAT','PRICE','YIELD','YIELDDISC','YIELDMAT','DURATION','MDURATION','COUPDAYBS','COUPDAYS','COUPDAYSNC','COUPNCD','COUPNUM','COUPPCD','RECEIVED','TBILLEQ','TBILLPRICE','TBILLYIELD','DOLLARDE','DOLLARFR','CUMIPMT','CUMPRINC','ODDFPRICE','ODDFYIELD','ODDLPRICE','ODDLYIELD','FVSCHEDULE','EFFECT','NOMINAL'].includes(name)) {
      f.category = '财务函数';
    } else if (desc && (desc.includes('Bessel') || desc.includes('进制') || desc.includes('复数') || name.match(/^(BIN|DEC|HEX|OCT|CONVERT|DELTA|GESTEP|BESSELI|BESSELJ|BESSELK|BESSELY|ERF|ERFC|IMAGINARY|IMABS|IMARGUMENT|IMCONJUGATE|IMCOS|IMDIV|IMEXP|IMLN|IMLOG|IMPOWER|IMPRODUCT|IMREAL|IMSIN|IMSQRT|IMSUB|IMSUM|COMPLEX)/))) {
      f.category = '工程函数';
    } else if (['CELL','ERROR.TYPE','INFO','ISBLANK','ISERR','ISERROR','ISEVEN','ISLOGICAL','ISNA','ISNONTEXT','ISNUMBER','ISODD','ISREF','ISTEXT','N','NA','TYPE'].includes(name)) {
      f.category = '信息函数';
    }
  }
});

const output = {
  functions: enrichedFunctions,
  categories: Object.entries(bigCategories).map(([name, data]) => ({
    name,
    icon: data.icon,
    color: data.color,
    count: enrichedFunctions.filter(f => f.category === name).length
  }))
};

fs.writeFileSync('C:\\Users\\74779\\Desktop\\functions_data.json', JSON.stringify(output, null, 2), 'utf8');
console.log(`Total functions: ${enrichedFunctions.length}`);
output.categories.forEach(c => console.log(`  ${c.name}: ${c.count}`));
