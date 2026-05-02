import re

with open(r'A:\workbuddy代码项目\函数工具\Excel函数大全.html', 'r', encoding='utf-8') as f:
    content = f.read()

# 找第一个 QUIZ_DATA 的结束位置：即 };\n// ── 答题记录
# 注意：第一个 QUIZ_DATA 原来以 };\n// ── 初始化 header 统计  结尾
# 但我之前把结尾改成了 };\nlet quizProgress
# 让我先找所有 QUIZ_DATA 出现的位置

positions = []
start = 0
while True:
    pos = content.find('const QUIZ_DATA', start)
    if pos == -1:
        break
    positions.append(pos)
    start = pos + 1

print(f"找到 {len(positions)} 个 'const QUIZ_DATA' 出现位置：")
for i, p in enumerate(positions):
    print(f"  [{i}] 位置 {p}: {repr(content[p:p+50])}")

# 用括号匹配找到每个 QUIZ_DATA 对应的结束 { 位置
def find_matching_brace(text, start):
    """从 start 开始（应该是 const QUIZ_DATA = { 的 { 位置），找到匹配的 }"""
    # 找到 { 的位置
    brace_pos = text.find('{', start)
    if brace_pos == -1:
        return -1
    depth = 0
    in_str = False
    escape_next = False
    for i in range(brace_pos, len(text)):
        ch = text[i]
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
                    return i
    return -1

for i, pos in enumerate(positions):
    end = find_matching_brace(content, pos)
    print(f"  QUIZ_DATA [{i}] 范围: {pos} ~ {end}, 内容长度: {end-pos if end>-1 else '???'}")

if len(positions) < 2:
    print("\n没有找到两个 QUIZ_DATA，无需合并")
    exit()

# 第一个和第二个
pos1 = positions[0]
end1 = find_matching_brace(content, pos1)
pos2 = positions[1]
end2 = find_matching_brace(content, pos2)

print(f"\n第一个 QUIZ_DATA: {pos1} ~ {end1}")
print(f"第二个 QUIZ_DATA: {pos2} ~ {end2}")

# 提取第二个的内容（去掉外层的 { 和 }）
# 第二个的实际内容从 第一个 { 之后到匹配的 } 之前
brace2_start = content.find('{', pos2)
brace2_end = end2
content2 = content[brace2_start+1:brace2_end].strip().rstrip(',').strip()

print(f"\n第二个的内容前100字符: {repr(content2[:100])}")
print(f"第二个的内容后100字符: {repr(content2[-100:])}")

# 插入到第一个的 } 之前
# 第一个的结束是 end1，对应的是最外层的 }
# 但 QUIZ_DATA 的结构是：const QUIZ_DATA = { 键值对... };
# 实际的 } 在 end1 位置
# 我们需要在 end1 之前插入 content2（前面加逗号）

before_end1 = content[:end1]
after_end1 = content[end1:]

# 但 end1 是第一个 QUIZ_DATA 的结束 } 位置
# 我们需要把第二个的内容插入到第一个 } 之前
# 所以：在 end1 位置插入 ' ,\n' + content2 + '\n'
new_content = content[:end1] + ',\n' + content2 + '\n' + content[end1:]

# 然后删除第二个 QUIZ_DATA 块
# 第二个块从 pos2 到 end2+1（包含 }）
# 但 end2 后面的内容应该是 }\nlet quizProgress
# 我们需要找到第二个块的真正结束（包含结尾的 } 和可能的 ;）
# 第二个块：从 pos2 到某个位置，之后是 let quizProgress
# 找从 pos2 开始，到 };\nlet 或 }\nlet 的位置
tail = content.find('\nlet quizProgress', pos2)
if tail == -1:
    print("找不到第二个块的结束标记")
    exit()

print(f"\n第二个块完整范围: {pos2} ~ {tail}")
print(f"附近: {repr(content[tail-20:tail+30])}")

# 重新构造：去掉第二个块
# new_content 已经把第二个的内容合并进了第一个
# 但现在 new_content 里还包含第二个 QUIZ_DATA 块（从 pos2 到 tail）
# 注意：pos2 是相对于原始 content 的，new_content 在 end1 之前插入了内容
# 所以需要重新计算

# 更简单：直接在原始 content 上操作
# 1. 从原始 content 提取第二个的内容（已经做了）
# 2. 删除第二个块（pos2 到 tail）
# 3. 在第一个的结束 } 前插入第二个的内容

# 但删了第二个块之后，第一个的结束位置会变
# 顺序：先删第二个块，再在第一个的结束前插入

# 删第二个块
content_without_2 = content[:pos2] + content[tail:]
print(f"删除第二个块后，长度变化: {len(content)} -> {len(content_without_2)}")

# 重新找第一个的结束位置（在 content_without_2 中）
end1_new = find_matching_brace(content_without_2, content_without_2.find('const QUIZ_DATA'))
print(f"新的第一个结束位置: {end1_new}")
print(f"附近: {repr(content_without_2[end1_new-20:end1_new+20])}")

# 在 end1_new 前插入 content2
final_content = content_without_2[:end1_new] + ',\n' + content2 + '\n' + content_without_2[end1_new:]

with open(r'A:\workbuddy代码项目\函数工具\Excel函数大全.html', 'w', encoding='utf-8') as f:
    f.write(final_content)

print("\n✅ 合并完成！")

# 验证 JS 语法
import subprocess
result = subprocess.run(
    ['node', '-e', 'const fs=require("fs"); const html=fs.readFileSync("Excel函数大全.html","utf8"); const m=html.match(/<script>([\\s\\S]*?)<\\/script>/); try{new Function(m[1]);console.log("JS syntax OK")}catch(e){console.log("JS ERROR:",e.message)}'],
    capture_output=True, text=True, cwd=r'A:\workbuddy代码项目\函数工具'
)
print(f"验证结果: {result.stdout.strip()}")
if result.stderr:
    print(f"stderr: {result.stderr.strip()}")
