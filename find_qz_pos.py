import re

with open(r'A:\workbuddy代码项目\函数工具\Excel函数大全.html', 'r', encoding='utf-8') as f:
    content = f.read()

# 找到第一个 QUIZ_DATA 的结束位置（};\n// ── 答题记录）
# 第一个 QUIZ_DATA 正确结束于 };\n// ── 答题记录
end1 = content.find('};\n// ── 答题记录', 140000)
print(f"第一个 QUIZ_DATA 结束位置: {end1}")
print(f"附近内容: {repr(content[end1-20:end1+50])}")

# 找到第二个 QUIZ_DATA 的开始位置
start2 = content.find('const QUIZ_DATA = {', 170000)
print(f"\n第二个 QUIZ_DATA 开始位置: {start2}")
print(f"附近内容: {repr(content[start2:start2+80])}")

# 找到第二个 QUIZ_DATA 的结束位置（最后一个 }] 或 }]\nlet）
# 第二个的结构是：const QUIZ_DATA = { ... }\nlet quizProgress
# 找第二个的结束
end2_start = start2 + len('const QUIZ_DATA = ')
depth = 0
in_str = False
escape_next = False
for idx in range(end2_start, len(content)):
    ch = content[idx]
    if escape_next:
        escape_next = False
        continue
    if ch == '\\' and in_str:
        escape_next = True
        continue
    if ch in ('"', "'") and not in_str:
        in_str = ch
        continue
    if in_str and ch == in_str:
        in_str = False
        continue
    if not in_str:
        if ch == '{':
            depth += 1
        elif ch == '}':
            depth -= 1
            if depth == 0:
                end2 = idx + 1
                print(f"\n第二个 QUIZ_DATA 结束位置: {end2}")
                print(f"附近内容: {repr(content[end2-10:end2+30])}")
                break
else:
    print("未找到第二个 QUIZ_DATA 的结束位置")
    end2 = -1
