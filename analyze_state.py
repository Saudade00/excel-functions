import re, json, os

html_path = r'A:\workbuddy代码项目\函数工具\Excel函数大全.html'
with open(html_path, 'r', encoding='utf-8') as f:
    content = f.read()

print(f"文件总长度: {len(content)}")

# ── 解析 FUNCTIONS ──────────────────────────────────────────
idx = content.find('const FUNCTIONS = [')
print(f"\n[FUNCTIONS] 起始位置: {idx}")
if idx >= 0:
    start = idx + len('const FUNCTIONS = ')
    depth = 0
    i = start
    while i < len(content):
        if content[i] == '[':
            depth += 1
        elif content[i] == ']':
            depth -= 1
            if depth == 0:
                end = i + 1
                break
        i += 1
    func_str = content[start:end]
    funcs = json.loads(func_str)
    total = len(funcs)
    has_detail = sum(1 for f in funcs if f.get('hasDetail'))
    no_detail = [f['name'] for f in funcs if not f.get('hasDetail')]
    print(f"  总数: {total}")
    print(f"  hasDetail=true: {has_detail}")
    print(f"  hasDetail=false: {len(no_detail)}")
    print(f"  无详情函数（前30个）: {no_detail[:30]}")
    print(f"  ...共 {len(no_detail)} 个")

# ── 解析 DIFFICULTY（去除注释后再解析）────────────────────
idx3 = content.find('const DIFFICULTY = {')
print(f"\n[DIFFICULTY] 起始位置: {idx3}")
if idx3 >= 0:
    start3 = idx3 + len('const DIFFICULTY = ')
    depth = 0
    i = start3
    while i < len(content):
        if content[i] == '{':
            depth += 1
        elif content[i] == '}':
            depth -= 1
            if depth == 0:
                end3 = i + 1
                break
        i += 1
    diff_str = content[start3:end3]
    # 去除 // 注释
    diff_str_clean = re.sub(r'//.*', '', diff_str)
    try:
        diff = json.loads(diff_str_clean)
        easy = sum(1 for v in diff.values() if v=='easy')
        medium = sum(1 for v in diff.values() if v=='medium')
        hard = sum(1 for v in diff.values() if v=='hard')
        print(f"  覆盖函数数: {len(diff)}")
        print(f"  easy: {easy}, medium: {medium}, hard: {hard}")
        func_names = set(f['name'] for f in funcs)
        no_diff = [n for n in func_names if n not in diff]
        print(f"  未标注难度的函数（前30个）: {no_diff[:30]}")
        print(f"  ...共 {len(no_diff)} 个")
    except Exception as e:
        print(f"  解析失败: {e}")
        print(f"  清理后字符串（前500字符）: {diff_str_clean[:500]}")

# ── 统计 QUIZ_DATA 覆盖函数数 ─────────────────────────────
idx2 = content.find('const QUIZ_DATA = {')
print(f"\n[QUIZ_DATA] 起始位置: {idx2}")
if idx2 >= 0:
    # 用正则直接找所有 "函数名": 的键
    keys = re.findall(r'"(\w+)"\s*:\s*\[', content[idx2:idx2+20000])
    print(f"  覆盖函数数（正则提取）: {len(keys)}")
    print(f"  有练习题的函数: {keys}")
