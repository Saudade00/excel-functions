import re

with open('Excel函数大全.html', 'r', encoding='utf-8') as f:
    html = f.read()

m = re.search(r'<script>([\s\S]*?)</script>', html)
if not m:
    print('未找到 script')
    exit()

script = m.group(1)

pos = script.find('const QUIZ_DATA')
brace_start = script.find('{', pos)

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
    print('未找到对象结束')
    exit()

quiz_obj = script[brace_start+1:brace_end]

func_pattern = r'"([A-Z][A-Z0-9_]*)"\s*:'
funcs = re.findall(func_pattern, quiz_obj)
func_count = len(set(funcs))

quiz_pattern = r'\{\s*type\s*:'
quiz_count = len(re.findall(quiz_pattern, quiz_obj))

print('✅ 最终统计：')
print(f'   函数数: {func_count}')
print(f'   题目数: {quiz_count}')
print(f'   平均每个函数: {quiz_count/func_count:.1f} 题')

# 列出所有函数
unique_funcs = sorted(list(set(funcs)))
print(f'\n所有有练习题的函数（按字母排序）：')
for i, f in enumerate(unique_funcs):
    print(f'   {i+1}. {f}')
