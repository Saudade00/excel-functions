import re

with open(r'A:\workbuddy代码项目\函数工具\Excel函数大全.html', 'r', encoding='utf-8') as f:
    content = f.read()

# 找到第一个 QUIZ_DATA 的结束位置（其自身的 };）
# 第一个 QUIZ_DATA 的结束标志：};\n// ── 答题记录（存 localStorage）
end1 = content.find('};\n// ── 答题记录（存 localStorage）')
if end1 == -1:
    # 尝试另一种匹配
    end1 = content.find('};\nlet quizProgress')
print(f"第一个 QUIZ_DATA 结束于: {end1}")
print(f"附近: {repr(content[end1-30:end1+60])}")

# 找到第二个 QUIZ_DATA 的起始和结束
start2 = content.find('const QUIZ_DATA = {', end1)
print(f"\n第二个 QUIZ_DATA 起始于: {start2}")

# 用括号匹配找第二个的结束位置
depth = 0
in_str = False
escape_next = False
end2 = -1
for idx in range(start2 + len('const QUIZ_DATA = '), len(content)):
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
                break

print(f"第二个 QUIZ_DATA 结束于: {end2}")
print(f"附近: {repr(content[end2-10:end2+60])}")

if end2 == -1:
    print("找不到第二个 QUIZ_DATA 的结束位置！")
    exit()

# 提取第二批的内容（去掉开头的 "const QUIZ_DATA = {" 和结尾的 "}"）
# 第二批内容从 start2 + len('const QUIZ_DATA = ') 到 end2 - 1（去掉最后的 }）
batch2_content = content[start2 + len('const QUIZ_DATA = '):end2-1].strip()
# 去掉开头的注释行和结尾的空白
batch2_content = batch2_content.strip().rstrip(',').strip()
print(f"\n第二批内容前100字符: {repr(batch2_content[:100])}")
print(f"第二批内容后100字符: {repr(batch2_content[-100:])}")

# 现在构造新内容：
# 在第一个 QUIZ_DATA 结束前（};\n// 之前）插入第二批内容
# 第一个结束是 };\n// ── 答题记录
# 我们需要在这之前插入 ,\n 和新内容
insert_pos = end1  # 这是 };\n// 的 { 位置
# 实际插入位置是 end1（即 };\n 的 } 的位置）
# 我们要在 } 前面插入新内容

new_content = content[:insert_pos] + ',\n' + batch2_content + '\n' + content[insert_pos:]

# 然后删除第二个 QUIZ_DATA 块
# 第二个块从 start2 到 end2（包含结尾的 }）
# 但 end2 现在指向第一个文件已修改，需要重新计算
# 更简单：直接在原始 content 上操作，先删第二批，再插入到第一批
endgroup

# 重新来：先删第二批，再把它插入到第一批结尾前
# 第二批从 start2 到某个结束点
# 找到第二批真正的结束：它后面应该是 "let quizProgress" 或类似
# 从 end2 往后找真正的结束标记
end2_marker = content.find('\nlet quizProgress', start2)
if end2_marker == -1:
    print("找不到第二批结束标记")
    exit()
print(f"第二批块结束于: {end2_marker}")
print(f"附近: {repr(content[end2_marker-30:end2_marker+30])}")

# 第二批完整块：从 start2 到 end2_marker
batch2_full = content[start2:end2_marker].strip()
print(f"\n第二批完整块前200字符: {repr(batch2_full[:200])}")
print(f"第二批完整块后200字符: {repr(batch2_full[-200:])}")

# batch2_full 形如：
# const QUIZ_DATA = {
#   "VLOOKUP": [ ... ],
#   ...
# }
# 我们需要提取 { 和 } 之间的内容
brace_start = batch2_full.find('{')
brace_content = batch2_full[brace_start+1:].strip()
# 去掉结尾的 }
brace_content = brace_content.rstrip('}').rstrip(',').strip()
print(f"\n提取的括号内容前100: {repr(brace_content[:100])}")
print(f"提取的括号内容后100: {repr(brace_content[-100:])}")

# 现在插入到第一批的 } 之前
# 第一批结束位置
end1 = content.find('};\n// ── 答题记录（存 localStorage）')
if end1 == -1:
    end1 = content.find('};\nlet quizProgress')
print(f"\n第一批结束位置: {end1}")

# 插入
part1 = content[:end1]
part2 = ',\n' + brace_content + '\n' + content[end1:]
new_html = part1 + part2

# 删除第二批块
# 第二批块从 start2 到 end2_marker
new_html = new_html[:new_html.find('const QUIZ_DATA = {', new_html.find('const QUIZ_DATA = {'))] + new_html[new_html.find('let quizProgress', new_html.find('const QUIZ_DATA = {', new_html.find('const QUIZ_DATA = {'))):]
# 这个太复杂了，换一种方法：直接在原始 content 上操作

# 更简单的方法：直接拼接
# content 分为：
#   part_a: 从开头到第一批结束（};\n//）
#   part_b: 第二批的内容（提取出的 brace_content）
#   part_c: 从第二批结束位置到文件末尾

part_a_end = content.find('};\n// ── 答题记录（存 localStorage）')
if part_a_end == -1:
    part_a_end = content.find('};\nlet quizProgress', 140000)
    print(f"part_a_end (alternate): {part_a_end}")

part_a = content[:part_a_end]
part_c_start = content.find('\nlet quizProgress', start2)
part_c = content[part_c_start:]

print(f"\npart_a 最后100字符: {repr(part_a[-100:])}")
print(f"part_c 前100字符: {repr(part_c[:100])}")

# 拼接
new_html = part_a + ',\n' + brace_content + '\n' + part_c

with open(r'A:\workbuddy代码项目\函数工具\Excel函数大全.html', 'w', encoding='utf-8') as f:
    f.write(new_html)

print("\n✅ 合并完成！")

# 验证
import subprocess
result = subprocess.run(['node', '-e', f'const fs=require("fs"); const html=fs.readFileSync("Excel函数大全.html","utf8"); const m=html.match(/<script>([\\s\\S]*?)<\\/script>/); try{{new Function(m[1]);console.log("JS syntax OK")}}catch(e){{console.log("JS ERROR:",e.message)}}'], capture_output=True, text=True, cwd=r'A:\workbuddy代码项目\函数工具')
print(f"验证结果: {result.stdout.strip()}")
if result.stderr:
    print(f"stderr: {result.stderr.strip()}")
