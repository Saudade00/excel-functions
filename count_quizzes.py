import re

with open(r'A:\workbuddy代码项目\函数工具\Excel函数大全.html', 'r', encoding='utf-8') as f:
    content = f.read()

start = content.find('const QUIZ_DATA = {')
if start == -1:
    print("找不到 QUIZ_DATA")
    exit()

# 用括号计数找到结束位置
i = start + len('const QUIZ_DATA = ')
depth = 0
end = None
in_string = False
escape_next = False
for idx in range(i, len(content)):
    ch = content[idx]
    if escape_next:
        escape_next = False
        continue
    if ch == '\\' and in_string:
        escape_next = True
        continue
    if ch in ('"', "'") and not in_string:
        in_string = ch
        continue
    if in_string and ch == in_string:
        in_string = False
        continue
    if not in_string:
        if ch == '{':
            depth += 1
        elif ch == '}':
            depth -= 1
            if depth == 0:
                end = idx + 1
                break

if not end:
    print("找不到结束位置")
    exit()

qstr = content[start:end]
print(f"QUIZ_DATA 字符串长度: {len(qstr)}")

# 统计函数名数量："FUNC": [
keys = re.findall(r'"(\w+)"\s*:\s*\[', qstr)
print(f"函数数: {len(keys)}")

# 统计题目数：每个 {...} 里含 type: 的算一道
# 更可靠：统计所有 { type: 的出现
quiz_items = re.findall(r'\{\s*type\s*:\s*"(?:choice|fill)"', qstr)
print(f"总题目数: {len(quiz_items)}")
print(f"\n前20个函数: {keys[:20]}")
print(f"... 共 {len(keys)} 个函数")
