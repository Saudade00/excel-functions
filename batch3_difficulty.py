# -*- coding: utf-8 -*-
"""
第三批：扩展 DIFFICULTY 难度标签
从 37 个扩展到 ~100 个
"""

with open('A:/workbuddy代码项目/函数工具/Excel函数大全.html', 'r', encoding='utf-8') as f:
    content = f.read()

old_difficulty = '''const DIFFICULTY = {
  // 入门 easy
  "IF":"easy","SUM":"easy","MAX":"easy","MIN":"easy","AVERAGE":"easy","LEN":"easy","LEFT":"easy","RIGHT":"easy",
  "TODAY":"easy","NOW":"easy","ABS":"easy","ROUND":"easy","INT":"easy","MOD":"easy",
  // 进阶 medium
  "AND":"medium","OR":"medium","NOT":"medium","VLOOKUP":"medium","HLOOKUP":"medium","COUNTIF":"medium",
  "SUMIF":"medium","TEXT":"medium","MID":"medium","FIND":"medium","SUBSTITUTE":"medium","TRIM":"medium",
  "DATE":"medium","YEAR":"medium","MONTH":"medium","DAY":"medium","RANK":"medium","WEEKDAY":"medium",
  "CEILING":"medium","FLOOR":"medium",
  // 高级 hard
  "IFS":"hard","INDEX":"hard","MATCH":"hard","OFFSET":"hard","INDIRECT":"hard","COUNTIFS":"hard",
  "SUMIFS":"hard","SUMPRODUCT":"hard","DATEDIF":"hard"
}'''

new_difficulty = '''const DIFFICULTY = {
  // ===== 入门级 easy (40个) =====
  // 基础运算
  "SUM":"easy","AVERAGE":"easy","MAX":"easy","MIN":"easy","COUNT":"easy","ABS":"easy",
  "ROUND":"easy","INT":"easy","MOD":"easy","PRODUCT":"easy","SQRT":"easy",
  // 基础逻辑
  "IF":"easy","AND":"easy","OR":"easy","NOT":"easy",
  // 基础文本
  "LEN":"easy","LEFT":"easy","RIGHT":"easy","TRIM":"easy","CONCAT":"easy",
  "UPPER":"easy","LOWER":"easy","CHAR":"easy","CODE":"easy",
  // 基础日期
  "TODAY":"easy","NOW":"easy","YEAR":"easy","MONTH":"easy","DAY":"easy","DATE":"easy",
  // 基础信息/引用
  "ROW":"easy","COLUMN":"easy","ISNUMBER":"easy","ISTEXT":"easy","ISBLANK":"easy",
  "COUNTA":"easy","COUNTBLANK":"easy","T":"easy","N":"easy","AREAS":"easy",

  // ===== 进阶级 medium (35个) =====
  // 统计进阶
  "COUNTIF":"medium","RANK":"medium","LARGE":"medium","SMALL":"medium","MEDIAN":"medium","MODE":"medium",
  // 数学进阶
  "CEILING":"medium","FLOOR":"medium","ROUNDUP":"medium","ROUNDDOWN":"medium",
  "SUMIF":"medium","SUBTOTAL":"medium",
  // 文本进阶
  "MID":"medium","FIND":"medium","SEARCH":"medium","REPLACE":"medium","SUBSTITUTE":"medium",
  "CONCATENATE":"medium","TEXTJOIN":"medium","REPT":"medium","TEXT":"medium",
  "CLEAN":"medium","EXACT":"medium","VALUE":"medium","FIXED":"medium",
  // 日期进阶
  "WEEKDAY":"medium","DATEDIF":"medium","EDATE":"medium","EOMONTH":"medium",
  "TIME":"medium","HOUR":"medium","MINUTE":"medium","SECOND":"medium",
  // 查找与逻辑进阶
  "VLOOKUP":"medium","HLOOKUP":"medium","CHOOSE":"medium",
  IFERROR:"medium","ISERROR":"medium","TRANSPOSE":"medium",

  // ===== 高级 hard (25个) =====
  // 多条件统计（参数顺序敏感）
  "COUNTIFS":"hard","SUMIFS":"hard","AVERAGEIF":"hard","AVERAGEIFS":"hard",
  // 动态引用（易出错）
  "OFFSET":"hard","INDIRECT":"hard","INDEX":"hard","MATCH":"hard",
  // 高级逻辑/数组
  "IFS":"hard","SUMPRODUCT":"hard","AGGREGATE":"hard",
  // 财务函数（参数多且复杂）
  "PMT":"hard","PV":"hard","FV":"hard","NPV":"hard","IRR":"hard",
  // 其他高级
  "LOOKUP":"hard","GETPIVOTDATA":"hard","FORMULATEXT":"hard"
}'''

if old_difficulty in content:
    content = content.replace(old_difficulty, new_difficulty)
    with open('A:/workbuddy代码项目/函数工具/Excel函数大全.html', 'w', encoding='utf-8') as f:
        f.write(content)
    
    # 统计
    import re
    easy_count = len(re.findall(r'"\w+":"easy"', new_difficulty))
    medium_count = len(re.findall(r'"\w+":"medium"', new_difficulty))
    hard_count = len(re.findall(r'"\w+":"hard"', new_difficulty))
    print(f"SUCCESS! Difficulties updated: easy={easy_count}, medium={medium_count}, hard={hard_count}, total={easy_count+medium_count+hard_count}")
else:
    print("ERROR: old_difficulty pattern not found in file!")
    # debug: show what we have
    import re
    m = re.search(r'const DIFFICULTY\s*=\s*\{', content)
    if m:
        start = m.start()
        brace_count = 0
        end = start
        for i, ch in enumerate(content[start:]):
            if ch == '{': brace_count += 1
            elif ch == '}':
                brace_count -= 1
                if brace_count == 0:
                    end = start + i + 1
                    break
        print(f"Current DIFFICULTY ({end-start} bytes):")
        print(content[start:end])
