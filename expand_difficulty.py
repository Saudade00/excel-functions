import re, json, os

html_path = r'A:\workbuddy代码项目\函数工具\Excel函数大全.html'
with open(html_path, 'r', encoding='utf-8') as f:
    content = f.read()

# ── 1. 解析当前 FUNCTIONS ────────────────────────────────
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
all_names = [f['name'] for f in funcs]
has_detail = set(f['name'] for f in funcs if f.get('hasDetail'))

# ── 2. 解析当前 DIFFICULTY ───────────────────────────────
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
print(f"当前 DIFFICULTY 覆盖: {len(diff)} 个")

# ── 3. 需要补充的函数（按优先级排序）────────────────────
# 优先级1：已有详情的函数（57个，重要）
# 优先级2：常见函数
priority1 = [n for n in all_names if n in has_detail and n not in diff]
# 常见高频函数（即使没详情也要标注难度）
common_funcs = [
    # 数学与三角函数
    'SUM','AVERAGE','MAX','MIN','COUNT','COUNTA','COUNTBLANK',
    'ROUND','ROUNDDOWN','ROUNDUP','INT','ABS','MOD','CEILING','FLOOR',
    'SQRT','POWER','PRODUCT','SUMIF','SUMIFS','SUBTOTAL','AGGREGATE',
    'RAND','RANDBETWEEN','LARGE','SMALL','RANK','MEDIAN','MODE',
    # 逻辑函数
    'IF','AND','OR','NOT','IFS','IFERROR','IFNA','SWITCH',
    # 查找与引用
    'VLOOKUP','HLOOKUP','INDEX','MATCH','OFFSET','INDIRECT','ADDRESS',
    'ROW','COLUMN','ROWS','COLUMNS','CHOOSE','TRANSPOSE','LOOKUP',
    # 文本函数
    'LEFT','RIGHT','MID','LEN','FIND','SEARCH','SUBSTITUTE','REPLACE',
    'TRIM','TEXT','UPPER','LOWER','PROPER','CONCAT','CONCATENATE','TEXTJOIN',
    'VALUE','TEXTBEFORE','TEXTAFTER','TEXTSPLIT',
    # 日期与时间
    'TODAY','NOW','DATE','YEAR','MONTH','DAY','WEEKDAY','DATEDIF',
    'EDATE','EOMONTH','WORKDAY','NETWORKDAYS','HOUR','MINUTE','SECOND',
    # 统计函数
    'AVERAGEIF','AVERAGEIFS','COUNTIF','COUNTIFS','STDEV','STDEVP',
    'VAR','VARP','PERCENTILE','PERCENTRANK','FREQUENCY',
    # 财务函数
    'PMT','IPMT','PPMT','PV','FV','NPV','IRR','XNPV','RATE','NPER',
    'SLN','SYD','DDB',
    # 信息函数
    'ISNUMBER','ISTEXT','ISBLANK','ISERROR','ISERR','ISLOGICAL','ISREF',
    'CELL','TYPE','INFO',
    # 逻辑/数组（较新版本）
    'XLOOKUP','XMATCH','FILTER','UNIQUE','SORT','SEQUENCE','RANDARRAY',
]
priority2 = [n for n in common_funcs if n in all_names and n not in diff]

to_add = priority1 + [n for n in priority2 if n not in priority1]
print(f"待补充难度标签: {len(to_add)} 个")
print(f"  优先级1（有详情）: {len(priority1)} 个")
print(f"  优先级2（高频）: {len(priority2)} 个")

# ── 4. 分配难度等级 ──────────────────────────────────────
def assign_difficulty(name):
    """为函数分配难度等级"""
    easy = [
        'SUM','AVERAGE','MAX','MIN','COUNT','COUNTA','COUNTBLANK',
        'ABS','INT','MOD','RAND','TODAY','NOW','YEAR','MONTH','DAY',
        'HOUR','MINUTE','SECOND','LEFT','RIGHT','LEN','UPPER','LOWER',
        'PROPER','TRIM','ISNUMBER','ISTEXT','ISBLANK','ISLOGICAL',
        'ROW','COLUMN','ROWS','COLUMNS',
    ]
    hard = [
        'IFS','IFERROR','IFNA','SWITCH','XLOOKUP','XMATCH','INDEX','MATCH',
        'OFFSET','INDIRECT','AGGREGATE','FILTER','UNIQUE','SORT',
        'SEQUENCE','RANDARRAY','XNPV','IRR','RATE','NPER',
        'STDEV','STDEVP','VAR','VARP','FREQUENCY',
        'WORKDAY','NETWORKDAYS','DATEDIF','EDATE','EOMONTH',
        'PMT','IPMT','PPMT','PV','FV','NPV','SLN','SYD','DDB',
        'CELL','TYPE','INFO','LOOKUP',
    ]
    if name in easy:
        return 'easy'
    elif name in hard:
        return 'hard'
    else:
        return 'medium'

new_entries = {}
for name in to_add:
    new_entries[name] = assign_difficulty(name)

# 合并到现有 diff
merged = dict(diff)
merged.update(new_entries)

easy_n = sum(1 for v in merged.values() if v=='easy')
medium_n = sum(1 for v in merged.values() if v=='medium')
hard_n = sum(1 for v in merged.values() if v=='hard')
print(f"\n合并后 DIFFICULTY: {len(merged)} 个")
print(f"  easy: {easy_n}, medium: {medium_n}, hard: {hard_n}")

# ── 5. 生成新的 DIFFICULTY 对象字符串 ───────────────────
# 按难度分组输出，保持可读性
easy_list = [k for k,v in merged.items() if v=='easy']
medium_list = [k for k,v in merged.items() if v=='medium']
hard_list = [k for k,v in merged.items() if v=='hard']

lines = ['const DIFFICULTY = {']
lines.append('  // ===== 入门级 easy =====')
for i, k in enumerate(easy_list):
    suffix = ',' if i < len(easy_list)-1 or len(medium_list)>0 or len(hard_list)>0 else ''
    lines.append(f'  "{k}":"easy"{suffix}')
lines.append('')
lines.append('  // ===== 进阶级 medium =====')
for i, k in enumerate(medium_list):
    suffix = ',' if i < len(medium_list)-1 or len(hard_list)>0 else ''
    lines.append(f'  "{k}":"medium"{suffix}')
lines.append('')
lines.append('  // ===== 高级 hard =====')
for i, k in enumerate(hard_list):
    suffix = ',' if i < len(hard_list)-1 else ''
    lines.append(f'  "{k}":"hard"{suffix}')
lines.append('};')
new_diff_str = '\n'.join(lines)

print(f"\n生成的新 DIFFICULTY 字符串长度: {len(new_diff_str)}")
print(f"前500字符:\n{new_diff_str[:500]}")

# ── 6. 替换 HTML 中的 DIFFICULTY ───────────────────────
old_diff_str = content[start3:end3]
if old_diff_str in content:
    new_content = content.replace(old_diff_str, new_diff_str, 1)
    with open(html_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("\n✅ DIFFICULTY 已更新并写入文件")
    print(f"  覆盖函数数: {len(merged)} (原 {len(diff)})")
else:
    print("\n❌ 未找到旧的 DIFFICULTY 字符串，无法替换")
