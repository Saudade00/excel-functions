import re
import subprocess
import os
import tempfile

# 第三批练习题数据（26个函数，每个2题，共52题）
new_quiz_data = r"""
  "XLOOKUP": [
    { type:"choice", question:"XLOOKUP 和 VLOOKUP 的主要区别是？", options:["XLOOKUP 可以向左查找，VLOOKUP 只能向右","XLOOKUP 只能精确匹配，VLOOKUP 可以模糊","XLOOKUP 需要排序列，VLOOKUP 不需要","两者完全相同"], answer:0, explanation:"XLOOKUP 是 Office 365 新函数，可以向左、向右、向上、向下查找，不需要排序列，默认精确匹配。" },
    { type:"fill", question:"用 XLOOKUP 在 A 列查找 H2 的值，返回 B 列对应的值。\n=XLOOKUP(H2, A:A, _____)", answer:"B:B", explanation:"XLOOKUP(查找值, 查找数组, 返回数组)，第三参数是要返回的列。" }
  ],
  "FILTER": [
    { type:"choice", question:"=FILTER(A2:B10, B2:B10>80) 的作用是？", options:["筛选出 B 列大于 80 的行，返回 A:B 对应列","只返回 B 列大于 80 的值","删除 B 列小于等于 80 的行","返回 A 列中大于 80 的值"], answer:0, explanation:"FILTER(返回数组, 条件数组)，筛选出满足条件的行，返回整行（A:B 列）。" },
    { type:"fill", question:"从 A2:C100 中筛选出 D 列等于「是」的所有行。\n=FILTER(A2:C100, _____=\"是\")", answer:"D2:D100", explanation:"第二参数是条件数组，D2:D100=\"是\" 返回 TRUE/FALSE 数组，FILTER 保留 TRUE 的行。" }
  ],
  "UNIQUE": [
    { type:"choice", question:"=UNIQUE(A1:A10) 的结果是？", options:["A1:A10 中的所有不重复值（动态数组）","A1:A10 中的所有值（含重复）","A1:A10 中只出现一次的值","A1:A10 的排序结果"], answer:0, explanation:"UNIQUE 返回数组中的唯一值（去重），结果会自动溢出到相邻单元格（动态数组）。" },
    { type:"fill", question:"统计 A 列中不重复的值的个数。\n=COUNTA(_____(A:A))", answer:"UNIQUE", explanation:"UNIQUE(A:A) 去重后返回数组，COUNTA 统计个数，合起来就是去重计数。" }
  ],
  "SORT": [
    { type:"choice", question:"=SORT(A2:B10, 2, -1) 的含义是？", options:["按第2列降序排序，返回排序后的 A:B","按第1列升序排序","只排序第2列","返回 B 列的最大值"], answer:0, explanation:"SORT(数组, 排序列索引, 排序方式)，-1=降序，1=升序。这里按第2列降序排列。" },
    { type:"fill", question:"对 A2:C100 按第 3 列升序排序。\n=SORT(A2:C100, _____, 1)", answer:"3", explanation:"第二参数是排序列的索引（从1开始），第3列填 3，第三参数 1 表示升序。" }
  ],
  "ISLOGICAL": [
    { type:"choice", question:"=ISLOGICAL(TRUE) 和 =ISLOGICAL(\"TRUE\") 的结果分别是？", options:["TRUE, FALSE","FALSE, TRUE","TRUE, TRUE","FALSE, FALSE"], answer:0, explanation:"ISLOGICAL 判断是否为逻辑值（TRUE/FALSE），\"TRUE\" 是文本不是逻辑值，所以返回 FALSE。" },
    { type:"fill", question:"判断 A1 是否为逻辑值（TRUE/FALSE），是则返回「逻辑值」。\n=IF(ISLOGICAL(A1), _____, \"非逻辑值\")", answer:"\"逻辑值\"", explanation:"ISLOGICAL(A1) 为 TRUE 时返回 \"逻辑值\"，否则返回 \"非逻辑值\"。" }
  ],
  "ISREF": [
    { type:"choice", question:"=ISREF(A1) 的结果是？", options:["TRUE","FALSE","#REF!","A1 的值"], answer:0, explanation:"ISREF 判断是否为单元格引用，A1 是有效引用，返回 TRUE。" },
    { type:"fill", question:"判断 A1 单元格是否包含有效引用。\n=ISREF(_____)", answer:"A1", explanation:"ISREF 的参数是单元格引用，直接写 A1 即可。" }
  ],
  "ISERR": [
    { type:"choice", question:"=ISERR(#N/A) 的结果是？", options:["FALSE","TRUE","#N/A","错误"], answer:0, explanation:"ISERR 判断是否为除 #N/A 外的错误值。#N/A 是例外，所以返回 FALSE。用 ISERROR 才会返回 TRUE。" },
    { type:"fill", question:"判断 A1 是否包含错误（除 #N/A 外）。\n=_____(A1)", answer:"ISERR", explanation:"ISERR 检测除 #N/A 外的所有错误值。如果需要包含 #N/A，用 ISERROR。" }
  ],
  "ISNA": [
    { type:"choice", question:"=ISNA(VLOOKUP(\"张三\", A:B, 2, FALSE)) 当找不到「张三」时返回？", options:["TRUE","FALSE","#N/A","错误"], answer:0, explanation:"VLOOKUP 找不到时会返回 #N/A 错误，ISNA 专门检测 #N/A，所以返回 TRUE。" },
    { type:"fill", question:"如果 A1 是 #N/A 错误，返回「无数据」，否则返回 A1 的值。\n=IF(ISNA(A1), _____, A1)", answer:"\"无数据\"", explanation:"ISNA(A1) 为 TRUE 时说明是 #N/A 错误，返回 \"无数据\"。" }
  ],
  "SEARCH": [
    { type:"choice", question:"SEARCH 和 FIND 的区别是？", options:["SEARCH 不区分大小写，FIND 区分","SEARCH 区分大小写，FIND 不区分","SEARCH 支持通配符，FIND 不支持","两者完全相同"], answer:0, explanation:"SEARCH 不区分大小写，且支持通配符（* ?）。FIND 区分大小写，不支持通配符。" },
    { type:"fill", question:"在 A1 中查找「app」（不区分大小写），返回位置。\n=_____(A1, \"app\")", answer:"SEARCH", explanation:"SEARCH 不区分大小写，适合模糊查找。如果要区分大小写，用 FIND。" }
  ],
  "REPLACE": [
    { type:"choice", question:"=REPLACE(\"Hello\", 2, 3, \"**\") 的结果是？", options:["H**o","He**o","H**lo","Hello"], answer:0, explanation:"REPLACE(文本, 起始位置, 替换长度, 新文本)，从第2位开始替换3个字符（ell）→ H**o。" },
    { type:"fill", question:"将 A1 中第 1 到第 3 个字符替换为「ABC」。\n=REPLACE(A1, 1, _____, \"ABC\")", answer:"3", explanation:"第二参数是起始位置（1），第三参数是替换长度（3个字符），替换为 \"ABC\"。" }
  ],
  "EDATE": [
    { type:"choice", question:"=EDATE(\"2024-03-15\", 5) 的结果是？", options:["2024-08-15","2024-03-20","2029-03-15","2024-03-15"], answer:0, explanation:"EDATE(日期, 月数)，将日期向后推5个月，2024-03-15 → 2024-08-15。" },
    { type:"fill", question:"计算 A1 日期的 3 个月前的日期。\n=EDATE(A1, _____)", answer:"-3", explanation:"第二参数为负数表示往前推，-3 表示3个月前。" }
  ],
  "WORKDAY": [
    { type:"choice", question:"=WORKDAY(\"2024-03-01\", 10) 的含义是？", options:["2024-03-01 之后的第 10 个工作日","2024-03-01 之后的第 10 天（含周末）","2024-03-01 之前的第 10 个工作日","返回第10个工作日的日期"], answer:0, explanation:"WORKDAY(开始日期, 工作日数)，返回从开始日期起第 N 个工作日的日期（跳过周末）。" },
    { type:"fill", question:"计算从 A1 日期开始，往前推 5 个工作日（不含周末）的日期。\n=WORKDAY(A1, _____)", answer:"-5", explanation:"第二参数为负数表示往前推，-5 表示前5个工作日。" }
  ],
  "RATE": [
    { type:"choice", question:"RATE 函数的作用是？", options:["计算年金每期利率","计算总还款额","计算首付款","计算投资回收期"], answer:0, explanation:"RATE(期数, 每期付款, 现值)，返回每期利率。通常用 RATE*12 得到年利率。" },
    { type:"fill", question:"贷款 10 万，分 60 期（5年）还清，每期还款 2000 元，求月利率。\n=RATE(_____, -2000, 100000)", answer:"60", explanation:"第一参数是总期数，60期填 60。结果为月利率，乘以12得年利率。" }
  ],
  "NPER": [
    { type:"choice", question:"=NPER(0.05/12, -2000, 100000) 的含义是？", options:["以当前利率和还款额，需要多少期还清10万","总还款额","每月还款额","贷款利率"], answer:0, explanation:"NPER(利率, 每期付款, 现值)，计算需要多少期才能还清贷款。" },
    { type:"fill", question:"年利率 6%，每月存 1000 元，要达到终值 10 万元需要多少个月？\n=NPER(0.06/12, -1000, _____, 100000)", answer:"0", explanation:"第四参数是终值（目标金额），这里填 0 作为现值，100000 作为终值（第四或第五参数）。正确写法：NPER(0.06/12, -1000, 0, 100000)。" }
  ],
  "MEDIAN": [
    { type:"choice", question:"A1:A5 = {3, 1, 4, 1, 5}，=MEDIAN(A1:A5) 的结果是？", options:["3","2.8","4","1"], answer:0, explanation:"MEDIAN 返回中位数。排序后 {1,1,3,4,5}，中间值是 3。" },
    { type:"fill", question:"计算 A1:A100 的中位数。\n=_____(A1:A100)", answer:"MEDIAN", explanation:"MEDIAN 函数直接计算中位数，不需要排序，自动处理。" }
  ],
  "MODE": [
    { type:"choice", question:"A1:A6 = {1, 2, 2, 3, 4, 4, 4}，=MODE(A1:A6) 的结果是？", options:["4","2","3","错误"], answer:0, explanation:"MODE 返回出现次数最多的值（众数）。4 出现了3次，是最多的。" },
    { type:"fill", question:"找出 A 列中出现频率最高的值。\n=_____(A:A)", answer:"MODE", explanation:"MODE 返回众数（出现次数最多的值）。如果有多个众数，只返回其中一个。" }
  ],
  "LARGE": [
    { type:"choice", question:"=LARGE(A1:A5, 2) 返回的是？", options:["第2大的值","第2小的值","最大值","平均值"], answer:0, explanation:"LARGE(数组, k)，返回第 k 大的值。k=1 是最大值，k=2 是第二大。" },
    { type:"fill", question:"计算 A1:A100 中前 5 名的平均值。\n=AVERAGE(LARGE(A1:A100, _____))", answer:"{1;2;3;4;5}", explanation:"LARGE 的第二个参数可以是数组 {1;2;3;4;5}，返回前5名的值，再用 AVERAGE 求平均。" }
  ],
  "SMALL": [
    { type:"choice", question:"=SMALL(A1:A5, 2) 返回的是？", options:["第2小的值","第2大的值","最小值","平均值"], answer:0, explanation:"SMALL(数组, k)，返回第 k 小的值。k=1 是最小值，k=2 是第二小。" },
    { type:"fill", question:"计算 A1:A100 中后 5 名（最小的5个）的平均值。\n=AVERAGE(SMALL(A1:A100, _____))", answer:"{1;2;3;4;5}", explanation:"SMALL 的第二个参数用数组 {1;2;3;4;5}，返回最小的5个值，再用 AVERAGE 求平均。" }
  ],
  "AVERAGEIF": [
    { type:"choice", question:"=AVERAGEIF(A:A, \">80\") 的含义是？", options:["A 列大于 80 的值的平均值","A 列大于 80 的单元格个数","A 列的平均值（忽略小于等于80）","A 列的最大值"], answer:0, explanation:"AVERAGEIF(范围, 条件) 计算满足条件的单元格的平均值。" },
    { type:"fill", question:"计算 C 列中对应 A 列为「苹果」的 B 列数值的平均值。\n=AVERAGEIF(A:A, \"苹果\", _____)", answer:"B:B", explanation:"AVERAGEIF(条件范围, 条件, 平均值范围)，第三参数是实际求平均的范围。" }
  ],
  "AVERAGEIFS": [
    { type:"choice", question:"AVERAGEIFS 和 AVERAGEIF 的区别是？", options:["AVERAGEIFS 支持多条件，AVERAGEIF 只支持单条件","AVERAGEIFS 参数顺序不同","AVERAGEIFS 不支持通配符","两者完全相同"], answer:0, explanation:"AVERAGEIFS(平均值范围, 条件范围1, 条件1, ...)，支持多条件。参数顺序也和 AVERAGEIF 不同！" },
    { type:"fill", question:"计算 A 列为「北京」且 B 列大于 100 的 C 列数值的平均值。\n=AVERAGEIFS(C:C, A:A, \"北京\", B:B, _____)", answer:"\">100\"", explanation:"AVERAGEIFS 从第三参数开始是条件对，B:B 大于100 的条件是 \">100\"。" }
  ],
  "ROUNDUP": [
    { type:"choice", question:"=ROUNDUP(2.1, 0) 的结果是？", options:["3","2","2.1","2.0"], answer:0, explanation:"ROUNDUP 向上舍入（朝正无穷方向）。2.1 向上取整到整数位是 3。" },
    { type:"fill", question:"将 A1 的值向上舍入到小数点后 2 位。\n=ROUNDUP(A1, _____)", answer:"2", explanation:"ROUNDUP(数值, 小数位数)，2 表示保留2位小数并向上舍入。" }
  ],
  "ROUNDDOWN": [
    { type:"choice", question:"=ROUNDDOWN(2.9, 0) 的结果是？", options:["2","3","2.9","0"], answer:0, explanation:"ROUNDDOWN 向下舍入（朝0方向）。2.9 向下取整到整数位是 2。" },
    { type:"fill", question:"将 A1 的值向下舍入到十位（如 1234 → 1230）。\n=ROUNDDOWN(A1, _____)", answer:"-1", explanation:"ROUNDDOWN 第二参数为负数时，舍入到十位、百位等。-1=十位，-2=百位。" }
  ],
  "ADDRESS": [
    { type:"choice", question:"=ADDRESS(3, 2) 的结果是？", options:["$B$3","B3","$3$2","R3C2"], answer:0, explanation:"ADDRESS(行号, 列号)，返回对应行列的单元格地址（默认绝对引用 $B$3）。" },
    { type:"fill", question:"返回第 5 行第 3 列的单元格相对引用地址。\n=ADDRESS(5, 3, _____)", answer:"4", explanation:"ADDRESS 第三参数：1或省略=绝对，2=绝对行相对列，3=相对行绝对列，4=相对引用。填 4 得到 C5。" }
  ],
  "ROW": [
    { type:"choice", question:"A1 单元格中输入 =ROW()，下拉填充后 A2 的结果是？", options:["2","1","0","错误"], answer:0, explanation:"ROW() 无参数时返回公式所在行的行号。A2 中是第2行，返回 2。" },
    { type:"fill", question:"找出 H2 单元格所在的行号。\n=_____(H2)", answer:"ROW", explanation:"ROW(引用) 返回该引用的行号。H2 在第2行，返回 2。" }
  ],
  "COLUMN": [
    { type:"choice", question:"A1 单元格中输入 =COLUMN()，右拉填充后 B1 的结果是？", options:["2","1","0","错误"], answer:0, explanation:"COLUMN() 无参数时返回公式所在列的列号。B1 是第2列，返回 2。" },
    { type:"fill", question:"找出 M2 单元格所在的列号。\n=_____(M2)", answer:"COLUMN", explanation:"COLUMN(引用) 返回该引用的列号。M 是第13列，返回 13。" }
  ]
"""

def find_insert_position_after_last(html):
    """找到 QUIZ_DATA 中最后一个函数条目之后的插入位置（在 }; 之前）"""
    # 找到 QUIZ_DATA 对象的起始
    pos = html.find('const QUIZ_DATA')
    if pos == -1:
        return -1
    
    # 找到第一个 {
    brace_start = html.find('{', pos)
    if brace_start == -1:
        return -1
    
    # 括号匹配找到 QUIZ_DATA 对象的结束
    depth = 0
    in_string = False
    escape = False
    quote_char = None
    i = brace_start
    
    while i < len(html):
        ch = html[i]
        
        if escape:
            escape = False
            i += 1
            continue
        
        if ch == '\\' and in_string:
            escape = True
            i += 1
            continue
        
        if ch in ("'", '"', '`') and not in_string:
            in_string = True
            quote_char = ch
        elif ch == quote_char and in_string:
            in_string = False
        elif not in_string:
            if ch == '{':
                depth += 1
            elif ch == '}':
                depth -= 1
                if depth == 0:
                    obj_end = i
                    break
        
        i += 1
    else:
        return -1
    
    # 在 QUIZ_DATA 对象中查找最后一个函数条目
    # 简单方法：找到倒数第二个 }] 或 }] 组合
    # 更可靠的方法：从后往前找第一个 "]" 然后确认前面有 ","
    
    # 找到倒数第一个 "]" 在 obj_end 之前
    last_bracket = html.rfind(']', brace_start, obj_end)
    if last_bracket == -1:
        return -1
    
    # 插入位置是 last_bracket + 1
    insert_pos = last_bracket + 1
    
    # 检查后面是否是 }, 或 };
    after = html[insert_pos:insert_pos+10]
    
    return insert_pos

def verify_js_syntax(html):
    """验证 HTML 中的 JavaScript 语法"""
    # 提取 script 内容
    m = re.search(r'<script>([\s\S]*?)</script>', html)
    if not m:
        return False, "未找到 script 标签"
    
    script = m.group(1)
    
    # 写入临时文件
    try:
        with tempfile.NamedTemporaryFile(mode='w', suffix='.js', delete=False, encoding='utf-8') as f:
            f.write(script)
            temp_file = f.name
        
        # 用 node --check 验证语法
        result = subprocess.run(
            ['node', '--check', temp_file],
            capture_output=True,
            text=True,
            timeout=10
        )
        
        os.unlink(temp_file)
        
        if result.returncode == 0:
            return True, "JS 语法正确"
        else:
            return False, result.stderr
    except Exception as e:
        return False, str(e)

# 主程序
print("读取文件...")
with open('Excel函数大全.html', 'r', encoding='utf-8') as f:
    html = f.read()

print("查找插入位置...")
insert_pos = find_insert_position_after_last(html)
if insert_pos == -1:
    print("错误：未找到插入位置")
    exit(1)

print(f"找到插入位置：字符 {insert_pos}")
print(f"上下文：...{html[insert_pos-30:insert_pos+30]}...")

# 准备要插入的数据（需要加逗号前缀）
data_to_insert = ',\n' + new_quiz_data.strip() + '\n'

# 插入新数据
new_html = html[:insert_pos] + data_to_insert + html[insert_pos:]

print("数据已插入，正在验证 JS 语法...")

# 验证语法
valid, msg = verify_js_syntax(new_html)
if valid:
    print("✅ JS 语法验证通过")
    # 保存新文件
    with open('Excel函数大全.html', 'w', encoding='utf-8') as f:
        f.write(new_html)
    print("✅ 第三批练习题数据插入成功！")
    print("新增函数：XLOOKUP, FILTER, UNIQUE, SORT, ISLOGICAL, ISREF, ISERR, ISNA, SEARCH, REPLACE, EDATE, WORKDAY, RATE, NPER, MEDIAN, MODE, LARGE, SMALL, AVERAGEIF, AVERAGEIFS, ROUNDUP, ROUNDDOWN, ADDRESS, ROW, COLUMN")
    print("新增题目数：52 道（26 个函数 × 2 题）")
else:
    print(f"❌ JS 语法错误：{msg}")
    print("原文件未修改")
    exit(1)
