import re

with open('Excel函数大全.html', 'r', encoding='utf-8') as f:
    html = f.read()

# 提取 script 内容
m = re.search(r'<script>([\s\S]*?)</script>', html)
if not m:
    print('未找到 script 标签')
    exit()

script = m.group(1)

# 找到 QUIZ_DATA 对象的起始位置
pos = script.find('const QUIZ_DATA')
if pos == -1:
    print('未找到 QUIZ_DATA')
    exit()

# 找到第一个 { 的位置
brace_start = script.find('{', pos)
if brace_start == -1:
    print('未找到 QUIZ_DATA 对象的开头')
    exit()

# 括号匹配，找到对象的结束位置
depth = 0
in_string = False
escape = False
quote_char = None
i = brace_start

while i < len(script):
    ch = script[i]
    
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
                brace_end = i
                break
    
    i += 1
else:
    print('未找到 QUIZ_DATA 对象的结束位置')
    exit()

quiz_obj_raw = script[brace_start:brace_end+1]

# 找到 SUMPRODUCT 条目的位置
# 在 QUIZ_DATA 对象中查找 "SUMPRODUCT":
pattern = r'"SUMPRODUCT"\s*:'
match = re.search(pattern, quiz_obj_raw)
if match:
    # 找到 SUMPRODUCT 条目的起始位置（相对于 script）
    sumproduct_start = brace_start + match.start()
    
    # 找到 SUMPRODUCT 条目的结束位置（下一个函数条目的开始或对象结束）
    # 先找到 SUMPRODUCT 数组的起始 [
    bracket_start = script.find('[', sumproduct_start)
    if bracket_start == -1:
        print('未找到 SUMPRODUCT 数组的开始')
        exit()
    
    # 括号匹配，找到数组的结束位置
    depth = 0
    j = bracket_start
    while j < len(script):
        ch = script[j]
        
        if ch == '\\' and in_string:
            j += 1
            continue
        
        if ch in ("'", '"', '`') and not in_string:
            in_string = True
            quote_char = ch
        elif ch == quote_char and in_string:
            in_string = False
        elif not in_string:
            if ch == '[':
                depth += 1
            elif ch == ']':
                depth -= 1
                if depth == 0:
                    bracket_end = j
                    break
        
        j += 1
    else:
        print('未找到 SUMPRODUCT 数组的结束')
        exit()
    
    # SUMPRODUCT 条目结束的位置
    # 查找下一个函数条目或对象结束
    # 简单方法：查找 ',\n  "FUNCTION_NAME":' 或闭合的 '}'
    rest = script[bracket_end+1:]
    
    # 查找下一个键值对
    next_key = re.search(r',\s*\n\s*"([A-Z][A-Z0-9_]*)"\s*:', rest)
    if next_key:
        insert_pos = bracket_end + 1 + next_key.start()
        print(f'SUMPRODUCT 条目结束于位置 {bracket_end}')
        print(f'下一个函数条目开始于位置 {bracket_end + 1 + next_key.start()}')
        print(f'建议插入位置: {bracket_end + 1 + next_key.start()}')
        print(f'上下文: ...{script[bracket_end-20:bracket_end+1]}>>>插入点<<<{script[bracket_end+1:bracket_end+21]}...')
    else:
        print('未找到下一个函数条目')
        print(f'SUMPRODUCT 条目结束于位置 {bracket_end}')
        print(f'后续内容: {rest[:200]}')
else:
    print('未找到 SUMPRODUCT 条目')
