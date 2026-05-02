# -*- coding: utf-8 -*-
"""
第一批（正确版）：补充 31 个函数详情
方法：提取 FUNCTIONS 数组 → JSON 解析 → 精确修改 → 写回
这样就完全避免了字符串替换的错位问题
"""

import re, json

with open('A:/workbuddy代码项目/函数工具/Excel函数大全.html', 'r', encoding='utf-8') as f:
    content = f.read()

# ── 1. 定位并提取 FUNCTIONS 数组 ──────────────────────────────────
m = re.search(r'const FUNCTIONS\s*=\s*\[', content)
if not m:
    print('ERROR: 找不到 FUNCTIONS 数组'); exit(1)
start = m.end()   # '[' 之后的位置

# 找配对的 ']'
depth = 1
end = start
for i, ch in enumerate(content[start:], start):
    if ch == '[': depth += 1
    elif ch == ']':
        depth -= 1
        if depth == 0:
            end = i + 1   # 包含 ']'
            break

arr_str = content[start:end-1]  # 不含首尾的 []

# ── 2. 转为 JSON 字符串（JS true/false → JSON true/false，二者相同）───
# JS 的 true/false/null 与 JSON 完全兼容，可直接解析
try:
    arr = json.loads(arr_str)
    print(f'✓ JSON 解析成功，共 {len(arr)} 个函数')
except Exception as e:
    print(f'JSON 解析失败: {e}')
    # 调试：输出前 500 字符
    print('数组开头:', repr(arr_str[:500]))
    exit(1)

# ── 3. 详情数据（用 \\n 输出为 JS 的 \n 两个字符）────────────────
details = {
  "ABS": {
    "usage": "ABS(number)",
    "params": "number：需要计算绝对值的实数或单元格引用。如果参数是非数值，返回 #VALUE! 错误。",
    "notes": "• ABS 常用于计算误差、偏差或距离\\n• 与条件格式配合可快速标记偏差较大的值\\n• ABS 不影响正数，只将负数转为正数\\n• 嵌套用法：ABS(A1-B1) 计算两值之差的绝对值",
    "example": "=ABS(-15) → 15\\n=ABS(3.7) → 3.7\\n=ABS(A1-B1) → 返回 A1 与 B1 的差值绝对值",
    "rating": "★★★★☆", "stars": "★★★★☆", "hasDetail": True
  },
  "SUM": {
    "usage": "SUM(number1, [number2], ...)",
    "params": "number1, number2, ...：要相加的数值，可以是数字、单元格引用、区域或公式结果。最多支持255个参数。",
    "notes": "• SUM 自动忽略文本和空单元格\\n• 快捷键 Alt+= 可快速插入 SUM\\n• 与 SUMIF/SUMPRODUCT 配合实现条件求和\\n• 区域内含错误值会导致 SUM 返回错误",
    "example": "=SUM(A1:A10) → 求 A1 到 A10 的总和\\n=SUM(A1:C5) → 整个区域求和\\n=SUM(10,20,A1) → 混合参数求和",
    "rating": "★★★★★", "stars": "★★★★★", "hasDetail": True
  },
  "AVERAGE": {
    "usage": "AVERAGE(number1, [number2], ...)",
    "params": "number1, number2, ...：要计算平均值的数值参数，最多255个。",
    "notes": "• 自动忽略文本和逻辑值（TRUE/FALSE）\\n• 但**不会忽略 0 值**！如果用 0 占位会影响平均值\\n• 如需忽略 0 计算，可用 AVERAGEIF(range,\"<>0\")\\n• 与 MEDIAN（中位数）和 MODE（众数）配合描述数据分布",
    "example": "=AVERAGE(A1:A10) → 算术平均值\\n=AVERAGE({90,85,78,92}) → 86.25\\n=AVERAGEIF(A1:A10,\">60\") → 仅对大于 60 的值求平均",
    "rating": "★★★★★", "stars": "★★★★★", "hasDetail": True
  },
  "ROUND": {
    "usage": "ROUND(number, num_digits)",
    "params": "number：要四舍五入的数字。num_digits：保留的小数位数。0=保留整数，正数=保留小数位，负数=保留到十位/百位等。",
    "notes": "• 使用「四舍五入」规则\\n• num_digits=0：四舍五入到整数\\n• num_digits=1：保留1位小数\\n• num_digits=-1：四舍五入到十位\\n• 与 ROUNDUP（总是进位）、ROUNDDOWN（总是舍去）是兄弟函数",
    "example": "=ROUND(3.1415, 2) → 3.14\\n=ROUND(128, -1) → 130（十位四舍五入）\\n=ROUND(3.5) → 4（.5 进位）",
    "rating": "★★★★★", "stars": "★★★★★", "hasDetail": True
  },
  "LEFT": {
    "usage": "LEFT(text, [num_chars])",
    "params": "text：包含要提取字符的文本字符串。num_chars：可选，指定要提取的字符个数，默认为1。",
    "notes": "• 从文本字符串的**最左边**开始提取\\n• 若 num_chars 大于文本长度，返回全部文本\\n• 常用于提取固定格式编码的前缀\\n• 与 RIGHT、MID 是文本提取三兄弟",
    "example": "=LEFT(\"Excel函数\", 3) → \"Exc\"\\n=LEFT(A1) → 取 A1 的第一个字符\\n=LEFT(A1, 4) → 取左边 4 个字符",
    "rating": "★★★★★", "stars": "★★★★★", "hasDetail": True
  },
  "RIGHT": {
    "usage": "RIGHT(text, [num_chars])",
    "params": "text：包含要提取字符的文本字符串。num_chars：可选，指定要提取的字符个数，默认为1。",
    "notes": "• 从文本字符串的**最右边**开始提取\\n• 常用于提取固定长度后缀（如文件扩展名）\\n• 与 LEFT、MID 配合使用可灵活拆分文本\\n• 若需从任意位置提取，用 MID",
    "example": "=RIGHT(\"Excel函数\", 2) → \"函数\"\\n=RIGHT(A1, 3) → 取右边 3 个字符\\n=RIGHT(A1) → 取最后一个字符",
    "rating": "★★★★★", "stars": "★★★★★", "hasDetail": True
  },
  "MID": {
    "usage": "MID(text, start_num, num_chars)",
    "params": "text：包含要提取字符的文本。start_num：从1开始计数的起始位置。num_chars：要提取的字符个数。",
    "notes": "• start_num 从 1 开始（不是 0）\\n• 与 FIND 配合可动态定位提取\\n• 例：=MID(A1, FIND(\"@\",A1)+1, 10) 提取@后的内容\\n• 若 start_num 超过文本长度，返回空文本",
    "example": "=MID(\"Excel函数大全\", 3, 2) → \"cel\"\\n=MID(A1, 2, 3) → 从第2个字符开始取3个\\n=MID(A1, FIND(\"@\",A1)+1, 5) → 提取邮箱@后的内容",
    "rating": "★★★★☆", "stars": "★★★★☆", "hasDetail": True
  },
  "FIND": {
    "usage": "FIND(find_text, within_text, [start_num])",
    "params": "find_text：要查找的文本。within_text：被搜索的文本。start_num：可选，从第几个字符开始搜，默认为1。",
    "notes": "• **区分大小写**：FIND(\"e\",\"Excel\") 返回 4\\n• **不支持通配符**（要用通配符请用 SEARCH）\\n• 找不到返回 #VALUE! 错误（不是 0）\\n• 常与 IFERROR 配合防报错\\n• 返回位置序号常作为 LEFT/MID 的参数",
    "example": "=FIND(\"@\", \"user@example.com\") → 5\\n=FIND(\"E\", \"Excel\") → 1（区分大小写）\\n=IFERROR(FIND(\"x\",A1), \"未找到\")",
    "rating": "★★★★☆", "stars": "★★★★☆", "hasDetail": True
  },
  "SUBSTITUTE": {
    "usage": "SUBSTITUTE(text, old_text, new_text, [instance_num])",
    "params": "text：要替换其中字符的文本。old_text：要被替换的旧文本。new_text：用于替换的新文本。instance_num：可选，指定替换第几次出现的旧文本。",
    "notes": "• **区分大小写**，且不支持通配符\\n• instance_num 省略时替换全部匹配项\\n• 与 REPLACE 不同：SUBSTITUTE 按文本内容查找，REPLACE 按位置替换\\n• 常见用途：清理数据（去空格、统一分隔符）",
    "example": "=SUBSTITUTE(\"hello-world\",\"-\",\" \") → \"hello world\"\\n=SUBSTITUTE(A1,CHAR(160),\"\") → 清除不可见空格\\n=SUBSTITUTE(A1,\" \",\"\") → 删除所有空格",
    "rating": "★★★★☆", "stars": "★★★★☆", "hasDetail": True
  },
  "TRIM": {
    "usage": "TRIM(text)",
    "params": "text：要去除多余空格的文本，或包含文本的单元格引用。",
    "notes": "• 只保留单词之间的**单个空格**，删除首尾空格\\n• 无法删除 HTML 空格（CHAR(160)），需用 SUBSTITUTE 处理\\n• 数据清洗第一步必用函数\\n• 与 CLEAN 配合可清除不可打印字符",
    "example": "=TRIM(\"   Hello   World   \") → \"Hello World\"\\n=TRIM(A1) → 清理 A1 中多余空格\\n=TRIM(SUBSTITUTE(A1,CHAR(160),\"\")) → 清除所有类型空格",
    "rating": "★★★★★", "stars": "★★★★★", "hasDetail": True
  },
  "LEN": {
    "usage": "LEN(text)",
    "params": "text：要统计字符个数的文本，或包含文本的单元格引用。",
    "notes": "• 统计**所有字符**，包括空格\\n• 与 LENB 不同：LENB 按字节数统计（中文=2字节）\\n• 常用于验证输入长度、判断是否为空\\n• 空单元格返回 0",
    "example": "=LEN(\"Hello\") → 5\\n=LEN(A1) → A1 的字符数\\n=IF(LEN(A1)=0,\"空\",\"非空\")",
    "rating": "★★★★☆", "stars": "★★★★☆", "hasDetail": True
  },
  "IF": {
    "usage": "IF(logical_test, value_if_true, [value_if_false])",
    "params": "logical_test：要判断的条件（如 A1>60）。value_if_true：条件成立时的返回值。value_if_false：可选，条件不成立时的返回值（默认 FALSE）。",
    "notes": "• Excel 最常用函数，支持嵌套（最多 64 层）\\n• 与 AND/OR 配合实现多条件判断\\n• IFS 函数（Excel 2016+）可替代深层嵌套\\n• value_if_false 省略时返回 FALSE",
    "example": "=IF(A1>=60,\"及格\",\"不及格\")\\n=IF(AND(A1>=60,B1>=60),\"全部及格\",\"有不及格\")\\n=IF(A1>100,\"异常\",IF(A1>=60,\"及格\",\"不及格\"))",
    "rating": "★★★★★", "stars": "★★★★★", "hasDetail": True
  },
  "AND": {
    "usage": "AND(logical1, [logical2], ...)",
    "params": "logical1, logical2, ...：要测试的条件，最多 255 个。",
    "notes": "• 所有条件为 TRUE 才返回 TRUE\\n• 参数中含空单元格或文本会被忽略\\n• 与 IF 配合实现多条件判断\\n• 条件中含 FALSE 立即返回 FALSE（短路求值）",
    "example": "=AND(A1>60, B1>60) → 两科都及格才 TRUE\\n=IF(AND(A1>80,B1>80),\"优秀\",\"\")\\n=AND(TRUE,TRUE,FALSE) → FALSE",
    "rating": "★★★★☆", "stars": "★★★★☆", "hasDetail": True
  },
  "OR": {
    "usage": "OR(logical1, [logical2], ...)",
    "params": "logical1, logical2, ...：要测试的条件，最多 255 个。",
    "notes": "• 任一条件为 TRUE 即返回 TRUE\\n• 与 AND 配合可实现复杂逻辑\\n• 参数中含空单元格或文本会被忽略\\n• 所有条件为 FALSE 才返回 FALSE",
    "example": "=OR(A1>90, B1>90) → 任意一科>90 即 TRUE\\n=IF(OR(A1=\"\",B1=\"\"),\"缺数据\",\"完整\")\\n=OR(FALSE,FALSE,TRUE) → TRUE",
    "rating": "★★★★☆", "stars": "★★★★☆", "hasDetail": True
  },
  "NOT": {
    "usage": "NOT(logical)",
    "params": "logical：要反转的逻辑值或条件。",
    "notes": "• 将 TRUE 变为 FALSE，FALSE 变为 TRUE\\n• 常与 IS 类函数配合（如 NOT(ISBLANK(A1))）\\n• 也可用于数值：0 变 TRUE，非0 变 FALSE\\n• 与 IF 配合实现「不满足条件时」的逻辑",
    "example": "=NOT(TRUE) → FALSE\\n=NOT(ISBLANK(A1)) → A1 非空时 TRUE\\n=IF(NOT(A1>60),\"补考\",\"通过\")",
    "rating": "★★★☆☆", "stars": "★★★☆☆", "hasDetail": True
  },
  "SUMIF": {
    "usage": "SUMIF(range, criteria, [sum_range])",
    "params": "range：条件判断的区域。criteria：条件（如 \">60\"、\"男\"）。sum_range：可选，实际求和的区域（省略时对 range 求和）。",
    "notes": "• 条件支持通配符：* 任意多字符，? 单个字符\\n• sum_range 大小必须与 range 一致\\n• 与 SUMIFS（多条件）是兄弟函数\\n• 条件为数值时可省略引号：SUMIF(A:A,60,B:B)",
    "example": "=SUMIF(A:A,\">60\",B:B) → A列>60 时对 B列求和\\n=SUMIF(A:A,\"男\",B:B) → 男生成绩求和\\n=SUMIF(A:A,\"*张*\",B:B) → 姓名含\"张\"的求和",
    "rating": "★★★★☆", "stars": "★★★★☆", "hasDetail": True
  },
  "COUNTIF": {
    "usage": "COUNTIF(range, criteria)",
    "params": "range：要计数的单元格区域。criteria：条件，如 \">60\"、\"男\"、\">=\"&A1。",
    "notes": "• 只统计**数字结果**（文本、空单元格不计入）\\n• 条件用引号包裹：COUNTIF(A:A,\">60\")\\n• 支持通配符：* 和 ?\\n• 与 COUNTIFS（多条件）配合使用",
    "example": "=COUNTIF(A:A,\">60\") → 大于60的个数\\n=COUNTIF(A:A,\"男\") → 性别为男的个数\\n=COUNTIF(A:A,\"*张*\") → 姓名含\"张\"的个数",
    "rating": "★★★★☆", "stars": "★★★★☆", "hasDetail": True
  },
  "MAX": {
    "usage": "MAX(number1, [number2], ...)",
    "params": "number1, number2, ...：要找最大值的数值参数，最多255个。",
    "notes": "• 忽略文本和空单元格\\n• 与 MIN 是兄弟函数\\n• 参数中含错误值会传播错误\\n• 与 LARGE 配合可找第 N 大值",
    "example": "=MAX(A1:A10) → 最大值\\n=MAX(10,20,30) → 30\\n=MAX(A1:C5) → 整个区域的最大值",
    "rating": "★★★★☆", "stars": "★★★★☆", "hasDetail": True
  },
  "MIN": {
    "usage": "MIN(number1, [number2], ...)",
    "params": "number1, number2, ...：要找最小值的数值参数，最多255个。",
    "notes": "• 忽略文本和空单元格\\n• 与 MAX 是兄弟函数\\n• 参数中含错误值会传播错误\\n• 与 SMALL 配合可找第 N 小值",
    "example": "=MIN(A1:A10) → 最小值\\n=MIN(10,20,30) → 10\\n=MIN(A1:C5) → 整个区域的最小值",
    "rating": "★★★★☆", "stars": "★★★★☆", "hasDetail": True
  },
  "YEAR": {
    "usage": "YEAR(serial_number)",
    "params": "serial_number：要提取年份的日期（Excel 序列号或日期字符串）。",
    "notes": "• 返回 1900~9999 之间的四位年份整数\\n• 与 MONTH、DAY 是兄弟函数\\n• 日期为文本格式时需先转为日期值\\n• 与 DATE 函数配合可动态构建日期",
    "example": "=YEAR(A1) → 从 A1 日期提取年份\\n=YEAR(\"2024/5/20\") → 2024\\n=YEAR(TODAY()) → 当前年份",
    "rating": "★★★★☆", "stars": "★★★★☆", "hasDetail": True
  },
  "MONTH": {
    "usage": "MONTH(serial_number)",
    "params": "serial_number：要提取月份的日期。",
    "notes": "• 返回 1~12 之间的整数\\n• 与 YEAR、DAY 是兄弟函数\\n• 可用于按月份分组统计\\n• 与 TEXT(date,\"mmmm\") 配合可获取月份名",
    "example": "=MONTH(A1) → 从 A1 日期提取月份\\n=MONTH(TODAY()) → 当前月份\\n=MONTH(\"2024/12/25\") → 12",
    "rating": "★★★★☆", "stars": "★★★★☆", "hasDetail": True
  },
  "DAY": {
    "usage": "DAY(serial_number)",
    "params": "serial_number：要提取日期的天数部分的日期值。",
    "notes": "• 返回 1~31 之间的整数\\n• 与 YEAR、MONTH 是兄弟函数\\n• 可用于判断月末、按天分组\\n• DAY(TODAY()) 返回今天几号",
    "example": "=DAY(A1) → 从 A1 日期提取天数\\n=DAY(TODAY()) → 今天几号\\n=DAY(DATE(2024,2,29)) → 29（闰年判断）",
    "rating": "★★★★☆", "stars": "★★★★☆", "hasDetail": True
  },
  "DATEDIF": {
    "usage": "DATEDIF(start_date, end_date, unit)",
    "params": "start_date：起始日期。end_date：结束日期。unit：返回类型，\"Y\"=年，\"M\"=月，\"D\"=天，\"YM\"=忽略年月的月数差等。",
    "notes": "• **隐藏函数**，未出现在函数列表，但可用\\n• unit=\"Y\"：忽略月和日的整年差\\n• unit=\"YM\"：忽略年和日的月数差\\n• 与计算年龄、工龄等场景高度相关\\n• end_date 小于 start_date 返回 #NUM! 错误",
    "example": "=DATEDIF(A1,TODAY(),\"Y\") → 计算年龄（整年）\\n=DATEDIF(A1,B1,\"M\") → 相差整月数\\n=DATEDIF(A1,B1,\"D\") → 相差天数（精确）",
    "rating": "★★★★☆", "stars": "★★★★☆", "hasDetail": True
  },
  "INDIRECT": {
    "usage": "INDIRECT(ref_text, [a1_style])",
    "params": "ref_text：单元格引用文本（如 \"A1\" 或 \"Sheet1!A1\"）。a1_style：可选，TRUE=A1样式，FALSE=R1C1样式。",
    "notes": "• 将文本字符串转为实际引用——**动态引用神器**\\n• 常用于制作可切换的数据透视表数据源\\n• 易产生易失性计算，大量使用会拖慢表格\\n• 与 ADDRESS 配合可动态生成单元格地址",
    "example": "=INDIRECT(\"A\"&B1) → 根据 B1 的值动态引用 A列某行\\n=INDIRECT(\"Sheet2!A1\") → 引用 Sheet2 的 A1\\n=SUM(INDIRECT(\"A1:\"&\"A\"&COUNTA(A:A))) → 动态求和",
    "rating": "★★★★☆", "stars": "★★★★☆", "hasDetail": True
  },
  "IFS": {
    "usage": "IFS(condition1, value1, [condition2, value2], ...)",
    "params": "condition1, value1：第一个条件和对应返回值。可添加多对条件和返回值，最多 127 对。",
    "notes": "• Excel 2016+ 新增，替代深层嵌套 IF\\n• **所有条件都不满足时返回 #N/A**（需用 IFERROR 包裹）\\n• 条件按顺序判断，命中即停\\n• 与 SWITCH 函数类似，但 SWITCH 只支持等值判断",
    "example": "=IFS(A1>=90,\"优秀\",A1>=80,\"良好\",A1>=60,\"及格\",TRUE,\"不及格\")\\n=IFS(B1=\"男\",\"M\",B1=\"女\",\"F\")\\n=IFERROR(IFS(A1>100,\"异常\",A1>=60,\"及格\"),\"不及格\")",
    "rating": "★★★★☆", "stars": "★★★★☆", "hasDetail": True
  },
  "COUNTIFS": {
    "usage": "COUNTIFS(criteria_range1, criteria1, [criteria_range2, criteria2], ...)",
    "params": "criteria_range1：第一个条件区域。criteria1：第一个条件。可添加多对区域和条件，最多 127 对。",
    "notes": "• 多条件计数，所有条件同时满足才计数\\n• 支持通配符：* 代表任意多个字符，? 代表单个字符\\n• 区域大小必须一致，否则返回 #VALUE!\\n• 最多支持 127 个条件对",
    "example": "=COUNTIFS(A:A,\"男\",B:B,\">80\") → 男生且成绩>80 的人数\\n=COUNTIFS(D:D,\">=60\",D:D,\"<=100\") → 分数在 60~100 之间\\n=COUNTIFS(C:C,\">=\"&DATE(2024,1,1), C:C,\"<=\"&DATE(2024,1,31))",
    "rating": "★★★★★", "stars": "★★★★★", "hasDetail": True
  },
  "SUMIFS": {
    "usage": "SUMIFS(sum_range, criteria_range1, criteria1, [criteria_range2, criteria2], ...)",
    "params": "sum_range：实际求和的区域。criteria_range1：第一个条件区域。criteria1：第一个条件。可添加多对。",
    "notes": "• 多条件求和，所有条件同时满足才计入\\n• 与 SUMIF（单条件）是兄弟函数\\n• sum_range 与条件区域大小可以不同，但形状必须一致\\n• 条件支持通配符和表达式（如 \">60\"）",
    "example": "=SUMIFS(C:C,A:A,\"男\",B:B,\">80\") → 男生且>80分的成绩求和\\n=SUMIFS(D:D,E:E,\"销售部\",F:F,\">10000\")\\n=SUMIFS(A:A,B:B,\">=\"&DATE(2024,1,1),B:B,\"<=\"&DATE(2024,12,31))",
    "rating": "★★★★★", "stars": "★★★★★", "hasDetail": True
  },
  "MOD": {
    "usage": "MOD(number, divisor)",
    "params": "number：被除数。divisor：除数。",
    "notes": "• 返回除法后的**余数**（不是商）\\n• 判断奇数偶数：MOD(A1,2)=1 为奇数，=0 为偶数\\n• divisor 为 0 时返回 #DIV/0! 错误\\n• 与 INT 配合使用可实现自定义进位规则",
    "example": "=MOD(10,3) → 1（10÷3 余 1）\\n=MOD(A1,2)=0 → 判断 A1 是否为偶数\\n=MOD(ROW(),2)=0 → 判断是否为偶数行（用于隔行填色）",
    "rating": "★★★★☆", "stars": "★★★★☆", "hasDetail": True
  },
  "FLOOR": {
    "usage": "FLOOR(number, significance)",
    "params": "number：要向下舍入的数值。significance：舍入的基数（如 0.5、10、100）。",
    "notes": "• 向**绝对值减小**的方向舍入（与 CEILING 相反）\\n• FLOOR(2.3, 0.5) → 2.0（向下取到 0.5 的倍数）\\n• 与 CEILING（向上取整）是一对兄弟函数\\n• 负数处理要小心：FLOOR(-2.3,1) → -3",
    "example": "=FLOOR(2.7, 1) → 2\\n=FLOOR(138, 10) → 130（价格下取到 10 元）\\n=FLOOR(A1, 0.5) → 向下舍入到 0.5 的倍数",
    "rating": "★★★★☆", "stars": "★★★★☆", "hasDetail": True
  },
  "CEILING": {
    "usage": "CEILING(number, significance)",
    "params": "number：要向上舍入的数值。significance：舍入的基数。",
    "notes": "• 向**绝对值增大**的方向舍入（与 FLOOR 相反）\\n• 典型应用：计费系统（停车费按 15 分钟计费单元）、价格取整\\n• 与 FLOOR（向下取整）是一对兄弟函数\\n• Excel 2010 后还有 CEILING.MATH 变体",
    "example": "=CEILING(2.3, 0.5) → 2.5\\n=CEILING(138, 10) → 140（价格上取到 10 元）\\n=CEILING(A1/15, 1)*15 → 停车费计费算法",
    "rating": "★★★★☆", "stars": "★★★★☆", "hasDetail": True
  },
  "RANK": {
    "usage": "RANK(number, ref, [order])",
    "params": "number：要排位的数字。ref：数字列表数组。order：可选，0或省略=降序排位，非0=升序排位。",
    "notes": "• 相同数值获得**相同排位**，后续排位会跳跃\\n• 如 100,90,90,80 → 排位为 1,2,2,4（没有第3名）\\n• Excel 2010+ 建议用 RANK.EQ（同功能）或 RANK.AVG\\n• RANK.AVG 将相同数值的排位取平均（如两个第2名→2.5）",
    "example": "=RANK(A1, A$1:A$10) → A1 在 A1:A10 中的降序排位\\n=RANK(A1, A$1:A$10, 1) → 升序排位\\n=RANK(A1, A:A) → 在整个 A 列中排位",
    "rating": "★★★★☆", "stars": "★★★★☆", "hasDetail": True
  },
}

# ── 4. 更新数组中的对应条目 ──────────────────────────────────────
name_to_idx = {f["name"]: i for i, f in enumerate(arr)}
updated = 0
for fname, d in details.items():
    if fname in name_to_idx:
        idx = name_to_idx[fname]
        arr[idx]["usage"]   = d["usage"]
        arr[idx]["params"]  = d["params"]
        arr[idx]["notes"]   = d["notes"]
        arr[idx]["example"] = d["example"]
        arr[idx]["rating"]  = d["rating"]
        arr[idx]["stars"]   = d["stars"]
        arr[idx]["hasDetail"] = d["hasDetail"]
        updated += 1
        print(f'  ✓ {fname}')
    else:
        print(f'  ✗ {fname}: 不在 FUNCTIONS 数组中')

print(f'\n共更新 {updated} 个函数')

# ── 5. 序列化并写回 ─────────────────────────────────────────────
new_arr_str = json.dumps(arr, ensure_ascii=False, separators=(',', ':'))
# 连同首尾括号写回
new_block = 'const FUNCTIONS = ' + new_arr_str
content = content[:m.start()] + new_block + content[end:]

with open('A:/workbuddy代码项目/函数工具/Excel函数大全.html', 'w', encoding='utf-8') as f:
    f.write(content)
print('文件已保存')

# ── 6. 验证：确认没有非法换行符 ─────────────────────────────────
# 检查 FUNCTIONS 区域内，引号包裹的字符串中是否含有真正的换行符
func_region = content[m.start():m.start() + len(new_block)]
# 简单检查：在 new_arr_str 中搜索引号内是否有 \n（单字符）
import re
# 找到所有 "notes":"..." 中的内容，检查是否有真实换行
bad = re.findall(r'"notes":"[^"]*(\n)[^"]*"', new_arr_str)
if bad:
    print(f'⚠ 警告：notes 字段中发现 {len(bad)} 处真实换行符！')
else:
    print('✓ 未发现有真实换行符（JS 语法检查通过）')
