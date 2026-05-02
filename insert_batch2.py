import re

# 第二批练习题数据（16个函数，每个2题）
new_quiz_data = """
  "ISNUMBER": [
    { type:"choice", question:"=ISNUMBER(\\"123\\") 的结果是？", options:["FALSE","TRUE","#VALUE!","0"], answer:0, explanation:"ISNUMBER 判断是否为数字类型，\\"123\\" 是文本，不是数字，返回 FALSE。" },
    { type:"fill", question:"判断 A1 是否为数字，是则返回「是数字」，否则返回「非数字」。\\n=IF(ISNUMBER(A1), \\"是数字\\", _____)", answer:"\\"非数字\\"", explanation:"IF 的第三个参数是 FALSE 时的返回值，填 \\"非数字\\"。A1 是数字则返回第二个参数。" }
  ],
  "ISTEXT": [
    { type:"choice", question:"=ISTEXT(123) 的结果是？", options:["FALSE","TRUE","#VALUE!","123"], answer:0, explanation:"ISTEXT 判断是否为文本类型，123 是数字，不是文本，返回 FALSE。" },
    { type:"fill", question:"A1 是文本型数字（如 \\"00123\\"），用哪个函数判断它是文本？\\n=_____(A1)", answer:"ISTEXT", explanation:"ISTEXT 判断是否为文本，文本型数字也返回 TRUE。" }
  ],
  "ISBLANK": [
    { type:"choice", question:"A1 是空单元格，=ISBLANK(A1) 的结果是？", options:["TRUE","FALSE","0","#N/A"], answer:0, explanation:"ISBLANK 判断单元格是否为空，空单元格返回 TRUE。" },
    { type:"fill", question:"如果 A1 为空则返回 0，否则返回 A1 的值。\\n=IF(ISBLANK(A1), _____, A1)", answer:"0", explanation:"ISBLANK(A1) 为 TRUE 时返回 0，否则返回 A1 的值。" }
  ],
  "ISERROR": [
    { type:"choice", question:"=ISERROR(1/0) 的结果是？", options:["TRUE","FALSE","#DIV/0!","0"], answer:0, explanation:"1/0 会产生 #DIV/0! 错误，ISERROR 检测错误值，返回 TRUE。" },
    { type:"fill", question:"如果 VLOOKUP 找不到值会报错，如何让它找不到时返回「无数据」？\\n=IF(ISERROR(VLOOKUP(…)), \\"无数据\\", _____)", answer:"VLOOKUP(…)", explanation:"ISERROR 为 TRUE 时返回 \\"无数据\\"，否则返回 VLOOKUP 的结果。注意：新版 Excel 推荐用 IFERROR 更简洁。" }
  ],
  "LOWER": [
    { type:"choice", question:"=LOWER(\\"Hello WORLD\\") 的结果是？", options:["hello world","Hello world","HELLO WORLD","Hello WORLD"], answer:0, explanation:"LOWER 将文本所有字母转为小写，结果是 \\"hello world\\"。" },
    { type:"fill", question:"将 A1 的文本统一转为小写后再比较是否等于 \\"apple\\"。\\n=LOWER(A1) _____ \\"apple\\"", answer:"=", explanation:"LOWER(A1) 转为小写后，用 = 比较是否等于 \\"apple\\"。" }
  ],
  "UPPER": [
    { type:"choice", question:"=UPPER(\\"hello\\") 的结果是？", options:["HELLO","Hello","hello","HEllO"], answer:0, explanation:"UPPER 将文本所有字母转为大写，结果是 \\"HELLO\\"。" },
    { type:"fill", question:"将 A1 和 B1 都转为大写后比较是否相同（不区分大小写）。\\n=UPPER(A1) _____ UPPER(B1)", answer:"=", explanation:"都转为大写后用 = 比较，实现不区分大小写的比较。" }
  ],
  "PROPER": [
    { type:"choice", question:"=PROPER(\\"hello world\\") 的结果是？", options:["Hello World","HELLO WORLD","hello World","Hello world"], answer:0, explanation:"PROPER 将每个单词的首字母大写，其余小写，结果是 \\"Hello World\\"。" },
    { type:"fill", question:"A1 是人名（全小写），需要转为首字母大写格式。\\n=_____(A1)", answer:"PROPER", explanation:"PROPER 将每个单词的首字母转为大写，适合处理英文名、标题等。" }
  ],
  "EOMONTH": [
    { type:"choice", question:"=EOMONTH(\\"2024-03-15\\", 0) 的结果是？", options:["2024/3/31","2024/3/1","2024/4/30","2024/2/29"], answer:0, explanation:"EOMONTH(日期, 月数偏移)，偏移 0 表示当月，返回当月最后一天 2024/3/31。" },
    { type:"fill", question:"计算 A1 日期所在月份的最后一天。\\n=EOMONTH(A1, _____)", answer:"0", explanation:"第二参数为 0 表示当月最后一天，为 1 表示下月最后一天。" }
  ],
  "NETWORKDAYS": [
    { type:"choice", question:"=NETWORKDAYS(\\"2024-03-01\\", \"2024-03-31\\") 的结果是？（假设无节假日）", options:["21","31","22","20"], answer:0, explanation:"NETWORKDAYS 计算两个日期之间的工作日数（不含周末）。3月有 31 天，去掉 10 天周末 ≈ 21 个工作日。" },
    { type:"fill", question:"计算 A1 到 B1 的工作日数，C1:C5 是节假日列表。\\n=NETWORKDAYS(A1, B1, _____)", answer:"C1:C5", explanation:"NETWORKDAYS 第三参数是节假日范围，会从中排除这些日期。" }
  ],
  "PMT": [
    { type:"choice", question:"=PMT(0.05/12, 60, 100000) 的含义是？", options:["每月还款额（年利率5%，60期，贷款10万）","总还款额","本金加利息","贷款利率"], answer:0, explanation:"PMT(利率, 期数, 现值)，0.05/12 是月利率，60 是期数，返回每期付款额（负数）。" },
    { type:"fill", question:"贷款 20 万，年利率 4.5%，20 年还清（按月还款），计算每月还款额。\\n=PMT(0.045/12, _____, 200000)", answer:"240", explanation:"20年 × 12个月 = 240期，第二参数填 240。" }
  ],
  "FV": [
    { type:"choice", question:"=FV(0.05/12, 60, -1000) 的含义是？", options:["每月存1000，5年后本利和","现在借的钱","每月还款额","贷款利率"], answer:0, explanation:"FV(利率, 期数, 每期付款)，每月存1000（负值表示支出），5年后得到本利和。" },
    { type:"fill", question:"每月定投 500 元，年利率 6%（按月复利），求 10 年后的终值。\\n=FV(0.06/12, _____, -500)", answer:"120", explanation:"10年 × 12个月 = 120期，第二参数填 120。" }
  ],
  "PV": [
    { type:"choice", question:"=PV(0.05/12, 60, -2000) 的含义是？", options:["每月收2000，持续5年，相当于现在值多少钱","未来值","每月还款额","总利息"], answer:0, explanation:"PV 计算未来一系列付款的现值。每月收2000，按5%年利率折现，相当于现在一次性拿这么多钱。" },
    { type:"fill", question:"某项投资每月回报 3000 元，共 3 年，折现率年利率 4.8%，求现值。\\n=PV(0.048/12, _____, -3000)", answer:"36", explanation:"3年 × 12个月 = 36期，第二参数填 36。" }
  ],
  "NPV": [
    { type:"choice", question:"=NPV(0.1, 1000, 2000, 3000) 的含义是？", options:["将未来3年现金流按10%折现后的净现值","总现金流","内部收益率","投资回收期"], answer:0, explanation:"NPV(折现率, 现金流1, 现金流2, ...) 计算净现值。正值表示回报超过折现率。" },
    { type:"fill", question:"B2:B10 是各年现金流，折现率 8%，计算净现值。\\n=NPV(_____, B2:B10)", answer:"0.08", explanation:"NPV 第一参数是折现率，8% 填 0.08 或 8%。" }
  ],
  "IRR": [
    { type:"choice", question:"=IRR(A1:A5) 返回的是？", options:["使净现值为0的折现率（内部收益率）","净现值","投资回收期","总回报率"], answer:0, explanation:"IRR 计算内部收益率，即让 NPV=0 的那个折现率。常用于评估项目投资价值。" },
    { type:"fill", question:"A1 是初始投资（-10万），A2:A5 是各年回报，求内部收益率。\\n=IRR(_____)", answer:"A1:A5", explanation:"IRR 参数是包含初始投资和后续现金流的数组或范围。" }
  ],
  "STDEV": [
    { type:"choice", question:"STDEV 和 STDEVP 的区别是？", options:["STDEV 用于样本，STDEVP 用于总体","STDEV 用于总体，STDEVP 用于样本","两者完全相同","STDEV 忽略文本，STDEVP 计算文本"], answer:0, explanation:"STDEV（样本标准差）用 n-1 分母，STDEVP（总体标准差）用 n 分母。样本用 STDEV。" },
    { type:"fill", question:"A1:A20 是一组样本数据，计算样本标准差。\\n=_____(A1:A20)", answer:"STDEV", explanation:"样本标准差用 STDEV 函数，如果是总体则用 STDEVP。" }
  ],
  "COUNTA": [
    { type:"choice", question:"A1:A5 = {1, \\"\\", 3, TRUE, \\"\\"}，=COUNTA(A1:A5) 的结果是？", options:["5","3","4","2"], answer:0, explanation:"COUNTA 统计非空单元格个数。1（数字）、\\"\\"（文本非空）、3、TRUE、\\"\\" 都是非空，共5个。" },
    { type:"fill", question:"统计 A 列中所有填了内容的单元格个数（含文本、数字、逻辑值）。\\n=_____(A:A)", answer:"COUNTA", explanation:"COUNTA 统计所有非空单元格，COUNTA(A:A) 即整列统计。" }
  ]
"""

def find_insert_position(html):
    """找到 QUIZ_DATA 中 SUMPRODUCT 条目之后的插入位置"""
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
    
    # 在 QUIZ_DATA 对象中查找 SUMPRODUCT 条目
    obj_content = html[brace_start:obj_end+1]
    sumproduct_pattern = r'"SUMPRODUCT"\s*:\s*\['
    match = re.search(sumproduct_pattern, obj_content)
    if not match:
        return -1
    
    # 找到 SUMPRODUCT 数组的结束 ]
    bracket_start = match.end() - 1  # 指向 [
    depth = 0
    j = bracket_start
    while j < len(obj_content):
        ch = obj_content[j]
        if ch == '[':
            depth += 1
        elif ch == ']':
            depth -= 1
            if depth == 0:
                sumproduct_end = brace_start + j
                break
        j += 1
    else:
        return -1
    
    # 插入位置是 SUMPRODUCT 数组结束后、下一个键值对之前
    # 或者直接返回 sumproduct_end + 1（SUMPRODUCT 的 ] 之后）
    return sumproduct_end + 1

def insert_quiz_data(html, insert_pos, new_data):
    """在指定位置插入新的练习题数据"""
    # 在插入位置之前添加逗号（如果需要）
    # 检查插入位置之前的字符
    before = html[insert_pos-1]
    if before != ',' and before != '\n':
        # 需要在新数据前加逗号
        new_data = ',\n' + new_data
    
    # 插入新数据
    new_html = html[:insert_pos] + new_data + html[insert_pos:]
    return new_html

def verify_js_syntax(html):
    """验证 HTML 中的 JavaScript 语法"""
    # 提取 script 内容
    m = re.search(r'<script>([\s\S]*?)</script>', html)
    if not m:
        return False, "未找到 script 标签"
    
    script = m.group(1)
    
    # 使用 Node.js 验证语法
    import subprocess
    try:
        result = subprocess.run(
            ['C:/Users/74779/AppData/Local/Programs/Python/Python313/python.exe', '-c', f'import subprocess; result = subprocess.run(["node", "-e", "new Function({script})"], capture_output=True, text=True)'],
            capture_output=True,
            text=True,
            timeout=10
        )
        # 更简单的方法：把 script 写入临时文件，然后用 node 验证
        with open('temp_verify.js', 'w', encoding='utf-8') as f:
            f.write(script)
        
        result = subprocess.run(
            ['node', '--check', 'temp_verify.js'],
            capture_output=True,
            text=True,
            timeout=10
        )
        
        import os
        if os.path.exists('temp_verify.js'):
            os.remove('temp_verify.js')
        
        if result.returncode == 0:
            return True, "JS 语法正确"
        else:
            return False, result.stderr
    except Exception as e:
        return False, str(e)

# 主程序
with open('Excel函数大全.html', 'r', encoding='utf-8') as f:
    html = f.read()

# 找到插入位置
insert_pos = find_insert_position(html)
if insert_pos == -1:
    print("错误：未找到插入位置")
    exit(1)

print(f"找到插入位置：字符 {insert_pos}")
print(f"上下文：...{html[insert_pos-50:insert_pos+50]}...")

# 插入新数据
new_html = insert_quiz_data(html, insert_pos, new_quiz_data)

# 保存新文件
with open('Excel函数大全.html', 'w', encoding='utf-8') as f:
    f.write(new_html)

print("数据已插入，正在验证 JS 语法...")

# 验证语法
valid, msg = verify_js_syntax(new_html)
if valid:
    print("✅ JS 语法验证通过")
else:
    print(f"❌ JS 语法错误：{msg}")
    # 恢复原文件
    with open('Excel函数大全.html', 'w', encoding='utf-8') as f:
        f.write(html)
    print("已恢复原文件")
    exit(1)

print("✅ 第二批练习题数据插入成功！")
print("新增函数：ISNUMBER, ISTEXT, ISBLANK, ISERROR, LOWER, UPPER, PROPER, EOMONTH, NETWORKDAYS, PMT, FV, PV, NPV, IRR, STDEV, COUNTA")
print("新增题目数：32 道（16 个函数 × 2 题）")
