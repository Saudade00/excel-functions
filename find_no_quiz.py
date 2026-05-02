import re

with open(r'A:\workbuddy代码项目\函数工具\Excel函数大全.html', 'r', encoding='utf-8') as f:
    content = f.read()

# 提取 FUNCTIONS 中所有函数名
fns = re.findall(r'\{"name":\s*"(\w+)"', content)
print(f"FUNCTIONS 总数: {len(fns)}")

# 提取 QUIZ_DATA 中的函数名
start = content.find('const QUIZ_DATA = {')
end = content.find('\n};\n// ── 初始化 header', start)
qstr = content[start:end+3]
quiz_fns = re.findall(r'"(\w+)"\s*:\s*\[', qstr)
print(f"QUIZ_DATA 函数数: {len(quiz_fns)}")

# 找出差集
no_quiz = [f for f in fns if f not in quiz_fns]
print(f"\n无练习题的函数 ({len(no_quiz)}个):")
for i, f in enumerate(no_quiz):
    print(f"  {f}", end='\n' if (i+1) % 8 == 0 else '  ')
