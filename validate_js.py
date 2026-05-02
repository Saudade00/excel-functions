import re, json

html_path = r'A:\workbuddy代码项目\函数工具\Excel函数大全.html'
with open(html_path, 'r', encoding='utf-8') as f:
    content = f.read()

# 提取 DIFFICULTY 对象并验证 JSON 合法性
idx = content.find('const DIFFICULTY = {')
start = idx + len('const DIFFICULTY = ')
depth = 0
i = start
while i < len(content):
    if content[i] == '{':
        depth += 1
    elif content[i] == '}':
        depth -= 1
        if depth == 0:
            end = i + 1
            break
    i += 1
diff_str = content[start:end]
diff_clean = re.sub(r'//.*', '', diff_str)
try:
    diff = json.loads(diff_clean)
    print(f'✅ DIFFICULTY JSON 解析成功，共 {len(diff)} 个函数')
    easy = sum(1 for v in diff.values() if v=='easy')
    medium = sum(1 for v in diff.values() if v=='medium')
    hard = sum(1 for v in diff.values() if v=='hard')
    print(f'  easy: {easy}, medium: {medium}, hard: {hard}')
except Exception as e:
    print(f'❌ JSON 解析失败: {e}')
    # 找非法字符位置
    print(f'  错误附近内容: {diff_str[max(0, e.pos-50):e.pos+50]}')

# 提取 FUNCTIONS 数组并验证 JSON 合法性
idx2 = content.find('const FUNCTIONS = [')
start2 = idx2 + len('const FUNCTIONS = ')
depth = 0
i = start2
while i < len(content):
    if content[i] == '[':
        depth += 1
    elif content[i] == ']':
        depth -= 1
        if depth == 0:
            end2 = i + 1
            break
    i += 1
func_str = content[start2:end2]
try:
    funcs = json.loads(func_str)
    print(f'\n✅ FUNCTIONS JSON 解析成功，共 {len(funcs)} 个函数')
except Exception as e:
    print(f'\n❌ FUNCTIONS JSON 解析失败: {e}')
    if hasattr(e, 'pos') and e.pos:
        print(f'  错误附近内容: {func_str[max(0, e.pos-100):e.pos+100]}')
