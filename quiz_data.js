// Excel 函数练习题数据
// 每题结构：{ type: 'choice'|'fill', question, options(choice专用), answer, explanation }
const QUIZ_DATA = {

  // ── 逻辑函数 ──────────────────────────────────────────────
  "IF": [
    {
      type: "choice",
      question: "A1=85，下列公式的结果是什么？\n=IF(A1>=60, \"及格\", \"不及格\")",
      options: ["及格", "不及格", "TRUE", "FALSE"],
      answer: 0,
      explanation: "A1=85 ≥ 60，条件为 TRUE，返回第二参数「及格」。"
    },
    {
      type: "fill",
      question: "判断 B2 的成绩：≥90 返回「优秀」，≥60 返回「及格」，否则返回「不及格」。\n=IF(B2>=90, \"优秀\", IF(_____, \"及格\", \"不及格\"))",
      answer: "B2>=60",
      explanation: "嵌套 IF：先判断 ≥90，再在 else 分支中判断 ≥60，条件写 B2>=60。"
    }
  ],

  "AND": [
    {
      type: "choice",
      question: "A1=5，B1=10，=AND(A1>3, B1<20) 的结果是？",
      options: ["TRUE", "FALSE", "1", "0"],
      answer: 0,
      explanation: "A1>3 为 TRUE，B1<20 为 TRUE，AND 要求所有条件都为 TRUE，所以结果是 TRUE。"
    },
    {
      type: "fill",
      question: "只有当 C2>0 且 D2>0 时才返回「正数」，否则返回「非正数」。\n=IF(AND(_____, D2>0), \"正数\", \"非正数\")",
      answer: "C2>0",
      explanation: "AND 的第一个参数是 C2>0，两个条件同时成立才为 TRUE。"
    }
  ],

  "OR": [
    {
      type: "choice",
      question: "A1=0，B1=5，=OR(A1>0, B1>0) 的结果是？",
      options: ["TRUE", "FALSE", "0", "错误"],
      answer: 0,
      explanation: "A1>0 为 FALSE，但 B1>0 为 TRUE，OR 只要有一个条件为 TRUE 就返回 TRUE。"
    },
    {
      type: "fill",
      question: "当分数 E2 小于 60 或大于 100 时，提示「数据异常」。\n=IF(OR(E2<60, _____), \"数据异常\", \"正常\")",
      answer: "E2>100",
      explanation: "OR 的第二个条件是 E2>100，分数超过100也属于异常。"
    }
  ],

  "IFS": [
    {
      type: "choice",
      question: "=IFS(A1>=90,\"优\",A1>=75,\"良\",A1>=60,\"中\",TRUE,\"差\")，当 A1=72 时返回？",
      options: ["优", "良", "中", "差"],
      answer: 2,
      explanation: "A1=72，不满足 ≥90、不满足 ≥75，满足 ≥60，所以返回「中」。IFS 按顺序匹配第一个为 TRUE 的条件。"
    },
    {
      type: "fill",
      question: "IFS 最后一个条件通常写什么来表示「以上都不满足时的默认值」？\n=IFS(A1>100,\"超出\", _____, \"正常\")",
      answer: "TRUE",
      explanation: "IFS 没有默认 else，需要用 TRUE 作为最后一个条件来兜底，代表始终成立。"
    }
  ],

  "NOT": [
    {
      type: "choice",
      question: "=NOT(5>3) 的结果是？",
      options: ["FALSE", "TRUE", "0", "错误"],
      answer: 0,
      explanation: "5>3 为 TRUE，NOT 取反后返回 FALSE。"
    },
    {
      type: "fill",
      question: "筛选出 A 列不为空的行：=IF(NOT(_____), \"有值\", \"空\")",
      answer: "A1=\"\"",
      explanation: "A1=\"\" 判断是否为空，NOT 取反后表示「不为空」的情况返回「有值」。"
    }
  ],

  // ── 查找与引用函数 ──────────────────────────────────────────────
  "VLOOKUP": [
    {
      type: "choice",
      question: "=VLOOKUP(\"张三\", A:D, 3, FALSE) 的含义是？",
      options: [
        "在 A:D 列中精确查找「张三」，返回同行第 3 列的值",
        "在 A:D 列中模糊查找「张三」，返回同行第 3 列的值",
        "查找第 3 行中是否有「张三」",
        "返回「张三」在表格中的行号"
      ],
      answer: 0,
      explanation: "VLOOKUP(查找值, 表格区域, 返回列号, 精确/模糊)，最后参数 FALSE 表示精确匹配，返回表格第 3 列。"
    },
    {
      type: "fill",
      question: "根据 G2 中的商品编号，在 A:E 表格中精确查找并返回第 4 列的价格。\n=VLOOKUP(G2, A:E, _____, FALSE)",
      answer: "4",
      explanation: "第三参数是要返回的列序号，这里要返回第4列，所以填 4。"
    }
  ],

  "HLOOKUP": [
    {
      type: "choice",
      question: "HLOOKUP 和 VLOOKUP 的主要区别是？",
      options: [
        "HLOOKUP 按行查找（横向），VLOOKUP 按列查找（纵向）",
        "HLOOKUP 只能精确匹配，VLOOKUP 可以模糊匹配",
        "HLOOKUP 返回行号，VLOOKUP 返回列号",
        "两者完全相同，只是名字不同"
      ],
      answer: 0,
      explanation: "H 代表 Horizontal（横向），V 代表 Vertical（纵向）。HLOOKUP 在第一行查找关键字，VLOOKUP 在第一列查找。"
    },
    {
      type: "fill",
      question: "在第1~3行的表头区域中，在第一行查找「销售额」，返回第 2 行对应的值（精确匹配）。\n=HLOOKUP(\"销售额\", A1:Z3, _____, FALSE)",
      answer: "2",
      explanation: "第三参数是从查找所在行起算的行偏移，查找行是第1行，要返回第2行，所以填 2。"
    }
  ],

  "INDEX": [
    {
      type: "choice",
      question: "=INDEX(A1:C5, 3, 2) 返回的是？",
      options: [
        "区域 A1:C5 中第 3 行第 2 列的单元格值",
        "A 列第 3 个和 B 列第 2 个的和",
        "区域的第 3 列第 2 行的值",
        "返回 C2 的值"
      ],
      answer: 0,
      explanation: "INDEX(区域, 行号, 列号)，返回指定行列交叉处的值。A1:C5 中第3行第2列即 B3 的值。"
    },
    {
      type: "fill",
      question: "从 B2:F10 区域中取出第 5 行、第 3 列的值。\n=INDEX(B2:F10, _____, 3)",
      answer: "5",
      explanation: "第二参数是行号，要取第5行，填 5。结果是区域中第5行第3列即 D6 的值。"
    }
  ],

  "MATCH": [
    {
      type: "choice",
      question: "A1:A5 = {10,20,30,40,50}，=MATCH(30, A1:A5, 0) 的结果是？",
      options: ["3", "2", "4", "TRUE"],
      answer: 0,
      explanation: "MATCH 返回查找值在数组中的位置（从1开始），30 在第3个位置，所以返回 3。第三参数 0 表示精确匹配。"
    },
    {
      type: "fill",
      question: "在 B1:B10 中精确查找 H2 的值，返回其位置（第几行）。\n=MATCH(H2, B1:B10, _____)",
      answer: "0",
      explanation: "MATCH 第三参数：0=精确匹配，1=升序模糊，-1=降序模糊。精确匹配填 0。"
    }
  ],

  "OFFSET": [
    {
      type: "choice",
      question: "=OFFSET(A1, 2, 3) 返回哪个单元格的值？",
      options: ["D3", "C2", "B3", "D2"],
      answer: 0,
      explanation: "OFFSET(基点, 行偏移, 列偏移)，从 A1 向下移2行到第3行，向右移3列到D列，即 D3。"
    },
    {
      type: "fill",
      question: "以 C5 为基点，向下偏移 1 行，向右偏移 0 列，返回该单元格的值。\n=OFFSET(C5, _____, 0)",
      answer: "1",
      explanation: "行偏移为1，列偏移为0，结果是 C6 的值。"
    }
  ],

  "INDIRECT": [
    {
      type: "choice",
      question: "A1 中存放文字「B5」，=INDIRECT(A1) 的结果是？",
      options: [
        "B5 单元格的值",
        "文字「B5」",
        "5",
        "错误"
      ],
      answer: 0,
      explanation: "INDIRECT 将文本字符串转为单元格引用，A1 中是「B5」，所以返回 B5 单元格实际存放的值。"
    },
    {
      type: "fill",
      question: "Sheet 名称存在 D1 单元格，要引用该 Sheet 的 A1 单元格，完成公式：\n=INDIRECT(_____ & \"!A1\")",
      answer: "D1",
      explanation: "将 D1 的内容（工作表名）与「!A1」拼接成引用字符串，再用 INDIRECT 转为实际引用。"
    }
  ],

  // ── 文本函数 ──────────────────────────────────────────────
  "LEFT": [
    {
      type: "choice",
      question: "A1=\"Excel函数大全\"，=LEFT(A1, 5) 的结果是？",
      options: ["Excel", "函数大全", "Excel函", "l函数大全"],
      answer: 0,
      explanation: "LEFT 从左侧提取指定数量的字符，提取前5个字符是「Excel」。"
    },
    {
      type: "fill",
      question: "A2 中是身份证号（18位），提取前 6 位地区代码。\n=LEFT(A2, _____)",
      answer: "6",
      explanation: "提取左侧6个字符，第二参数填 6。"
    }
  ],

  "RIGHT": [
    {
      type: "choice",
      question: "A1=\"Hello World\"，=RIGHT(A1, 5) 的结果是？",
      options: ["World", "Hello", "orld", "ello "],
      answer: 0,
      explanation: "RIGHT 从右侧提取字符，「Hello World」最后5个字符是「World」。"
    },
    {
      type: "fill",
      question: "B3 中是订单号「ORD-20240328」，提取最后 8 位（日期部分）。\n=RIGHT(B3, _____)",
      answer: "8",
      explanation: "从右边取8个字符，填 8，结果是「20240328」。"
    }
  ],

  "MID": [
    {
      type: "choice",
      question: "=MID(\"Excel函数大全\", 6, 2) 的结果是？",
      options: ["函数", "Excel", "大全", "数大"],
      answer: 0,
      explanation: "MID(文本, 起始位置, 字符数)，从第6个字符开始取2个字符，「E-x-c-e-l-函-数」第6位是「函」，取2个是「函数」。"
    },
    {
      type: "fill",
      question: "身份证号在 A1（18位），第 7 到 14 位是出生日期，提取出生日期。\n=MID(A1, _____, 8)",
      answer: "7",
      explanation: "出生日期从第7位开始，共8位，起始位置填 7。"
    }
  ],

  "LEN": [
    {
      type: "choice",
      question: "=LEN(\"Hello 世界\") 的结果是？",
      options: ["8", "7", "10", "6"],
      answer: 0,
      explanation: "LEN 计算字符数（不论中英文，每个字算1个字符）。「Hello 世界」共8个字符（含空格）。"
    },
    {
      type: "fill",
      question: "验证 A1 中的手机号是否为 11 位，是则返回「正确」。\n=IF(LEN(A1)=_____, \"正确\", \"位数错误\")",
      answer: "11",
      explanation: "手机号是11位，LEN(A1)=11 判断长度是否等于11。"
    }
  ],

  "FIND": [
    {
      type: "choice",
      question: "=FIND(\"@\", \"user@example.com\") 的结果是？",
      options: ["5", "4", "6", "错误"],
      answer: 0,
      explanation: "FIND 返回查找字符的位置（从1开始）。「user@example.com」中@在第5位。"
    },
    {
      type: "fill",
      question: "提取邮箱中@前面的用户名部分（A1 是邮箱地址）。\n=LEFT(A1, FIND(\"@\", A1) - _____)",
      answer: "1",
      explanation: "FIND 返回@的位置，减去1得到@前面的字符数，再用 LEFT 提取。"
    }
  ],

  "SUBSTITUTE": [
    {
      type: "choice",
      question: "=SUBSTITUTE(\"2024-03-28\", \"-\", \"/\") 的结果是？",
      options: ["2024/03/28", "2024-03-28", "20240328", "错误"],
      answer: 0,
      explanation: "SUBSTITUTE 将字符串中所有的「-」替换为「/」，结果是「2024/03/28」。"
    },
    {
      type: "fill",
      question: "A1 中有多余的空格，将所有空格删除（替换为空字符串）。\n=SUBSTITUTE(A1, \" \", _____)",
      answer: "\"\"",
      explanation: "第三参数是替换后的字符，替换为空字符串 \"\" 即可删除所有空格。"
    }
  ],

  "TRIM": [
    {
      type: "choice",
      question: "=TRIM(\"  Hello  World  \") 的结果是？",
      options: ["Hello  World", "Hello World", "HelloWorld", "  Hello  World  "],
      answer: 0,
      explanation: "TRIM 删除首尾多余空格，并将中间多个连续空格压缩为一个。首尾空格删除，中间「  」变成「 」，结果是「Hello  World」。注意中间两个空格变一个。"
    },
    {
      type: "fill",
      question: "清理 B2 单元格中的多余空格后，判断是否等于「苹果」。\n=_____(B2)=\"苹果\"",
      answer: "TRIM",
      explanation: "先用 TRIM 清理空格，再比较，避免因空格导致比较失败。"
    }
  ],

  "TEXT": [
    {
      type: "choice",
      question: "=TEXT(1234.5, \"#,##0.00\") 的结果是？",
      options: ["1,234.50", "1234.50", "1,234.5", "1234.500"],
      answer: 0,
      explanation: "TEXT 按指定格式将数值转为文本，#,##0.00 表示千位分隔符且保留两位小数，结果是「1,234.50」。"
    },
    {
      type: "fill",
      question: "将 A1 中的日期格式化为「2024年03月28日」的格式。\n=TEXT(A1, _____)",
      answer: "\"yyyy年mm月dd日\"",
      explanation: "TEXT 的格式字符串：yyyy=四位年，mm=两位月，dd=两位日，合在一起是 \"yyyy年mm月dd日\"。"
    }
  ],

  // ── 日期与时间函数 ──────────────────────────────────────────────
  "TODAY": [
    {
      type: "choice",
      question: "=TODAY() 的特点是？",
      options: [
        "返回今天的日期，每次打开文件自动更新",
        "返回当前日期和时间",
        "返回固定的某一天，不会变化",
        "只在输入时生效，之后不再更新"
      ],
      answer: 0,
      explanation: "TODAY() 返回当天日期（不含时间），每次重新计算工作表时自动刷新为最新日期。"
    },
    {
      type: "fill",
      question: "计算 A1 中的合同截止日期距今还有几天（用截止日减今天）。\n=A1 - _____()",
      answer: "TODAY",
      explanation: "TODAY() 返回今天的日期，截止日期减今天即可得到剩余天数。"
    }
  ],

  "NOW": [
    {
      type: "choice",
      question: "TODAY() 和 NOW() 的区别是？",
      options: [
        "TODAY 只返回日期，NOW 返回日期+时间",
        "TODAY 返回日期+时间，NOW 只返回时间",
        "两者完全相同",
        "TODAY 自动更新，NOW 不更新"
      ],
      answer: 0,
      explanation: "TODAY() 返回当天日期（整数部分），NOW() 返回当前日期+时间（含小数时间部分）。"
    },
    {
      type: "fill",
      question: "在 B2 中记录当前操作时间（含时分秒），应使用哪个函数？\n=_____()",
      answer: "NOW",
      explanation: "NOW() 返回当前日期和时间，包含时分秒信息。"
    }
  ],

  "DATE": [
    {
      type: "choice",
      question: "=DATE(2024, 3, 28) 返回的是？",
      options: [
        "2024年3月28日对应的日期序列数",
        "文本「2024-3-28」",
        "数字 20240328",
        "错误值"
      ],
      answer: 0,
      explanation: "DATE(年,月,日) 返回对应日期的序列数（Excel 内部用数字存储日期），可以格式化显示为日期形式。"
    },
    {
      type: "fill",
      question: "用 A1（年）、B1（月）、C1（日）三个单元格组合成一个日期。\n=DATE(A1, B1, _____)",
      answer: "C1",
      explanation: "DATE 的三个参数依次是年、月、日，第三个参数是日，填 C1。"
    }
  ],

  "YEAR": [
    {
      type: "choice",
      question: "A1 中存放日期「2024/3/28」，=YEAR(A1) 的结果是？",
      options: ["2024", "3", "28", "2024/3/28"],
      answer: 0,
      explanation: "YEAR 函数从日期中提取年份，返回四位数字 2024。"
    },
    {
      type: "fill",
      question: "计算员工的工龄（入职年份在 B2，用当前年份减去入职年份）。\n=YEAR(TODAY()) - YEAR(_____)",
      answer: "B2",
      explanation: "YEAR(TODAY()) 得到今年年份，YEAR(B2) 得到入职年份，相减即为工龄。"
    }
  ],

  "MONTH": [
    {
      type: "choice",
      question: "=MONTH(\"2024-08-15\") 的结果是？",
      options: ["8", "2024", "15", "8月"],
      answer: 0,
      explanation: "MONTH 从日期中提取月份，返回数字 8（不是文本「8月」）。"
    },
    {
      type: "fill",
      question: "判断 A1 日期是否在第一季度（1、2、3月），填写 MONTH 公式。\n=IF(_____(A1)<=3, \"第一季度\", \"非第一季度\")",
      answer: "MONTH",
      explanation: "用 MONTH(A1) 取出月份，≤3 则为第一季度。"
    }
  ],

  "DATEDIF": [
    {
      type: "choice",
      question: "=DATEDIF(\"2020-01-01\", \"2024-03-28\", \"Y\") 返回的是？",
      options: ["4", "1548", "51", "错误"],
      answer: 0,
      explanation: "DATEDIF 计算两个日期的差，第三参数\"Y\"表示完整年数。2020到2024相差4年。"
    },
    {
      type: "fill",
      question: "计算 A1（出生日期）到今天的完整月数。\n=DATEDIF(A1, TODAY(), _____)",
      answer: "\"M\"",
      explanation: "DATEDIF 第三参数：\"Y\"=整年数，\"M\"=整月数，\"D\"=天数。计算月数用 \"M\"。"
    }
  ],

  "WEEKDAY": [
    {
      type: "choice",
      question: "=WEEKDAY(\"2024-03-28\", 2) 中参数 2 的作用是？",
      options: [
        "返回值以周一=1…周日=7 的方式计数",
        "返回值以周日=1…周六=7 的方式计数",
        "返回第几周",
        "忽略周末"
      ],
      answer: 0,
      explanation: "WEEKDAY 第二参数控制编号方式：1或省略=周日开始(1-7)，2=周一开始(1-7)，3=周一开始(0-6)。"
    },
    {
      type: "fill",
      question: "判断 A1 是否为周末（周六或周日），参数 2 模式下周六=6，周日=7。\n=IF(WEEKDAY(A1,2)>=_____, \"周末\", \"工作日\")",
      answer: "6",
      explanation: "参数2模式：周一=1…周五=5，周六=6，周日=7。≥6 即为周末。"
    }
  ],

  "DAY": [
    {
      type: "choice",
      question: "=DAY(\"2024-03-28\") 的结果是？",
      options: ["28", "3", "2024", "星期四"],
      answer: 0,
      explanation: "DAY 函数提取日期中的「日」部分，返回数字 28。"
    },
    {
      type: "fill",
      question: "计算 A1 所在月份的最后一天是几号（用下月第0天技巧）。\n=DAY(DATE(YEAR(A1), MONTH(A1)+1, _____))",
      answer: "0",
      explanation: "DATE 中日期为 0 表示上一个月的最后一天，所以 DATE(年, 月+1, 0) 即为本月最后一天。"
    }
  ],

  // ── 统计函数 ──────────────────────────────────────────────
  "COUNTIF": [
    {
      type: "choice",
      question: "=COUNTIF(A1:A10, \">100\") 的含义是？",
      options: [
        "统计 A1:A10 中大于 100 的单元格数量",
        "求 A1:A10 中大于 100 的数值之和",
        "找出 A1:A10 中最大的数",
        "返回大于 100 的第一个单元格地址"
      ],
      answer: 0,
      explanation: "COUNTIF(范围, 条件) 统计满足条件的单元格数量，\">100\" 表示大于100。"
    },
    {
      type: "fill",
      question: "统计 B 列中值等于 E2 单元格内容的单元格个数。\n=COUNTIF(B:B, _____)",
      answer: "E2",
      explanation: "COUNTIF 的第二参数可以是单元格引用，表示条件为等于该单元格的值。"
    }
  ],

  "COUNTIFS": [
    {
      type: "choice",
      question: "=COUNTIFS(A:A,\"男\",B:B,\">80\") 的含义是？",
      options: [
        "统计 A 列为「男」且 B 列大于 80 的行数",
        "统计 A 列为「男」或 B 列大于 80 的行数",
        "统计 A 列或 B 列中满足条件的行数之和",
        "只统计 B 列大于 80 的行数"
      ],
      answer: 0,
      explanation: "COUNTIFS 支持多条件，所有条件均用 AND（同时满足）逻辑，这里是男生且成绩>80。"
    },
    {
      type: "fill",
      question: "统计 C 列日期在 2024 年 1 月（>=2024-1-1 且 <=2024-1-31）的记录数。\n=COUNTIFS(C:C,\">=\"&DATE(2024,1,1), C:C, _____)",
      answer: "\"<=\"&DATE(2024,1,31)",
      explanation: "第二个条件需要限定上界，用 \"<=\" 连接 DATE(2024,1,31) 表示不超过1月31日。"
    }
  ],

  "SUMIF": [
    {
      type: "choice",
      question: "=SUMIF(A:A, \"苹果\", B:B) 的作用是？",
      options: [
        "对 A 列等于「苹果」的行，求 B 列数值之和",
        "统计 A 列和 B 列中「苹果」的个数",
        "返回 A 列第一个「苹果」对应的 B 列值",
        "将 B 列中所有苹果相关的值拼接"
      ],
      answer: 0,
      explanation: "SUMIF(条件区域, 条件, 求和区域)，在A列找到「苹果」，对对应的B列求和。"
    },
    {
      type: "fill",
      question: "对 D 列大于 0 的行，求 E 列的总和。\n=SUMIF(D:D, _____, E:E)",
      answer: "\">0\"",
      explanation: "SUMIF 条件参数支持比较运算符，\">0\" 表示大于0。注意要加引号。"
    }
  ],

  "SUMIFS": [
    {
      type: "choice",
      question: "SUMIF 和 SUMIFS 的参数顺序有什么区别？",
      options: [
        "SUMIF：条件区域在前；SUMIFS：求和区域在最前面",
        "两者参数顺序完全相同",
        "SUMIFS：条件区域在前；SUMIF：求和区域在最前面",
        "SUMIFS 不需要指定求和区域"
      ],
      answer: 0,
      explanation: "SUMIF(条件区域,条件,求和区域)；SUMIFS(求和区域,条件区域1,条件1,条件区域2,条件2,...)。注意求和区域位置不同！"
    },
    {
      type: "fill",
      question: "对「销售额」列（C列）中，A列为「北京」且B列为「2024」的行求和。\n=SUMIFS(C:C, A:A, \"北京\", B:B, _____)",
      answer: "\"2024\"",
      explanation: "第四个参数是第二个条件的值，B列为 \"2024\"（文本形式或数字2024均可）。"
    }
  ],

  "AVERAGE": [
    {
      type: "choice",
      question: "A1:A5 = {10, 20, \"\", 40, 50}，=AVERAGE(A1:A5) 的结果是？",
      options: ["30", "24", "25", "错误"],
      answer: 0,
      explanation: "AVERAGE 忽略空单元格（但不忽略0）。有效数字是 10,20,40,50 共4个，平均值 = 120/4 = 30。"
    },
    {
      type: "fill",
      question: "计算 B 列中大于 0 的值的平均值，需要用哪个函数？\n=AVERAGE_____(B:B, \">0\")",
      answer: "IF",
      explanation: "AVERAGEIF(范围, 条件) 可以对满足条件的单元格求平均值，完整函数是 AVERAGEIF。"
    }
  ],

  "MAX": [
    {
      type: "choice",
      question: "=MAX(3, 8, 1, 9, 5) 的结果是？",
      options: ["9", "8", "5", "26"],
      answer: 0,
      explanation: "MAX 返回一组数值中的最大值，{3,8,1,9,5} 中最大值是 9。"
    },
    {
      type: "fill",
      question: "找出 A 列和 C 列中所有数值里的最大值。\n=MAX(A:A, _____)",
      answer: "C:C",
      explanation: "MAX 可以接受多个范围参数，用逗号分隔，会从所有范围中找最大值。"
    }
  ],

  "MIN": [
    {
      type: "choice",
      question: "A1:A4 = {5, 0, -3, 8}，=MIN(A1:A4) 的结果是？",
      options: ["-3", "0", "5", "错误"],
      answer: 0,
      explanation: "MIN 返回最小值，-3 是最小的数。MIN 不忽略负数。"
    },
    {
      type: "fill",
      question: "保证某个值不低于 0（取该值与 0 的较大值），使用 MAX 函数实现：\n=MAX(A1, _____)",
      answer: "0",
      explanation: "MAX(A1, 0) 当 A1<0 时返回 0，当 A1≥0 时返回 A1，常用作「归零」操作。"
    }
  ],

  "RANK": [
    {
      type: "choice",
      question: "=RANK(85, A1:A10, 0) 中参数 0 的作用是？",
      options: [
        "降序排名（最大值排第1）",
        "升序排名（最小值排第1）",
        "忽略重复值",
        "返回百分比排名"
      ],
      answer: 0,
      explanation: "RANK 第三参数：0 或省略=降序（最大值第1），1=升序（最小值第1）。"
    },
    {
      type: "fill",
      question: "对 B2 的值在 $B$1:$B$20 范围内进行升序排名（小的排前面）。\n=RANK(B2, $B$1:$B$20, _____)",
      answer: "1",
      explanation: "升序排名第三参数填 1。注意排名范围要用绝对引用，方便公式向下拖拽。"
    }
  ],

  // ── 数学与三角函数 ──────────────────────────────────────────────
  "SUM": [
    {
      type: "choice",
      question: "=SUM(1, 2, A1:A3) 中 A1:A3={4,5,6}，结果是？",
      options: ["18", "12", "15", "21"],
      answer: 0,
      explanation: "SUM 可以同时接受数字和范围，1+2+4+5+6 = 18。"
    },
    {
      type: "fill",
      question: "对 B 列到 F 列的所有数据求和（连续多列）。\n=SUM(_____:F:F)",
      answer: "B:B",
      explanation: "SUM 可以用 B:B:F:F 不太直观，更清晰的写法是 SUM(B:F)，对B到F所有列求和。实际答案填 B:B 或直接写 SUM(B:F)。"
    }
  ],

  "ROUND": [
    {
      type: "choice",
      question: "=ROUND(3.14159, 2) 的结果是？",
      options: ["3.14", "3.15", "3.1", "3"],
      answer: 0,
      explanation: "ROUND(数值, 位数) 四舍五入到指定小数位。3.14159 保留2位小数，第3位是1<5，不进位，结果是 3.14。"
    },
    {
      type: "fill",
      question: "将 A1 的值四舍五入到整数（0位小数）。\n=ROUND(A1, _____)",
      answer: "0",
      explanation: "ROUND 第二参数为 0 表示四舍五入到整数位。负数表示四舍五入到十位、百位等。"
    }
  ],

  "INT": [
    {
      type: "choice",
      question: "=INT(-3.7) 的结果是？",
      options: ["-4", "-3", "3", "错误"],
      answer: 0,
      explanation: "INT 向下取整（朝负无穷方向）。-3.7 向下取整是 -4，注意和 TRUNC 不同（TRUNC(-3.7)=-3，直接截断小数部分）。"
    },
    {
      type: "fill",
      question: "将时间值 A1（如 0.75 表示18:00）转为小时数（整数部分）。\n=_____(A1 * 24)",
      answer: "INT",
      explanation: "时间序列值 × 24 得到小时（含小数），INT 取整数部分即为完整小时数。"
    }
  ],

  "MOD": [
    {
      type: "choice",
      question: "=MOD(17, 5) 的结果是？",
      options: ["2", "3", "1", "5"],
      answer: 0,
      explanation: "MOD(被除数, 除数) 返回余数。17 ÷ 5 = 3 余 2，所以结果是 2。"
    },
    {
      type: "fill",
      question: "判断 A1 是否为偶数（余数为0则是偶数）。\n=IF(MOD(A1, _____)=0, \"偶数\", \"奇数\")",
      answer: "2",
      explanation: "MOD(A1, 2) 对2取余，结果为0则是偶数，结果为1则是奇数。"
    }
  ],

  "ABS": [
    {
      type: "choice",
      question: "=ABS(-15) + ABS(8) 的结果是？",
      options: ["23", "-7", "7", "错误"],
      answer: 0,
      explanation: "ABS 取绝对值，ABS(-15)=15，ABS(8)=8，15+8=23。"
    },
    {
      type: "fill",
      question: "计算两个数 A1 和 B1 之差的绝对值（误差距离）。\n=_____(A1 - B1)",
      answer: "ABS",
      explanation: "用 ABS 包裹差值，无论A1>B1还是A1<B1，都能得到正的差值距离。"
    }
  ],

  "CEILING": [
    {
      type: "choice",
      question: "=CEILING(2.3, 0.5) 的结果是？",
      options: ["2.5", "2.0", "3.0", "2.3"],
      answer: 0,
      explanation: "CEILING(数值, 基数) 向上取整到基数的最近倍数。2.3 向上取到 0.5 的倍数：0.5, 1.0, 1.5, 2.0, 2.5，所以是 2.5。"
    },
    {
      type: "fill",
      question: "停车费按每15分钟一个计费单元，A1 是停车分钟数，计算需要几个计费单元。\n=CEILING(A1, _____) / 15",
      answer: "15",
      explanation: "CEILING(分钟数, 15) 向上取到15的倍数，再除以15得到计费单元数。"
    }
  ],

  "FLOOR": [
    {
      type: "choice",
      question: "=FLOOR(2.8, 1) 的结果是？",
      options: ["2", "3", "2.8", "0"],
      answer: 0,
      explanation: "FLOOR 向下取到基数的最近倍数。2.8 向下到 1 的倍数是 2。"
    },
    {
      type: "fill",
      question: "将金额 A1 向下取整到 10 元（如 138 → 130）。\n=FLOOR(A1, _____)",
      answer: "10",
      explanation: "FLOOR(金额, 10) 向下取到10的倍数，138 → 130，145 → 140。"
    }
  ],

  "SUMPRODUCT": [
    {
      type: "choice",
      question: "A1:A3={2,3,4}，B1:B3={5,6,7}，=SUMPRODUCT(A1:A3,B1:B3) 的结果是？",
      options: ["56", "14", "210", "错误"],
      answer: 0,
      explanation: "SUMPRODUCT 先将对应元素相乘，再求和：2×5 + 3×6 + 4×7 = 10+18+28 = 56。"
    },
    {
      type: "fill",
      question: "用 SUMPRODUCT 统计 A 列等于「苹果」且 B 列大于 100 的行数（多条件计数）。\n=SUMPRODUCT((A1:A100=\"苹果\") * (B1:B100>_____) * 1)",
      answer: "100",
      explanation: "SUMPRODUCT 中条件表达式返回 TRUE/FALSE 数组，乘以1转为1/0，乘积求和即为满足所有条件的行数。"
    }
  ]
};

// 统计题目总数
const QUIZ_TOTAL = Object.values(QUIZ_DATA).reduce((sum, arr) => sum + arr.length, 0);
