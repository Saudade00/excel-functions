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

quiz_obj = script[brace_start+1:brace_end].strip()

# 提取所有函数名
func_pattern = r'"([A-Z][A-Z0-9_]*)"\s*:'
funcs = re.findall(func_pattern, quiz_obj)
unique_funcs = sorted(list(set(funcs)))

print('当前有练习题的函数（按字母排序）:')
for i, f in enumerate(unique_funcs):
    print(f'{i+1}. {f}')

print(f'\n总计: {len(unique_funcs)} 个函数')
