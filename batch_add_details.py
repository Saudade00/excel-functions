"""
Task #11: 补充高频函数的详情内容
目标：为 TOP 60 高频函数补充 usage/params/example/notes/rating/stars/hasDetail
注意：所有字符串中的换行用 \\n（Python 中写 \\n，输出到文件就是 \n，JS 解析为换行）
"""

import re, json

html_path = r'A:\workbuddy代码项目\函数工具\Excel函数大全.html'
with open(html_path, 'r', encoding='utf-8') as f:
    content = f.read()

# ── 1. 解析 FUNCTIONS 数组 ────────────────────────────────
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
func_map = {f['name']: f for f in funcs}
print(f"FUNCTIONS 总数: {len(funcs)}")

# ── 2. 定义要补充的函数详情数据 ───────────────────────────
# 每个函数：usage, params, example, notes, rating, stars
DETAIL_DATA = {
    "ABS": {
        "usage": "ABS(number)",
        "params": "number：需要计算其绝对值的实数。可以是具体数值或单元格引用。",
        "example": "=ABS(-5) → 5\\n=ABS(A1)（A1=-3.2）→ 3.2",
        "notes": "返回数字的绝对值（无符号）。常用于计算差值大小、距离、误差等场景。负数变正数，正数不变。",
        "rating": "★★★★☆", "stars": "★★★★★"
    },
    "AVERAGE": {
        "usage": "AVERAGE(number1, [number2], ...)",
        "params": "number1, number2, ...：要计算平均值的数值、单元格引用或区域。最多支持255个参数。",
        "example": "=AVERAGE(1,2,3,4,5) → 3\\n=AVERAGE(B2:B11) → 计算B列第2~11行的平均值",
        "notes": "计算算术平均值。忽略文本和空单元格，但会计入0值。如需忽略0值，请用 AVERAGEIFS 或数组公式。",
        "rating": "★★★★★", "stars": "★★★★★"
    },
    "COLUMN": {
        "usage": "COLUMN([reference])",
        "params": "reference（可选）：要获取列号的单元格或区域。省略则返回公式所在列的列号。",
        "example": "=COLUMN(D5) → 4\\n=COLUMN() → 返回当前所在列号",
        "notes": "返回指定单元格的列号（A=1, B=2, ..., Z=26）。常与 ROW 函数配合使用，用于动态引用或条件格式。",
        "rating": "★★★★☆", "stars": "★★★★★"
    },
    "COUNT": {
        "usage": "COUNT(value1, [value2], ...)",
        "params": "value1, value2, ...：包含或引用各种数据类型的参数。只统计数值型数据（日期也计入）。",
        "example": "=COUNT(1,\"a\",TRUE, \"2024-01-01\") → 2（日期被当作数值计数）\\n=COUNT(A1:A100) → 统计A1:A100中有多少个数字",
        "notes": "统计区域内数值型数据的个数。不统计文本、空单元格、逻辑值（除非直接作为参数）。COUNTA 可统计非空单元格。",
        "rating": "★★★★★", "stars": "★★★★★"
    },
    "COUNTA": {
        "usage": "COUNTA(value1, [value2], ...)",
        "params": "value1, value2, ...：任意类型的值或区域引用。统计所有非空单元格的个数。",
        "example": "=COUNTA(A1:D10) → 返回该区域内非空单元格总数\\n=COUNTA(\"a\",1,\"\",TRUE) → 3（\"\" 空字符串不计入）",
        "notes": "统计非空单元格数量，适用于任何类型的数据（数字、文本、逻辑值等）。常用于判断数据是否填写完整。",
        "rating": "★★★★★", "stars": "★★★★★"
    },
    "COUNTBLANK": {
        "usage": "COUNTBLANK(range)",
        "params": "range：要统计空白单元格的区域引用。空字符串 \"\" 也算空白。",
        "example": "=COUNTBLANK(A1:A20) → 返回A1:A20中空白单元格的数量",
        "notes": "统计区域内的空单元格个数。注意：空字符串 \"\" 和未输入内容的单元格都视为空白，但输入了空格的单元格不算空白。",
        "rating": "★★★★☆", "stars": "★★★★★"
    },
    "DDB": {
        "usage": "DDB(cost, salvage, life, period, [factor])",
        "params": "cost：资产原值；salvage：残值（折旧末尾的价值）；life：总期数；period：要计算的期次；factor（可选）：折旧倍率，默认为2（双倍余额递减法）。",
        "example": "=DDB(50000,2000,5,1) → 第1年折旧额 20000\\n=DDB(50000,2000,5,2) → 第2年折旧额 12000",
        "notes": "使用双倍余额递减法或其他指定方法计算资产在指定期间的折旧值。前期折旧额大，后期逐渐减少。factor=2 为双倍递减。",
        "rating": "★★★★☆", "stars": "★★★★★"
    },
    "EDATE": {
        "usage": "EDATE(start_date, months)",
        "params": "start_date：起始日期（可以是日期序列号或文本日期）；months：偏移月数（正数往后，负数往前）。",
        "example": "=EDATE(\"2024-03-15\", 3) → 2024-06-15\\n=EDATE(TODAY(), -6) → 6个月前的今天",
        "notes": "返回指定日期前后若干个月的对应日。常用于计算合同到期日、会员续费提醒等场景。如果结果月份的天数不足，自动取当月最后一天。",
        "rating": "★★★★☆", "stars": "★★★★★"
    },
    "FLOOR": {
        "usage": "FLOOR(number, significance)",
        "params": "number：要向下舍入的数值；significance：舍入基数（必须与 number 同号）。结果向零方向舍入到最接近的 significance 倍数。",
        "example": "=FLOOR(3.7, 1) → 3\\n=FLOOR(-3.2, -1) → -4（向绝对值增大方向舍入）",
        "notes": "将数字向下舍入到最接近的指定基数的整数倍。与 CEILING 相反（向上舍入）。常用于价格取整、时间对齐等。",
        "rating": "★★★★☆", "stars": "★★★★★"
    },
    "FREQUENCY": {
        "usage": "FREQUENCY(data_array, bins_array)",
        "params": "data_array：要统计频率的数值数组或区域；bins_array：分段区间边界值的数组（升序排列），用于定义分组区间。",
        "example": "成绩分布统计（bins={60,70,80,90}）：\\n=FREQUENCY(A1:A50, C1:C4) → 返回 {≤60的人数,61~70,71~80,81~90,>90}",
        "notes": "以一列垂直数组的形式返回频率分布。bins_array 有 n 个值时，结果返回 n+1 个元素（最后一个区间统计超出最大边界的值）。需选中区域后按 Ctrl+Shift+Enter 输入。",
        "rating": "★★★★☆", "stars": "★★★★★"
    },
    "FV": {
        "usage": "FV(rate, nper, pmt, [pv], [type])",
        "params": "rate：每期利率；nper：总期数；pmt：每期付款额；pv（可选）：现值/初始本金，默认0；type（可选）：0=期末支付（默认），1=期初支付。",
        "example": "每月存1000元，年利率6%，存5年：\\n=FV(6%/12, 60, -1000) → ¥69,770.03（未来总值）",
        "notes": "基于固定利率和等额分期付款，计算投资的未来值。rate 与 nper 的单位必须一致（如都是月）。付款额 pmt 用负数表示支出。",
        "rating": "★★★★☆", "stars": "★★★★★"
    },
    "HOUR": {
        "usage": "HOUR(serial_number)",
        "params": "serial_number：包含时间的日期序列号、文本或单元格引用。返回 0~23 的整数。",
        "example": "=HOUR(\"14:30:45\") → 14\\n=HOUR(NOW()) → 当前小时数（0~23）",
        "notes": "从时间值中提取小时部分（24小时制）。配合 MINUTE、SECOND 使用可完整拆解时间。常用于按时间段分类统计数据。",
        "rating": "★★★☆☆", "stars": "★★★★★"
    },
    "INFO": {
        "usage": "INFO(type_text)",
        "params": "type_text：指定要返回的信息类型。常用值：\"directory\"=当前路径；\"numfile\"=工作表数；\"recalc\"=重算模式；\"system\"=操作系统名；\"version\"=Excel版本；\"osversion\"=系统版本。",
        "example": "=INFO(\"osversion\") → Windows (64-bit) NT 10.00\\n=INFO(\"directory\") → C:\\Users\\xxx\\Documents",
        "notes": "返回有关当前操作环境和 Excel 设置的信息。在新版 Excel 中部分 type_text 值已弃用。TYPE 函数可用于判断单元格数据类型。",
        "rating": "★★★☆☆", "stars": "★★★☆☆"
    },
    "IPMT": {
        "usage": "IPMT(rate, per, nper, pv, [fv], [type])",
        "params": "rate：每期利率；per：要计算的利息所属期次（1~nper）；nper：总期数；pv：现值/贷款本金；fv（可选）：终值，默认0；type：0=期末（默认），1=期初。",
        "example": "贷款10万，年利率5%，分36期还清：\\n=IPMT(5%/12, 1, 36, 100000) → 第1个月利息 ¥416.67\\n=IPMT(5%/12, 36, 36, 100000) → 最后一个月利息 ¥11.58",
        "notes": "基于固定利率和等额本息还款方式，计算给定期间内支付的利息金额。与 PPMT 配合可查看本金+利息明细。",
        "rating": "★★★★☆", "stars": "★★★★★"
    },
    "IRR": {
        "usage": "IRR(values, [guess])",
        "params": "values：现金流数组/区域，必须至少包含一个正值和一个负值；guess（可选）：预期内部收益率估计值，默认0.1（10%）。",
        "example": "初期投资-10000，后续每年收益[3000,3200,3400,3800]：\\n=IRR({-10000,3000,3200,3400,3800}) → 约 16.9%",
        "notes": "计算一系列现金流的内部收益率（IRR）。投资决策核心指标——IRR 越高说明项目越值得投。若 IRR > 资金成本率，项目可行。XNPV/XIRR 支持不规则日期。",
        "rating": "★★★★☆", "stars": "★★★★★"
    },
    "ISBLANK": {
        "usage": "ISBLANK(value)",
        "params": "value：要检查的值或单元格引用。返回 TRUE 表示单元格为空，FALSE 表示不为空。",
        "example": "=IF(ISBLANK(A1),\"未填\",\"已填\") → 判断A1是否为空\\n=COUNTIF(A1:A100, ISBLANK?) → 需用 COUNTBLANK 替代",
        "notes": "检查单元格是否为空。注意：空字符串 \"\" 不被视为空（返回 FALSE）。常与 IF 配合做数据校验。ISERROR 系列函数包括 ISNUMBER/ISTEXT/ISLOGICAL 等。",
        "rating": "★★★★★", "stars": "★★★★★"
    },
    "ISERR": {
        "usage": "ISERR(value)",
        "params": "value：要检查的值。如果是 #N/A 以外的错误值返回 TRUE，否则返回 FALSE。",
        "example": "=ISERR(#VALUE!) → TRUE\\n=ISERR(#N/A) → FALSE（#N/A 不算）\\n=ISERR(123) → FALSE",
        "notes": "检测错误值（#VALUE!/#REF!/#DIV/0! 等），但不包括 #N/A。如需包含 #N/A，用 ISERROR。常与 IF 配合处理错误。",
        "rating": "★★★★☆", "stars": "★★★★★"
    },
    "ISERROR": {
        "usage": "ISERROR(value)",
        "params": "value：要检查的值。如果是任何错误值（含 #N/A）返回 TRUE，否则 FALSE。",
        "example": "=IF(ISERROR(VLOOKUP(...)), \"未找到\", VLOOKUP(...))\\n→ 安全查找，避免 #N/A 显示",
        "notes": "检测任何错误值（#N/A/#VALUE!/#REF!/#DIV/0!/#NUM!/#NAME?/#NULL! 全部覆盖）。新版 Excel 推荐用 IFERROR 替代 IF(ISERROR(),...) 模式。",
        "rating": "★★★★★", "stars": "★★★★★"
    },
    "ISLOGICAL": {
        "usage": "ISLOGICAL(value)",
        "params": "value：要检查的值。如果值为 TRUE 或 FALSE 返回 TRUE，否则 FALSE。",
        "example": "=ISLOGICAL(TRUE) → TRUE\\n=ISLOGICAL(\"TRUE\") → FALSE（文本不是逻辑值）",
        "notes": "判断值是否为逻辑值（TRUE/FALSE）。常用于验证用户输入的是否是布尔值。ISNUMBER/ISTEXT 类似但分别判断数字和文本。",
        "rating": "★★★☆☆", "stars": "★★★☆☆"
    },
    "ISNUMBER": {
        "usage": "ISNUMBER(value)",
        "params": "value：要检查的值。如果是数值（含日期和时间序列号）返回 TRUE，否则 FALSE。",
        "example": "=ISNUMBER(42) → TRUE\\n=ISNUMBER(\"42\") → FALSE（文本不是数字）\\n=ISNUMBER(TODAY()) → TRUE（日期本质是数字）",
        "notes": "判断值是否为数值类型。常与 IF/SUMPRODUCT 配合做条件统计。注意：文本形式的数字（\"42\"）返回 FALSE，可用 VALUE() 转换后再判断。",
        "rating": "★★★★★", "stars": "★★★★★"
    },
    "ISTEXT": {
        "usage": "ISTEXT(value)",
        "params": "value：要检查的值。如果是文本返回 TRUE，否则 FALSE。",
        "example": "=ISTEXT(\"Hello\") → TRUE\\n=ISTEXT(123) → FALSE\\n=ISTEXT(\"\") → TRUE（空字符串也是文本）",
        "notes": "判断值是否为文本类型。常用于区分数字和文本格式的数据，或验证输入格式。配合 ISNUMBER 可以完整判断数据类型。",
        "rating": "★★★★☆", "stars": "★★★★★"
    },
    "LARGE": {
        "usage": "LARGE(array, k)",
        "params": "array：数据数组或区域；k：要返回的第几大的值（k=1 返回最大值，k=2 返回第二大...）。",
        "example": "成绩排名前三：\\n=LARGE(B2:B31, 1) → 最高分\\n=LARGE(B2:B31, 3) → 第三高分",
        "notes": "返回数据集中第 k 大的值。与 SMALL 相反（返回第 k 小）。常用于 Top N 分析、奖金评定、成绩排名等场景。RANK 返回排名序号，LARGE 返回实际值。",
        "rating": "★★★★☆", "stars": "★★★★★"
    },
    "MAX": {
        "usage": "MAX(number1, [number2], ...)",
        "params": "number1, number2, ...：数值、区域或数组。返回其中的最大值。",
        "example": "=MAX(A1:A100) → 找出最高销售额\\n=MAX(0, A1) → 确保不低于0",
        "notes": "返回一组数值中的最大值。忽略文本和空单元格。MAXA 包含逻辑值（TRUE=1,FALSE=0）。MIN 功能相反（返回最小值）。",
        "rating": "★★★★★", "stars": "★★★★★"
    },
    "MEDIAN": {
        "usage": "MEDIAN(number1, [number2], ...)",
        "params": "number1, number2, ...：数值或区域。返回中位数（中间值）。",
        "example": "=MEDIAN(1,3,5,7,9) → 5\\n=MEDIAN(1,3,5,7) → 4（偶数个取中间两数的平均值）",
        "notes": "返回数据集的中位数。相比平均值（AVERAGE），中位数不受极端异常值影响，更适合描述偏态分布数据的集中趋势。",
        "rating": "★★★★☆", "stars": "★★★★★"
    },
    "MIN": {
        "usage": "MIN(number1, [number2], ...)",
        "params": "number1, number2, ...：数值或区域。返回其中的最小值。",
        "example": "=MIN(C2:C50) → 找出最低成本价\\n=MIN(100, A1) → 上限保护（不超过100）",
        "notes": "返回一组数值中的最小值。忽略文本和空单元格。MINA 包含逻辑值。与 MAX 对应使用。",
        "rating": "★★★★★", "stars": "★★★★★"
    },
    "MINUTE": {
        "usage": "MINUTE(serial_number)",
        "params": "serial_number：包含时间的日期序列号、文本或单元格引用。返回 0~59 的整数。",
        "example": "=MINUTE(\"14:30:45\") → 30\\n=MINUTE(NOW()) → 当前分钟数",
        "notes": "从时间值中提取分钟部分。配合 HOUR、SECOND 完整拆解时间。常用于按分钟级精度分析数据。",
        "rating": "★★★☆☆", "stars": "★★★☆☆"
    },
    "MOD": {
        "usage": "MOD(number, divisor)",
        "params": "number：被除数；divisor：除数。返回余数，结果的符号与除数相同。",
        "example": "=MOD(10, 3) → 1\\n=MOD(-10, 3) → 2（结果符号与除数一致）\\n=MOD(ROW(), 2) → 隔行着色（奇偶行判断）",
        "notes": "返回两数相除后的余数。经典应用：隔行着色（=MOD(ROW(),2)=0）、判断奇偶数、循环周期（每N行执行一次）、提取数字的个位/十位等。",
        "rating": "★★★★☆", "stars": "★★★★★"
    },
    "MODE": {
        "usage": "MODE.SNGL(number1, [number2], ...) 或 MODE.MULT(array)",
        "params": "number1, number2, ...：数值或区域。MODE.SNGL 返回出现次数最多的单个值，MODE.MULT 返回所有众数的数组。",
        "example": "=MODE(1,2,2,3,3,3,4) → 3（3出现最多）\\n=MODE.SNGL(A1:A50) → 最常见分数",
        "notes": "返回数据集中出现频率最高的值（众数）。适合分析投票结果、最受欢迎商品等。Excel 2010+ 推荐 MODE.SNGL/MODE.MULT 替代旧 MODE。",
        "rating": "★★★★☆", "stars": "★★★★★"
    },
    "NETWORKDAYS": {
        "usage": "NETWORKDAYS(start_date, end_date, [holidays])",
        "params": "start_date：开始日期；end_date：结束日期；holidays（可选）：自定义假期列表（区域引用），排除周末之外的节假日。",
        "example": "计算工作日天数：\\n=NETWORKDAYS(\"2024-01-01\",\"2024-12-31\") → 262天（排除周末）\\n=NETWORKDAYS(A1,B1,H1:H10) → 排除自定义节假日",
        "notes": "计算两个日期之间的完整工作日数（排除周六周日和指定节假日）。项目管理必备函数。NETWORKDAYS.INTL 可自定义周末（如只有周日休息）。",
        "rating": "★★★★☆", "stars": "★★★★★"
    },
    "NPER": {
        "usage": "NPER(rate, pmt, pv, [fv], [type])",
        "params": "rate：每期利率；pmt：每期付款额；pv：现值/贷款总额；fv（可选）：终值，默认0；type：0=期末（默认），1=期初。",
        "example": "贷款10万，月还3000，年利率6%：\\n=NPER(6%/12, -3000, 100000) → 约38.9个月还清",
        "notes": "基于固定利率和等额付款，计算达到目标所需的期数。常用于计算还贷周期、储蓄达标所需时间等规划场景。",
        "rating": "★★★★☆", "stars": "★★★★★"
    },
    "NPV": {
        "usage": "NPV(rate, value1, [value2], ...)",
        "params": "rate：折现率（资金成本）；value1, value2, ...：各期的现金流（正数为收入，负数为支出）。",
        "example": "初期投资-10000，5年收入[3000,3500,4000,4500,5000]，折现率8%：\\n=NPV(8%, 3000,3500,4000,4500,5000)-10000 → NPV≈¥4,822",
        "notes": "计算一系列现金流的净现值（NPV）。NPV>0 说明项目盈利，<0 则亏损。注意：NPV 假设第一笔现金流发生在第一期**之后**，初期投资通常单独加减。",
        "rating": "★★★★☆", "stars": "★★★★★"
    },
    "PERCENTILE": {
        "usage": "PERCENTILE.INC(array, k) 或 PERCENTILE.EXC(array, k)",
        "params": "array：数据数组或区域；k：百分位值（0~1之间的小数），0.5为中位数，0.75为上四分位数。",
        "example": "成绩百分位分析：\\n=PERCENTILE.INC(A1:A50, 0.9) → 前10%的最低分数线（90th percentile）\\n=PERCENTILE.INC(B2:B101, 0.25) → 下四分位数",
        "notes": "返回数据集中的第 k 百分位值。INC 包含端点（k=0/1有效），EXC 排除端点。常用于薪资分析、考试成绩定位、KPI 分布评估等。",
        "rating": "★★★★☆", "stars": "★★★★★"
    },
    "PERCENTRANK": {
        "usage": "PERCENTRANK.INC(array, x, [significance]) 或 PERCENTRANK.EXC(array, x, [significance])",
        "params": "array：数据数组或区域；x：要知道其在数据集中排位的值；significance（可选）：保留小数位数，默认3。",
        "example": "某员工薪资在全公司的百分位：\\n=PERCENTRANK.INC($B$2:$B$51, B2) → 如 0.85 表示超过85%的人",
        "notes": "返回某个值在数据集中的相对位置（百分位排名）。0表示最小值，1表示最大值。常用于绩效排名、薪资对标等场景。",
        "rating": "★★★★☆", "stars": "★★★★★"
    },
    "PMT": {
        "usage": "PMT(rate, nper, pv, [fv], [type])",
        "params": "rate：每期利率；nper：总还款期数；pv：现值/贷款本金；fv（可选）：终值，默认0；type：0=期末付（默认），1=期初付。",
        "example": "贷款50万，年利率4.9%，分30年（360个月）还清：\\n=PMT(4.9%/12, 360, 500000) → 每月还款约 ¥2,653",
        "notes": "计算固定利率下等额本息的每期还款额。rate 与 nper 单位须一致（如都用月）。结果为负数表示支出。房贷/车贷/消费贷计算必备。",
        "rating": "★★★★★", "stars": "★★★★★"
    },
    "POWER": {
        "usage": "POWER(number, power)",
        "params": "number：底数；power：指数。返回 number 的 power 次幂。",
        "example": "=POWER(2, 10) → 1024\\n=POWER(27, 1/3) → 3（立方根）\\n=POWER(100, 0.5) → 10（平方根，同 SQRT）",
        "notes": "返回数字的指定次幂。^运算符也可实现同样功能（如 2^10=1024）。POWER 更直观且支持分数指数（开方运算）。",
        "rating": "★★★★☆", "stars": "★★★★★"
    },
    "PPMT": {
        "usage": "PPMT(rate, per, nper, pv, [fv], [type])",
        "params": "rate：每期利率；per：要计算本金的期次（1~nper）；nper：总期数；pv：贷款本金；fv（可选），type（可选）。",
        "example": "贷款10万，年利率5%，36期：\\n=PPMT(5%/12, 1, 36, 100000) → 第1月本金 ¥2,415.28\\n=PPMT(5%/12, 36, 36, 100000) → 最后1月本金 ¥2,820.37",
        "notes": "计算等额本息还款方式下指定期间偿还的本金额。与 IPMT（利息）配合可查看完整还款明细。每月还款额 = PPMT + IPMT = PMT。",
        "rating": "★★★★☆", "stars": "★★★★★"
    },
    "PV": {
        "usage": "PV(rate, nper, pmt, [fv], [type])",
        "params": "rate：每期折现率；nper：总期数；pmt：每期付款额；fv（可选）：未来值/目标金额，默认0；type：0=期末（默认），1=期初。",
        "example": "每月能存2000元，年利率4%，存10年后想要多少钱？\\n=PV(4%/12, 120, -2000) → 需要初始投入约 ¥197,000",
        "notes": "计算一系列未来现金流的现值（PV）。即「未来的钱」现在值多少。常用于投资评估、养老金规划、贷款额度计算等。",
        "rating": "★★★★☆", "stars": "★★★★★"
    },
    "RATE": {
        "usage": "RATE(nper, pmt, pv, [fv], [type], [guess])",
        "params": "nper：总期数；pmt：每期付款额；pv：现值/贷款金额；fv（可选）：终值；type（可选）；guess（可选）：猜测利率，默认10%。",
        "example": "贷款20万，月还2500，36期还清，求年利率：\\n=RATE(36, -2500, 200000)*12 → 年利率约 7.44%",
        "notes": "计算贷款或投资的隐含利率。迭代算法求解，可能需要 guess 参数辅助收敛。常用于对比不同金融产品的真实收益率。",
        "rating": "★★★★☆", "stars": "★★★★★"
    },
    "REPLACE": {
        "usage": "REPLACE(old_text, start_num, num_chars, new_text)",
        "params": "old_text：原文本；start_num：开始替换的位置（从1起算）；num_chars：要替换掉的字符数；new_text：替换为新文本。",
        "example": "=REPLACE(\"20240328\", 5, 2, \"05\") → 20240528\\n=REPLACE(\"Hello World\", 7, 5, \"Excel\") → Hello Excel",
        "notes": "根据位置和长度替换文本中的字符。与 SUBSTITUTE 不同：SUBSTITUTE 按**内容**查找替换，REPLACE 按**位置**替换。身份证号脱敏（中间几位替为*）的经典方案。",
        "rating": "★★★★☆", "stars": "★★★★★"
    },
    "ROUND": {
        "usage": "ROUND(number, num_digits)",
        "params": "number：要四舍五入的数字；num_digits：保留小数位数。正数→小数位，0→整数，负数→整数位舍入。",
        "example": "=ROUND(3.14159, 2) → 3.14\\n=ROUND(1234.56, -1) → 1230（舍入到十位）\\n=ROUND(2.5, 0) → 3（四舍六入五成双规则）",
        "notes": "将数字四舍五入到指定位数。ROUNDDOWN 只舍不入，ROUNDUP 只入不舍。INT 直接截断小数（向零取整）。财务报表中必用 ROUND 避免浮点误差。",
        "rating": "★★★★★", "stars": "★★★★★"
    },
    "ROUNDDOWN": {
        "usage": "ROUNDDOWN(number, num_digits)",
        "params": "number：要向下舍入的数字；num_digits：保留位数。正数→小数位，0→整数，负数→整数位。始终向零的方向舍入。",
        "example": "=ROUNDDOWN(3.999, 2) → 3.99\\n=ROUNDDOWN(-3.99, 0) → -3（向零方向舍入）",
        "notes": "向零方向截断数字（只舍不入）。与 INT 不同：INT 向下取整（-3.99→-4），ROUNDDOWN 向零取整（-3.99→-3）。TRUNC 是 ROUNDDOWN 的别名。",
        "rating": "★★★★☆", "stars": "★★★★★"
    },
    "ROUNDUP": {
        "usage": "ROUNDUP(number, num_digits)",
        "params": "number：要向上舍入的数字；num_digits：保留位数。始终远离零的方向舍入。",
        "example": "=ROUNDUP(3.001, 0) → 4（向上舍入到整数）\\n=ROUNDUP(123.4, -1) → 130（向上舍入到十位）",
        "notes": "向远离零的方向舍入（只入不舍）。常用于预算估算（宁可多估不少估）、库存安全量计算等保守场景。",
        "rating": "★★★★☆", "stars": "★★★★★"
    },
    "ROW": {
        "usage": "ROW([reference])",
        "params": "reference（可选）：要获取行号的单元格或区域。省略则返回公式所在行的行号。",
        "example": "=ROW(A10) → 10\\n=ROW() → 返回当前行号\\n=ROW(A1:A5) → {1;2;3;4;5}（数组形式）",
        "notes": "返回指定单元格的行号。与 COLUMN 配合使用可实现动态引用。常见应用：自动编号（=ROW()-首行号+1）、隔行操作（=MOD(ROW(),2)=0）、条件格式动态行号等。",
        "rating": "★★★★☆", "stars": "★★★★★"
    },
    "ROWS": {
        "usage": "ROWS(array)",
        "params": "array：单元格区域、数组或常量。返回区域的行数。",
        "example": "=ROWS(A1:D10) → 10\\n=ROWS({1,2,3}) → 1\\n=ROWS(A:A) → 1048576（整个A列的总行数）",
        "notes": "返回区域或数组的行数。与 COLUMNS（返回列数）配合可获取区域尺寸。常用于动态范围定义、数据有效性限制输入行数等。",
        "rating": "★★★☆☆", "stars": "★★★☆☆"
    },
    "SEARCH": {
        "usage": "SEARCH(find_text, within_text, [start_num])",
        "params": "find_text：要查找的文本（支持通配符 * ?）；within_text：被搜索的文本；start_num（可选）：从第几个字符开始搜索，默认1。",
        "example": "=SEARCH(\"@\", \"user@example.com\") → 5\\n=SEARCH(\"张*\", \"张三丰,李四光\") → 1（通配符匹配）",
        "notes": "在文本中查找子串的位置（从1开始）。与 FIND 的区别：SEARCH **不区分大小写** 且**支持通配符** (* 匹配任意多个字符，? 匹配单个)。未找到返回 #VALUE! 错误。",
        "rating": "★★★★☆", "stars": "★★★★★"
    },
    "SECOND": {
        "usage": "SECOND(serial_number)",
        "params": "serial_number：包含时间的日期序列号或文本。返回 0~59 的秒数。",
        "example": "=SECOND(\"14:30:25\") → 25\\n=SECOND(NOW()) → 当前秒数",
        "notes": "从时间值中提取秒的部分。配合 HOUR、MINUTE 可完整拆解时间。常用于精确计时、日志时间戳分析等。",
        "rating": "★★★☆☆", "stars": "★★★☆☆"
    },
    "SLN": {
        "usage": "SLN(cost, salvage, life)",
        "params": "cost：资产原值；salvage：残值（使用寿命结束时的价值）；life：使用年限（单位与 rate 一致）。",
        "example": "=SLN(60000, 6000, 5) → 每年折旧 ¥10,800\\n设备原值6万，残值6千，5年寿命，直线法每年折旧10800元",
        "notes": "使用直线折旧法计算资产的每期折旧额。最简单的折旧方法，每年折旧额相同。适合均匀损耗的资产（如办公设备、家具）。",
        "rating": "★★★★☆", "stars": "★★★★★"
    },
    "SMALL": {
        "usage": "SMALL(array, k)",
        "params": "array：数据数组或区域；k：要返回的第几小的值（k=1 返回最小值）。",
        "example": "找出倒数第三的成绩：\\n=SMALL(B2:B31, 3) → 从小到大排第3小的值",
        "notes": "返回数据集中第 k 小的值。与 LARGE 相反。常用于 Bottom N 分析、最低价采购、淘汰最后几名等场景。",
        "rating": "★★★★☆", "stars": "★★★★★"
    },
    "SQRT": {
        "usage": "SQRT(number)",
        "params": "number：要求平方根的非负数。返回值为正数。",
        "example": "=SQRT(144) → 12\\n=SQRT(AVERAGE((A1:A5-AVERAGE(A1:A5))^2)) → 标准差的手动计算",
        "notes": "返回正数的平方根。负数会返回 #NUM! 错误。POWER(x, 0.5) 效果相同。常用于标准差计算、几何均值、距离公式等数学场景。",
        "rating": "★★★★☆", "stars": "★★★★★"
    },
    "STDEV": {
        "usage": "STDEV.S(number1, [number2], ...) 或 STDEV.P(number1, [number2], ...)",
        "params": "number1, number2, ...：样本数据或区域。STDEV.S 计算样本标准差，STDEV.P 计算总体标准差。",
        "example": "=STDEV.S(A1:A30) → 样本标准差\\n=STDEV.P(B2:B101) → 总体标准差（已知全量数据时用）",
        "notes": "估算基于样本的标准差（衡量数据的离散程度）。STDEV.S 除以 n-1（无偏估计），STDEV.P 除以 n。数据分析基础指标，配合 AVERAGE 描述数据分布特征。",
        "rating": "★★★★☆", "stars": "★★★★★"
    },
    "STDEVP": {
        "usage": "STDEVP(number1, [number2], ...)",
        "params": "number1, number2, ...：总体数据或区域。返回总体标准差（除以 n）。",
        "example": "=STDEVP(A1:A100) → 已知全部数据的总体标准差\\n=STDEV.S(A1:A100) → 作为样本的标准差（更常用）",
        "notes": "计算总体标准差（除以 n）。当数据代表全部对象时使用。Excel 2010+ 推荐 STDEV.P 替代 STDEVP。大多数情况下应使用 STDEV.S（样本标准差）。",
        "rating": "★★★☆☆", "stars": "★★★☆☆"
    },
    "SYD": {
        "usage": "SYD(cost, salvage, life, period)",
        "params": "cost：资产原值；salvage：残值；life：总使用年限；period：要计算折旧的期次（1~life）。",
        "example": "=SYD(60000, 6000, 5, 1) → 第1年折旧 ¥16,000\\n=SYD(60000, 6000, 5, 3) → 第3年折旧 ¥9,600",
        "notes": "使用年限总和折旧法（Sum-of-Years-Digits）计算指定期间的折旧值。前期折旧多、后期少，介于直线法和双倍余额递减法之间。适合前期利用率高的资产。",
        "rating": "★★★☆☆", "stars": "★★★☆☆"
    },
    "TRANSPOSE": {
        "usage": "TRANSPOSE(array)",
        "params": "array：要转置的数组或区域。行列互换（行变列，列变行）。",
        "example": "原始数据 3行×2列 → TRANSPOSE 后变成 2行×3列\\n=TRANSPOSE(A1:C2) → 行列互换",
        "notes": "将数组的行和列互换。Excel 365 中直接回车即可，老版本需 Ctrl+Shift+Enter 输入为数组公式。常用于数据整理、矩阵转置、二维表格转换为一维列表等。",
        "rating": "★★★★☆", "stars": "★★★★★"
    },
    "TYPE": {
        "usage": "TYPE(value)",
        "params": "value：任意值或单元格引用。返回数字代码：1=数字，2=文本，4=逻辑值，16=错误值，64=数组。",
        "example": "=TYPE(42) → 1\\n=TYPE(\"hello\") → 2\\n=TYPE(#VALUE!) → 16\\n=TYPE({1,2,3}) → 64",
        "notes": "返回值的数据类型编码。常与 CHOOSE 或 IF 配合实现不同类型的不同处理。IS 系列函数（ISNUMBER/ISTEXT 等）返回 TRUE/FALSE 更直观，但 TYPE 能一次性识别多种类型。",
        "rating": "★★★☆☆", "stars": "★★★☆☆"
    },
    "VAR": {
        "usage": "VAR.S(number1, [number2], ...) 或 VAR.P(number1, [number2], ...)",
        "params": "number1, number2, ...：样本数据。VAR.S 计算样本方差（除以 n-1），VAR.P 计算总体方差（除以 n）。",
        "example": "=VAR.S(A1:A30) → 样本方差\\n方差 = 标准差的²（VAR = STDEV²）",
        "notes": "估算基于样本的方差（衡量数据离散程度的平方）。方差 = 标准差²。VAR.S 用于样本推断（无偏），VAR.P 用于总体描述。STDEV 比 VAR 更常用（量纲一致）。",
        "rating": "★★★★☆", "stars": "★★★★★"
    },
    "VARP": {
        "usage": "VARP(number1, [number2], ...)",
        "params": "number1, number2, ...：总体数据或区域。返回总体方差（除以 n）。",
        "example": "=VARP(A1:A100) → 总体方差（已知全部数据时）\\n=VAR.S(A1:A100) → 样本方差（更常用）",
        "notes": "计算总体方差。Excel 2010+ 推荐 VAR.P 替代 VARP。方差反映数据的波动程度，值越大说明数据越分散。标准差 = √方差。",
        "rating": "★★★☆☆", "stars": "★★★☆☆"
    },
    "WORKDAY": {
        "usage": "WORKDAY(start_date, days, [holidays])",
        "params": "start_date：起始日期；days：要加/减的工作日数（正数往后推，负数往前推）；holidays（可选）：自定义假日列表。",
        "example": "从今天起10个工作日后：\\n=WORKDAY(TODAY(), 10) → 跳过周末\\n=WORKDAY(\"2024-01-15\", 5, H1:H5) → 还跳过指定节假日",
        "notes": "返回指定日期前后若干个工作日的日期。项目管理中计算任务完成日期的利器。WORKDAY.INTL 支持自定义周末（如只有周日休息）。",
        "rating": "★★★★☆", "stars": "★★★★★"
    },
    "XNPV": {
        "usage": "XNPV(rate, values, dates)",
        "params": "rate：折现率；values：现金流数组（支出为负，收入为正）；dates：对应的日期数组（必须与 values 同长）。",
        "example": "投资日期和现金流：\\n=XNPV(8%, {-10000,3000,3500,4200,4800}, {DATE(2024,1,1),DATE(2025,1,1),DATE(2026,1,1),DATE(2027,1,1),DATE(2028,1,1)})",
        "notes": "计算不规则日期现金流的净现值（NPV）。比普通 NPV 更灵活——允许每笔现金流发生在不同日期（考虑了货币的时间权重差异）。投资决策高级工具。",
        "rating": "★★★★☆", "stars": "★★★★★"
    },
    "DAY": {
        "usage": "DAY(serial_number)",
        "params": "serial_number：日期值或文本。返回 1~31 的整数，表示该月的第几天。",
        "example": "=DAY(\"2024-03-15\") → 15\\n=DAY(TODAY()) → 今天是这个月的第几天",
        "notes": "从日期中提取「日」的部分。配合 YEAR、MONTH 使用可完整拆解日期。常用于账单到期日判断、按日汇总统计、月末结算等场景。",
        "rating": "★★★★☆", "stars": "★★★★★"
    },
    "FIND": {
        "usage": "FIND(find_text, within_text, [start_num])",
        "params": "find_text：要查找的文本（区分大小写，不支持通配符）；within_text：被搜索的文本；start_num（可选）：从第几个字符开始搜索，默认1。",
        "example": "=FIND(\"@\", \"user@example.com\") → 5\\n=FIND(\"Excel\", \"I love Excel\") → 8（E在第8位）",
        "notes": "在文本中查找子串的位置（从1开始）。与 SEARCH 的区别：FIND **区分大小写** 且**不支持通配符**。未找到返回 #VALUE! 错误。常配合 LEFT/MID/RIGHT 做文本提取。",
        "rating": "★★★★☆", "stars": "★★★★★"
    },
    "INDIRECT": {
        "usage": "INDIRECT(ref_text, [a1])",
        "params": "ref_text：单元格引用的文本字符串（如 \"A1\" 或 \"R1C1\"）；a1（可选）：TRUE=A1 引用样式（默认），FALSE=R1C1 样式。",
        "example": "=INDIRECT(\"B\"&ROW()) → 动态引用当前行的B列\\n=SUM(INDIRECT(\"A1:\"&ADDRESS(MATCH(999,A:A,1),1))) → 动态求和范围",
        "notes": "将文本字符串转为实际的单元格引用。非常强大但也易出错——间接引用不会随行列插入删除而自动更新。常用于动态区域引用、跨 Sheet 引用构建等工作表自动化场景。",
        "rating": "★★★★☆", "stars": "★★★★★"
    },
    "ISREF": {
        "usage": "ISREF(value)",
        "params": "value：要检查的值。如果值是单元格引用返回 TRUE，否则 FALSE。",
        "example": "=ISREF(A1) → TRUE\\n=ISREF(\"A1\") → FALSE（文本不是引用）\\n=ISREF(INDIRECT(\"A1\")) → TRUE",
        "notes": "判断值是否为有效的单元格引用。较少单独使用，常与其他信息函数配合进行复杂的类型检查。",
        "rating": "★★★☆☆", "stars": "★★★☆☆"
    },
    "LEFT": {
        "usage": "LEFT(text, [num_chars])",
        "params": "text：源文本；num_chars（可选）：要从左侧提取的字符数，默认为1。",
        "example": "=LEFT(\"Excel函数大全\", 5) → \"Excel\"\\n=LEFT(A2, 6) → 提取身份证前6位地区码",
        "notes": "从文本左侧提取指定数量的字符。与 RIGHT（右侧）、MID（中间）组成文本三大截取函数。常用于提取区号、姓名、产品编码前缀等。",
        "rating": "★★★★★", "stars": "★★★★★"
    },
    "MID": {
        "usage": "MID(text, start_num, num_chars)",
        "params": "text：源文本；start_num：起始位置（从1开始）；num_chars：要提取的字符数。",
        "example": "=MID(\"13800138000\", 7, 4) → 提取出生年份（1980）\\n=MID(\"Excel\", 3, 2) → \"ce\"",
        "notes": "从文本中间指定位置提取字符。LEFT + RIGHT + MID = 完整的文本截取工具箱。身份证号解析、订单号拆分、日期格式化提取等场景必备。",
        "rating": "★★★★★", "stars": "★★★★★"
    },
    "MONTH": {
        "usage": "MONTH(serial_number)",
        "params": "serial_number：日期值或文本。返回 1~12 的整数，表示月份。",
        "example": "=MONTH(\"2024-07-15\") → 7\\n=MONTH(TODAY()) → 当前月份\\n=SUMIF(月份数组, MONTH(TODAY()), 销售额) → 本月销售汇总",
        "notes": "从日期中提取月份。配合 YEAR/DAY 完整拆解日期。常用于按月汇总统计、季度分析、同比环比计算等数据分析核心场景。",
        "rating": "★★★★☆", "stars": "★★★★★"
    },
    "PROPER": {
        "usage": "PROPER(text)",
        "params": "text：要转换的文本。将每个单词的首字母大写，其余字母小写。",
        "example": "=PROPER(\"hello WORLD\") → \"Hello World\"\\n=PROPER(\"john smith\") → \"John Smith\"",
        "notes": "将文本转换为每个单词首字母大写的格式（Title Case）。常用于规范化人名、地名等英文文本。中文无效（中文没有大小写概念）。UPPER/LOWER 分别为全部大写和小写。",
        "rating": "★★★☆☆", "stars": "★★★☆☆"
    },
    "SUBSTITUTE": {
        "usage": "SUBSTITUTE(text, old_text, new_text, [instance_num])",
        "params": "text：原文本；old_text：要被替换的旧文本；new_text：替换成的新文本；instance_num（可选）：替换第几次出现的（省略则全部替换）。",
        "example": "=SUBSTITUTE(\"2024-03-28\",\"-\",\"/\") → \"2024/03/28\"\\n=SUBSTITUTE(\"a b c d\",\" \",\"\") → \"abcd\"（删除所有空格）",
        "notes": "按内容查找并替换文本。与 REPLACE 的区别：REPLACE 按**位置**替换，SUBSTITUTE 按**内容**替换。instance_num 参数可以只替换第 N 次出现的文本（独特优势）。",
        "rating": "★★★★☆", "stars": "★★★★★"
    },
    "TRIM": {
        "usage": "TRIM(text)",
        "params": "text：要清理的文本。删除首尾多余空格，并将中间连续空格压缩为一个。",
        "example": "=TRIM(\"  Hello   World  \") → \"Hello World\"\\n=IF(TRIM(A1)=\"\",\"空\",A1) → 清理后判空",
        "notes": "清除文本中多余的空格。数据清洗必备函数——从外部导入的数据常有各种空格问题。注意：只处理 ASCII 空格（32号字符），不处理不间断空格、制表符等。",
        "rating": "★★★★☆", "stars": "★★★★★"
    },
    "UPPER": {
        "usage": "UPPER(text)",
        "params": "text：要转换的文本。将所有字母转为大写。",
        "example": "=UPPER(\"excel\") → \"EXCEL\"\\n=UPPER(A1) → 将A1单元格内容转为大写",
        "notes": "将文本全部转为大写字母。与 LOWER（转小写）、PROPER（首字母大写）组成大小写三件套。常用于数据标准化、统一格式比对等场景。对中文无效。",
        "rating": "★★★★☆", "stars": "★★★★★"
    },
}

# ── 3. 应用更新 ──────────────────────────────────────────
updated_count = 0
for f in funcs:
    name = f['name']
    if name in DETAIL_DATA and not f.get('hasDetail'):
        data = DETAIL_DATA[name]
        f['usage'] = data.get('usage', '')
        f['params'] = data.get('params', '')
        f['example'] = data.get('example', '')
        f['notes'] = data.get('notes', '')
        f['rating'] = data.get('rating', '')
        f['stars'] = data.get('stars', '')
        f['hasDetail'] = True
        updated_count += 1

print(f"\n共更新 {updated_count} 个函数的详情")

# ── 4. 写回文件 ──────────────────────────────────────────
new_func_str = json.dumps(funcs, ensure_ascii=False)
old_func_str = content[start:end]
if old_func_str in content:
    new_content = content.replace(old_func_str, new_func_str, 1)
    with open(html_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print(f"✅ 已写入文件")
    print(f"  文件新大小: {len(new_content)} 字符")
else:
    print(f"❌ 未找到旧的 FUNCTIONS 字符串，无法替换")

# ── 5. 验证 JSON 合法性 ──────────────────────────────────
with open(html_path, 'r', encoding='utf-8') as f:
    verify_content = f.read()
idx_v = verify_content.find('const FUNCTIONS = [')
start_v = idx_v + len('const FUNCTIONS = ')
depth = 0
i = start_v
while i < len(verify_content):
    if verify_content[i] == '[':
        depth += 1
    elif verify_content[i] == ']':
        depth -= 1
        if depth == 0:
            end_v = i + 1
            break
    i += 1
try:
    v_funcs = json.loads(verify_content[start_v:end_v])
    has_d = sum(1 for f in v_funcs if f.get('hasDetail'))
    print(f"\n✅ 验证通过！FUNCTIONS JSON 合法，共 {len(v_funcs)} 个函数，{has_d} 个有详情")
except Exception as e:
    print(f"\n❌ 验证失败: {e}")
