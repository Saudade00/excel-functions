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
    
    if ch in ('\'', '"', '`') and not in_string:
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

quiz_obj = script[brace_start+1:brace_end].strip()

# 统计函数数量（通过统计键名）
# 匹配 "FUNC_NAME": 或 FUNC_NAME: 的模式
func_pattern = r'"([A-Z][A-Z0-9_]*)"\s*:'
funcs = re.findall(func_pattern, quiz_obj)
func_count = len(set(funcs))

# 统计题目数量（通过统计 {type: 的数量）
quiz_pattern = r'\{\s*type\s*:'
quiz_count = len(re.findall(quiz_pattern, quiz_obj))

print(f'函数数: {func_count}')
print(f'题目数: {quiz_count}')

unique_funcs = sorted(list(set(funcs)))
print('函数列表（前10个）:', ', '.join(unique_funcs[:10]))
print('函数列表（后10个）:', ', '.join(unique_funcs[-10:]))
print('总函数数:', len(unique_funcs))
