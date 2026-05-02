"""Task #12: 扩展 QUIZ_DATA 练习题 - 简洁版本"""
import re, json

html_path = r'A:\workbuddy代码项目\函数工具\Excel函数大全.html'
with open(html_path, 'r', encoding='utf-8') as f:
    content = f.read()

idx_q = content.find('const QUIZ_DATA = {')
quiz_start = idx_q + len('const QUIZ_DATA = {')
existing_keys = set(re.findall(r'"(\w+)"\s*:\s*\[', content[idx_q:idx_q+30000]))
print(f"已有练习题: {len(existing_keys)} 个")

# ── 新增数据（纯字符串格式避免Python语法陷阱）────────
NEW_ENTRIES = []

def q(fn, qt, qn, opts, ans, exp):
    if fn in existing_keys:
        return
    if qt == "choice":
        opt_str = json.dumps(opts, ensure_ascii=False)
        NEW_ENTRIES.append(f'  "{fn}": [\n    {{ type:"choice", question:"{qn}", options:{opt_str}, answer:{ans}, explanation:"{exp}" }}\n  ]')
    else:
        NEW_ENTRIES.append(f'  "{fn}": [\n    {{ type:"fill", question:"{qn}", answer:"{ans}", explanation:"{exp}" }}\n  ]')

# ===== 统计函数 =====
q("COUNT",   "choice", "=COUNT(A1:A5) 其中 A1:A5=[1,\"a\",TRUE,\"\",3] 结果？", ["2","3","4","5"], 0, "COUNT只统计数值型数据。1和3是数值共2个。文本/逻辑值/空单元格不计入。")
q("COUNTA",  "choice", "=COUNTA(1,\"a\",TRUE) 结果？", ["3","2","1","0"], 0, "COUNTA统计所有非空值。数字/文本/逻辑值都算。")
q("COUNTBLANK","choice",'A1:A5=[1,"","",3,""] COUNTBLANK结果？', ["3","2","4","1"], 0, "统计空白单元格。空字符串也算空白。")
q("ISBLANK", "choice", "=ISBLANK(A1) A1为空时返回？", ["TRUE","FALSE","#N/A","0"], 0, "空→TRUE 有内容(含\"\")→FALSE。")
q("ISNUMBER","choice", "哪个ISNUMBER返回TRUE？", ['ISNUMBER("42")',"ISNUMBER(3.14)","ISNUMBER(TRUE)","ISERROR(42)"], 1, "只有真正数值返回TRUE。日期也是数值（序列号）。")
q("ISTEXT",  "choice", '=ISTEXT("123") vs ISTEXT(123)？', ["TRUE/FALSE","FALSE/TRUE","都TRUE","都FALSE"], 0, "ISTEXT对文本返回TRUE。"123"是文本123是数字。")
q("ISERROR",  "choice", "哪个ISERROR返回TRUE？", ["ISERROR(#VALUE!)","ISERROR(123)",'ISERROR("ok")','ISERROR(TRUE)'], 0, "对任何错误值返回TRUE(含#N/A)。新版推荐IFERROR替代。")
q("SEARCH",  "choice", '=SEARCH("@","user@example.com") 结果？', ["5","4","6","错误"], 0, "返回@的位置(从1起)。与FIND区别：不区分大小写+支持通配符。")
q("REPLACE", "choice", '=REPLACE("20240328",5,2,"05") 结果？', ["20240528","20240305","20528","错误"], 0, "从第5位替换2个字符为05。按位置替换适合固定格式修改。")
q("ROUND",   "choice", "=ROUND(2.675,2) 结果？（银行家舍入法）", ["2.67","2.68","3.00","2.7"], 0, "四舍六入五成双：5前偶则舍。财务必用ROUND避免浮点误差。")
q("ROUNDDOWN","choice","=ROUNDDOWN(-3.99,0) 结果？", ["-3","-4","0","-3.9"], 0, "向零截断。-3.99→-3。INT(-3.99)→-4（向下取整）两者不同！")
q("ROUNDUP", "choice", "=ROUNDUP(3.01,0) 结果？", ["4","3","3.01","错误"], 0, "向远离零方向只入不舍。保守估算常用。")
q("LARGE",   "choice", "{85,92,78,95,88} LARGE(数组,2)？", ["92","88","95","78"], 0, "第k大值。排序后第2大=92。k=1等价MAX。")
q("SMALL",   "choice", "{50,30,80,45,60} SMALL(数组,3)？", ["50","45","30","60"], 0, "第k小值。与LARGE相反。")
q("MEDIAN",  "choice", "{1,3,5,7,9} 和{1,3,5,7,9,11}中位数？", ["5和6","5和5","3和7","5和7"], 0, "奇数取中间值；偶数取中间两数平均。不受异常值影响。")
q("SQRT",    "choice", "=SQRT(-4) 结果？", ["#NUM!错误","2i","-2","#VALUE!"], 0, "不接受负数。可用ABS先取绝对值或IF判断。")
q("POWER",   "choice", "=POWER(27,1/3) 结果？", ["3","9","27","81"], 0, "27的1/3次幂=立方根27=3。分数指数=开方运算。")
q("STDEV.S", "choice", "STDEV.S与STDEV.P区别？", ["S除以n-1样本P除以n总体","S更精确","P已弃用","相同"], 0, "S=样本(n-1无偏) P=总体(n)。多数情况用S推断总体。")
q("VAR.S",   "choice", "方差与标准差关系？", ["方差=标准差平方","标准差=方方平方","无关","方差=标准差x2"], 0, "VAR=STDEV的平方。标准差更常用量纲一致。")
q("PERCENTILE.INC","choice","PERCENTILE.INC(数据集,0.9)表示？", ["超90%数据的值","前90%均值","排名第9","最大值90%"], 0, "第k百分位：k%数据不超过此值。0.9=前10%门槛线。")
q("PERCENTRANK.INC","choice","PERCENTRANK=0.8表示？", ["超80%的人","第8名","分数80%","80%概率达标"], 0, "比80%数据都大=处于第80百分位。成绩/薪资对标常用。")
q("FREQUENCY","choice", "bins={60,70,80,90} FREQUENCY返回几个元素？", ["5","4","6","取决于数据"], 0, "n个bins返回n+1个元素。需Ctrl+Shift+Enter数组输入。")
q("EDATE",   "choice", '=EDATE("2024-02-29",12) 结果？', ["2025-02-28","2025-03-01","错误","2025-02-29"], 0, "2025非闰年2月仅28天。EDATE自动调整为月末最后一天。实用特性。")
q("NETWORKDAYS","choice",'NETWORKDAYS("2024-01-01","2024-01-07")？', ["5","7","6","3"], 0, "排除周末。1~7日间周末6/7日，工作日共5天。不含节假日(除非指定)。")
q("WORKDAY", "choice", '=WORKDAY("2024-03-15",5)？（周末不变）', ["2024-03-22","2024-03-20","2024-03-21","2024-03-23"], 0, "3/15周五推5工作日跳过16/17周末→22周五。项目管理必备函数。")
q("PMT",     "choice", "贷款100万 年利率5% 期限30年 月供约？", ["5368元","2777元","8333元","4167元"], 0, "=PMT(5%/12,360,1000000)。rate/nper单位一致。负数=支出。房贷计算必备。")
q("PV",      "choice", "每月2000元 年利率4% 存20年现值约？", ["330000元","480000元","240x2000","600000元"], 0, "=PV(4%/12,240,-2000)。现值=未来现金流折现到现在等价金额。投资评估核心。")
q("FV",      "choice", "每月1000元 年利率6% 存5年未来总值？", ["69770元","60000元","72000元","55000元"], 0, "=FV(6%/12,60,-1000)。复利效应让最终额比本金多近1万！")
q("IRR",     "choice", "IRR=15% 资金成本10% 应该？", ["接受方案","拒绝方案","无法判断","需更多信息"], 0, "IRR>资金成本→收益>成本→接受。IRR使NPV=0的折现率越高越好。")
q("NPV",     "choice", "NPV>0说明什么？", ["项目盈利可行","项目亏损不可行","收支平衡","需更多信息"], 0, "NPV>0未来现金流折现>初期投入。值得投资。<0则亏损。")
q("IPMT",    "choice", "等额本息 第1月vs最后1月利息？", ["第1月更高","最后1月更高","相等","不确定"], 0, "前期欠款多利息多后期少。IPMT计算各期利息额。PPMT计算本金。")
q("SLN",     "choice", "原值10万 残值1万 寿命5年 年折旧？", ["18000元","20000元","10000元","25000元"], 0, "=SLN(100000,10000,5)=(原值-残值)/年限。直线法每年相同。办公设备常用。")
q("DDB",     "choice", "DDB折旧法特点？", ["前期多后期少","每年相同","后期多前期少","按使用量"], 0, "双倍余额递减=加速折旧。前期快速回收价值。技术更新快设备适用(电脑汽车)。")
q("TRANSPOSE","choice", "3行x2列经TRANSPOSE后变？", ["2行x3列","不变","6行x1列","1列x6行"], 0, "行列互换mxn→nxm。Excel365直接回车。老版Ctrl+Shift+Enter。")
q("ROW",     "choice", "=ROW()在第10行输入结果？", ["10","1","0","取决于所在列"], 0, "ROW()返回当前行号。ROW(A1)始终=1(固定引用)。自动编号基础函数。")
q("COLUMN",  "choice", "=COLUMN()在C列输入结果？", ["3","C","0","1"], 0, "COLUMN()返回当前列号。A=1 B=2 C=3。COLUMN(D5)=4始终。")
q("MOD",     "choice", "=MOD(ROW(),2)=0 常见用途？", ["隔行着色斑马纹","余数计算","奇偶判断","循环计数"], 0, "偶数行→0奇数行→1。配合条件格式实现隔行变色效果。经典应用！")
q("CEILING.FLOOR","choice","价格向上取整到最近0.5倍(12.34->12.5)？", ["CEILING","FLOOR","ROUND","INT"], 0, "CEILING向上舍入到基数倍数。FLOOR向下。ROUND四舍五入。价格取整常用。")
q("ABS",     "choice", "两组数据绝对误差之和公式？", ["=SUM(ABS(A1:A10-B1:B10))","=ABS(SUM(...))","=SUM(...)","=ABS(SUM()-SUM())"], 0, "ABS包裹每行差值再求和。反映每行实际误差幅度。MAE指标。")
q("MAX.MIN", "choice", "确保A1不超过上限100？", ["=MIN(100,A1)","=MAX(100,A1)","=IF(A1>100,100,A1)","=LIMIT(A1,0,100)"], 0, "MIN限制上限MAX限制下限。MIN+MAX组合实现范围钳制。数据清洗常用技巧。")
q("IFERROR", "choice", "哪个等价IFERROR(VLOOKUP,\"未找到\")？", ["IF(ISERROR(V..),\"未找到\",V..)","IF(V..=\"#N/A\"...)","IFNA(V..,\"未发现\")","不等价"], 0, "IFERROR是IF(ISERROR())简化版。IFNA只捕获#N/A。推荐优先IFERROR。")
q("UPPER.LOWER.PROPER","choice",'"JOHN DOE"转"John Doe"？', ["PROPER","LOWER","UPPER","TRIM"], 0, "PROPER每个单词首字母大写。UPPER全大写LOWER全小写。英文文本处理三件套。")
q("CHAR.CODE","choice", "=CHAR(65)&CHAR(97) 结果？", ["Aa","65a","A97","错误"], 0, "CHAR ASCII码→字符：65=A 97=a。CODE反向。CHAR(10)插入换行。")
q("TYPE.INFO","choice", "TYPE(#VALUE!) 返回？", ["16=错误值","1=数字","2=文本","64=数组"], 0, "TYPE编码：1=数字 2=文本 4=逻辑 16=错误 64=数组。IS系列更直观但TYPE可一次识别多种类型。")
q("CONCATENATE.CONCAT","choice",'CONCATENATE("Hello"," ","World")？', ["Hello World","HelloWorld","'Hello World'","错误"], 0, "拼接多个文本。需手动加空格参。Excel2016+新增CONCAT支持区域引用。TEXTJOIN更强大(可加分隔符)。")
q("TEXTJOIN","choice", '=TEXTJOIN(",",TRUE,"A","B","","C")？', ["A,B,C","A,B,,C","ABC","错误"], 0, "第二参TRUE跳过空字符串。无连续逗号。比CONCATENATE灵活很多！")
q("VALUE",   "choice", 'VALUE("\u00a51,234.56") 结果？', ["1234.56","#VALUE!","\u00a51,234.56","1.23456"], 0, "将文本数字转数值。可处理货币符号千分位。清理外部导入数据必备。")
q("CHOOSE",  "choice", '=CHOOSE(2,"优秀","良好","及格")？', ["良好","优秀","及格","错误"], 0, "返回第index个参数值。简易版SWITCH/IFS。少量选项场景首选。INDEX/MATCH替代方案。")
q("SUBTOTAL","choice", "SUBTOTAL(109,B2:B20) 中109代表？", ["排除隐藏行的SUM","包含隐藏行的SUM","AVERAGE","COUNT"], 0, "3位数101~111排除隐藏行。筛选后自动只算可见单元格。数据透视表也用它。超级实用！")
q("AGGREGATE","choice", "AGGREGATE比SUBTOTAL主要优势？", ["可忽略错误值和嵌套SUBTOTAL","更快","支持更多函数","语法简单"], 0, "AGGREGATE可设option忽略错误值/隐藏行/SUBTOTAL嵌套。如AGGREGATE(14,6,range)算LARGE同时忽略错误值。超级聚合函数！")

# ===== 有两道题的函数额外添加填空题 =====
extra_fills = [
    ("COUNT",    "统计B列数字个数：\n=_____(B1:B100)", "COUNT"),
    ("COUNTA",   "检查是否全部填写：\n=IF(_____(A1:A20)=20,\"完整\",\"有缺失\")", "COUNTA"),
    ("ISNUMBER","若为数字才计算：\n=IF(ISNUMBER(C2),C2*1.1,_____)", "0"),
    ("SEARCH",  "提取邮箱用户名：\n=LEFT(A1,SEARCH(\"@\",A1)-_____)", "1"),
    ("REPLACE", "手机号脱敏中间5位：\n=REPLACE(A1,4,5,_____)", '"*****"'),
    ("ROUND",   "四舍五入到整数：\n=ROUND(_____,0)", "A1"),
    ("SQRT",    "安全求平方根：\n=SQRT(_____(A1))", "ABS"),
    ("POWER",   "求2的10次幂：\n=POWER(2,_____)", "10"),
    ("MEDIAN",  "奇数个元素取中间值；偶数个取_____两数的平均", "中间"),
    ("EDATE",   "签订日3个月后：\n=EDATE(A1,_____)", "3"),
    ("PMT",     "贷款50万利率4.9%240期：\n=PMT(_____,240,500000)", "4.9%/12"),
    ("FV",      "定投500收益率8%投10年：\n=FV(_____,120,-500)", "8%/12"),
    ("ROW",     "自动编号（第2行开始为1）：\n=ROW()-_____", "1"),
    ("ABS",     "两组数据绝对误差：\n=SUM(ABS(A1:A10-B1:B10)) 需_____输入", "数组公式/Ctrl+Shift+Enter"),
    ("IFERROR", "安全查找出错显示未找到：\n=_____(VLOOKUP(G2,A:D,4,FALSE),\"未找到\")", "IFERROR"),
    ("CHAR",    "数字65转字母：\n=_____(65)", "CHAR"),
]

for fn, qn, ans in extra_fills:
    if fn not in existing_keys:
        NEW_ENTRIES.append(f'  "{fn}": [\n    {{ type:"fill", question:"{qn}", answer:"{ans}", explanation:"见选择题解析。" }}\n  ]')

print(f"\n计划新增: {len(NEW_ENTRIES)} 个函数条目")

# ── 插入到 HTML ────────────────────────────────────────
anchor_match = re.search(r'\]\s*\}\s*;', content[quiz_start:])
if not anchor_match:
    print("无法定位QUIZ_DATA结束位置"); exit(1)
anchor_pos = quiz_start + anchor_match.start()
insert_pos = content.rfind(']', quiz_start, anchor_pos) + 1

insert_str = ',\n' + ',\n'.join(NEW_ENTRIES)
new_content = content[:insert_pos] + insert_str + content[insert_pos:]
with open(html_path, 'w', encoding='utf-8') as f:
    f.write(new_content)

total_now = len(existing_keys) + len([e for e in NEW_ENTRIES if e.startswith('  "')])
print(f"\nQUIZ_DATA 更新完成!")
print(f"  总覆盖约: {total_now}+ 个函数 (原有{len(existing_keys)} + 新增)")
print(f"  文件大小: {len(new_content)} 字符")
