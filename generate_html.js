const XLSX = require('xlsx');
const fs = require('fs');

const filePath = 'C:\\Users\\74779\\Desktop\\Excel函数大全完整版.xls';
const workbook = XLSX.readFile(filePath);

const categoryMap = {
  '日期与时间函数': ['DATE','DATEDIF','DATEVALUE','DAY','DAYS360','EDATE','EOMONTH','HOUR','MINUTE','MONTH','NETWORKDAYS','NOW','SECOND','TIME','TIMEVALUE','TODAY','WEEKDAY','WEEKNUM','WORKDAY','YEAR','YEARFRAC'],
  '数学与三角函数': ['ABS','ACOS','ACOSH','ASIN','ASINH','ATAN','ATAN2','ATANH','CEILING','CEILNG','COMBIN','COS','COSH','DEGREES','EVEN','EXP','FACT','FACTDOUBLE','FLOOR','GCD','INT','LCM','LN','LOG','LOG10','MDETERM','MINVERSE','MMULT','MOD','MROUND','MULTINOMIAL','ODD','PI','POWER','PRODUCT','QUOTIENT','RADIANS','RAND','RANDBETWEEN','ROMAN','ROUND','ROUNDDOWN','ROUNDUP','SERIESSUM','SIGN','SIN','SINH','SQRT','SQRTPI','SUBTOTAL','SUM','SUMIF','SUMPRODUCT','SUMSQ','SUMX2MY2','SUMX2PY2','SUMXMY2','TAN','TANH','TRUNC','RANK','SUMIFS'],
  '逻辑函数': ['AND','FALSE','IF','IFERROR','IFNA','NOT','OR','TRUE','XOR'],
  '查找与引用函数': ['ADDRESS','AREAS','CHOOSE','COLUMN','COLUMNS','GETPIVOTDATA','HLOOKUP','HYPERLINK','INDEX','INDIRECT','LOOKUP','MATCH','OFFSET','ROW','ROWS','RTD','TRANSPOSE','VLOOKUP'],
  '数据库函数': ['DAVERAGE','DCOUNT','DCOUNTA','DGET','DMAX','DMIN','DPRODUCT','DSTDEV','DSTDEVP','DSUM','DVAR','DVARP'],
  '文本函数': ['ASC','BAHTTEXT','CHAR','CLEAN','CODE','CONCATENATE','DOLLAR','EXACT','FIND','FINDB','FIXED','JIS','LEFT','LEFTB','LEN','LENB','LOWER','MID','MIDB','PHONETIC','PROPER','REPLACE','REPLACEB','REPT','RIGHT','RIGHTB','RMB','SEARCH','SEARCHB','SUBSTITUTE','T','TEXT','TRIM','UPPER','VALUE','WIDECHAR','NUMBERSTRING'],
  '统计函数': ['AVEDEV','AVERAGE','AVERAGEA','AVERAGEIF','AVERAGEIFS','BETADIST','BETAINV','BINOMDIST','CHIDIST','CHINV','CHITEST','CONFIDENCE','CORREL','COUNT','COUNTA','COUNTBLANK','COUNTIF','COUNTIFS','COVAR','CRITBINOM','DEVSQ','EXPONDIST','FDIST','FINV','FISHER','FISHERINV','FORECAST','FREQUENCY','FTEST','GAMMADIST','GAMMAINV','GAMMALN','GEOMEAN','GROWTH','HARMEAN','HYPGEOMDIST','INTERCEPT','KURT','LARGE','LINEST','LOGEST','LOGINV','LOGNORMDIST','MAX','MAXA','MEDIAN','MIN','MINA','MODE','NEGBINOMDIST','NORMDIST','NORMINV','NORMSDIST','NORMSINV','PEARSON','PERCENTILE','PERCENTRANK','PERMUT','POISSON','PROB','QUARTILE','RANK','RSQ','SKEW','SLOPE','SMALL','STANDARDIZE','STDEV','STDEVA','STDEVP','STDEVPA','STEYX','TDIST','TINV','TREND','TRIMMEAN','TTEST','VAR','VARA','VARP','VARPA','WEIBULL','ZTEST'],
  '财务函数': ['ACCRINT','ACCRINTM','AMORDEGRC','AMORLINC','COUPDAYBS','COUPDAYS','COUPDAYSNC','COUPNCD','COUPNUM','COUPPCD','CUMIPMT','CUMPRINC','DB','DDB','DISC','DOLLARDE','DOLLARFR','DURATION','EFFECT','FV','FVSCHEDULE','INTRATE','IPMT','IRR','ISPMT','MDURATION','MIRR','NOMINAL','NPER','NPV','ODDFPRICE','ODDFYIELD','ODDLPRICE','ODDLYIELD','PMT','PPMT','PRICE','PRICEDISC','PRICEMAT','PV','RATE','RECEIVED','SLN','SYD','TBILLEQ','TBILLPRICE','TBILLYIELD','VDB','XIRR','XNPV','YIELD','YIELDDISC','YIELDMAT'],
  '工程函数': ['BESSELI','BESSELJ','BESSELK','BESSELY','BIN2DEC','BIN2HEX','BIN2OCT','COMPLEX','CONVERT','DEC2BIN','DEC2HEX','DEC2OCT','DELTA','ERF','ERFC','GESTEP','HEX2BIN','HEX2DEC','HEX2OCT','IMABS','IMAGINARY','IMARGUMENT','IMCONJUGATE','IMCOS','IMDIV','IMEXP','IMLN','IMLOG10','IMLOG2','IMPOWER','IMPRODUCT','IMREAL','IMSIN','IMSQRT','IMSUB','IMSUM','OCT2BIN','OCT2DEC','OCT2HEX'],
  '信息函数': ['CELL','ERROR.TYPE','INFO','ISBLANK','ISERR','ISERROR','ISEVEN','ISLOGICAL','ISNA','ISNONTEXT','ISNUMBER','ISODD','ISREF','ISTEXT','N','NA','TYPE'],
  '外部函数': ['CALL','REGISTER.ID','SQL.REQUEST','EUROCONVERT'],
};

const categoryMeta = {
  '日期与时间函数': { icon: '📅', color: '#3b82f6', bg: '#eff6ff' },
  '数学与三角函数': { icon: '📐', color: '#10b981', bg: '#ecfdf5' },
  '逻辑函数':       { icon: '🔀', color: '#f59e0b', bg: '#fffbeb' },
  '查找与引用函数': { icon: '🔍', color: '#8b5cf6', bg: '#f5f3ff' },
  '数据库函数':     { icon: '🗄️', color: '#ef4444', bg: '#fef2f2' },
  '文本函数':       { icon: '📝', color: '#14b8a6', bg: '#f0fdfa' },
  '统计函数':       { icon: '📊', color: '#6366f1', bg: '#eef2ff' },
  '财务函数':       { icon: '💰', color: '#d97706', bg: '#fffbeb' },
  '工程函数':       { icon: '⚙️', color: '#dc2626', bg: '#fef2f2' },
  '信息函数':       { icon: 'ℹ️', color: '#0891b2', bg: '#ecfeff' },
  '外部函数':       { icon: '🔌', color: '#7c3aed', bg: '#f5f3ff' },
  '其他函数':       { icon: '📦', color: '#6b7280', bg: '#f9fafb' },
};

// Read index
const indexSheet = workbook.Sheets['函数索引'];
const indexData = XLSX.utils.sheet_to_json(indexSheet, { header: 1, defval: '' });
const indexFunctions = {};
for (let i = 4; i < indexData.length; i++) {
  const row = indexData[i];
  const c0 = String(row[0] || '').trim();
  const c1 = String(row[1] || '').trim();
  if (!c0 || !c1 || c0.length < 2 || c0.match(/^[A-Z]\s类$/)) continue;
  if (!c0.match(/^[A-Z2]/)) continue;
  indexFunctions[c0] = c1;
}

// Read sheet details
const functionDetails = {};
workbook.SheetNames.forEach(name => {
  const sheet = workbook.Sheets[name];
  const data = XLSX.utils.sheet_to_json(sheet, { header: 1, defval: '' });
  if (data.length < 2) return;
  
  let d = { summary:'', usage:'', params:'', notes:'', example:'', rating:'' };
  for (let i = 0; i < Math.min(data.length, 30); i++) {
    const r = data[i];
    const r0 = String(r[0]||'').trim(), r1 = String(r[1]||'').trim(), r4 = String(r[4]||'').trim();
    if (r4.includes('★')) d.rating = r4;
    else if (r1.includes('★')) d.rating = r1;
    if (r0==='说明:'||r0==='说明') d.summary = r1;
    if (r0.startsWith('使用格式')) d.usage = r1;
    if (r0.startsWith('参数定义')) d.params = r1;
    if (r0.startsWith('要点')) d.notes = r1;
    if (r0.startsWith('特别提醒')) d.notes = (d.notes?d.notes+' ':'')+r1;
    if (r0.startsWith('应用实例')) d.example = r1;
  }
  functionDetails[name] = d;
});

// Build functions array
const functions = Object.entries(indexFunctions).map(([name, desc]) => {
  let cat = '其他函数';
  for (const [c, names] of Object.entries(categoryMap)) {
    if (names.includes(name)) { cat = c; break; }
  }
  const d = functionDetails[name] || {};
  const stars = (d.rating||'').replace(/[^★☆]/g,'');
  return { name, description: desc, category: cat, usage: d.usage||'', params: d.params||'', notes: d.notes||'', example: d.example||'', rating: d.rating||'', stars, hasDetail: !!functionDetails[name] };
});

// Generate HTML
const categoryCounts = {};
functions.forEach(f => { categoryCounts[f.category] = (categoryCounts[f.category]||0)+1; });

const functionsJson = JSON.stringify(functions);
const categoryMetaJson = JSON.stringify(categoryMeta);
const categoryCountsJson = JSON.stringify(categoryCounts);

const html = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Excel 函数大全 · 交互式参考手册</title>
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  :root {
    --primary: #2563eb;
    --primary-dark: #1d4ed8;
    --bg: #f8fafc;
    --surface: #ffffff;
    --border: #e2e8f0;
    --text: #1e293b;
    --text-muted: #64748b;
    --shadow: 0 1px 3px rgba(0,0,0,.1), 0 1px 2px rgba(0,0,0,.06);
    --shadow-md: 0 4px 6px -1px rgba(0,0,0,.1), 0 2px 4px -1px rgba(0,0,0,.06);
    --shadow-lg: 0 10px 15px -3px rgba(0,0,0,.1), 0 4px 6px -2px rgba(0,0,0,.05);
    --radius: 10px;
    --radius-sm: 6px;
    --transition: all .2s ease;
  }
  body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Microsoft YaHei', sans-serif; background: var(--bg); color: var(--text); min-height: 100vh; }
  
  /* Header */
  .header { background: linear-gradient(135deg, #1e3a8a 0%, #2563eb 50%, #0ea5e9 100%); color: white; padding: 32px 24px 24px; text-align: center; position: relative; overflow: hidden; }
  .header::before { content: ''; position: absolute; inset: 0; background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"); }
  .header-content { position: relative; max-width: 900px; margin: 0 auto; }
  .header h1 { font-size: 2.2rem; font-weight: 700; letter-spacing: -0.5px; margin-bottom: 8px; text-shadow: 0 2px 4px rgba(0,0,0,.2); }
  .header p { opacity: .85; font-size: 1rem; margin-bottom: 20px; }
  .header-stats { display: flex; gap: 24px; justify-content: center; flex-wrap: wrap; }
  .stat-badge { background: rgba(255,255,255,.15); backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,.2); padding: 8px 20px; border-radius: 999px; font-size: 0.875rem; font-weight: 500; }
  .stat-badge span { font-weight: 700; font-size: 1.1rem; }
  
  /* Main Layout */
  .main { max-width: 1200px; margin: 0 auto; padding: 24px 16px; }
  
  /* Search Bar */
  .search-section { margin-bottom: 20px; }
  .search-wrap { position: relative; }
  .search-icon { position: absolute; left: 16px; top: 50%; transform: translateY(-50%); color: var(--text-muted); font-size: 1.1rem; pointer-events: none; }
  #searchInput { width: 100%; padding: 14px 20px 14px 46px; border: 2px solid var(--border); border-radius: var(--radius); font-size: 1rem; background: var(--surface); color: var(--text); outline: none; transition: var(--transition); box-shadow: var(--shadow); }
  #searchInput:focus { border-color: var(--primary); box-shadow: 0 0 0 3px rgba(37,99,235,.15); }
  #searchInput::placeholder { color: var(--text-muted); }
  
  /* Filter Tags */
  .filter-section { margin-bottom: 20px; }
  .filter-label { font-size: 0.8rem; font-weight: 600; color: var(--text-muted); text-transform: uppercase; letter-spacing: .05em; margin-bottom: 10px; }
  .filter-tags { display: flex; flex-wrap: wrap; gap: 8px; }
  .tag { display: inline-flex; align-items: center; gap: 6px; padding: 6px 14px; border-radius: 999px; font-size: 0.82rem; font-weight: 500; cursor: pointer; border: 1.5px solid transparent; transition: var(--transition); user-select: none; }
  .tag.active { border-color: currentColor; }
  .tag:hover { transform: translateY(-1px); box-shadow: var(--shadow-md); }
  .tag-count { background: rgba(0,0,0,.12); padding: 1px 7px; border-radius: 999px; font-size: 0.75rem; font-weight: 600; }
  
  /* Results Info */
  .results-info { display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px; }
  .results-count { font-size: 0.875rem; color: var(--text-muted); }
  .results-count strong { color: var(--text); }
  .sort-select { padding: 6px 12px; border: 1.5px solid var(--border); border-radius: var(--radius-sm); font-size: 0.82rem; background: var(--surface); color: var(--text); cursor: pointer; outline: none; }
  
  /* Function Grid */
  .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 14px; }
  
  /* Function Card */
  .card { background: var(--surface); border: 1.5px solid var(--border); border-radius: var(--radius); padding: 16px; cursor: pointer; transition: var(--transition); position: relative; overflow: hidden; }
  .card::before { content: ''; position: absolute; left: 0; top: 0; bottom: 0; width: 3px; background: currentColor; opacity: 0; transition: var(--transition); }
  .card:hover { transform: translateY(-2px); box-shadow: var(--shadow-lg); border-color: currentColor; }
  .card:hover::before { opacity: 1; }
  .card-header { display: flex; align-items: flex-start; justify-content: space-between; gap: 8px; margin-bottom: 8px; }
  .card-name { font-family: 'Consolas', 'Courier New', monospace; font-size: 1.05rem; font-weight: 700; letter-spacing: .02em; }
  .card-badge { display: inline-flex; align-items: center; gap: 4px; padding: 2px 10px; border-radius: 999px; font-size: 0.72rem; font-weight: 600; white-space: nowrap; flex-shrink: 0; }
  .card-desc { font-size: 0.875rem; color: var(--text-muted); line-height: 1.5; margin-bottom: 10px; }
  .card-usage { background: #f8fafc; border: 1px solid var(--border); border-radius: var(--radius-sm); padding: 8px 10px; font-family: monospace; font-size: 0.78rem; color: #1e40af; word-break: break-all; }
  .card-stars { font-size: 0.8rem; color: #f59e0b; margin-top: 8px; }
  .card-detail-badge { display: inline-flex; align-items: center; gap: 3px; margin-top: 8px; font-size: 0.72rem; color: var(--primary); background: #eff6ff; padding: 2px 8px; border-radius: 999px; }
  
  /* Modal */
  .modal-overlay { display: none; position: fixed; inset: 0; background: rgba(0,0,0,.5); backdrop-filter: blur(4px); z-index: 1000; align-items: center; justify-content: center; padding: 16px; }
  .modal-overlay.open { display: flex; animation: fadeIn .2s ease; }
  @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
  .modal { background: var(--surface); border-radius: 16px; width: 100%; max-width: 680px; max-height: 90vh; overflow: hidden; display: flex; flex-direction: column; box-shadow: 0 25px 50px rgba(0,0,0,.25); animation: slideUp .25s ease; }
  @keyframes slideUp { from { transform: translateY(20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
  .modal-header { padding: 24px 24px 16px; border-bottom: 1px solid var(--border); display: flex; align-items: flex-start; justify-content: space-between; gap: 16px; }
  .modal-title { display: flex; flex-direction: column; gap: 6px; }
  .modal-fn-name { font-family: monospace; font-size: 1.5rem; font-weight: 700; }
  .modal-fn-desc { font-size: 0.9rem; color: var(--text-muted); }
  .modal-close { width: 32px; height: 32px; border: none; background: var(--bg); border-radius: 50%; cursor: pointer; font-size: 1.2rem; display: flex; align-items: center; justify-content: center; color: var(--text-muted); transition: var(--transition); flex-shrink: 0; }
  .modal-close:hover { background: var(--border); color: var(--text); }
  .modal-body { padding: 20px 24px; overflow-y: auto; display: flex; flex-direction: column; gap: 16px; }
  .modal-section { display: flex; flex-direction: column; gap: 6px; }
  .modal-section-label { font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: .08em; color: var(--text-muted); }
  .modal-section-content { font-size: 0.9rem; line-height: 1.65; color: var(--text); }
  .usage-block { background: #1e1e3e; color: #a8d8ea; font-family: 'Consolas', monospace; font-size: 0.875rem; padding: 14px 16px; border-radius: var(--radius-sm); word-break: break-all; }
  .params-block { background: #fafafa; border: 1px solid var(--border); border-radius: var(--radius-sm); padding: 12px 14px; font-size: 0.875rem; color: #374151; line-height: 1.7; }
  .example-block { background: #fffbeb; border: 1px solid #fde68a; border-radius: var(--radius-sm); padding: 12px 14px; font-size: 0.875rem; color: #92400e; line-height: 1.65; }
  .notes-block { background: #eff6ff; border: 1px solid #bfdbfe; border-radius: var(--radius-sm); padding: 12px 14px; font-size: 0.875rem; color: #1e40af; line-height: 1.65; }
  .modal-cat-badge { display: inline-flex; align-items: center; gap: 6px; padding: 4px 14px; border-radius: 999px; font-size: 0.8rem; font-weight: 600; margin-bottom: 4px; }
  .stars-display { font-size: 1.1rem; color: #f59e0b; }
  
  /* Empty state */
  .empty { text-align: center; padding: 60px 20px; color: var(--text-muted); }
  .empty-icon { font-size: 3.5rem; margin-bottom: 16px; }
  .empty h3 { font-size: 1.1rem; margin-bottom: 6px; color: var(--text); }
  
  /* Responsive */
  @media (max-width: 640px) {
    .header h1 { font-size: 1.6rem; }
    .grid { grid-template-columns: 1fr; }
    .modal { max-height: 95vh; }
  }
  
  /* Copy button */
  .copy-btn { display: inline-flex; align-items: center; gap: 4px; padding: 4px 10px; background: rgba(255,255,255,.1); border: 1px solid rgba(37,99,235,.3); border-radius: 4px; font-size: 0.72rem; color: var(--primary); cursor: pointer; transition: var(--transition); margin-top: 4px; }
  .copy-btn:hover { background: #eff6ff; }
  
  /* Scrollbar */
  ::-webkit-scrollbar { width: 6px; }
  ::-webkit-scrollbar-track { background: transparent; }
  ::-webkit-scrollbar-thumb { background: var(--border); border-radius: 3px; }
  ::-webkit-scrollbar-thumb:hover { background: #94a3b8; }
</style>
</head>
<body>

<div class="header">
  <div class="header-content">
    <h1>📊 Excel 函数大全</h1>
    <p>交互式参考手册 · 快速搜索 · 分类浏览 · 详细说明</p>
    <div class="header-stats" id="headerStats"></div>
  </div>
</div>

<div class="main">
  <div class="search-section">
    <div class="search-wrap">
      <span class="search-icon">🔎</span>
      <input type="text" id="searchInput" placeholder="搜索函数名称或功能描述，例如：VLOOKUP、查找、日期..." autocomplete="off">
    </div>
  </div>
  
  <div class="filter-section">
    <div class="filter-label">函数分类</div>
    <div class="filter-tags" id="filterTags"></div>
  </div>
  
  <div class="results-info">
    <div class="results-count" id="resultsCount"></div>
    <select class="sort-select" id="sortSelect">
      <option value="name">按名称排序</option>
      <option value="category">按分类排序</option>
      <option value="detail">优先显示有详情的</option>
    </select>
  </div>
  
  <div class="grid" id="functionGrid"></div>
  <div class="empty" id="emptyState" style="display:none;">
    <div class="empty-icon">🔍</div>
    <h3>未找到匹配的函数</h3>
    <p>请尝试其他关键词或清除筛选条件</p>
  </div>
</div>

<!-- Modal -->
<div class="modal-overlay" id="modal" onclick="closeModal(event)">
  <div class="modal">
    <div class="modal-header">
      <div class="modal-title">
        <div class="modal-fn-name" id="modalName"></div>
        <div class="modal-fn-desc" id="modalDesc"></div>
      </div>
      <button class="modal-close" onclick="closeModalBtn()">✕</button>
    </div>
    <div class="modal-body" id="modalBody"></div>
  </div>
</div>

<script>
const FUNCTIONS = ${functionsJson};
const CAT_META = ${categoryMetaJson};
const CAT_COUNTS = ${categoryCountsJson};

let activeCategory = 'all';
let searchQuery = '';
let sortMode = 'name';

// Init header stats
const totalFns = FUNCTIONS.length;
const withDetail = FUNCTIONS.filter(f => f.hasDetail).length;
const categories = [...new Set(FUNCTIONS.map(f => f.category))].length;
document.getElementById('headerStats').innerHTML = \`
  <div class="stat-badge"><span>\${totalFns}</span> 个函数</div>
  <div class="stat-badge"><span>\${categories}</span> 大类</div>
  <div class="stat-badge"><span>\${withDetail}</span> 个含详细示例</div>
\`;

// Build filter tags
const tagContainer = document.getElementById('filterTags');
const allTag = createTag('all', '全部', Object.values(CAT_COUNTS).reduce((a,b)=>a+b,0), '#2563eb', '#eff6ff', true);
tagContainer.appendChild(allTag);

const catOrder = ['日期与时间函数','数学与三角函数','逻辑函数','查找与引用函数','数据库函数','文本函数','统计函数','财务函数','工程函数','信息函数','外部函数','其他函数'];
catOrder.forEach(cat => {
  const meta = CAT_META[cat] || { icon: '📦', color: '#6b7280', bg: '#f9fafb' };
  const count = CAT_COUNTS[cat] || 0;
  if (count === 0) return;
  const tag = createTag(cat, meta.icon + ' ' + cat, count, meta.color, meta.bg, false);
  tagContainer.appendChild(tag);
});

function createTag(cat, label, count, color, bg, active) {
  const tag = document.createElement('div');
  tag.className = 'tag' + (active ? ' active' : '');
  tag.style.color = color;
  tag.style.backgroundColor = bg;
  tag.innerHTML = \`\${label} <span class="tag-count">\${count}</span>\`;
  tag.onclick = () => setCategory(cat);
  tag._cat = cat;
  return tag;
}

function setCategory(cat) {
  activeCategory = cat;
  document.querySelectorAll('.tag').forEach(t => {
    const isActive = t._cat === cat;
    t.classList.toggle('active', isActive);
  });
  render();
}

document.getElementById('searchInput').addEventListener('input', e => {
  searchQuery = e.target.value.toLowerCase();
  render();
});

document.getElementById('sortSelect').addEventListener('change', e => {
  sortMode = e.target.value;
  render();
});

function getFiltered() {
  let fns = FUNCTIONS;
  if (activeCategory !== 'all') fns = fns.filter(f => f.category === activeCategory);
  if (searchQuery) {
    fns = fns.filter(f =>
      f.name.toLowerCase().includes(searchQuery) ||
      f.description.toLowerCase().includes(searchQuery) ||
      f.category.includes(searchQuery) ||
      (f.usage && f.usage.toLowerCase().includes(searchQuery)) ||
      (f.params && f.params.toLowerCase().includes(searchQuery)) ||
      (f.example && f.example.toLowerCase().includes(searchQuery))
    );
  }
  if (sortMode === 'name') fns = [...fns].sort((a,b) => a.name.localeCompare(b.name));
  else if (sortMode === 'category') fns = [...fns].sort((a,b) => a.category.localeCompare(b.category) || a.name.localeCompare(b.name));
  else if (sortMode === 'detail') fns = [...fns].sort((a,b) => (b.hasDetail?1:0)-(a.hasDetail?1:0) || a.name.localeCompare(b.name));
  return fns;
}

function render() {
  const fns = getFiltered();
  const grid = document.getElementById('functionGrid');
  const empty = document.getElementById('emptyState');
  const countEl = document.getElementById('resultsCount');
  
  countEl.innerHTML = \`共 <strong>\${fns.length}</strong> 个函数\${searchQuery ? ' (搜索: "'+searchQuery+'"）' : ''}\`;
  
  if (fns.length === 0) {
    grid.innerHTML = '';
    empty.style.display = 'block';
    return;
  }
  empty.style.display = 'none';
  
  grid.innerHTML = fns.map(f => {
    const meta = CAT_META[f.category] || CAT_META['其他函数'];
    const starsHtml = f.stars ? \`<div class="card-stars">\${f.stars}</div>\` : '';
    const usageHtml = f.usage ? \`<div class="card-usage">\${escHtml(f.usage)}</div>\` : '';
    const detailBadge = f.hasDetail ? '<div class="card-detail-badge">📖 含详细示例</div>' : '';
    return \`
      <div class="card" style="color:\${meta.color}" onclick="openModal('\${escHtml(f.name)}')">
        <div class="card-header">
          <div class="card-name" style="color:\${meta.color}">\${escHtml(f.name)}</div>
          <div class="card-badge" style="background:\${meta.bg};color:\${meta.color}">\${meta.icon} \${escHtml(f.category)}</div>
        </div>
        <div class="card-desc">\${escHtml(f.description)}</div>
        \${usageHtml}
        \${starsHtml}
        \${detailBadge}
      </div>
    \`;
  }).join('');
}

function escHtml(str) {
  return String(str||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

const fnMap = {};
FUNCTIONS.forEach(f => { fnMap[f.name] = f; });

function openModal(name) {
  const f = fnMap[name];
  if (!f) return;
  const meta = CAT_META[f.category] || CAT_META['其他函数'];
  
  document.getElementById('modalName').textContent = f.name;
  document.getElementById('modalName').style.color = meta.color;
  document.getElementById('modalDesc').textContent = f.description;
  
  let body = \`<div class="modal-section">
    <div class="modal-cat-badge" style="background:\${meta.bg};color:\${meta.color}">\${meta.icon} \${escHtml(f.category)}</div>
    \${f.stars ? '<div class="stars-display">'+escHtml(f.stars)+'</div>' : ''}
  </div>\`;
  
  if (f.usage) {
    body += \`<div class="modal-section">
      <div class="modal-section-label">语法格式</div>
      <div class="usage-block">\${escHtml(f.usage)}</div>
      <button class="copy-btn" onclick="copyText('\${escHtml(f.usage)}')">📋 复制语法</button>
    </div>\`;
  }
  
  if (f.params) {
    body += \`<div class="modal-section">
      <div class="modal-section-label">参数说明</div>
      <div class="params-block">\${escHtml(f.params)}</div>
    </div>\`;
  }
  
  if (f.notes) {
    body += \`<div class="modal-section">
      <div class="modal-section-label">注意事项</div>
      <div class="notes-block">\${escHtml(f.notes)}</div>
    </div>\`;
  }
  
  if (f.example) {
    body += \`<div class="modal-section">
      <div class="modal-section-label">应用实例</div>
      <div class="example-block">\${escHtml(f.example)}</div>
    </div>\`;
  }
  
  if (!f.usage && !f.params && !f.notes && !f.example) {
    body += \`<div class="modal-section">
      <div class="modal-section-label">功能描述</div>
      <div class="modal-section-content">\${escHtml(f.description)}</div>
    </div>\`;
  }
  
  document.getElementById('modalBody').innerHTML = body;
  document.getElementById('modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal(e) {
  if (e.target === document.getElementById('modal')) closeModalBtn();
}
function closeModalBtn() {
  document.getElementById('modal').classList.remove('open');
  document.body.style.overflow = '';
}

function copyText(text) {
  navigator.clipboard.writeText(text).then(() => {
    const btn = event.target;
    btn.textContent = '✅ 已复制';
    setTimeout(() => { btn.textContent = '📋 复制语法'; }, 1500);
  });
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModalBtn();
  if ((e.ctrlKey||e.metaKey) && e.key === 'f') {
    e.preventDefault();
    document.getElementById('searchInput').focus();
  }
});

render();
</script>
</body>
</html>`;

fs.writeFileSync('C:\\Users\\74779\\Desktop\\Excel函数大全.html', html, 'utf8');
console.log('HTML generated successfully!');
console.log('File size:', Math.round(fs.statSync('C:\\Users\\74779\\Desktop\\Excel函数大全.html').size/1024), 'KB');
