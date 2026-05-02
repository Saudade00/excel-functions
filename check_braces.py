content = open(r'A:\workbuddy代码项目\函数工具\Excel函数大全.html', 'r', encoding='utf-8').read()
start = content.find('<script>')
end = content.find('</script>', start)
js = content[start:end+9]

qstart = js.find('const QUIZ_DATA')
depth = 0
in_str = None
escape = False
for i, ch in enumerate(js[qstart:], qstart):
    if escape:
        escape = False
        continue
    if ch == '\\' and in_str:
        escape = True
        continue
    if ch in ('"', "'") and not in_str:
        in_str = ch
        continue
    if in_str and ch == in_str:
        in_str = None
        continue
    if not in_str:
        if ch == '{':
            depth += 1
        elif ch == '}':
            depth -= 1
            if depth == 0 and i > qstart + 10:
                print(f"QUIZ_DATA 似乎在位置 {i} 结束，字符: {repr(js[i])}")
                print(f"上下文: {repr(js[max(0,i-60):i+60])}")
                break
        elif ch == '[':
            depth += 1
        elif ch == ']':
            depth -= 1

print(f"循环结束，当前 depth={depth}")
# 找到实际问题：扫描整个 QUIZ_DATA 找孤立的 ] 或 }
# 改用更简单的方法：检查 QUIZ_DATA 字符串本身的括号
print("检查 QUIZ_DATA 括号匹配...")
