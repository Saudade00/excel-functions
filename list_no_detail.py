import re, json

html_path = r'A:\workbuddy代码项目\函数工具\Excel函数大全.html'
with open(html_path, 'r', encoding='utf-8') as f:
    content = f.read()

# 解析 FUNCTIONS
idx = content.find('const FUNCTIONS = [')
start = idx + len('const FUNCTIONS = ')
depth = 0
i = start
while i < len(content):
    if content[i] == '[':
        depth += 1
    elif content[i] == ']':
        depth -= 1
        if depth == 0:
            end = i + 1
            break
    i += 1
funcs = json.loads(content[start:end])

# 解析 DIFFICULTY（用于优先级）
idx3 = content.find('const DIFFICULTY = {')
start3 = idx3 + len('const DIFFICULTY = ')
depth = 0
i = start3
while i < len(content):
    if content[i] == '{':
        depth += 1
    elif content[i] == '}':
        depth -= 1
        if depth == 0:
            end3 = i + 1
            break
    i += 1
diff_str = content[start3:end3]
diff_str_clean = re.sub(r'//.*', '', diff_str)
diff = json.loads(diff_str_clean)

# 找出无详情的函数，按是否有难度标签和是否高频排序
no_detail = [f for f in funcs if not f.get('hasDetail')]

# 按优先级排序：有难度标签 > 高频函数 > 其他
high_freq_names = set([
    'SUM','AVERAGE','MAX','MIN','COUNT','COUNTA','COUNTBLANK',
    'ROUND','ROUNDDOWN','ROUNDUP','INT','ABS','MOD','CEILING','FLOOR',
    'SQRT','POWER','PRODUCT',
    'IFERROR','IFNA','SWITCH','XOR',
    'LOOKUP','ROW','COLUMN','ROWS','COLUMNS','CHOOSE','TRANSPOSE',
    'SEARCH','REPLACE','VALUE','CONCAT','CONCATENATE','TEXTJOIN',
    'EDATE','EOMONTH','HOUR','MINUTE','SECOND',
    'AVERAGEIF','AVERAGEIFS','STDEV','STDEVP','VAR','VARP',
    'LARGE','SMALL','MEDIAN','MODE','RANK',
    'ISNUMBER','ISTEXT','ISBLANK','ISERROR','ISERR','ISLOGICAL',
    'CELL','TYPE','INFO','NA','N',
    'RAND','RANDBETWEEN','EVEN','ODD','SIGN','FACT','GCD','LCM',
    'PERCENTILE','PERCENTRANK','FREQUENCY','QUARTILE',
    'SUBTOTAL','AGGREGATE',
    'PMT','IPMT','PPMT','PV','FV','NPV','IRR','XNPV','RATE','NPER',
    'SLN','SYD','DDB','VDB',
    'CHAR','CODE','EXACT','CLEAN','REPT','DOLLAR','FIXED',
    'BAHTTEXT','PHONETIC','T','TEXTBEFORE','TEXTAFTER','TEXTSPLIT',
    'WORKDAY','NETWORKDAYS','DAYS360','YEARFRAC',
    'AREAS','HYPERLINK','GETPIVOTDATA','FORMULATEXT',
    'DAVERAGE','DCOUNT','DCOUNTA','DSUM','DVAR','DVPA','DMAX','DMIN','DPRODUCT','DSTDEV','DSTDEVP',
    'BIN2DEC','BIN2HEX','DEC2BIN','DEC2HEX','HEX2DEC','OCT2DEC',
    'COMBIN','PERMUT','MULTINOMIAL',
    'IMSUM','IMPRODUCT','IMABS','IMARGUMENT','IMCONJUGATE','IMREAL','IMAGINARY',
    'BETAINV','CHIINV','FINV','TINV','LOGINV','LOGNORMINV','NORMINV',
    'BETADIST','CHIDIST','FDIST','TDIST','LOGNORMDIST','NORMDIST',
    'CRITBINOM','NEGBINOMDIST','POISSON',
    'ACCRINT','ACCRINTM','AMORDEGRC','COUPDAYBS','COUPDAYS','COUPNCD','COUPNUM','COUPPCD',
    'CUMIPMT','CUMPRINC','DB','DISC','DURATION','EFFECT','FVSCHEDULE',
    'INTRATE','MDURATION','MIRR','NOMINAL','ODDFPRICE','ODDFYIELD','ODDLPRICE','ODDLYIELD',
    'PRICE','PRICEDISC','PRICEMAT','PV','RATE','RECEIVED','SLN','SYD','TBILLEQ','TBILLPRICE','TBILLYIELD',
    'VDB','XIRR','YIELD','YIELDDISC','YIELDMAT',
])

def priority_score(f):
    name = f['name']
    s = 0
    if name in diff: s += 10000  # 有难度标签优先
    if name in high_freq_names: s += 1000  # 高频函数优先
    return -s

sorted_funcs = sorted(no_detail, key=priority_score)

print("=== 无详情函数（按优先级排序） ===")
print(f"共 {len(sorted_funcs)} 个\n")

for idx, f in enumerate(sorted_funcs[:80], 1):
    name = f['name']
    cat = f.get('category','')
    has_diff = '✓' if name in diff else ' '
    is_high = '*' if name in high_freq_names else ' '
    print(f"{idx:3}. [{has_diff}{is_high}] {name:15s} ({cat})")
