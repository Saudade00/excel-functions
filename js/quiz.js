// quiz.js - 练习题功能模块
// 依赖：data.js, modal.js, utils.js

var QUIZ_DATA = {
  "ABS": [
    {
      type: "choice",
      question: "ABS 函数属于哪一类？",
      options: [
        "数学与三角函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "ABS 属于 数学与三角函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 ABS 函数的正确功能描述？",
      options: [
        "返回参数的绝对值",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "ABS 函数的功能是：返回参数的绝对值"
    },
    {
      type: "fillBlank",
      question: "ABS 函数的类别是？",
      answer: "数学与三角函数",
      explanation: "ABS 属于 数学与三角函数。"
    }
  ],
  "ACCRINT": [
    {
      type: "choice",
      question: "ACCRINT 函数属于哪一类？",
      options: [
        "财务函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "ACCRINT 属于 财务函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 ACCRINT 函数的正确功能描述？",
      options: [
        "返回定期付息有价证券的应计利息",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "ACCRINT 函数的功能是：返回定期付息有价证券的应计利息"
    },
    {
      type: "fillBlank",
      question: "ACCRINT 函数的类别是？",
      answer: "财务函数",
      explanation: "ACCRINT 属于 财务函数。"
    }
  ],
  "ACCRINTM": [
    {
      type: "choice",
      question: "ACCRINTM 函数属于哪一类？",
      options: [
        "财务函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "ACCRINTM 属于 财务函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 ACCRINTM 函数的正确功能描述？",
      options: [
        "返回到期一次性付息有价证券的应计利息",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "ACCRINTM 函数的功能是：返回到期一次性付息有价证券的应计利息"
    },
    {
      type: "fillBlank",
      question: "ACCRINTM 函数的类别是？",
      answer: "财务函数",
      explanation: "ACCRINTM 属于 财务函数。"
    }
  ],
  "ACOS": [
    {
      type: "choice",
      question: "ACOS 函数属于哪一类？",
      options: [
        "数学与三角函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "ACOS 属于 数学与三角函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 ACOS 函数的正确功能描述？",
      options: [
        "返回数字的反余弦值",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "ACOS 函数的功能是：返回数字的反余弦值"
    },
    {
      type: "fillBlank",
      question: "ACOS 函数的类别是？",
      answer: "数学与三角函数",
      explanation: "ACOS 属于 数学与三角函数。"
    }
  ],
  "ACOSH": [
    {
      type: "choice",
      question: "ACOSH 函数属于哪一类？",
      options: [
        "数学与三角函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "ACOSH 属于 数学与三角函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 ACOSH 函数的正确功能描述？",
      options: [
        "返回参数的反双曲余弦值",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "ACOSH 函数的功能是：返回参数的反双曲余弦值"
    },
    {
      type: "fillBlank",
      question: "ACOSH 函数的类别是？",
      answer: "数学与三角函数",
      explanation: "ACOSH 属于 数学与三角函数。"
    }
  ],
  "ADDRESS": [
    {
      type: "choice",
      question: "ADDRESS 函数属于哪一类？",
      options: [
        "查找与引用函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "ADDRESS 属于 查找与引用函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 ADDRESS 函数的正确功能描述？",
      options: [
        "通过行号和列号返回单元格引用",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "ADDRESS 函数的功能是：通过行号和列号返回单元格引用"
    },
    {
      type: "fillBlank",
      question: "ADDRESS 函数的类别是？",
      answer: "查找与引用函数",
      explanation: "ADDRESS 属于 查找与引用函数。"
    }
  ],
  "AMORDEGRC": [
    {
      type: "choice",
      question: "AMORDEGRC 函数属于哪一类？",
      options: [
        "财务函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "AMORDEGRC 属于 财务函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 AMORDEGRC 函数的正确功能描述？",
      options: [
        "返回每个会计期间的折旧值.此函数是为法国会计系统提供的",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "AMORDEGRC 函数的功能是：返回每个会计期间的折旧值.此函数是为法国会计系统提供的"
    },
    {
      type: "fillBlank",
      question: "AMORDEGRC 函数的类别是？",
      answer: "财务函数",
      explanation: "AMORDEGRC 属于 财务函数。"
    }
  ],
  "AMORLINC": [
    {
      type: "choice",
      question: "AMORLINC 函数属于哪一类？",
      options: [
        "财务函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "AMORLINC 属于 财务函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 AMORLINC 函数的正确功能描述？",
      options: [
        "返回每个会计期间的折旧值,该函数为法国会计系统提供",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "AMORLINC 函数的功能是：返回每个会计期间的折旧值,该函数为法国会计系统提供"
    },
    {
      type: "fillBlank",
      question: "AMORLINC 函数的类别是？",
      answer: "财务函数",
      explanation: "AMORLINC 属于 财务函数。"
    }
  ],
  "AND": [
    {
      type: "choice",
      question: "AND 函数属于哪一类？",
      options: [
        "逻辑函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "AND 属于 逻辑函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 AND 函数的正确功能描述？",
      options: [
        "查看是否满足所有条件",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "AND 函数的功能是：查看是否满足所有条件"
    },
    {
      type: "fillBlank",
      question: "AND 函数的类别是？",
      answer: "逻辑函数",
      explanation: "AND 属于 逻辑函数。"
    }
  ],
  "AREAS": [
    {
      type: "choice",
      question: "AREAS 函数属于哪一类？",
      options: [
        "查找与引用函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "AREAS 属于 查找与引用函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 AREAS 函数的正确功能描述？",
      options: [
        "计算指定范围的领域数",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "AREAS 函数的功能是：计算指定范围的领域数"
    },
    {
      type: "fillBlank",
      question: "AREAS 函数的类别是？",
      answer: "查找与引用函数",
      explanation: "AREAS 属于 查找与引用函数。"
    }
  ],
  "ASC": [
    {
      type: "choice",
      question: "ASC 函数属于哪一类？",
      options: [
        "文本函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "ASC 属于 文本函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 ASC 函数的正确功能描述？",
      options: [
        "将字符串中的全角英文字母转换为半角字符",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "ASC 函数的功能是：将字符串中的全角英文字母转换为半角字符"
    },
    {
      type: "fillBlank",
      question: "ASC 函数的类别是？",
      answer: "文本函数",
      explanation: "ASC 属于 文本函数。"
    }
  ],
  "ASIN": [
    {
      type: "choice",
      question: "ASIN 函数属于哪一类？",
      options: [
        "数学与三角函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "ASIN 属于 数学与三角函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 ASIN 函数的正确功能描述？",
      options: [
        "返回参数的反正弦值",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "ASIN 函数的功能是：返回参数的反正弦值"
    },
    {
      type: "fillBlank",
      question: "ASIN 函数的类别是？",
      answer: "数学与三角函数",
      explanation: "ASIN 属于 数学与三角函数。"
    }
  ],
  "ASINH": [
    {
      type: "choice",
      question: "ASINH 函数属于哪一类？",
      options: [
        "数学与三角函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "ASINH 属于 数学与三角函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 ASINH 函数的正确功能描述？",
      options: [
        "返回参数的反双曲正弦值",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "ASINH 函数的功能是：返回参数的反双曲正弦值"
    },
    {
      type: "fillBlank",
      question: "ASINH 函数的类别是？",
      answer: "数学与三角函数",
      explanation: "ASINH 属于 数学与三角函数。"
    }
  ],
  "ATAN": [
    {
      type: "choice",
      question: "ATAN 函数属于哪一类？",
      options: [
        "数学与三角函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "ATAN 属于 数学与三角函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 ATAN 函数的正确功能描述？",
      options: [
        "返回参数的反正切值",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "ATAN 函数的功能是：返回参数的反正切值"
    },
    {
      type: "fillBlank",
      question: "ATAN 函数的类别是？",
      answer: "数学与三角函数",
      explanation: "ATAN 属于 数学与三角函数。"
    }
  ],
  "ATAN2": [
    {
      type: "choice",
      question: "ATAN2 函数属于哪一类？",
      options: [
        "数学与三角函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "ATAN2 属于 数学与三角函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 ATAN2 函数的正确功能描述？",
      options: [
        "返回给定的X及Y坐标值的反正切值",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "ATAN2 函数的功能是：返回给定的X及Y坐标值的反正切值"
    },
    {
      type: "fillBlank",
      question: "ATAN2 函数的类别是？",
      answer: "数学与三角函数",
      explanation: "ATAN2 属于 数学与三角函数。"
    }
  ],
  "ATANH": [
    {
      type: "choice",
      question: "ATANH 函数属于哪一类？",
      options: [
        "数学与三角函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "ATANH 属于 数学与三角函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 ATANH 函数的正确功能描述？",
      options: [
        "返回参数的反双曲正切值",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "ATANH 函数的功能是：返回参数的反双曲正切值"
    },
    {
      type: "fillBlank",
      question: "ATANH 函数的类别是？",
      answer: "数学与三角函数",
      explanation: "ATANH 属于 数学与三角函数。"
    }
  ],
  "AVEDEV": [
    {
      type: "choice",
      question: "AVEDEV 函数属于哪一类？",
      options: [
        "统计函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "AVEDEV 属于 统计函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 AVEDEV 函数的正确功能描述？",
      options: [
        "返回平均偏差",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "AVEDEV 函数的功能是：返回平均偏差"
    },
    {
      type: "fillBlank",
      question: "AVEDEV 函数的类别是？",
      answer: "统计函数",
      explanation: "AVEDEV 属于 统计函数。"
    }
  ],
  "AVERAGE": [
    {
      type: "choice",
      question: "AVERAGE 函数属于哪一类？",
      options: [
        "统计函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "AVERAGE 属于 统计函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 AVERAGE 函数的正确功能描述？",
      options: [
        "返回参数算术平均值",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "AVERAGE 函数的功能是：返回参数算术平均值"
    },
    {
      type: "fillBlank",
      question: "AVERAGE 函数的类别是？",
      answer: "统计函数",
      explanation: "AVERAGE 属于 统计函数。"
    }
  ],
  "AVERAGEIF": [
    {
      type: "choice",
      question: "AVERAGEIF 函数属于哪一类？",
      options: [
        "统计函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "AVERAGEIF 属于 统计函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 AVERAGEIF 函数的正确功能描述？",
      options: [
        "对满足给定条件的单元格计算算术平均值",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "AVERAGEIF 函数的功能是：对满足给定条件的单元格计算算术平均值"
    },
    {
      type: "fillBlank",
      question: "AVERAGEIF 函数的类别是？",
      answer: "统计函数",
      explanation: "AVERAGEIF 属于 统计函数。"
    }
  ],
  "AVERAGEA": [
    {
      type: "choice",
      question: "AVERAGEA 函数属于哪一类？",
      options: [
        "统计函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "AVERAGEA 属于 统计函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 AVERAGEA 函数的正确功能描述？",
      options: [
        "计算参数所有数值的算数平均值",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "AVERAGEA 函数的功能是：计算参数所有数值的算数平均值"
    },
    {
      type: "fillBlank",
      question: "AVERAGEA 函数的类别是？",
      answer: "统计函数",
      explanation: "AVERAGEA 属于 统计函数。"
    }
  ],
  "BAHTTEXT": [
    {
      type: "choice",
      question: "BAHTTEXT 函数属于哪一类？",
      options: [
        "文本函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "BAHTTEXT 属于 文本函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 BAHTTEXT 函数的正确功能描述？",
      options: [
        "将数值转换为泰语的货币显示形式",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "BAHTTEXT 函数的功能是：将数值转换为泰语的货币显示形式"
    },
    {
      type: "fillBlank",
      question: "BAHTTEXT 函数的类别是？",
      answer: "文本函数",
      explanation: "BAHTTEXT 属于 文本函数。"
    }
  ],
  "BESSELI": [
    {
      type: "choice",
      question: "BESSELI 函数属于哪一类？",
      options: [
        "工程函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "BESSELI 属于 工程函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 BESSELI 函数的正确功能描述？",
      options: [
        "返回第1种修正Bessel函数值Kn(x)",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "BESSELI 函数的功能是：返回第1种修正Bessel函数值Kn(x)"
    },
    {
      type: "fillBlank",
      question: "BESSELI 函数的类别是？",
      answer: "工程函数",
      explanation: "BESSELI 属于 工程函数。"
    }
  ],
  "BESSELJ": [
    {
      type: "choice",
      question: "BESSELJ 函数属于哪一类？",
      options: [
        "工程函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "BESSELJ 属于 工程函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 BESSELJ 函数的正确功能描述？",
      options: [
        "返回第1种Bessel函数值Kn(x)",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "BESSELJ 函数的功能是：返回第1种Bessel函数值Kn(x)"
    },
    {
      type: "fillBlank",
      question: "BESSELJ 函数的类别是？",
      answer: "工程函数",
      explanation: "BESSELJ 属于 工程函数。"
    }
  ],
  "BESSELK": [
    {
      type: "choice",
      question: "BESSELK 函数属于哪一类？",
      options: [
        "工程函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "BESSELK 属于 工程函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 BESSELK 函数的正确功能描述？",
      options: [
        "返回第2种修正Bessel函数值Kn(x)",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "BESSELK 函数的功能是：返回第2种修正Bessel函数值Kn(x)"
    },
    {
      type: "fillBlank",
      question: "BESSELK 函数的类别是？",
      answer: "工程函数",
      explanation: "BESSELK 属于 工程函数。"
    }
  ],
  "BESSELY": [
    {
      type: "choice",
      question: "BESSELY 函数属于哪一类？",
      options: [
        "工程函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "BESSELY 属于 工程函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 BESSELY 函数的正确功能描述？",
      options: [
        "返回第2种Bessel函数值Kn(x)",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "BESSELY 函数的功能是：返回第2种Bessel函数值Kn(x)"
    },
    {
      type: "fillBlank",
      question: "BESSELY 函数的类别是？",
      answer: "工程函数",
      explanation: "BESSELY 属于 工程函数。"
    }
  ],
  "BETADIST": [
    {
      type: "choice",
      question: "BETADIST 函数属于哪一类？",
      options: [
        "统计函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "BETADIST 属于 统计函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 BETADIST 函数的正确功能描述？",
      options: [
        "返回Beta分布累积函数的函数值",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "BETADIST 函数的功能是：返回Beta分布累积函数的函数值"
    },
    {
      type: "fillBlank",
      question: "BETADIST 函数的类别是？",
      answer: "统计函数",
      explanation: "BETADIST 属于 统计函数。"
    }
  ],
  "BETAINV": [
    {
      type: "choice",
      question: "BETAINV 函数属于哪一类？",
      options: [
        "统计函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "BETAINV 属于 统计函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 BETAINV 函数的正确功能描述？",
      options: [
        "返回Beta分布累积函数的反函数值",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "BETAINV 函数的功能是：返回Beta分布累积函数的反函数值"
    },
    {
      type: "fillBlank",
      question: "BETAINV 函数的类别是？",
      answer: "统计函数",
      explanation: "BETAINV 属于 统计函数。"
    }
  ],
  "BIN2DEC": [
    {
      type: "choice",
      question: "BIN2DEC 函数属于哪一类？",
      options: [
        "工程函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "BIN2DEC 属于 工程函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 BIN2DEC 函数的正确功能描述？",
      options: [
        "将二进制数转换为十进数",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "BIN2DEC 函数的功能是：将二进制数转换为十进数"
    },
    {
      type: "fillBlank",
      question: "BIN2DEC 函数的类别是？",
      answer: "工程函数",
      explanation: "BIN2DEC 属于 工程函数。"
    }
  ],
  "BIN2HEX": [
    {
      type: "choice",
      question: "BIN2HEX 函数属于哪一类？",
      options: [
        "工程函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "BIN2HEX 属于 工程函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 BIN2HEX 函数的正确功能描述？",
      options: [
        "将二进制数转换为十六进数",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "BIN2HEX 函数的功能是：将二进制数转换为十六进数"
    },
    {
      type: "fillBlank",
      question: "BIN2HEX 函数的类别是？",
      answer: "工程函数",
      explanation: "BIN2HEX 属于 工程函数。"
    }
  ],
  "BIN2OCT": [
    {
      type: "choice",
      question: "BIN2OCT 函数属于哪一类？",
      options: [
        "工程函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "BIN2OCT 属于 工程函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 BIN2OCT 函数的正确功能描述？",
      options: [
        "将二进制数转换为八进数",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "BIN2OCT 函数的功能是：将二进制数转换为八进数"
    },
    {
      type: "fillBlank",
      question: "BIN2OCT 函数的类别是？",
      answer: "工程函数",
      explanation: "BIN2OCT 属于 工程函数。"
    }
  ],
  "BINOMDIST": [
    {
      type: "choice",
      question: "BINOMDIST 函数属于哪一类？",
      options: [
        "统计函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "BINOMDIST 属于 统计函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 BINOMDIST 函数的正确功能描述？",
      options: [
        "返回一元二项式分布的概率值",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "BINOMDIST 函数的功能是：返回一元二项式分布的概率值"
    },
    {
      type: "fillBlank",
      question: "BINOMDIST 函数的类别是？",
      answer: "统计函数",
      explanation: "BINOMDIST 属于 统计函数。"
    }
  ],
  "CALL": [
    {
      type: "choice",
      question: "CALL 函数属于哪一类？",
      options: [
        "外部函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "CALL 属于 外部函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 CALL 函数的正确功能描述？",
      options: [
        "调用DLL中所含的过程",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "CALL 函数的功能是：调用DLL中所含的过程"
    },
    {
      type: "fillBlank",
      question: "CALL 函数的类别是？",
      answer: "外部函数",
      explanation: "CALL 属于 外部函数。"
    }
  ],
  "CEILNG": [
    {
      type: "choice",
      question: "CEILNG 函数属于哪一类？",
      options: [
        "数学与三角函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "CEILNG 属于 数学与三角函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 CEILNG 函数的正确功能描述？",
      options: [
        "将参数Number沿绝对值增大的方向,舍入为最接通近的整数或基数",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "CEILNG 函数的功能是：将参数Number沿绝对值增大的方向,舍入为最接通近的整数或基数"
    },
    {
      type: "fillBlank",
      question: "CEILNG 函数的类别是？",
      answer: "数学与三角函数",
      explanation: "CEILNG 属于 数学与三角函数。"
    }
  ],
  "CELL": [
    {
      type: "choice",
      question: "CELL 函数属于哪一类？",
      options: [
        "信息函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "CELL 属于 信息函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 CELL 函数的正确功能描述？",
      options: [
        "返回单元格的信息",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "CELL 函数的功能是：返回单元格的信息"
    },
    {
      type: "fillBlank",
      question: "CELL 函数的类别是？",
      answer: "信息函数",
      explanation: "CELL 属于 信息函数。"
    }
  ],
  "CHAR": [
    {
      type: "choice",
      question: "CHAR 函数属于哪一类？",
      options: [
        "文本函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "CHAR 属于 文本函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 CHAR 函数的正确功能描述？",
      options: [
        "返回对应于文字代码的字符",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "CHAR 函数的功能是：返回对应于文字代码的字符"
    },
    {
      type: "fillBlank",
      question: "CHAR 函数的类别是？",
      answer: "文本函数",
      explanation: "CHAR 属于 文本函数。"
    }
  ],
  "CHIDIST": [
    {
      type: "choice",
      question: "CHIDIST 函数属于哪一类？",
      options: [
        "统计函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "CHIDIST 属于 统计函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 CHIDIST 函数的正确功能描述？",
      options: [
        "返回 2分布的单尾概率",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "CHIDIST 函数的功能是：返回 2分布的单尾概率"
    },
    {
      type: "fillBlank",
      question: "CHIDIST 函数的类别是？",
      answer: "统计函数",
      explanation: "CHIDIST 属于 统计函数。"
    }
  ],
  "CHINV": [
    {
      type: "choice",
      question: "CHINV 函数属于哪一类？",
      options: [
        "统计函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "CHINV 属于 统计函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 CHINV 函数的正确功能描述？",
      options: [
        "返回 2分布单尾概率的反函数",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "CHINV 函数的功能是：返回 2分布单尾概率的反函数"
    },
    {
      type: "fillBlank",
      question: "CHINV 函数的类别是？",
      answer: "统计函数",
      explanation: "CHINV 属于 统计函数。"
    }
  ],
  "CHITEST": [
    {
      type: "choice",
      question: "CHITEST 函数属于哪一类？",
      options: [
        "统计函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "CHITEST 属于 统计函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 CHITEST 函数的正确功能描述？",
      options: [
        "返回独立性检验值",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "CHITEST 函数的功能是：返回独立性检验值"
    },
    {
      type: "fillBlank",
      question: "CHITEST 函数的类别是？",
      answer: "统计函数",
      explanation: "CHITEST 属于 统计函数。"
    }
  ],
  "CHOOSE": [
    {
      type: "choice",
      question: "CHOOSE 函数属于哪一类？",
      options: [
        "查找与引用函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "CHOOSE 属于 查找与引用函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 CHOOSE 函数的正确功能描述？",
      options: [
        "从参数列表中选择值",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "CHOOSE 函数的功能是：从参数列表中选择值"
    },
    {
      type: "fillBlank",
      question: "CHOOSE 函数的类别是？",
      answer: "查找与引用函数",
      explanation: "CHOOSE 属于 查找与引用函数。"
    }
  ],
  "CLEAN": [
    {
      type: "choice",
      question: "CLEAN 函数属于哪一类？",
      options: [
        "文本函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "CLEAN 属于 文本函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 CLEAN 函数的正确功能描述？",
      options: [
        "删除文本中不能打印的字符",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "CLEAN 函数的功能是：删除文本中不能打印的字符"
    },
    {
      type: "fillBlank",
      question: "CLEAN 函数的类别是？",
      answer: "文本函数",
      explanation: "CLEAN 属于 文本函数。"
    }
  ],
  "CODE": [
    {
      type: "choice",
      question: "CODE 函数属于哪一类？",
      options: [
        "文本函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "CODE 属于 文本函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 CODE 函数的正确功能描述？",
      options: [
        "返回数字代码",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "CODE 函数的功能是：返回数字代码"
    },
    {
      type: "fillBlank",
      question: "CODE 函数的类别是？",
      answer: "文本函数",
      explanation: "CODE 属于 文本函数。"
    }
  ],
  "COLUMN": [
    {
      type: "choice",
      question: "COLUMN 函数属于哪一类？",
      options: [
        "查找与引用函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "COLUMN 属于 查找与引用函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 COLUMN 函数的正确功能描述？",
      options: [
        "返回列编号",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "COLUMN 函数的功能是：返回列编号"
    },
    {
      type: "fillBlank",
      question: "COLUMN 函数的类别是？",
      answer: "查找与引用函数",
      explanation: "COLUMN 属于 查找与引用函数。"
    }
  ],
  "COLUMNS": [
    {
      type: "choice",
      question: "COLUMNS 函数属于哪一类？",
      options: [
        "查找与引用函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "COLUMNS 属于 查找与引用函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 COLUMNS 函数的正确功能描述？",
      options: [
        "返回列数",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "COLUMNS 函数的功能是：返回列数"
    },
    {
      type: "fillBlank",
      question: "COLUMNS 函数的类别是？",
      answer: "查找与引用函数",
      explanation: "COLUMNS 属于 查找与引用函数。"
    }
  ],
  "COMBIN": [
    {
      type: "choice",
      question: "COMBIN 函数属于哪一类？",
      options: [
        "数学与三角函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "COMBIN 属于 数学与三角函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 COMBIN 函数的正确功能描述？",
      options: [
        "计算组合数或二项系数",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "COMBIN 函数的功能是：计算组合数或二项系数"
    },
    {
      type: "fillBlank",
      question: "COMBIN 函数的类别是？",
      answer: "数学与三角函数",
      explanation: "COMBIN 属于 数学与三角函数。"
    }
  ],
  "COMPLEX": [
    {
      type: "choice",
      question: "COMPLEX 函数属于哪一类？",
      options: [
        "工程函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "COMPLEX 属于 工程函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 COMPLEX 函数的正确功能描述？",
      options: [
        "通过实部和虚部构成复数",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "COMPLEX 函数的功能是：通过实部和虚部构成复数"
    },
    {
      type: "fillBlank",
      question: "COMPLEX 函数的类别是？",
      answer: "工程函数",
      explanation: "COMPLEX 属于 工程函数。"
    }
  ],
  "CONCATENATE": [
    {
      type: "choice",
      question: "CONCATENATE 函数属于哪一类？",
      options: [
        "文本函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "CONCATENATE 属于 文本函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 CONCATENATE 函数的正确功能描述？",
      options: [
        "将若干文字串合并到一个文字串中",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "CONCATENATE 函数的功能是：将若干文字串合并到一个文字串中"
    },
    {
      type: "fillBlank",
      question: "CONCATENATE 函数的类别是？",
      answer: "文本函数",
      explanation: "CONCATENATE 属于 文本函数。"
    }
  ],
  "CONFIDENCE": [
    {
      type: "choice",
      question: "CONFIDENCE 函数属于哪一类？",
      options: [
        "统计函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "CONFIDENCE 属于 统计函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 CONFIDENCE 函数的正确功能描述？",
      options: [
        "返回数据集的置信区间",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "CONFIDENCE 函数的功能是：返回数据集的置信区间"
    },
    {
      type: "fillBlank",
      question: "CONFIDENCE 函数的类别是？",
      answer: "统计函数",
      explanation: "CONFIDENCE 属于 统计函数。"
    }
  ],
  "CONVERT": [
    {
      type: "choice",
      question: "CONVERT 函数属于哪一类？",
      options: [
        "工程函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "CONVERT 属于 工程函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 CONVERT 函数的正确功能描述？",
      options: [
        "将数字从一个度量系统转换到另一个度量系统中",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "CONVERT 函数的功能是：将数字从一个度量系统转换到另一个度量系统中"
    },
    {
      type: "fillBlank",
      question: "CONVERT 函数的类别是？",
      answer: "工程函数",
      explanation: "CONVERT 属于 工程函数。"
    }
  ],
  "CORREL": [
    {
      type: "choice",
      question: "CORREL 函数属于哪一类？",
      options: [
        "统计函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "CORREL 属于 统计函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 CORREL 函数的正确功能描述？",
      options: [
        "返回相关系统",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "CORREL 函数的功能是：返回相关系统"
    },
    {
      type: "fillBlank",
      question: "CORREL 函数的类别是？",
      answer: "统计函数",
      explanation: "CORREL 属于 统计函数。"
    }
  ],
  "COS": [
    {
      type: "choice",
      question: "COS 函数属于哪一类？",
      options: [
        "数学与三角函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "COS 属于 数学与三角函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 COS 函数的正确功能描述？",
      options: [
        "返回给定角度的余弦值",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "COS 函数的功能是：返回给定角度的余弦值"
    },
    {
      type: "fillBlank",
      question: "COS 函数的类别是？",
      answer: "数学与三角函数",
      explanation: "COS 属于 数学与三角函数。"
    }
  ],
  "COSH": [
    {
      type: "choice",
      question: "COSH 函数属于哪一类？",
      options: [
        "数学与三角函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "COSH 属于 数学与三角函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 COSH 函数的正确功能描述？",
      options: [
        "返回参数的双曲余弦值",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "COSH 函数的功能是：返回参数的双曲余弦值"
    },
    {
      type: "fillBlank",
      question: "COSH 函数的类别是？",
      answer: "数学与三角函数",
      explanation: "COSH 属于 数学与三角函数。"
    }
  ],
  "COUNT": [
    {
      type: "choice",
      question: "COUNT 函数属于哪一类？",
      options: [
        "统计函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "COUNT 属于 统计函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 COUNT 函数的正确功能描述？",
      options: [
        "返回日期和数值的个数",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "COUNT 函数的功能是：返回日期和数值的个数"
    },
    {
      type: "fillBlank",
      question: "COUNT 函数的类别是？",
      answer: "统计函数",
      explanation: "COUNT 属于 统计函数。"
    }
  ],
  "COUNTA": [
    {
      type: "choice",
      question: "COUNTA 函数属于哪一类？",
      options: [
        "统计函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "COUNTA 属于 统计函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 COUNTA 函数的正确功能描述？",
      options: [
        "返回参数组中非空值的个数",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "COUNTA 函数的功能是：返回参数组中非空值的个数"
    },
    {
      type: "fillBlank",
      question: "COUNTA 函数的类别是？",
      answer: "统计函数",
      explanation: "COUNTA 属于 统计函数。"
    }
  ],
  "COUNTBLANK": [
    {
      type: "choice",
      question: "COUNTBLANK 函数属于哪一类？",
      options: [
        "统计函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "COUNTBLANK 属于 统计函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 COUNTBLANK 函数的正确功能描述？",
      options: [
        "返回参数组中空值的个数",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "COUNTBLANK 函数的功能是：返回参数组中空值的个数"
    },
    {
      type: "fillBlank",
      question: "COUNTBLANK 函数的类别是？",
      answer: "统计函数",
      explanation: "COUNTBLANK 属于 统计函数。"
    }
  ],
  "COUNTIF": [
    {
      type: "choice",
      question: "COUNTIF 函数属于哪一类？",
      options: [
        "统计函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "COUNTIF 属于 统计函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 COUNTIF 函数的正确功能描述？",
      options: [
        "计算给定区域内满足特定条件的单元格的数目",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "COUNTIF 函数的功能是：计算给定区域内满足特定条件的单元格的数目"
    },
    {
      type: "fillBlank",
      question: "COUNTIF 函数的类别是？",
      answer: "统计函数",
      explanation: "COUNTIF 属于 统计函数。"
    }
  ],
  "COUPDAYBS": [
    {
      type: "choice",
      question: "COUPDAYBS 函数属于哪一类？",
      options: [
        "财务函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "COUPDAYBS 属于 财务函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 COUPDAYBS 函数的正确功能描述？",
      options: [
        "返回当前付息期内截止到成交日的天数",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "COUPDAYBS 函数的功能是：返回当前付息期内截止到成交日的天数"
    },
    {
      type: "fillBlank",
      question: "COUPDAYBS 函数的类别是？",
      answer: "财务函数",
      explanation: "COUPDAYBS 属于 财务函数。"
    }
  ],
  "COUPDAYS": [
    {
      type: "choice",
      question: "COUPDAYS 函数属于哪一类？",
      options: [
        "财务函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "COUPDAYS 属于 财务函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 COUPDAYS 函数的正确功能描述？",
      options: [
        "返回成交日所在的付息期的天数",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "COUPDAYS 函数的功能是：返回成交日所在的付息期的天数"
    },
    {
      type: "fillBlank",
      question: "COUPDAYS 函数的类别是？",
      answer: "财务函数",
      explanation: "COUPDAYS 属于 财务函数。"
    }
  ],
  "COUPDAYSNC": [
    {
      type: "choice",
      question: "COUPDAYSNC 函数属于哪一类？",
      options: [
        "财务函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "COUPDAYSNC 属于 财务函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 COUPDAYSNC 函数的正确功能描述？",
      options: [
        "返回从成交日到下一付息日之间的天数",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "COUPDAYSNC 函数的功能是：返回从成交日到下一付息日之间的天数"
    },
    {
      type: "fillBlank",
      question: "COUPDAYSNC 函数的类别是？",
      answer: "财务函数",
      explanation: "COUPDAYSNC 属于 财务函数。"
    }
  ],
  "COUPNCD": [
    {
      type: "choice",
      question: "COUPNCD 函数属于哪一类？",
      options: [
        "财务函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "COUPNCD 属于 财务函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 COUPNCD 函数的正确功能描述？",
      options: [
        "返回成交日过后的下一付息日的日期",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "COUPNCD 函数的功能是：返回成交日过后的下一付息日的日期"
    },
    {
      type: "fillBlank",
      question: "COUPNCD 函数的类别是？",
      answer: "财务函数",
      explanation: "COUPNCD 属于 财务函数。"
    }
  ],
  "COUPNUM": [
    {
      type: "choice",
      question: "COUPNUM 函数属于哪一类？",
      options: [
        "财务函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "COUPNUM 属于 财务函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 COUPNUM 函数的正确功能描述？",
      options: [
        "返回成交日和到期日之间的利息应付次数",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "COUPNUM 函数的功能是：返回成交日和到期日之间的利息应付次数"
    },
    {
      type: "fillBlank",
      question: "COUPNUM 函数的类别是？",
      answer: "财务函数",
      explanation: "COUPNUM 属于 财务函数。"
    }
  ],
  "COUPPCD": [
    {
      type: "choice",
      question: "COUPPCD 函数属于哪一类？",
      options: [
        "财务函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "COUPPCD 属于 财务函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 COUPPCD 函数的正确功能描述？",
      options: [
        "返回成交日之前的上一付息日的日期",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "COUPPCD 函数的功能是：返回成交日之前的上一付息日的日期"
    },
    {
      type: "fillBlank",
      question: "COUPPCD 函数的类别是？",
      answer: "财务函数",
      explanation: "COUPPCD 属于 财务函数。"
    }
  ],
  "COVAR": [
    {
      type: "choice",
      question: "COVAR 函数属于哪一类？",
      options: [
        "统计函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "COVAR 属于 统计函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 COVAR 函数的正确功能描述？",
      options: [
        "返回协方差",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "COVAR 函数的功能是：返回协方差"
    },
    {
      type: "fillBlank",
      question: "COVAR 函数的类别是？",
      answer: "统计函数",
      explanation: "COVAR 属于 统计函数。"
    }
  ],
  "CRITBINOM": [
    {
      type: "choice",
      question: "CRITBINOM 函数属于哪一类？",
      options: [
        "统计函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "CRITBINOM 属于 统计函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 CRITBINOM 函数的正确功能描述？",
      options: [
        "返回使累积二项式分布大于等于临界值的最小值",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "CRITBINOM 函数的功能是：返回使累积二项式分布大于等于临界值的最小值"
    },
    {
      type: "fillBlank",
      question: "CRITBINOM 函数的类别是？",
      answer: "统计函数",
      explanation: "CRITBINOM 属于 统计函数。"
    }
  ],
  "CUMIPMT": [
    {
      type: "choice",
      question: "CUMIPMT 函数属于哪一类？",
      options: [
        "财务函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "CUMIPMT 属于 财务函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 CUMIPMT 函数的正确功能描述？",
      options: [
        "返回贷款在给定期间累计偿还和利息数额",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "CUMIPMT 函数的功能是：返回贷款在给定期间累计偿还和利息数额"
    },
    {
      type: "fillBlank",
      question: "CUMIPMT 函数的类别是？",
      answer: "财务函数",
      explanation: "CUMIPMT 属于 财务函数。"
    }
  ],
  "CUMPRINC": [
    {
      type: "choice",
      question: "CUMPRINC 函数属于哪一类？",
      options: [
        "财务函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "CUMPRINC 属于 财务函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 CUMPRINC 函数的正确功能描述？",
      options: [
        "返回贷款在给定期间累计偿还和本金数额",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "CUMPRINC 函数的功能是：返回贷款在给定期间累计偿还和本金数额"
    },
    {
      type: "fillBlank",
      question: "CUMPRINC 函数的类别是？",
      answer: "财务函数",
      explanation: "CUMPRINC 属于 财务函数。"
    }
  ],
  "DATE": [
    {
      type: "choice",
      question: "DATE 函数属于哪一类？",
      options: [
        "日期与时间函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "DATE 属于 日期与时间函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 DATE 函数的正确功能描述？",
      options: [
        "通过年、月或日返回日期",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "DATE 函数的功能是：通过年、月或日返回日期"
    },
    {
      type: "fillBlank",
      question: "DATE 函数的类别是？",
      answer: "日期与时间函数",
      explanation: "DATE 属于 日期与时间函数。"
    }
  ],
  "DATEDIF": [
    {
      type: "choice",
      question: "DATEDIF 函数属于哪一类？",
      options: [
        "日期与时间函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "DATEDIF 属于 日期与时间函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 DATEDIF 函数的正确功能描述？",
      options: [
        "计算期间内的天数、月数或年数",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "DATEDIF 函数的功能是：计算期间内的天数、月数或年数"
    },
    {
      type: "fillBlank",
      question: "DATEDIF 函数的类别是？",
      answer: "日期与时间函数",
      explanation: "DATEDIF 属于 日期与时间函数。"
    }
  ],
  "DATEVALUE": [
    {
      type: "choice",
      question: "DATEVALUE 函数属于哪一类？",
      options: [
        "日期与时间函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "DATEVALUE 属于 日期与时间函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 DATEVALUE 函数的正确功能描述？",
      options: [
        "将以文字表示的日期转换成系列数",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "DATEVALUE 函数的功能是：将以文字表示的日期转换成系列数"
    },
    {
      type: "fillBlank",
      question: "DATEVALUE 函数的类别是？",
      answer: "日期与时间函数",
      explanation: "DATEVALUE 属于 日期与时间函数。"
    }
  ],
  "DAVERAGE": [
    {
      type: "choice",
      question: "DAVERAGE 函数属于哪一类？",
      options: [
        "数据库函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "DAVERAGE 属于 数据库函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 DAVERAGE 函数的正确功能描述？",
      options: [
        "返回满足条件的列的平均",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "DAVERAGE 函数的功能是：返回满足条件的列的平均"
    },
    {
      type: "fillBlank",
      question: "DAVERAGE 函数的类别是？",
      answer: "数据库函数",
      explanation: "DAVERAGE 属于 数据库函数。"
    }
  ],
  "DAY": [
    {
      type: "choice",
      question: "DAY 函数属于哪一类？",
      options: [
        "日期与时间函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "DAY 属于 日期与时间函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 DAY 函数的正确功能描述？",
      options: [
        "从日期中返回\"日\"",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "DAY 函数的功能是：从日期中返回\"日\""
    },
    {
      type: "fillBlank",
      question: "DAY 函数的类别是？",
      answer: "日期与时间函数",
      explanation: "DAY 属于 日期与时间函数。"
    }
  ],
  "DAYS360": [
    {
      type: "choice",
      question: "DAYS360 函数属于哪一类？",
      options: [
        "日期与时间函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "DAYS360 属于 日期与时间函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 DAYS360 函数的正确功能描述？",
      options: [
        "按照一年360天的算法,返回两日期间相差的天数",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "DAYS360 函数的功能是：按照一年360天的算法,返回两日期间相差的天数"
    },
    {
      type: "fillBlank",
      question: "DAYS360 函数的类别是？",
      answer: "日期与时间函数",
      explanation: "DAYS360 属于 日期与时间函数。"
    }
  ],
  "DB": [
    {
      type: "choice",
      question: "DB 函数属于哪一类？",
      options: [
        "财务函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "DB 属于 财务函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 DB 函数的正确功能描述？",
      options: [
        "用固定余额递减法算计折旧费",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "DB 函数的功能是：用固定余额递减法算计折旧费"
    },
    {
      type: "fillBlank",
      question: "DB 函数的类别是？",
      answer: "财务函数",
      explanation: "DB 属于 财务函数。"
    }
  ],
  "DCOUNT": [
    {
      type: "choice",
      question: "DCOUNT 函数属于哪一类？",
      options: [
        "数据库函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "DCOUNT 属于 数据库函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 DCOUNT 函数的正确功能描述？",
      options: [
        "返回满足条件的数值的个数",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "DCOUNT 函数的功能是：返回满足条件的数值的个数"
    },
    {
      type: "fillBlank",
      question: "DCOUNT 函数的类别是？",
      answer: "数据库函数",
      explanation: "DCOUNT 属于 数据库函数。"
    }
  ],
  "DCOUNTA": [
    {
      type: "choice",
      question: "DCOUNTA 函数属于哪一类？",
      options: [
        "数据库函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "DCOUNTA 属于 数据库函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 DCOUNTA 函数的正确功能描述？",
      options: [
        "返回满足条件的非空单元格的个数",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "DCOUNTA 函数的功能是：返回满足条件的非空单元格的个数"
    },
    {
      type: "fillBlank",
      question: "DCOUNTA 函数的类别是？",
      answer: "数据库函数",
      explanation: "DCOUNTA 属于 数据库函数。"
    }
  ],
  "DDB": [
    {
      type: "choice",
      question: "DDB 函数属于哪一类？",
      options: [
        "财务函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "DDB 属于 财务函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 DDB 函数的正确功能描述？",
      options: [
        "用双倍余额递减法计算折旧费",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "DDB 函数的功能是：用双倍余额递减法计算折旧费"
    },
    {
      type: "fillBlank",
      question: "DDB 函数的类别是？",
      answer: "财务函数",
      explanation: "DDB 属于 财务函数。"
    }
  ],
  "DEC2BIN": [
    {
      type: "choice",
      question: "DEC2BIN 函数属于哪一类？",
      options: [
        "工程函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "DEC2BIN 属于 工程函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 DEC2BIN 函数的正确功能描述？",
      options: [
        "将十进制数转换为二进制数",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "DEC2BIN 函数的功能是：将十进制数转换为二进制数"
    },
    {
      type: "fillBlank",
      question: "DEC2BIN 函数的类别是？",
      answer: "工程函数",
      explanation: "DEC2BIN 属于 工程函数。"
    }
  ],
  "DEC2HEX": [
    {
      type: "choice",
      question: "DEC2HEX 函数属于哪一类？",
      options: [
        "工程函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "DEC2HEX 属于 工程函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 DEC2HEX 函数的正确功能描述？",
      options: [
        "将十进制数转换为十六进制数",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "DEC2HEX 函数的功能是：将十进制数转换为十六进制数"
    },
    {
      type: "fillBlank",
      question: "DEC2HEX 函数的类别是？",
      answer: "工程函数",
      explanation: "DEC2HEX 属于 工程函数。"
    }
  ],
  "DEC2OCT": [
    {
      type: "choice",
      question: "DEC2OCT 函数属于哪一类？",
      options: [
        "工程函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "DEC2OCT 属于 工程函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 DEC2OCT 函数的正确功能描述？",
      options: [
        "将十进制数转换为八进制数",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "DEC2OCT 函数的功能是：将十进制数转换为八进制数"
    },
    {
      type: "fillBlank",
      question: "DEC2OCT 函数的类别是？",
      answer: "工程函数",
      explanation: "DEC2OCT 属于 工程函数。"
    }
  ],
  "DEGREES": [
    {
      type: "choice",
      question: "DEGREES 函数属于哪一类？",
      options: [
        "数学与三角函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "DEGREES 属于 数学与三角函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 DEGREES 函数的正确功能描述？",
      options: [
        "将弧度转换为度",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "DEGREES 函数的功能是：将弧度转换为度"
    },
    {
      type: "fillBlank",
      question: "DEGREES 函数的类别是？",
      answer: "数学与三角函数",
      explanation: "DEGREES 属于 数学与三角函数。"
    }
  ],
  "DELTA": [
    {
      type: "choice",
      question: "DELTA 函数属于哪一类？",
      options: [
        "工程函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "DELTA 属于 工程函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 DELTA 函数的正确功能描述？",
      options: [
        "测试两个数值是否相等",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "DELTA 函数的功能是：测试两个数值是否相等"
    },
    {
      type: "fillBlank",
      question: "DELTA 函数的类别是？",
      answer: "工程函数",
      explanation: "DELTA 属于 工程函数。"
    }
  ],
  "DEVSQ": [
    {
      type: "choice",
      question: "DEVSQ 函数属于哪一类？",
      options: [
        "统计函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "DEVSQ 属于 统计函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 DEVSQ 函数的正确功能描述？",
      options: [
        "返回数据点与各自样本均值偏差的平方和",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "DEVSQ 函数的功能是：返回数据点与各自样本均值偏差的平方和"
    },
    {
      type: "fillBlank",
      question: "DEVSQ 函数的类别是？",
      answer: "统计函数",
      explanation: "DEVSQ 属于 统计函数。"
    }
  ],
  "DGET": [
    {
      type: "choice",
      question: "DGET 函数属于哪一类？",
      options: [
        "数据库函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "DGET 属于 数据库函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 DGET 函数的正确功能描述？",
      options: [
        "寻找满足条件的行",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "DGET 函数的功能是：寻找满足条件的行"
    },
    {
      type: "fillBlank",
      question: "DGET 函数的类别是？",
      answer: "数据库函数",
      explanation: "DGET 属于 数据库函数。"
    }
  ],
  "DISC": [
    {
      type: "choice",
      question: "DISC 函数属于哪一类？",
      options: [
        "财务函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "DISC 属于 财务函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 DISC 函数的正确功能描述？",
      options: [
        "返回有价证券的贴现率",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "DISC 函数的功能是：返回有价证券的贴现率"
    },
    {
      type: "fillBlank",
      question: "DISC 函数的类别是？",
      answer: "财务函数",
      explanation: "DISC 属于 财务函数。"
    }
  ],
  "DMAX": [
    {
      type: "choice",
      question: "DMAX 函数属于哪一类？",
      options: [
        "数据库函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "DMAX 属于 数据库函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 DMAX 函数的正确功能描述？",
      options: [
        "返回满足条件的最大值",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "DMAX 函数的功能是：返回满足条件的最大值"
    },
    {
      type: "fillBlank",
      question: "DMAX 函数的类别是？",
      answer: "数据库函数",
      explanation: "DMAX 属于 数据库函数。"
    }
  ],
  "DMIN": [
    {
      type: "choice",
      question: "DMIN 函数属于哪一类？",
      options: [
        "数据库函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "DMIN 属于 数据库函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 DMIN 函数的正确功能描述？",
      options: [
        "返回满足条件的最小值",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "DMIN 函数的功能是：返回满足条件的最小值"
    },
    {
      type: "fillBlank",
      question: "DMIN 函数的类别是？",
      answer: "数据库函数",
      explanation: "DMIN 属于 数据库函数。"
    }
  ],
  "DOLLAR": [
    {
      type: "choice",
      question: "DOLLAR 函数属于哪一类？",
      options: [
        "文本函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "DOLLAR 属于 文本函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 DOLLAR 函数的正确功能描述？",
      options: [
        "将数值带上美元符号和千位分隔符",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "DOLLAR 函数的功能是：将数值带上美元符号和千位分隔符"
    },
    {
      type: "fillBlank",
      question: "DOLLAR 函数的类别是？",
      answer: "文本函数",
      explanation: "DOLLAR 属于 文本函数。"
    }
  ],
  "DOLLARDE": [
    {
      type: "choice",
      question: "DOLLARDE 函数属于哪一类？",
      options: [
        "财务函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "DOLLARDE 属于 财务函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 DOLLARDE 函数的正确功能描述？",
      options: [
        "将按分数表示的美元价格转换为按小数表示",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "DOLLARDE 函数的功能是：将按分数表示的美元价格转换为按小数表示"
    },
    {
      type: "fillBlank",
      question: "DOLLARDE 函数的类别是？",
      answer: "财务函数",
      explanation: "DOLLARDE 属于 财务函数。"
    }
  ],
  "DOLLARFR": [
    {
      type: "choice",
      question: "DOLLARFR 函数属于哪一类？",
      options: [
        "财务函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "DOLLARFR 属于 财务函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 DOLLARFR 函数的正确功能描述？",
      options: [
        "将按小数表示的美元价格转换为按分数表示",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "DOLLARFR 函数的功能是：将按小数表示的美元价格转换为按分数表示"
    },
    {
      type: "fillBlank",
      question: "DOLLARFR 函数的类别是？",
      answer: "财务函数",
      explanation: "DOLLARFR 属于 财务函数。"
    }
  ],
  "DPRODUCT": [
    {
      type: "choice",
      question: "DPRODUCT 函数属于哪一类？",
      options: [
        "数据库函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "DPRODUCT 属于 数据库函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 DPRODUCT 函数的正确功能描述？",
      options: [
        "返回满足条件的列的积",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "DPRODUCT 函数的功能是：返回满足条件的列的积"
    },
    {
      type: "fillBlank",
      question: "DPRODUCT 函数的类别是？",
      answer: "数据库函数",
      explanation: "DPRODUCT 属于 数据库函数。"
    }
  ],
  "DSTDEV": [
    {
      type: "choice",
      question: "DSTDEV 函数属于哪一类？",
      options: [
        "数据库函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "DSTDEV 属于 数据库函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 DSTDEV 函数的正确功能描述？",
      options: [
        "通过满足条件的行返回不偏标准偏差",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "DSTDEV 函数的功能是：通过满足条件的行返回不偏标准偏差"
    },
    {
      type: "fillBlank",
      question: "DSTDEV 函数的类别是？",
      answer: "数据库函数",
      explanation: "DSTDEV 属于 数据库函数。"
    }
  ],
  "DSTDEVP": [
    {
      type: "choice",
      question: "DSTDEVP 函数属于哪一类？",
      options: [
        "数据库函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "DSTDEVP 属于 数据库函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 DSTDEVP 函数的正确功能描述？",
      options: [
        "通过满足条件的行返回标准偏差",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "DSTDEVP 函数的功能是：通过满足条件的行返回标准偏差"
    },
    {
      type: "fillBlank",
      question: "DSTDEVP 函数的类别是？",
      answer: "数据库函数",
      explanation: "DSTDEVP 属于 数据库函数。"
    }
  ],
  "DSUM": [
    {
      type: "choice",
      question: "DSUM 函数属于哪一类？",
      options: [
        "数据库函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "DSUM 属于 数据库函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 DSUM 函数的正确功能描述？",
      options: [
        "返回满足条件的列的合计",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "DSUM 函数的功能是：返回满足条件的列的合计"
    },
    {
      type: "fillBlank",
      question: "DSUM 函数的类别是？",
      answer: "数据库函数",
      explanation: "DSUM 属于 数据库函数。"
    }
  ],
  "DURATION": [
    {
      type: "choice",
      question: "DURATION 函数属于哪一类？",
      options: [
        "财务函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "DURATION 属于 财务函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 DURATION 函数的正确功能描述？",
      options: [
        "返回定期付息有价证券的修正期限",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "DURATION 函数的功能是：返回定期付息有价证券的修正期限"
    },
    {
      type: "fillBlank",
      question: "DURATION 函数的类别是？",
      answer: "财务函数",
      explanation: "DURATION 属于 财务函数。"
    }
  ],
  "DVAR": [
    {
      type: "choice",
      question: "DVAR 函数属于哪一类？",
      options: [
        "数据库函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "DVAR 属于 数据库函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 DVAR 函数的正确功能描述？",
      options: [
        "通过满足条件的行返回不偏分散",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "DVAR 函数的功能是：通过满足条件的行返回不偏分散"
    },
    {
      type: "fillBlank",
      question: "DVAR 函数的类别是？",
      answer: "数据库函数",
      explanation: "DVAR 属于 数据库函数。"
    }
  ],
  "DVARP": [
    {
      type: "choice",
      question: "DVARP 函数属于哪一类？",
      options: [
        "数据库函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "DVARP 属于 数据库函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 DVARP 函数的正确功能描述？",
      options: [
        "通过满足条件的行返回分散",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "DVARP 函数的功能是：通过满足条件的行返回分散"
    },
    {
      type: "fillBlank",
      question: "DVARP 函数的类别是？",
      answer: "数据库函数",
      explanation: "DVARP 属于 数据库函数。"
    }
  ],
  "EDATE": [
    {
      type: "choice",
      question: "EDATE 函数属于哪一类？",
      options: [
        "日期与时间函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "EDATE 属于 日期与时间函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 EDATE 函数的正确功能描述？",
      options: [
        "返回数月前或数月后的日期",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "EDATE 函数的功能是：返回数月前或数月后的日期"
    },
    {
      type: "fillBlank",
      question: "EDATE 函数的类别是？",
      answer: "日期与时间函数",
      explanation: "EDATE 属于 日期与时间函数。"
    }
  ],
  "EFFECT": [
    {
      type: "choice",
      question: "EFFECT 函数属于哪一类？",
      options: [
        "财务函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "EFFECT 属于 财务函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 EFFECT 函数的正确功能描述？",
      options: [
        "返回实际年利率",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "EFFECT 函数的功能是：返回实际年利率"
    },
    {
      type: "fillBlank",
      question: "EFFECT 函数的类别是？",
      answer: "财务函数",
      explanation: "EFFECT 属于 财务函数。"
    }
  ],
  "EOMONTH": [
    {
      type: "choice",
      question: "EOMONTH 函数属于哪一类？",
      options: [
        "日期与时间函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "EOMONTH 属于 日期与时间函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 EOMONTH 函数的正确功能描述？",
      options: [
        "返回数月前或数月后的月末",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "EOMONTH 函数的功能是：返回数月前或数月后的月末"
    },
    {
      type: "fillBlank",
      question: "EOMONTH 函数的类别是？",
      answer: "日期与时间函数",
      explanation: "EOMONTH 属于 日期与时间函数。"
    }
  ],
  "ERF": [
    {
      type: "choice",
      question: "ERF 函数属于哪一类？",
      options: [
        "工程函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "ERF 属于 工程函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 ERF 函数的正确功能描述？",
      options: [
        "返回误差函数在上下限之间的积分",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "ERF 函数的功能是：返回误差函数在上下限之间的积分"
    },
    {
      type: "fillBlank",
      question: "ERF 函数的类别是？",
      answer: "工程函数",
      explanation: "ERF 属于 工程函数。"
    }
  ],
  "ERFC": [
    {
      type: "choice",
      question: "ERFC 函数属于哪一类？",
      options: [
        "工程函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "ERFC 属于 工程函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 ERFC 函数的正确功能描述？",
      options: [
        "返回余误差函数的积分",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "ERFC 函数的功能是：返回余误差函数的积分"
    },
    {
      type: "fillBlank",
      question: "ERFC 函数的类别是？",
      answer: "工程函数",
      explanation: "ERFC 属于 工程函数。"
    }
  ],
  "ERROR.TYPE": [
    {
      type: "choice",
      question: "ERROR.TYPE 函数属于哪一类？",
      options: [
        "信息函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "ERROR.TYPE 属于 信息函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 ERROR.TYPE 函数的正确功能描述？",
      options: [
        "查看错误种类",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "ERROR.TYPE 函数的功能是：查看错误种类"
    },
    {
      type: "fillBlank",
      question: "ERROR.TYPE 函数的类别是？",
      answer: "信息函数",
      explanation: "ERROR.TYPE 属于 信息函数。"
    }
  ],
  "EUROCONVERT": [
    {
      type: "choice",
      question: "EUROCONVERT 函数属于哪一类？",
      options: [
        "外部函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "EUROCONVERT 属于 外部函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 EUROCONVERT 函数的正确功能描述？",
      options: [
        "欧盟货币的相互转换",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "EUROCONVERT 函数的功能是：欧盟货币的相互转换"
    },
    {
      type: "fillBlank",
      question: "EUROCONVERT 函数的类别是？",
      answer: "外部函数",
      explanation: "EUROCONVERT 属于 外部函数。"
    }
  ],
  "EVEN": [
    {
      type: "choice",
      question: "EVEN 函数属于哪一类？",
      options: [
        "数学与三角函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "EVEN 属于 数学与三角函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 EVEN 函数的正确功能描述？",
      options: [
        "返回沿绝对值增大方向取整后最接近的偶数",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "EVEN 函数的功能是：返回沿绝对值增大方向取整后最接近的偶数"
    },
    {
      type: "fillBlank",
      question: "EVEN 函数的类别是？",
      answer: "数学与三角函数",
      explanation: "EVEN 属于 数学与三角函数。"
    }
  ],
  "EXACT": [
    {
      type: "choice",
      question: "EXACT 函数属于哪一类？",
      options: [
        "文本函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "EXACT 属于 文本函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 EXACT 函数的正确功能描述？",
      options: [
        "比较文本,查看是否相等",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "EXACT 函数的功能是：比较文本,查看是否相等"
    },
    {
      type: "fillBlank",
      question: "EXACT 函数的类别是？",
      answer: "文本函数",
      explanation: "EXACT 属于 文本函数。"
    }
  ],
  "EXP": [
    {
      type: "choice",
      question: "EXP 函数属于哪一类？",
      options: [
        "数学与三角函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "EXP 属于 数学与三角函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 EXP 函数的正确功能描述？",
      options: [
        "返回自然对数的底数e的幂预算",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "EXP 函数的功能是：返回自然对数的底数e的幂预算"
    },
    {
      type: "fillBlank",
      question: "EXP 函数的类别是？",
      answer: "数学与三角函数",
      explanation: "EXP 属于 数学与三角函数。"
    }
  ],
  "EXPONDIST": [
    {
      type: "choice",
      question: "EXPONDIST 函数属于哪一类？",
      options: [
        "统计函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "EXPONDIST 属于 统计函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 EXPONDIST 函数的正确功能描述？",
      options: [
        "返回指数分布的值",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "EXPONDIST 函数的功能是：返回指数分布的值"
    },
    {
      type: "fillBlank",
      question: "EXPONDIST 函数的类别是？",
      answer: "统计函数",
      explanation: "EXPONDIST 属于 统计函数。"
    }
  ],
  "FACT": [
    {
      type: "choice",
      question: "FACT 函数属于哪一类？",
      options: [
        "数学与三角函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "FACT 属于 数学与三角函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 FACT 函数的正确功能描述？",
      options: [
        "返回参数的阶乘",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "FACT 函数的功能是：返回参数的阶乘"
    },
    {
      type: "fillBlank",
      question: "FACT 函数的类别是？",
      answer: "数学与三角函数",
      explanation: "FACT 属于 数学与三角函数。"
    }
  ],
  "FACTDOUBLE": [
    {
      type: "choice",
      question: "FACTDOUBLE 函数属于哪一类？",
      options: [
        "数学与三角函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "FACTDOUBLE 属于 数学与三角函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 FACTDOUBLE 函数的正确功能描述？",
      options: [
        "返回参数的半阶乘",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "FACTDOUBLE 函数的功能是：返回参数的半阶乘"
    },
    {
      type: "fillBlank",
      question: "FACTDOUBLE 函数的类别是？",
      answer: "数学与三角函数",
      explanation: "FACTDOUBLE 属于 数学与三角函数。"
    }
  ],
  "FDIST": [
    {
      type: "choice",
      question: "FDIST 函数属于哪一类？",
      options: [
        "统计函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "FDIST 属于 统计函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 FDIST 函数的正确功能描述？",
      options: [
        "返回F概率分布",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "FDIST 函数的功能是：返回F概率分布"
    },
    {
      type: "fillBlank",
      question: "FDIST 函数的类别是？",
      answer: "统计函数",
      explanation: "FDIST 属于 统计函数。"
    }
  ],
  "FIND": [
    {
      type: "choice",
      question: "FIND 函数属于哪一类？",
      options: [
        "文本函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "FIND 属于 文本函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 FIND 函数的正确功能描述？",
      options: [
        "区分大小写,查看文本位置",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "FIND 函数的功能是：区分大小写,查看文本位置"
    },
    {
      type: "fillBlank",
      question: "FIND 函数的类别是？",
      answer: "文本函数",
      explanation: "FIND 属于 文本函数。"
    }
  ],
  "FINDB": [
    {
      type: "choice",
      question: "FINDB 函数属于哪一类？",
      options: [
        "文本函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "FINDB 属于 文本函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 FINDB 函数的正确功能描述？",
      options: [
        "区分大小写,查看字节位置",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "FINDB 函数的功能是：区分大小写,查看字节位置"
    },
    {
      type: "fillBlank",
      question: "FINDB 函数的类别是？",
      answer: "文本函数",
      explanation: "FINDB 属于 文本函数。"
    }
  ],
  "FINV": [
    {
      type: "choice",
      question: "FINV 函数属于哪一类？",
      options: [
        "统计函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "FINV 属于 统计函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 FINV 函数的正确功能描述？",
      options: [
        "返回F概率分布的反函数值",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "FINV 函数的功能是：返回F概率分布的反函数值"
    },
    {
      type: "fillBlank",
      question: "FINV 函数的类别是？",
      answer: "统计函数",
      explanation: "FINV 属于 统计函数。"
    }
  ],
  "FISHER": [
    {
      type: "choice",
      question: "FISHER 函数属于哪一类？",
      options: [
        "统计函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "FISHER 属于 统计函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 FISHER 函数的正确功能描述？",
      options: [
        "返回Fisher变换",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "FISHER 函数的功能是：返回Fisher变换"
    },
    {
      type: "fillBlank",
      question: "FISHER 函数的类别是？",
      answer: "统计函数",
      explanation: "FISHER 属于 统计函数。"
    }
  ],
  "FISHERINV": [
    {
      type: "choice",
      question: "FISHERINV 函数属于哪一类？",
      options: [
        "统计函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "FISHERINV 属于 统计函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 FISHERINV 函数的正确功能描述？",
      options: [
        "返回Fisher变换的反函数数值",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "FISHERINV 函数的功能是：返回Fisher变换的反函数数值"
    },
    {
      type: "fillBlank",
      question: "FISHERINV 函数的类别是？",
      answer: "统计函数",
      explanation: "FISHERINV 属于 统计函数。"
    }
  ],
  "FIXED": [
    {
      type: "choice",
      question: "FIXED 函数属于哪一类？",
      options: [
        "文本函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "FIXED 属于 文本函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 FIXED 函数的正确功能描述？",
      options: [
        "将数值带上千位分隔符和小数点标记",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "FIXED 函数的功能是：将数值带上千位分隔符和小数点标记"
    },
    {
      type: "fillBlank",
      question: "FIXED 函数的类别是？",
      answer: "文本函数",
      explanation: "FIXED 属于 文本函数。"
    }
  ],
  "FLOOR": [
    {
      type: "choice",
      question: "FLOOR 函数属于哪一类？",
      options: [
        "数学与三角函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "FLOOR 属于 数学与三角函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 FLOOR 函数的正确功能描述？",
      options: [
        "将参数沿绝对值减小的方向去尾舍入,使其等于最接近的倍数",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "FLOOR 函数的功能是：将参数沿绝对值减小的方向去尾舍入,使其等于最接近的倍数"
    },
    {
      type: "fillBlank",
      question: "FLOOR 函数的类别是？",
      answer: "数学与三角函数",
      explanation: "FLOOR 属于 数学与三角函数。"
    }
  ],
  "FORECAST": [
    {
      type: "choice",
      question: "FORECAST 函数属于哪一类？",
      options: [
        "统计函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "FORECAST 属于 统计函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 FORECAST 函数的正确功能描述？",
      options: [
        "用回归直线进行预测",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "FORECAST 函数的功能是：用回归直线进行预测"
    },
    {
      type: "fillBlank",
      question: "FORECAST 函数的类别是？",
      answer: "统计函数",
      explanation: "FORECAST 属于 统计函数。"
    }
  ],
  "FREQUENCY": [
    {
      type: "choice",
      question: "FREQUENCY 函数属于哪一类？",
      options: [
        "统计函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "FREQUENCY 属于 统计函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 FREQUENCY 函数的正确功能描述？",
      options: [
        "返回区间中所含值的个数(频度)",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "FREQUENCY 函数的功能是：返回区间中所含值的个数(频度)"
    },
    {
      type: "fillBlank",
      question: "FREQUENCY 函数的类别是？",
      answer: "统计函数",
      explanation: "FREQUENCY 属于 统计函数。"
    }
  ],
  "FTEST": [
    {
      type: "choice",
      question: "FTEST 函数属于哪一类？",
      options: [
        "统计函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "FTEST 属于 统计函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 FTEST 函数的正确功能描述？",
      options: [
        "返回F检验的结果",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "FTEST 函数的功能是：返回F检验的结果"
    },
    {
      type: "fillBlank",
      question: "FTEST 函数的类别是？",
      answer: "统计函数",
      explanation: "FTEST 属于 统计函数。"
    }
  ],
  "FV": [
    {
      type: "choice",
      question: "FV 函数属于哪一类？",
      options: [
        "财务函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "FV 属于 财务函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 FV 函数的正确功能描述？",
      options: [
        "返回将来价格",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "FV 函数的功能是：返回将来价格"
    },
    {
      type: "fillBlank",
      question: "FV 函数的类别是？",
      answer: "财务函数",
      explanation: "FV 属于 财务函数。"
    }
  ],
  "FVSCHEDULE": [
    {
      type: "choice",
      question: "FVSCHEDULE 函数属于哪一类？",
      options: [
        "财务函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "FVSCHEDULE 属于 财务函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 FVSCHEDULE 函数的正确功能描述？",
      options: [
        "返回利率发生变动的存款的将来价格",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "FVSCHEDULE 函数的功能是：返回利率发生变动的存款的将来价格"
    },
    {
      type: "fillBlank",
      question: "FVSCHEDULE 函数的类别是？",
      answer: "财务函数",
      explanation: "FVSCHEDULE 属于 财务函数。"
    }
  ],
  "GAMMADIST": [
    {
      type: "choice",
      question: "GAMMADIST 函数属于哪一类？",
      options: [
        "统计函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "GAMMADIST 属于 统计函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 GAMMADIST 函数的正确功能描述？",
      options: [
        "返回伽玛分布函数的值",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "GAMMADIST 函数的功能是：返回伽玛分布函数的值"
    },
    {
      type: "fillBlank",
      question: "GAMMADIST 函数的类别是？",
      answer: "统计函数",
      explanation: "GAMMADIST 属于 统计函数。"
    }
  ],
  "GAMMAINV": [
    {
      type: "choice",
      question: "GAMMAINV 函数属于哪一类？",
      options: [
        "统计函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "GAMMAINV 属于 统计函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 GAMMAINV 函数的正确功能描述？",
      options: [
        "返回伽玛分布函数的反函数值",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "GAMMAINV 函数的功能是：返回伽玛分布函数的反函数值"
    },
    {
      type: "fillBlank",
      question: "GAMMAINV 函数的类别是？",
      answer: "统计函数",
      explanation: "GAMMAINV 属于 统计函数。"
    }
  ],
  "GAMMALN": [
    {
      type: "choice",
      question: "GAMMALN 函数属于哪一类？",
      options: [
        "统计函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "GAMMALN 属于 统计函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 GAMMALN 函数的正确功能描述？",
      options: [
        "返回伽玛函数的自然对数",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "GAMMALN 函数的功能是：返回伽玛函数的自然对数"
    },
    {
      type: "fillBlank",
      question: "GAMMALN 函数的类别是？",
      answer: "统计函数",
      explanation: "GAMMALN 属于 统计函数。"
    }
  ],
  "GCD": [
    {
      type: "choice",
      question: "GCD 函数属于哪一类？",
      options: [
        "数学与三角函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "GCD 属于 数学与三角函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 GCD 函数的正确功能描述？",
      options: [
        "返回最大公约数",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "GCD 函数的功能是：返回最大公约数"
    },
    {
      type: "fillBlank",
      question: "GCD 函数的类别是？",
      answer: "数学与三角函数",
      explanation: "GCD 属于 数学与三角函数。"
    }
  ],
  "GEOMEAN": [
    {
      type: "choice",
      question: "GEOMEAN 函数属于哪一类？",
      options: [
        "统计函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "GEOMEAN 属于 统计函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 GEOMEAN 函数的正确功能描述？",
      options: [
        "返回相乘平均(几何平均值)",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "GEOMEAN 函数的功能是：返回相乘平均(几何平均值)"
    },
    {
      type: "fillBlank",
      question: "GEOMEAN 函数的类别是？",
      answer: "统计函数",
      explanation: "GEOMEAN 属于 统计函数。"
    }
  ],
  "GESTEP": [
    {
      type: "choice",
      question: "GESTEP 函数属于哪一类？",
      options: [
        "工程函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "GESTEP 属于 工程函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 GESTEP 函数的正确功能描述？",
      options: [
        "查看是否在基准值以上",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "GESTEP 函数的功能是：查看是否在基准值以上"
    },
    {
      type: "fillBlank",
      question: "GESTEP 函数的类别是？",
      answer: "工程函数",
      explanation: "GESTEP 属于 工程函数。"
    }
  ],
  "GETPIVOTDATA": [
    {
      type: "choice",
      question: "GETPIVOTDATA 函数属于哪一类？",
      options: [
        "查找与引用函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "GETPIVOTDATA 属于 查找与引用函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 GETPIVOTDATA 函数的正确功能描述？",
      options: [
        "(2003/2000)从枢表中读取数据",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "GETPIVOTDATA 函数的功能是：(2003/2000)从枢表中读取数据"
    },
    {
      type: "fillBlank",
      question: "GETPIVOTDATA 函数的类别是？",
      answer: "查找与引用函数",
      explanation: "GETPIVOTDATA 属于 查找与引用函数。"
    }
  ],
  "GROWTH": [
    {
      type: "choice",
      question: "GROWTH 函数属于哪一类？",
      options: [
        "统计函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "GROWTH 属于 统计函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 GROWTH 函数的正确功能描述？",
      options: [
        "用指数回归曲线进行预测",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "GROWTH 函数的功能是：用指数回归曲线进行预测"
    },
    {
      type: "fillBlank",
      question: "GROWTH 函数的类别是？",
      answer: "统计函数",
      explanation: "GROWTH 属于 统计函数。"
    }
  ],
  "HEX2BIN": [
    {
      type: "choice",
      question: "HEX2BIN 函数属于哪一类？",
      options: [
        "工程函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "HEX2BIN 属于 工程函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 HEX2BIN 函数的正确功能描述？",
      options: [
        "将十六进制数转换为二进制数",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "HEX2BIN 函数的功能是：将十六进制数转换为二进制数"
    },
    {
      type: "fillBlank",
      question: "HEX2BIN 函数的类别是？",
      answer: "工程函数",
      explanation: "HEX2BIN 属于 工程函数。"
    }
  ],
  "HEX2DEC": [
    {
      type: "choice",
      question: "HEX2DEC 函数属于哪一类？",
      options: [
        "工程函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "HEX2DEC 属于 工程函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 HEX2DEC 函数的正确功能描述？",
      options: [
        "将十六进制数转换为十进制数",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "HEX2DEC 函数的功能是：将十六进制数转换为十进制数"
    },
    {
      type: "fillBlank",
      question: "HEX2DEC 函数的类别是？",
      answer: "工程函数",
      explanation: "HEX2DEC 属于 工程函数。"
    }
  ],
  "HEX2OCT": [
    {
      type: "choice",
      question: "HEX2OCT 函数属于哪一类？",
      options: [
        "工程函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "HEX2OCT 属于 工程函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 HEX2OCT 函数的正确功能描述？",
      options: [
        "将十六进制数转换为八进制数",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "HEX2OCT 函数的功能是：将十六进制数转换为八进制数"
    },
    {
      type: "fillBlank",
      question: "HEX2OCT 函数的类别是？",
      answer: "工程函数",
      explanation: "HEX2OCT 属于 工程函数。"
    }
  ],
  "HLOOKUP": [
    {
      type: "choice",
      question: "HLOOKUP 函数属于哪一类？",
      options: [
        "查找与引用函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "HLOOKUP 属于 查找与引用函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 HLOOKUP 函数的正确功能描述？",
      options: [
        "在数组的首行查找并返回指定单元格的值",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "HLOOKUP 函数的功能是：在数组的首行查找并返回指定单元格的值"
    },
    {
      type: "fillBlank",
      question: "HLOOKUP 函数的类别是？",
      answer: "查找与引用函数",
      explanation: "HLOOKUP 属于 查找与引用函数。"
    }
  ],
  "HOUR": [
    {
      type: "choice",
      question: "HOUR 函数属于哪一类？",
      options: [
        "日期与时间函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "HOUR 属于 日期与时间函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 HOUR 函数的正确功能描述？",
      options: [
        "将序列号转换为小时",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "HOUR 函数的功能是：将序列号转换为小时"
    },
    {
      type: "fillBlank",
      question: "HOUR 函数的类别是？",
      answer: "日期与时间函数",
      explanation: "HOUR 属于 日期与时间函数。"
    }
  ],
  "HYPERLINK": [
    {
      type: "choice",
      question: "HYPERLINK 函数属于哪一类？",
      options: [
        "查找与引用函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "HYPERLINK 属于 查找与引用函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 HYPERLINK 函数的正确功能描述？",
      options: [
        "创建快捷方式或跳转，以打开存储在网络服务器、Intranet或Internet上的文档",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "HYPERLINK 函数的功能是：创建快捷方式或跳转，以打开存储在网络服务器、Intranet或Internet上的文档"
    },
    {
      type: "fillBlank",
      question: "HYPERLINK 函数的类别是？",
      answer: "查找与引用函数",
      explanation: "HYPERLINK 属于 查找与引用函数。"
    }
  ],
  "HYPGEOMDIST": [
    {
      type: "choice",
      question: "HYPGEOMDIST 函数属于哪一类？",
      options: [
        "统计函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "HYPGEOMDIST 属于 统计函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 HYPGEOMDIST 函数的正确功能描述？",
      options: [
        "返回超几何分布",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "HYPGEOMDIST 函数的功能是：返回超几何分布"
    },
    {
      type: "fillBlank",
      question: "HYPGEOMDIST 函数的类别是？",
      answer: "统计函数",
      explanation: "HYPGEOMDIST 属于 统计函数。"
    }
  ],
  "IF": [
    {
      type: "choice",
      question: "IF 函数属于哪一类？",
      options: [
        "逻辑函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "IF 属于 逻辑函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 IF 函数的正确功能描述？",
      options: [
        "指定要执行的逻辑检测",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "IF 函数的功能是：指定要执行的逻辑检测"
    },
    {
      type: "fillBlank",
      question: "IF 函数的类别是？",
      answer: "逻辑函数",
      explanation: "IF 属于 逻辑函数。"
    }
  ],
  "IMABS": [
    {
      type: "choice",
      question: "IMABS 函数属于哪一类？",
      options: [
        "工程函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "IMABS 属于 工程函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 IMABS 函数的正确功能描述？",
      options: [
        "返回复数的绝对值（模)",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "IMABS 函数的功能是：返回复数的绝对值（模)"
    },
    {
      type: "fillBlank",
      question: "IMABS 函数的类别是？",
      answer: "工程函数",
      explanation: "IMABS 属于 工程函数。"
    }
  ],
  "IMAGINARY": [
    {
      type: "choice",
      question: "IMAGINARY 函数属于哪一类？",
      options: [
        "工程函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "IMAGINARY 属于 工程函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 IMAGINARY 函数的正确功能描述？",
      options: [
        "返回复数的虚系数",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "IMAGINARY 函数的功能是：返回复数的虚系数"
    },
    {
      type: "fillBlank",
      question: "IMAGINARY 函数的类别是？",
      answer: "工程函数",
      explanation: "IMAGINARY 属于 工程函数。"
    }
  ],
  "IMARGUMENT": [
    {
      type: "choice",
      question: "IMARGUMENT 函数属于哪一类？",
      options: [
        "工程函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "IMARGUMENT 属于 工程函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 IMARGUMENT 函数的正确功能描述？",
      options: [
        "返回参数 theta，一个以弧度表示的角度",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "IMARGUMENT 函数的功能是：返回参数 theta，一个以弧度表示的角度"
    },
    {
      type: "fillBlank",
      question: "IMARGUMENT 函数的类别是？",
      answer: "工程函数",
      explanation: "IMARGUMENT 属于 工程函数。"
    }
  ],
  "IMCONJUGATE": [
    {
      type: "choice",
      question: "IMCONJUGATE 函数属于哪一类？",
      options: [
        "工程函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "IMCONJUGATE 属于 工程函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 IMCONJUGATE 函数的正确功能描述？",
      options: [
        "返回复数的共轭复数",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "IMCONJUGATE 函数的功能是：返回复数的共轭复数"
    },
    {
      type: "fillBlank",
      question: "IMCONJUGATE 函数的类别是？",
      answer: "工程函数",
      explanation: "IMCONJUGATE 属于 工程函数。"
    }
  ],
  "IMCOS": [
    {
      type: "choice",
      question: "IMCOS 函数属于哪一类？",
      options: [
        "工程函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "IMCOS 属于 工程函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 IMCOS 函数的正确功能描述？",
      options: [
        "返回复数的余弦",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "IMCOS 函数的功能是：返回复数的余弦"
    },
    {
      type: "fillBlank",
      question: "IMCOS 函数的类别是？",
      answer: "工程函数",
      explanation: "IMCOS 属于 工程函数。"
    }
  ],
  "IMDIV": [
    {
      type: "choice",
      question: "IMDIV 函数属于哪一类？",
      options: [
        "工程函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "IMDIV 属于 工程函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 IMDIV 函数的正确功能描述？",
      options: [
        "返回两个复数的商",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "IMDIV 函数的功能是：返回两个复数的商"
    },
    {
      type: "fillBlank",
      question: "IMDIV 函数的类别是？",
      answer: "工程函数",
      explanation: "IMDIV 属于 工程函数。"
    }
  ],
  "IMEXP": [
    {
      type: "choice",
      question: "IMEXP 函数属于哪一类？",
      options: [
        "工程函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "IMEXP 属于 工程函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 IMEXP 函数的正确功能描述？",
      options: [
        "返回复数的指数",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "IMEXP 函数的功能是：返回复数的指数"
    },
    {
      type: "fillBlank",
      question: "IMEXP 函数的类别是？",
      answer: "工程函数",
      explanation: "IMEXP 属于 工程函数。"
    }
  ],
  "IMLN": [
    {
      type: "choice",
      question: "IMLN 函数属于哪一类？",
      options: [
        "工程函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "IMLN 属于 工程函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 IMLN 函数的正确功能描述？",
      options: [
        "返回复数的自然对数",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "IMLN 函数的功能是：返回复数的自然对数"
    },
    {
      type: "fillBlank",
      question: "IMLN 函数的类别是？",
      answer: "工程函数",
      explanation: "IMLN 属于 工程函数。"
    }
  ],
  "IMLOG10": [
    {
      type: "choice",
      question: "IMLOG10 函数属于哪一类？",
      options: [
        "工程函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "IMLOG10 属于 工程函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 IMLOG10 函数的正确功能描述？",
      options: [
        "返回复数的常用对数",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "IMLOG10 函数的功能是：返回复数的常用对数"
    },
    {
      type: "fillBlank",
      question: "IMLOG10 函数的类别是？",
      answer: "工程函数",
      explanation: "IMLOG10 属于 工程函数。"
    }
  ],
  "IMLOG2": [
    {
      type: "choice",
      question: "IMLOG2 函数属于哪一类？",
      options: [
        "工程函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "IMLOG2 属于 工程函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 IMLOG2 函数的正确功能描述？",
      options: [
        "返回复数的以 2 为底数的对数",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "IMLOG2 函数的功能是：返回复数的以 2 为底数的对数"
    },
    {
      type: "fillBlank",
      question: "IMLOG2 函数的类别是？",
      answer: "工程函数",
      explanation: "IMLOG2 属于 工程函数。"
    }
  ],
  "IMPOWER": [
    {
      type: "choice",
      question: "IMPOWER 函数属于哪一类？",
      options: [
        "工程函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "IMPOWER 属于 工程函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 IMPOWER 函数的正确功能描述？",
      options: [
        "返回复数的整数幂",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "IMPOWER 函数的功能是：返回复数的整数幂"
    },
    {
      type: "fillBlank",
      question: "IMPOWER 函数的类别是？",
      answer: "工程函数",
      explanation: "IMPOWER 属于 工程函数。"
    }
  ],
  "IMPRODUCT": [
    {
      type: "choice",
      question: "IMPRODUCT 函数属于哪一类？",
      options: [
        "工程函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "IMPRODUCT 属于 工程函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 IMPRODUCT 函数的正确功能描述？",
      options: [
        "返回从 2 到 29 的复数的乘积",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "IMPRODUCT 函数的功能是：返回从 2 到 29 的复数的乘积"
    },
    {
      type: "fillBlank",
      question: "IMPRODUCT 函数的类别是？",
      answer: "工程函数",
      explanation: "IMPRODUCT 属于 工程函数。"
    }
  ],
  "IMREAL": [
    {
      type: "choice",
      question: "IMREAL 函数属于哪一类？",
      options: [
        "工程函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "IMREAL 属于 工程函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 IMREAL 函数的正确功能描述？",
      options: [
        "返回复数的实系数",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "IMREAL 函数的功能是：返回复数的实系数"
    },
    {
      type: "fillBlank",
      question: "IMREAL 函数的类别是？",
      answer: "工程函数",
      explanation: "IMREAL 属于 工程函数。"
    }
  ],
  "IMSIN": [
    {
      type: "choice",
      question: "IMSIN 函数属于哪一类？",
      options: [
        "工程函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "IMSIN 属于 工程函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 IMSIN 函数的正确功能描述？",
      options: [
        "返回复数的正弦",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "IMSIN 函数的功能是：返回复数的正弦"
    },
    {
      type: "fillBlank",
      question: "IMSIN 函数的类别是？",
      answer: "工程函数",
      explanation: "IMSIN 属于 工程函数。"
    }
  ],
  "IMSQRT": [
    {
      type: "choice",
      question: "IMSQRT 函数属于哪一类？",
      options: [
        "工程函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "IMSQRT 属于 工程函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 IMSQRT 函数的正确功能描述？",
      options: [
        "返回复数的平方根",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "IMSQRT 函数的功能是：返回复数的平方根"
    },
    {
      type: "fillBlank",
      question: "IMSQRT 函数的类别是？",
      answer: "工程函数",
      explanation: "IMSQRT 属于 工程函数。"
    }
  ],
  "IMSUM": [
    {
      type: "choice",
      question: "IMSUM 函数属于哪一类？",
      options: [
        "工程函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "IMSUM 属于 工程函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 IMSUM 函数的正确功能描述？",
      options: [
        "返回两个复数的和",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "IMSUM 函数的功能是：返回两个复数的和"
    },
    {
      type: "fillBlank",
      question: "IMSUM 函数的类别是？",
      answer: "工程函数",
      explanation: "IMSUM 属于 工程函数。"
    }
  ],
  "INDEX": [
    {
      type: "choice",
      question: "INDEX 函数属于哪一类？",
      options: [
        "查找与引用函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "INDEX 属于 查找与引用函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 INDEX 函数的正确功能描述？",
      options: [
        "(数组形式)",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "INDEX 函数的功能是：(数组形式)"
    },
    {
      type: "fillBlank",
      question: "INDEX 函数的类别是？",
      answer: "查找与引用函数",
      explanation: "INDEX 属于 查找与引用函数。"
    }
  ],
  "INDIRECT": [
    {
      type: "choice",
      question: "INDIRECT 函数属于哪一类？",
      options: [
        "查找与引用函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "INDIRECT 属于 查找与引用函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 INDIRECT 函数的正确功能描述？",
      options: [
        "返回由文本值表示的引用",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "INDIRECT 函数的功能是：返回由文本值表示的引用"
    },
    {
      type: "fillBlank",
      question: "INDIRECT 函数的类别是？",
      answer: "查找与引用函数",
      explanation: "INDIRECT 属于 查找与引用函数。"
    }
  ],
  "INFO": [
    {
      type: "choice",
      question: "INFO 函数属于哪一类？",
      options: [
        "信息函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "INFO 属于 信息函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 INFO 函数的正确功能描述？",
      options: [
        "返回有关当前操作环境的信息",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "INFO 函数的功能是：返回有关当前操作环境的信息"
    },
    {
      type: "fillBlank",
      question: "INFO 函数的类别是？",
      answer: "信息函数",
      explanation: "INFO 属于 信息函数。"
    }
  ],
  "INT": [
    {
      type: "choice",
      question: "INT 函数属于哪一类？",
      options: [
        "数学与三角函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "INT 属于 数学与三角函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 INT 函数的正确功能描述？",
      options: [
        "将数字向下舍入为最接近的整数",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "INT 函数的功能是：将数字向下舍入为最接近的整数"
    },
    {
      type: "fillBlank",
      question: "INT 函数的类别是？",
      answer: "数学与三角函数",
      explanation: "INT 属于 数学与三角函数。"
    }
  ],
  "INTERCEPT": [
    {
      type: "choice",
      question: "INTERCEPT 函数属于哪一类？",
      options: [
        "统计函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "INTERCEPT 属于 统计函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 INTERCEPT 函数的正确功能描述？",
      options: [
        "返回线性回归线截距",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "INTERCEPT 函数的功能是：返回线性回归线截距"
    },
    {
      type: "fillBlank",
      question: "INTERCEPT 函数的类别是？",
      answer: "统计函数",
      explanation: "INTERCEPT 属于 统计函数。"
    }
  ],
  "INTRATE": [
    {
      type: "choice",
      question: "INTRATE 函数属于哪一类？",
      options: [
        "财务函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "INTRATE 属于 财务函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 INTRATE 函数的正确功能描述？",
      options: [
        "返回一次性付息证券的利率",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "INTRATE 函数的功能是：返回一次性付息证券的利率"
    },
    {
      type: "fillBlank",
      question: "INTRATE 函数的类别是？",
      answer: "财务函数",
      explanation: "INTRATE 属于 财务函数。"
    }
  ],
  "IPMT": [
    {
      type: "choice",
      question: "IPMT 函数属于哪一类？",
      options: [
        "财务函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "IPMT 属于 财务函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 IPMT 函数的正确功能描述？",
      options: [
        "返回给定期间内投资的利息偿还额",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "IPMT 函数的功能是：返回给定期间内投资的利息偿还额"
    },
    {
      type: "fillBlank",
      question: "IPMT 函数的类别是？",
      answer: "财务函数",
      explanation: "IPMT 属于 财务函数。"
    }
  ],
  "IRR": [
    {
      type: "choice",
      question: "IRR 函数属于哪一类？",
      options: [
        "财务函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "IRR 属于 财务函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 IRR 函数的正确功能描述？",
      options: [
        "返回一系列现金流的内部收益率",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "IRR 函数的功能是：返回一系列现金流的内部收益率"
    },
    {
      type: "fillBlank",
      question: "IRR 函数的类别是？",
      answer: "财务函数",
      explanation: "IRR 属于 财务函数。"
    }
  ],
  "ISBLANK": [
    {
      type: "choice",
      question: "ISBLANK 函数属于哪一类？",
      options: [
        "信息函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "ISBLANK 属于 信息函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 ISBLANK 函数的正确功能描述？",
      options: [
        "如果值为空，则返回 TRUE",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "ISBLANK 函数的功能是：如果值为空，则返回 TRUE"
    },
    {
      type: "fillBlank",
      question: "ISBLANK 函数的类别是？",
      answer: "信息函数",
      explanation: "ISBLANK 属于 信息函数。"
    }
  ],
  "ISERR": [
    {
      type: "choice",
      question: "ISERR 函数属于哪一类？",
      options: [
        "信息函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "ISERR 属于 信息函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 ISERR 函数的正确功能描述？",
      options: [
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "ISERR 函数的功能是：如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
    },
    {
      type: "fillBlank",
      question: "ISERR 函数的类别是？",
      answer: "信息函数",
      explanation: "ISERR 属于 信息函数。"
    }
  ],
  "ISERROR": [
    {
      type: "choice",
      question: "ISERROR 函数属于哪一类？",
      options: [
        "信息函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "ISERROR 属于 信息函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 ISERROR 函数的正确功能描述？",
      options: [
        "如果值为任何错误值，则返回 TRUE",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "ISERROR 函数的功能是：如果值为任何错误值，则返回 TRUE"
    },
    {
      type: "fillBlank",
      question: "ISERROR 函数的类别是？",
      answer: "信息函数",
      explanation: "ISERROR 属于 信息函数。"
    }
  ],
  "ISEVEN": [
    {
      type: "choice",
      question: "ISEVEN 函数属于哪一类？",
      options: [
        "信息函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "ISEVEN 属于 信息函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 ISEVEN 函数的正确功能描述？",
      options: [
        "如果数字为偶数，则返回 TRUE",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "ISEVEN 函数的功能是：如果数字为偶数，则返回 TRUE"
    },
    {
      type: "fillBlank",
      question: "ISEVEN 函数的类别是？",
      answer: "信息函数",
      explanation: "ISEVEN 属于 信息函数。"
    }
  ],
  "ISLOGICAL": [
    {
      type: "choice",
      question: "ISLOGICAL 函数属于哪一类？",
      options: [
        "信息函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "ISLOGICAL 属于 信息函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 ISLOGICAL 函数的正确功能描述？",
      options: [
        "如果值为逻辑值，则返回 TRUE",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "ISLOGICAL 函数的功能是：如果值为逻辑值，则返回 TRUE"
    },
    {
      type: "fillBlank",
      question: "ISLOGICAL 函数的类别是？",
      answer: "信息函数",
      explanation: "ISLOGICAL 属于 信息函数。"
    }
  ],
  "ISNA": [
    {
      type: "choice",
      question: "ISNA 函数属于哪一类？",
      options: [
        "信息函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "ISNA 属于 信息函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 ISNA 函数的正确功能描述？",
      options: [
        "如果值为 #N/A 错误值，则返回 TRUE",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "ISNA 函数的功能是：如果值为 #N/A 错误值，则返回 TRUE"
    },
    {
      type: "fillBlank",
      question: "ISNA 函数的类别是？",
      answer: "信息函数",
      explanation: "ISNA 属于 信息函数。"
    }
  ],
  "ISNONTEXT": [
    {
      type: "choice",
      question: "ISNONTEXT 函数属于哪一类？",
      options: [
        "信息函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "ISNONTEXT 属于 信息函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 ISNONTEXT 函数的正确功能描述？",
      options: [
        "如果值不是文本，则返回 TRUE",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "ISNONTEXT 函数的功能是：如果值不是文本，则返回 TRUE"
    },
    {
      type: "fillBlank",
      question: "ISNONTEXT 函数的类别是？",
      answer: "信息函数",
      explanation: "ISNONTEXT 属于 信息函数。"
    }
  ],
  "ISNUMBER": [
    {
      type: "choice",
      question: "ISNUMBER 函数属于哪一类？",
      options: [
        "信息函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "ISNUMBER 属于 信息函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 ISNUMBER 函数的正确功能描述？",
      options: [
        "如果值为数字，则返回 TRUE",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "ISNUMBER 函数的功能是：如果值为数字，则返回 TRUE"
    },
    {
      type: "fillBlank",
      question: "ISNUMBER 函数的类别是？",
      answer: "信息函数",
      explanation: "ISNUMBER 属于 信息函数。"
    }
  ],
  "ISODD": [
    {
      type: "choice",
      question: "ISODD 函数属于哪一类？",
      options: [
        "信息函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "ISODD 属于 信息函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 ISODD 函数的正确功能描述？",
      options: [
        "如果数字为奇数，则返回 TRUE",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "ISODD 函数的功能是：如果数字为奇数，则返回 TRUE"
    },
    {
      type: "fillBlank",
      question: "ISODD 函数的类别是？",
      answer: "信息函数",
      explanation: "ISODD 属于 信息函数。"
    }
  ],
  "ISPMT": [
    {
      type: "choice",
      question: "ISPMT 函数属于哪一类？",
      options: [
        "财务函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "ISPMT 属于 财务函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 ISPMT 函数的正确功能描述？",
      options: [
        "计算在投资的特定期间内支付的利息",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "ISPMT 函数的功能是：计算在投资的特定期间内支付的利息"
    },
    {
      type: "fillBlank",
      question: "ISPMT 函数的类别是？",
      answer: "财务函数",
      explanation: "ISPMT 属于 财务函数。"
    }
  ],
  "ISREF": [
    {
      type: "choice",
      question: "ISREF 函数属于哪一类？",
      options: [
        "信息函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "ISREF 属于 信息函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 ISREF 函数的正确功能描述？",
      options: [
        "如果值为一个引用，则返回 TRUE",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "ISREF 函数的功能是：如果值为一个引用，则返回 TRUE"
    },
    {
      type: "fillBlank",
      question: "ISREF 函数的类别是？",
      answer: "信息函数",
      explanation: "ISREF 属于 信息函数。"
    }
  ],
  "ISTEXT": [
    {
      type: "choice",
      question: "ISTEXT 函数属于哪一类？",
      options: [
        "信息函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "ISTEXT 属于 信息函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 ISTEXT 函数的正确功能描述？",
      options: [
        "如果值为文本，则返回 TRUE",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "ISTEXT 函数的功能是：如果值为文本，则返回 TRUE"
    },
    {
      type: "fillBlank",
      question: "ISTEXT 函数的类别是？",
      answer: "信息函数",
      explanation: "ISTEXT 属于 信息函数。"
    }
  ],
  "JIS": [
    {
      type: "choice",
      question: "JIS 函数属于哪一类？",
      options: [
        "文本函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "JIS 属于 文本函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 JIS 函数的正确功能描述？",
      options: [
        "将字符串中的半角(单字节)英文字母更改为全角(双字节)字符",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "JIS 函数的功能是：将字符串中的半角(单字节)英文字母更改为全角(双字节)字符"
    },
    {
      type: "fillBlank",
      question: "JIS 函数的类别是？",
      answer: "文本函数",
      explanation: "JIS 属于 文本函数。"
    }
  ],
  "KURT": [
    {
      type: "choice",
      question: "KURT 函数属于哪一类？",
      options: [
        "统计函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "KURT 属于 统计函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 KURT 函数的正确功能描述？",
      options: [
        "返回数据集的峰值",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "KURT 函数的功能是：返回数据集的峰值"
    },
    {
      type: "fillBlank",
      question: "KURT 函数的类别是？",
      answer: "统计函数",
      explanation: "KURT 属于 统计函数。"
    }
  ],
  "LARGE": [
    {
      type: "choice",
      question: "LARGE 函数属于哪一类？",
      options: [
        "统计函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "LARGE 属于 统计函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 LARGE 函数的正确功能描述？",
      options: [
        "返回数据集中第k个最大值",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "LARGE 函数的功能是：返回数据集中第k个最大值"
    },
    {
      type: "fillBlank",
      question: "LARGE 函数的类别是？",
      answer: "统计函数",
      explanation: "LARGE 属于 统计函数。"
    }
  ],
  "LCM": [
    {
      type: "choice",
      question: "LCM 函数属于哪一类？",
      options: [
        "数学与三角函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "LCM 属于 数学与三角函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 LCM 函数的正确功能描述？",
      options: [
        "返回最小公倍数",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "LCM 函数的功能是：返回最小公倍数"
    },
    {
      type: "fillBlank",
      question: "LCM 函数的类别是？",
      answer: "数学与三角函数",
      explanation: "LCM 属于 数学与三角函数。"
    }
  ],
  "LEFT": [
    {
      type: "choice",
      question: "LEFT 函数属于哪一类？",
      options: [
        "文本函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "LEFT 属于 文本函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 LEFT 函数的正确功能描述？",
      options: [
        "返回文本值最左边的字符",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "LEFT 函数的功能是：返回文本值最左边的字符"
    },
    {
      type: "fillBlank",
      question: "LEFT 函数的类别是？",
      answer: "文本函数",
      explanation: "LEFT 属于 文本函数。"
    }
  ],
  "LEN": [
    {
      type: "choice",
      question: "LEN 函数属于哪一类？",
      options: [
        "文本函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "LEN 属于 文本函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 LEN 函数的正确功能描述？",
      options: [
        "返回文本字符串中的字符个数",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "LEN 函数的功能是：返回文本字符串中的字符个数"
    },
    {
      type: "fillBlank",
      question: "LEN 函数的类别是？",
      answer: "文本函数",
      explanation: "LEN 属于 文本函数。"
    }
  ],
  "LINEST": [
    {
      type: "choice",
      question: "LINEST 函数属于哪一类？",
      options: [
        "统计函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "LINEST 属于 统计函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 LINEST 函数的正确功能描述？",
      options: [
        "返回线性趋势的参数",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "LINEST 函数的功能是：返回线性趋势的参数"
    },
    {
      type: "fillBlank",
      question: "LINEST 函数的类别是？",
      answer: "统计函数",
      explanation: "LINEST 属于 统计函数。"
    }
  ],
  "LN": [
    {
      type: "choice",
      question: "LN 函数属于哪一类？",
      options: [
        "数学与三角函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "LN 属于 数学与三角函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 LN 函数的正确功能描述？",
      options: [
        "返回数字的自然对数",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "LN 函数的功能是：返回数字的自然对数"
    },
    {
      type: "fillBlank",
      question: "LN 函数的类别是？",
      answer: "数学与三角函数",
      explanation: "LN 属于 数学与三角函数。"
    }
  ],
  "LOG": [
    {
      type: "choice",
      question: "LOG 函数属于哪一类？",
      options: [
        "数学与三角函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "LOG 属于 数学与三角函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 LOG 函数的正确功能描述？",
      options: [
        "返回数字的指定底数的对数",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "LOG 函数的功能是：返回数字的指定底数的对数"
    },
    {
      type: "fillBlank",
      question: "LOG 函数的类别是？",
      answer: "数学与三角函数",
      explanation: "LOG 属于 数学与三角函数。"
    }
  ],
  "LOG10": [
    {
      type: "choice",
      question: "LOG10 函数属于哪一类？",
      options: [
        "数学与三角函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "LOG10 属于 数学与三角函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 LOG10 函数的正确功能描述？",
      options: [
        "返回数字的常用对数",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "LOG10 函数的功能是：返回数字的常用对数"
    },
    {
      type: "fillBlank",
      question: "LOG10 函数的类别是？",
      answer: "数学与三角函数",
      explanation: "LOG10 属于 数学与三角函数。"
    }
  ],
  "LOGEST": [
    {
      type: "choice",
      question: "LOGEST 函数属于哪一类？",
      options: [
        "统计函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "LOGEST 属于 统计函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 LOGEST 函数的正确功能描述？",
      options: [
        "返回指数趋势的参数",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "LOGEST 函数的功能是：返回指数趋势的参数"
    },
    {
      type: "fillBlank",
      question: "LOGEST 函数的类别是？",
      answer: "统计函数",
      explanation: "LOGEST 属于 统计函数。"
    }
  ],
  "LOGINV": [
    {
      type: "choice",
      question: "LOGINV 函数属于哪一类？",
      options: [
        "统计函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "LOGINV 属于 统计函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 LOGINV 函数的正确功能描述？",
      options: [
        "返回反对数正态分布",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "LOGINV 函数的功能是：返回反对数正态分布"
    },
    {
      type: "fillBlank",
      question: "LOGINV 函数的类别是？",
      answer: "统计函数",
      explanation: "LOGINV 属于 统计函数。"
    }
  ],
  "LOGNORMDIST": [
    {
      type: "choice",
      question: "LOGNORMDIST 函数属于哪一类？",
      options: [
        "统计函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "LOGNORMDIST 属于 统计函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 LOGNORMDIST 函数的正确功能描述？",
      options: [
        "返回累积对数正态分布函数",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "LOGNORMDIST 函数的功能是：返回累积对数正态分布函数"
    },
    {
      type: "fillBlank",
      question: "LOGNORMDIST 函数的类别是？",
      answer: "统计函数",
      explanation: "LOGNORMDIST 属于 统计函数。"
    }
  ],
  "LOOKUP": [
    {
      type: "choice",
      question: "LOOKUP 函数属于哪一类？",
      options: [
        "查找与引用函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "LOOKUP 属于 查找与引用函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 LOOKUP 函数的正确功能描述？",
      options: [
        "(向量形式)",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "LOOKUP 函数的功能是：(向量形式)"
    },
    {
      type: "fillBlank",
      question: "LOOKUP 函数的类别是？",
      answer: "查找与引用函数",
      explanation: "LOOKUP 属于 查找与引用函数。"
    }
  ],
  "LOWER": [
    {
      type: "choice",
      question: "LOWER 函数属于哪一类？",
      options: [
        "文本函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "LOWER 属于 文本函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 LOWER 函数的正确功能描述？",
      options: [
        "将文本转换为小写形式",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "LOWER 函数的功能是：将文本转换为小写形式"
    },
    {
      type: "fillBlank",
      question: "LOWER 函数的类别是？",
      answer: "文本函数",
      explanation: "LOWER 属于 文本函数。"
    }
  ],
  "MATCH": [
    {
      type: "choice",
      question: "MATCH 函数属于哪一类？",
      options: [
        "查找与引用函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "MATCH 属于 查找与引用函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 MATCH 函数的正确功能描述？",
      options: [
        "在引用或数组中查找值",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "MATCH 函数的功能是：在引用或数组中查找值"
    },
    {
      type: "fillBlank",
      question: "MATCH 函数的类别是？",
      answer: "查找与引用函数",
      explanation: "MATCH 属于 查找与引用函数。"
    }
  ],
  "MAX": [
    {
      type: "choice",
      question: "MAX 函数属于哪一类？",
      options: [
        "统计函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "MAX 属于 统计函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 MAX 函数的正确功能描述？",
      options: [
        "返回参数列表中的最大值",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "MAX 函数的功能是：返回参数列表中的最大值"
    },
    {
      type: "fillBlank",
      question: "MAX 函数的类别是？",
      answer: "统计函数",
      explanation: "MAX 属于 统计函数。"
    }
  ],
  "MAXA": [
    {
      type: "choice",
      question: "MAXA 函数属于哪一类？",
      options: [
        "统计函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "MAXA 属于 统计函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 MAXA 函数的正确功能描述？",
      options: [
        "返回参数列表中的最大值，包括数字、文本和逻辑值",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "MAXA 函数的功能是：返回参数列表中的最大值，包括数字、文本和逻辑值"
    },
    {
      type: "fillBlank",
      question: "MAXA 函数的类别是？",
      answer: "统计函数",
      explanation: "MAXA 属于 统计函数。"
    }
  ],
  "MDETERM": [
    {
      type: "choice",
      question: "MDETERM 函数属于哪一类？",
      options: [
        "数学与三角函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "MDETERM 属于 数学与三角函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 MDETERM 函数的正确功能描述？",
      options: [
        "返回数组的矩阵行列式",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "MDETERM 函数的功能是：返回数组的矩阵行列式"
    },
    {
      type: "fillBlank",
      question: "MDETERM 函数的类别是？",
      answer: "数学与三角函数",
      explanation: "MDETERM 属于 数学与三角函数。"
    }
  ],
  "MDURATION": [
    {
      type: "choice",
      question: "MDURATION 函数属于哪一类？",
      options: [
        "财务函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "MDURATION 属于 财务函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 MDURATION 函数的正确功能描述？",
      options: [
        "返回假设面值为 const FUNCTIONS = 00 的有价证券的 Macauley 修正期限",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "MDURATION 函数的功能是：返回假设面值为 const FUNCTIONS = 00 的有价证券的 Macauley 修正期限"
    },
    {
      type: "fillBlank",
      question: "MDURATION 函数的类别是？",
      answer: "财务函数",
      explanation: "MDURATION 属于 财务函数。"
    }
  ],
  "MEDIAN": [
    {
      type: "choice",
      question: "MEDIAN 函数属于哪一类？",
      options: [
        "统计函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "MEDIAN 属于 统计函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 MEDIAN 函数的正确功能描述？",
      options: [
        "返回给定数字的中值",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "MEDIAN 函数的功能是：返回给定数字的中值"
    },
    {
      type: "fillBlank",
      question: "MEDIAN 函数的类别是？",
      answer: "统计函数",
      explanation: "MEDIAN 属于 统计函数。"
    }
  ],
  "MID": [
    {
      type: "choice",
      question: "MID 函数属于哪一类？",
      options: [
        "文本函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "MID 属于 文本函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 MID 函数的正确功能描述？",
      options: [
        "从文本字符串中的指定位置起返回特定个数的字符",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "MID 函数的功能是：从文本字符串中的指定位置起返回特定个数的字符"
    },
    {
      type: "fillBlank",
      question: "MID 函数的类别是？",
      answer: "文本函数",
      explanation: "MID 属于 文本函数。"
    }
  ],
  "MIN": [
    {
      type: "choice",
      question: "MIN 函数属于哪一类？",
      options: [
        "统计函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "MIN 属于 统计函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 MIN 函数的正确功能描述？",
      options: [
        "返回参数列表中的最小值",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "MIN 函数的功能是：返回参数列表中的最小值"
    },
    {
      type: "fillBlank",
      question: "MIN 函数的类别是？",
      answer: "统计函数",
      explanation: "MIN 属于 统计函数。"
    }
  ],
  "MINA": [
    {
      type: "choice",
      question: "MINA 函数属于哪一类？",
      options: [
        "统计函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "MINA 属于 统计函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 MINA 函数的正确功能描述？",
      options: [
        "返回参数列表中的最小值，包括数字、文本和逻辑值",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "MINA 函数的功能是：返回参数列表中的最小值，包括数字、文本和逻辑值"
    },
    {
      type: "fillBlank",
      question: "MINA 函数的类别是？",
      answer: "统计函数",
      explanation: "MINA 属于 统计函数。"
    }
  ],
  "MINUTE": [
    {
      type: "choice",
      question: "MINUTE 函数属于哪一类？",
      options: [
        "日期与时间函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "MINUTE 属于 日期与时间函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 MINUTE 函数的正确功能描述？",
      options: [
        "将序列号转换为分钟",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "MINUTE 函数的功能是：将序列号转换为分钟"
    },
    {
      type: "fillBlank",
      question: "MINUTE 函数的类别是？",
      answer: "日期与时间函数",
      explanation: "MINUTE 属于 日期与时间函数。"
    }
  ],
  "MINVERSE": [
    {
      type: "choice",
      question: "MINVERSE 函数属于哪一类？",
      options: [
        "数学与三角函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "MINVERSE 属于 数学与三角函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 MINVERSE 函数的正确功能描述？",
      options: [
        "返回数组的逆矩阵",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "MINVERSE 函数的功能是：返回数组的逆矩阵"
    },
    {
      type: "fillBlank",
      question: "MINVERSE 函数的类别是？",
      answer: "数学与三角函数",
      explanation: "MINVERSE 属于 数学与三角函数。"
    }
  ],
  "MIRR": [
    {
      type: "choice",
      question: "MIRR 函数属于哪一类？",
      options: [
        "财务函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "MIRR 属于 财务函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 MIRR 函数的正确功能描述？",
      options: [
        "返回正负现金流在不同利率下支付的内部收益率",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "MIRR 函数的功能是：返回正负现金流在不同利率下支付的内部收益率"
    },
    {
      type: "fillBlank",
      question: "MIRR 函数的类别是？",
      answer: "财务函数",
      explanation: "MIRR 属于 财务函数。"
    }
  ],
  "MMULT": [
    {
      type: "choice",
      question: "MMULT 函数属于哪一类？",
      options: [
        "数学与三角函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "MMULT 属于 数学与三角函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 MMULT 函数的正确功能描述？",
      options: [
        "返回两数组的矩阵乘积",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "MMULT 函数的功能是：返回两数组的矩阵乘积"
    },
    {
      type: "fillBlank",
      question: "MMULT 函数的类别是？",
      answer: "数学与三角函数",
      explanation: "MMULT 属于 数学与三角函数。"
    }
  ],
  "MOD": [
    {
      type: "choice",
      question: "MOD 函数属于哪一类？",
      options: [
        "数学与三角函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "MOD 属于 数学与三角函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 MOD 函数的正确功能描述？",
      options: [
        "返回两数相除的余数",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "MOD 函数的功能是：返回两数相除的余数"
    },
    {
      type: "fillBlank",
      question: "MOD 函数的类别是？",
      answer: "数学与三角函数",
      explanation: "MOD 属于 数学与三角函数。"
    }
  ],
  "MODE": [
    {
      type: "choice",
      question: "MODE 函数属于哪一类？",
      options: [
        "统计函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "MODE 属于 统计函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 MODE 函数的正确功能描述？",
      options: [
        "返回数据集中出现最多的值",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "MODE 函数的功能是：返回数据集中出现最多的值"
    },
    {
      type: "fillBlank",
      question: "MODE 函数的类别是？",
      answer: "统计函数",
      explanation: "MODE 属于 统计函数。"
    }
  ],
  "MONTH": [
    {
      type: "choice",
      question: "MONTH 函数属于哪一类？",
      options: [
        "日期与时间函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "MONTH 属于 日期与时间函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 MONTH 函数的正确功能描述？",
      options: [
        "将序列号转换为月",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "MONTH 函数的功能是：将序列号转换为月"
    },
    {
      type: "fillBlank",
      question: "MONTH 函数的类别是？",
      answer: "日期与时间函数",
      explanation: "MONTH 属于 日期与时间函数。"
    }
  ],
  "MROUND": [
    {
      type: "choice",
      question: "MROUND 函数属于哪一类？",
      options: [
        "数学与三角函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "MROUND 属于 数学与三角函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 MROUND 函数的正确功能描述？",
      options: [
        "返回按指定倍数舍入后的数字",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "MROUND 函数的功能是：返回按指定倍数舍入后的数字"
    },
    {
      type: "fillBlank",
      question: "MROUND 函数的类别是？",
      answer: "数学与三角函数",
      explanation: "MROUND 属于 数学与三角函数。"
    }
  ],
  "MULTINOMIAL": [
    {
      type: "choice",
      question: "MULTINOMIAL 函数属于哪一类？",
      options: [
        "数学与三角函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "MULTINOMIAL 属于 数学与三角函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 MULTINOMIAL 函数的正确功能描述？",
      options: [
        "返回一组数字的多项式",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "MULTINOMIAL 函数的功能是：返回一组数字的多项式"
    },
    {
      type: "fillBlank",
      question: "MULTINOMIAL 函数的类别是？",
      answer: "数学与三角函数",
      explanation: "MULTINOMIAL 属于 数学与三角函数。"
    }
  ],
  "N类": [
    {
      type: "choice",
      question: "N类 函数属于哪一类？",
      options: [
        "其他函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "N类 属于 其他函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 N类 函数的正确功能描述？",
      options: [
        "跳转首行",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "N类 函数的功能是：跳转首行"
    },
    {
      type: "fillBlank",
      question: "N类 函数的类别是？",
      answer: "其他函数",
      explanation: "N类 属于 其他函数。"
    }
  ],
  "NA": [
    {
      type: "choice",
      question: "NA 函数属于哪一类？",
      options: [
        "信息函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "NA 属于 信息函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 NA 函数的正确功能描述？",
      options: [
        "返回错误值 #N/A",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "NA 函数的功能是：返回错误值 #N/A"
    },
    {
      type: "fillBlank",
      question: "NA 函数的类别是？",
      answer: "信息函数",
      explanation: "NA 属于 信息函数。"
    }
  ],
  "NEGBINOMDIST": [
    {
      type: "choice",
      question: "NEGBINOMDIST 函数属于哪一类？",
      options: [
        "统计函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "NEGBINOMDIST 属于 统计函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 NEGBINOMDIST 函数的正确功能描述？",
      options: [
        "返回负二项式分布",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "NEGBINOMDIST 函数的功能是：返回负二项式分布"
    },
    {
      type: "fillBlank",
      question: "NEGBINOMDIST 函数的类别是？",
      answer: "统计函数",
      explanation: "NEGBINOMDIST 属于 统计函数。"
    }
  ],
  "NETWORKDAYS": [
    {
      type: "choice",
      question: "NETWORKDAYS 函数属于哪一类？",
      options: [
        "日期与时间函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "NETWORKDAYS 属于 日期与时间函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 NETWORKDAYS 函数的正确功能描述？",
      options: [
        "返回两个日期之间的全部工作日数",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "NETWORKDAYS 函数的功能是：返回两个日期之间的全部工作日数"
    },
    {
      type: "fillBlank",
      question: "NETWORKDAYS 函数的类别是？",
      answer: "日期与时间函数",
      explanation: "NETWORKDAYS 属于 日期与时间函数。"
    }
  ],
  "NOMINAL": [
    {
      type: "choice",
      question: "NOMINAL 函数属于哪一类？",
      options: [
        "财务函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "NOMINAL 属于 财务函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 NOMINAL 函数的正确功能描述？",
      options: [
        "返回名义年利率",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "NOMINAL 函数的功能是：返回名义年利率"
    },
    {
      type: "fillBlank",
      question: "NOMINAL 函数的类别是？",
      answer: "财务函数",
      explanation: "NOMINAL 属于 财务函数。"
    }
  ],
  "NORMDIST": [
    {
      type: "choice",
      question: "NORMDIST 函数属于哪一类？",
      options: [
        "统计函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "NORMDIST 属于 统计函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 NORMDIST 函数的正确功能描述？",
      options: [
        "返回正态累积分布",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "NORMDIST 函数的功能是：返回正态累积分布"
    },
    {
      type: "fillBlank",
      question: "NORMDIST 函数的类别是？",
      answer: "统计函数",
      explanation: "NORMDIST 属于 统计函数。"
    }
  ],
  "NORMINV": [
    {
      type: "choice",
      question: "NORMINV 函数属于哪一类？",
      options: [
        "统计函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "NORMINV 属于 统计函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 NORMINV 函数的正确功能描述？",
      options: [
        "返回反正态累积分布",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "NORMINV 函数的功能是：返回反正态累积分布"
    },
    {
      type: "fillBlank",
      question: "NORMINV 函数的类别是？",
      answer: "统计函数",
      explanation: "NORMINV 属于 统计函数。"
    }
  ],
  "NORMSDIST": [
    {
      type: "choice",
      question: "NORMSDIST 函数属于哪一类？",
      options: [
        "统计函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "NORMSDIST 属于 统计函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 NORMSDIST 函数的正确功能描述？",
      options: [
        "返回标准正态累积分布",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "NORMSDIST 函数的功能是：返回标准正态累积分布"
    },
    {
      type: "fillBlank",
      question: "NORMSDIST 函数的类别是？",
      answer: "统计函数",
      explanation: "NORMSDIST 属于 统计函数。"
    }
  ],
  "NOT": [
    {
      type: "choice",
      question: "NOT 函数属于哪一类？",
      options: [
        "逻辑函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "NOT 属于 逻辑函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 NOT 函数的正确功能描述？",
      options: [
        "对参数的逻辑值求反",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "NOT 函数的功能是：对参数的逻辑值求反"
    },
    {
      type: "fillBlank",
      question: "NOT 函数的类别是？",
      answer: "逻辑函数",
      explanation: "NOT 属于 逻辑函数。"
    }
  ],
  "NOW": [
    {
      type: "choice",
      question: "NOW 函数属于哪一类？",
      options: [
        "日期与时间函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "NOW 属于 日期与时间函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 NOW 函数的正确功能描述？",
      options: [
        "返回当前日期和时间的序列号",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "NOW 函数的功能是：返回当前日期和时间的序列号"
    },
    {
      type: "fillBlank",
      question: "NOW 函数的类别是？",
      answer: "日期与时间函数",
      explanation: "NOW 属于 日期与时间函数。"
    }
  ],
  "NPER": [
    {
      type: "choice",
      question: "NPER 函数属于哪一类？",
      options: [
        "财务函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "NPER 属于 财务函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 NPER 函数的正确功能描述？",
      options: [
        "返回投资的期数",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "NPER 函数的功能是：返回投资的期数"
    },
    {
      type: "fillBlank",
      question: "NPER 函数的类别是？",
      answer: "财务函数",
      explanation: "NPER 属于 财务函数。"
    }
  ],
  "NPV": [
    {
      type: "choice",
      question: "NPV 函数属于哪一类？",
      options: [
        "财务函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "NPV 属于 财务函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 NPV 函数的正确功能描述？",
      options: [
        "基于一系列定期的现金流和贴现率，返回一项投资的净现值",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "NPV 函数的功能是：基于一系列定期的现金流和贴现率，返回一项投资的净现值"
    },
    {
      type: "fillBlank",
      question: "NPV 函数的类别是？",
      answer: "财务函数",
      explanation: "NPV 属于 财务函数。"
    }
  ],
  "O类": [
    {
      type: "choice",
      question: "O类 函数属于哪一类？",
      options: [
        "其他函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "O类 属于 其他函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 O类 函数的正确功能描述？",
      options: [
        "跳转首行",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "O类 函数的功能是：跳转首行"
    },
    {
      type: "fillBlank",
      question: "O类 函数的类别是？",
      answer: "其他函数",
      explanation: "O类 属于 其他函数。"
    }
  ],
  "OCT2BIN": [
    {
      type: "choice",
      question: "OCT2BIN 函数属于哪一类？",
      options: [
        "工程函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "OCT2BIN 属于 工程函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 OCT2BIN 函数的正确功能描述？",
      options: [
        "将八进制数转换为二进制数",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "OCT2BIN 函数的功能是：将八进制数转换为二进制数"
    },
    {
      type: "fillBlank",
      question: "OCT2BIN 函数的类别是？",
      answer: "工程函数",
      explanation: "OCT2BIN 属于 工程函数。"
    }
  ],
  "OCT2DEC": [
    {
      type: "choice",
      question: "OCT2DEC 函数属于哪一类？",
      options: [
        "工程函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "OCT2DEC 属于 工程函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 OCT2DEC 函数的正确功能描述？",
      options: [
        "将八进制数转换为十进制数",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "OCT2DEC 函数的功能是：将八进制数转换为十进制数"
    },
    {
      type: "fillBlank",
      question: "OCT2DEC 函数的类别是？",
      answer: "工程函数",
      explanation: "OCT2DEC 属于 工程函数。"
    }
  ],
  "OCT2HEX": [
    {
      type: "choice",
      question: "OCT2HEX 函数属于哪一类？",
      options: [
        "工程函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "OCT2HEX 属于 工程函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 OCT2HEX 函数的正确功能描述？",
      options: [
        "将八进制数转换为十六进制数",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "OCT2HEX 函数的功能是：将八进制数转换为十六进制数"
    },
    {
      type: "fillBlank",
      question: "OCT2HEX 函数的类别是？",
      answer: "工程函数",
      explanation: "OCT2HEX 属于 工程函数。"
    }
  ],
  "ODD": [
    {
      type: "choice",
      question: "ODD 函数属于哪一类？",
      options: [
        "数学与三角函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "ODD 属于 数学与三角函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 ODD 函数的正确功能描述？",
      options: [
        "将数字向上舍入为最接近的奇型整数",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "ODD 函数的功能是：将数字向上舍入为最接近的奇型整数"
    },
    {
      type: "fillBlank",
      question: "ODD 函数的类别是？",
      answer: "数学与三角函数",
      explanation: "ODD 属于 数学与三角函数。"
    }
  ],
  "ODDFPRICE": [
    {
      type: "choice",
      question: "ODDFPRICE 函数属于哪一类？",
      options: [
        "财务函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "ODDFPRICE 属于 财务函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 ODDFPRICE 函数的正确功能描述？",
      options: [
        "返回首期付息日不固定的面值 const FUNCTIONS = 00 的有价证券的价格",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "ODDFPRICE 函数的功能是：返回首期付息日不固定的面值 const FUNCTIONS = 00 的有价证券的价格"
    },
    {
      type: "fillBlank",
      question: "ODDFPRICE 函数的类别是？",
      answer: "财务函数",
      explanation: "ODDFPRICE 属于 财务函数。"
    }
  ],
  "ODDFYIELD": [
    {
      type: "choice",
      question: "ODDFYIELD 函数属于哪一类？",
      options: [
        "财务函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "ODDFYIELD 属于 财务函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 ODDFYIELD 函数的正确功能描述？",
      options: [
        "返回首期付息日不固定的有价证券的收益率",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "ODDFYIELD 函数的功能是：返回首期付息日不固定的有价证券的收益率"
    },
    {
      type: "fillBlank",
      question: "ODDFYIELD 函数的类别是？",
      answer: "财务函数",
      explanation: "ODDFYIELD 属于 财务函数。"
    }
  ],
  "ODDLPRICH": [
    {
      type: "choice",
      question: "ODDLPRICH 函数属于哪一类？",
      options: [
        "其他函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "ODDLPRICH 属于 其他函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 ODDLPRICH 函数的正确功能描述？",
      options: [
        "返回末期付息日不固定的面值 const FUNCTIONS = 00 的有价证券的价格",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "ODDLPRICH 函数的功能是：返回末期付息日不固定的面值 const FUNCTIONS = 00 的有价证券的价格"
    },
    {
      type: "fillBlank",
      question: "ODDLPRICH 函数的类别是？",
      answer: "其他函数",
      explanation: "ODDLPRICH 属于 其他函数。"
    }
  ],
  "ODDLYIELD": [
    {
      type: "choice",
      question: "ODDLYIELD 函数属于哪一类？",
      options: [
        "财务函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "ODDLYIELD 属于 财务函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 ODDLYIELD 函数的正确功能描述？",
      options: [
        "返回末期付息日不固定的有价证券的收益率",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "ODDLYIELD 函数的功能是：返回末期付息日不固定的有价证券的收益率"
    },
    {
      type: "fillBlank",
      question: "ODDLYIELD 函数的类别是？",
      answer: "财务函数",
      explanation: "ODDLYIELD 属于 财务函数。"
    }
  ],
  "OFFSET": [
    {
      type: "choice",
      question: "OFFSET 函数属于哪一类？",
      options: [
        "查找与引用函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "OFFSET 属于 查找与引用函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 OFFSET 函数的正确功能描述？",
      options: [
        "从给定引用中返回引用偏移量",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "OFFSET 函数的功能是：从给定引用中返回引用偏移量"
    },
    {
      type: "fillBlank",
      question: "OFFSET 函数的类别是？",
      answer: "查找与引用函数",
      explanation: "OFFSET 属于 查找与引用函数。"
    }
  ],
  "OR": [
    {
      type: "choice",
      question: "OR 函数属于哪一类？",
      options: [
        "逻辑函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "OR 属于 逻辑函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 OR 函数的正确功能描述？",
      options: [
        "如果任一参数为TRUE，则返回TRUE",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "OR 函数的功能是：如果任一参数为TRUE，则返回TRUE"
    },
    {
      type: "fillBlank",
      question: "OR 函数的类别是？",
      answer: "逻辑函数",
      explanation: "OR 属于 逻辑函数。"
    }
  ],
  "P类": [
    {
      type: "choice",
      question: "P类 函数属于哪一类？",
      options: [
        "其他函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "P类 属于 其他函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 P类 函数的正确功能描述？",
      options: [
        "跳转首行",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "P类 函数的功能是：跳转首行"
    },
    {
      type: "fillBlank",
      question: "P类 函数的类别是？",
      answer: "其他函数",
      explanation: "P类 属于 其他函数。"
    }
  ],
  "PEARSON": [
    {
      type: "choice",
      question: "PEARSON 函数属于哪一类？",
      options: [
        "统计函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "PEARSON 属于 统计函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 PEARSON 函数的正确功能描述？",
      options: [
        "返回Pearson乘积矩相关系数",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "PEARSON 函数的功能是：返回Pearson乘积矩相关系数"
    },
    {
      type: "fillBlank",
      question: "PEARSON 函数的类别是？",
      answer: "统计函数",
      explanation: "PEARSON 属于 统计函数。"
    }
  ],
  "PERCENTILE": [
    {
      type: "choice",
      question: "PERCENTILE 函数属于哪一类？",
      options: [
        "统计函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "PERCENTILE 属于 统计函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 PERCENTILE 函数的正确功能描述？",
      options: [
        "返回区域中的第k个百分位值",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "PERCENTILE 函数的功能是：返回区域中的第k个百分位值"
    },
    {
      type: "fillBlank",
      question: "PERCENTILE 函数的类别是？",
      answer: "统计函数",
      explanation: "PERCENTILE 属于 统计函数。"
    }
  ],
  "PERCENTRANK": [
    {
      type: "choice",
      question: "PERCENTRANK 函数属于哪一类？",
      options: [
        "统计函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "PERCENTRANK 属于 统计函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 PERCENTRANK 函数的正确功能描述？",
      options: [
        "返回数据集中值的百分比排位",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "PERCENTRANK 函数的功能是：返回数据集中值的百分比排位"
    },
    {
      type: "fillBlank",
      question: "PERCENTRANK 函数的类别是？",
      answer: "统计函数",
      explanation: "PERCENTRANK 属于 统计函数。"
    }
  ],
  "PERMUT": [
    {
      type: "choice",
      question: "PERMUT 函数属于哪一类？",
      options: [
        "统计函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "PERMUT 属于 统计函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 PERMUT 函数的正确功能描述？",
      options: [
        "返回给定数目对象的排列数",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "PERMUT 函数的功能是：返回给定数目对象的排列数"
    },
    {
      type: "fillBlank",
      question: "PERMUT 函数的类别是？",
      answer: "统计函数",
      explanation: "PERMUT 属于 统计函数。"
    }
  ],
  "PI": [
    {
      type: "choice",
      question: "PI 函数属于哪一类？",
      options: [
        "数学与三角函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "PI 属于 数学与三角函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 PI 函数的正确功能描述？",
      options: [
        "返回Pi值",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "PI 函数的功能是：返回Pi值"
    },
    {
      type: "fillBlank",
      question: "PI 函数的类别是？",
      answer: "数学与三角函数",
      explanation: "PI 属于 数学与三角函数。"
    }
  ],
  "PMT": [
    {
      type: "choice",
      question: "PMT 函数属于哪一类？",
      options: [
        "财务函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "PMT 属于 财务函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 PMT 函数的正确功能描述？",
      options: [
        "返回年金的定期付款额",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "PMT 函数的功能是：返回年金的定期付款额"
    },
    {
      type: "fillBlank",
      question: "PMT 函数的类别是？",
      answer: "财务函数",
      explanation: "PMT 属于 财务函数。"
    }
  ],
  "POISSON": [
    {
      type: "choice",
      question: "POISSON 函数属于哪一类？",
      options: [
        "统计函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "POISSON 属于 统计函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 POISSON 函数的正确功能描述？",
      options: [
        "返回Poisson分布",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "POISSON 函数的功能是：返回Poisson分布"
    },
    {
      type: "fillBlank",
      question: "POISSON 函数的类别是？",
      answer: "统计函数",
      explanation: "POISSON 属于 统计函数。"
    }
  ],
  "POWER": [
    {
      type: "choice",
      question: "POWER 函数属于哪一类？",
      options: [
        "数学与三角函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "POWER 属于 数学与三角函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 POWER 函数的正确功能描述？",
      options: [
        "返回数的乘幂结果",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "POWER 函数的功能是：返回数的乘幂结果"
    },
    {
      type: "fillBlank",
      question: "POWER 函数的类别是？",
      answer: "数学与三角函数",
      explanation: "POWER 属于 数学与三角函数。"
    }
  ],
  "PPMT": [
    {
      type: "choice",
      question: "PPMT 函数属于哪一类？",
      options: [
        "财务函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "PPMT 属于 财务函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 PPMT 函数的正确功能描述？",
      options: [
        "返回投资在某一给定期间内的本金偿还额",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "PPMT 函数的功能是：返回投资在某一给定期间内的本金偿还额"
    },
    {
      type: "fillBlank",
      question: "PPMT 函数的类别是？",
      answer: "财务函数",
      explanation: "PPMT 属于 财务函数。"
    }
  ],
  "PRICE": [
    {
      type: "choice",
      question: "PRICE 函数属于哪一类？",
      options: [
        "财务函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "PRICE 属于 财务函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 PRICE 函数的正确功能描述？",
      options: [
        "返回定期付息的面值 const FUNCTIONS = 00 的有价证券的价格",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "PRICE 函数的功能是：返回定期付息的面值 const FUNCTIONS = 00 的有价证券的价格"
    },
    {
      type: "fillBlank",
      question: "PRICE 函数的类别是？",
      answer: "财务函数",
      explanation: "PRICE 属于 财务函数。"
    }
  ],
  "PRICEDISC": [
    {
      type: "choice",
      question: "PRICEDISC 函数属于哪一类？",
      options: [
        "财务函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "PRICEDISC 属于 财务函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 PRICEDISC 函数的正确功能描述？",
      options: [
        "返回折价发行的面值 const FUNCTIONS = 00 的有价证券的价格",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "PRICEDISC 函数的功能是：返回折价发行的面值 const FUNCTIONS = 00 的有价证券的价格"
    },
    {
      type: "fillBlank",
      question: "PRICEDISC 函数的类别是？",
      answer: "财务函数",
      explanation: "PRICEDISC 属于 财务函数。"
    }
  ],
  "PRICEMAT": [
    {
      type: "choice",
      question: "PRICEMAT 函数属于哪一类？",
      options: [
        "财务函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "PRICEMAT 属于 财务函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 PRICEMAT 函数的正确功能描述？",
      options: [
        "返回到期付息的面值 const FUNCTIONS = 00 的有价证券的价格",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "PRICEMAT 函数的功能是：返回到期付息的面值 const FUNCTIONS = 00 的有价证券的价格"
    },
    {
      type: "fillBlank",
      question: "PRICEMAT 函数的类别是？",
      answer: "财务函数",
      explanation: "PRICEMAT 属于 财务函数。"
    }
  ],
  "PROB": [
    {
      type: "choice",
      question: "PROB 函数属于哪一类？",
      options: [
        "统计函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "PROB 属于 统计函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 PROB 函数的正确功能描述？",
      options: [
        "返回区域中的值在上下限之间的概率",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "PROB 函数的功能是：返回区域中的值在上下限之间的概率"
    },
    {
      type: "fillBlank",
      question: "PROB 函数的类别是？",
      answer: "统计函数",
      explanation: "PROB 属于 统计函数。"
    }
  ],
  "PRODUCT": [
    {
      type: "choice",
      question: "PRODUCT 函数属于哪一类？",
      options: [
        "数学与三角函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "PRODUCT 属于 数学与三角函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 PRODUCT 函数的正确功能描述？",
      options: [
        "将所有以参数形式给出的数字相乘",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "PRODUCT 函数的功能是：将所有以参数形式给出的数字相乘"
    },
    {
      type: "fillBlank",
      question: "PRODUCT 函数的类别是？",
      answer: "数学与三角函数",
      explanation: "PRODUCT 属于 数学与三角函数。"
    }
  ],
  "PROPER": [
    {
      type: "choice",
      question: "PROPER 函数属于哪一类？",
      options: [
        "文本函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "PROPER 属于 文本函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 PROPER 函数的正确功能描述？",
      options: [
        "将文本值中每一个单词的首字母设置为大写",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "PROPER 函数的功能是：将文本值中每一个单词的首字母设置为大写"
    },
    {
      type: "fillBlank",
      question: "PROPER 函数的类别是？",
      answer: "文本函数",
      explanation: "PROPER 属于 文本函数。"
    }
  ],
  "PV": [
    {
      type: "choice",
      question: "PV 函数属于哪一类？",
      options: [
        "财务函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "PV 属于 财务函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 PV 函数的正确功能描述？",
      options: [
        "返回投资的现值",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "PV 函数的功能是：返回投资的现值"
    },
    {
      type: "fillBlank",
      question: "PV 函数的类别是？",
      answer: "财务函数",
      explanation: "PV 属于 财务函数。"
    }
  ],
  "QUARTILE": [
    {
      type: "choice",
      question: "QUARTILE 函数属于哪一类？",
      options: [
        "统计函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "QUARTILE 属于 统计函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 QUARTILE 函数的正确功能描述？",
      options: [
        "返回一组数据的四分位点",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "QUARTILE 函数的功能是：返回一组数据的四分位点"
    },
    {
      type: "fillBlank",
      question: "QUARTILE 函数的类别是？",
      answer: "统计函数",
      explanation: "QUARTILE 属于 统计函数。"
    }
  ],
  "QUOTIENT": [
    {
      type: "choice",
      question: "QUOTIENT 函数属于哪一类？",
      options: [
        "数学与三角函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "QUOTIENT 属于 数学与三角函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 QUOTIENT 函数的正确功能描述？",
      options: [
        "返回商的整数部分，即舍去商的小数部分。",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "QUOTIENT 函数的功能是：返回商的整数部分，即舍去商的小数部分。"
    },
    {
      type: "fillBlank",
      question: "QUOTIENT 函数的类别是？",
      answer: "数学与三角函数",
      explanation: "QUOTIENT 属于 数学与三角函数。"
    }
  ],
  "RADANS": [
    {
      type: "choice",
      question: "RADANS 函数属于哪一类？",
      options: [
        "其他函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "RADANS 属于 其他函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 RADANS 函数的正确功能描述？",
      options: [
        "将一个表示角度的数值或参数转换为弧度。",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "RADANS 函数的功能是：将一个表示角度的数值或参数转换为弧度。"
    },
    {
      type: "fillBlank",
      question: "RADANS 函数的类别是？",
      answer: "其他函数",
      explanation: "RADANS 属于 其他函数。"
    }
  ],
  "RAND": [
    {
      type: "choice",
      question: "RAND 函数属于哪一类？",
      options: [
        "数学与三角函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "RAND 属于 数学与三角函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 RAND 函数的正确功能描述？",
      options: [
        "R回一个大于等于0小于1的随机数，每次计算工作表(按F9键)将返回一个新的数值。",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "RAND 函数的功能是：R回一个大于等于0小于1的随机数，每次计算工作表(按F9键)将返回一个新的数值。"
    },
    {
      type: "fillBlank",
      question: "RAND 函数的类别是？",
      answer: "数学与三角函数",
      explanation: "RAND 属于 数学与三角函数。"
    }
  ],
  "RANDBETWEEN": [
    {
      type: "choice",
      question: "RANDBETWEEN 函数属于哪一类？",
      options: [
        "数学与三角函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "RANDBETWEEN 属于 数学与三角函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 RANDBETWEEN 函数的正确功能描述？",
      options: [
        "产生位于两个指定数值之间的一个随机数，每次重新计算工作表(按F9键)都将返回新的数值。",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "RANDBETWEEN 函数的功能是：产生位于两个指定数值之间的一个随机数，每次重新计算工作表(按F9键)都将返回新的数值。"
    },
    {
      type: "fillBlank",
      question: "RANDBETWEEN 函数的类别是？",
      answer: "数学与三角函数",
      explanation: "RANDBETWEEN 属于 数学与三角函数。"
    }
  ],
  "RANK": [
    {
      type: "choice",
      question: "RANK 函数属于哪一类？",
      options: [
        "数学与三角函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "RANK 属于 数学与三角函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 RANK 函数的正确功能描述？",
      options: [
        "返回一个数值在一组数值中的排位(如果数据清单已经排过序了，则数值的排位就是它当前的位置)",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "RANK 函数的功能是：返回一个数值在一组数值中的排位(如果数据清单已经排过序了，则数值的排位就是它当前的位置)"
    },
    {
      type: "fillBlank",
      question: "RANK 函数的类别是？",
      answer: "数学与三角函数",
      explanation: "RANK 属于 数学与三角函数。"
    }
  ],
  "RATE": [
    {
      type: "choice",
      question: "RATE 函数属于哪一类？",
      options: [
        "财务函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "RATE 属于 财务函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 RATE 函数的正确功能描述？",
      options: [
        "返回年金的各期利率。函数RATE通过迭代法计算得出，并且可能无解或有多个解。",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "RATE 函数的功能是：返回年金的各期利率。函数RATE通过迭代法计算得出，并且可能无解或有多个解。"
    },
    {
      type: "fillBlank",
      question: "RATE 函数的类别是？",
      answer: "财务函数",
      explanation: "RATE 属于 财务函数。"
    }
  ],
  "RECEIVED": [
    {
      type: "choice",
      question: "RECEIVED 函数属于哪一类？",
      options: [
        "财务函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "RECEIVED 属于 财务函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 RECEIVED 函数的正确功能描述？",
      options: [
        "返回一次性付息的有价证券到期收回的金额。",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "RECEIVED 函数的功能是：返回一次性付息的有价证券到期收回的金额。"
    },
    {
      type: "fillBlank",
      question: "RECEIVED 函数的类别是？",
      answer: "财务函数",
      explanation: "RECEIVED 属于 财务函数。"
    }
  ],
  "REPLACE": [
    {
      type: "choice",
      question: "REPLACE 函数属于哪一类？",
      options: [
        "文本函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "REPLACE 属于 文本函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 REPLACE 函数的正确功能描述？",
      options: [
        "替换文本内的字符",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "REPLACE 函数的功能是：替换文本内的字符"
    },
    {
      type: "fillBlank",
      question: "REPLACE 函数的类别是？",
      answer: "文本函数",
      explanation: "REPLACE 属于 文本函数。"
    }
  ],
  "REPLACEB": [
    {
      type: "choice",
      question: "REPLACEB 函数属于哪一类？",
      options: [
        "文本函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "REPLACEB 属于 文本函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 REPLACEB 函数的正确功能描述？",
      options: [
        "根据所指定的字节数替换另一文本串中的部分文本",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "REPLACEB 函数的功能是：根据所指定的字节数替换另一文本串中的部分文本"
    },
    {
      type: "fillBlank",
      question: "REPLACEB 函数的类别是？",
      answer: "文本函数",
      explanation: "REPLACEB 属于 文本函数。"
    }
  ],
  "REPT": [
    {
      type: "choice",
      question: "REPT 函数属于哪一类？",
      options: [
        "文本函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "REPT 属于 文本函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 REPT 函数的正确功能描述？",
      options: [
        "按给定次数重复文本",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "REPT 函数的功能是：按给定次数重复文本"
    },
    {
      type: "fillBlank",
      question: "REPT 函数的类别是？",
      answer: "文本函数",
      explanation: "REPT 属于 文本函数。"
    }
  ],
  "RIGHT": [
    {
      type: "choice",
      question: "RIGHT 函数属于哪一类？",
      options: [
        "文本函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "RIGHT 属于 文本函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 RIGHT 函数的正确功能描述？",
      options: [
        "返回文本值最右边的字符",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "RIGHT 函数的功能是：返回文本值最右边的字符"
    },
    {
      type: "fillBlank",
      question: "RIGHT 函数的类别是？",
      answer: "文本函数",
      explanation: "RIGHT 属于 文本函数。"
    }
  ],
  "ROMAN": [
    {
      type: "choice",
      question: "ROMAN 函数属于哪一类？",
      options: [
        "数学与三角函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "ROMAN 属于 数学与三角函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 ROMAN 函数的正确功能描述？",
      options: [
        "将阿拉伯数字转换为文本形式的罗马数字。",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "ROMAN 函数的功能是：将阿拉伯数字转换为文本形式的罗马数字。"
    },
    {
      type: "fillBlank",
      question: "ROMAN 函数的类别是？",
      answer: "数学与三角函数",
      explanation: "ROMAN 属于 数学与三角函数。"
    }
  ],
  "ROUND": [
    {
      type: "choice",
      question: "ROUND 函数属于哪一类？",
      options: [
        "数学与三角函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "ROUND 属于 数学与三角函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 ROUND 函数的正确功能描述？",
      options: [
        "按指定位数四舍五入某个数字。",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "ROUND 函数的功能是：按指定位数四舍五入某个数字。"
    },
    {
      type: "fillBlank",
      question: "ROUND 函数的类别是？",
      answer: "数学与三角函数",
      explanation: "ROUND 属于 数学与三角函数。"
    }
  ],
  "ROUNDDOWN": [
    {
      type: "choice",
      question: "ROUNDDOWN 函数属于哪一类？",
      options: [
        "数学与三角函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "ROUNDDOWN 属于 数学与三角函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 ROUNDDOWN 函数的正确功能描述？",
      options: [
        "按绝对值减小的方向舍入某一数字。",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "ROUNDDOWN 函数的功能是：按绝对值减小的方向舍入某一数字。"
    },
    {
      type: "fillBlank",
      question: "ROUNDDOWN 函数的类别是？",
      answer: "数学与三角函数",
      explanation: "ROUNDDOWN 属于 数学与三角函数。"
    }
  ],
  "ROUNDUP": [
    {
      type: "choice",
      question: "ROUNDUP 函数属于哪一类？",
      options: [
        "数学与三角函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "ROUNDUP 属于 数学与三角函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 ROUNDUP 函数的正确功能描述？",
      options: [
        "按绝对值增大的方向舍入一个数字。",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "ROUNDUP 函数的功能是：按绝对值增大的方向舍入一个数字。"
    },
    {
      type: "fillBlank",
      question: "ROUNDUP 函数的类别是？",
      answer: "数学与三角函数",
      explanation: "ROUNDUP 属于 数学与三角函数。"
    }
  ],
  "ROW": [
    {
      type: "choice",
      question: "ROW 函数属于哪一类？",
      options: [
        "查找与引用函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "ROW 属于 查找与引用函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 ROW 函数的正确功能描述？",
      options: [
        "返回给定引用的行号。",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "ROW 函数的功能是：返回给定引用的行号。"
    },
    {
      type: "fillBlank",
      question: "ROW 函数的类别是？",
      answer: "查找与引用函数",
      explanation: "ROW 属于 查找与引用函数。"
    }
  ],
  "ROWS": [
    {
      type: "choice",
      question: "ROWS 函数属于哪一类？",
      options: [
        "查找与引用函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "ROWS 属于 查找与引用函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 ROWS 函数的正确功能描述？",
      options: [
        "返回引用或数组的行数",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "ROWS 函数的功能是：返回引用或数组的行数"
    },
    {
      type: "fillBlank",
      question: "ROWS 函数的类别是？",
      answer: "查找与引用函数",
      explanation: "ROWS 属于 查找与引用函数。"
    }
  ],
  "RSQ": [
    {
      type: "choice",
      question: "RSQ 函数属于哪一类？",
      options: [
        "统计函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "RSQ 属于 统计函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 RSQ 函数的正确功能描述？",
      options: [
        "返回给定数据点的Pearson乘积矩相关系数的平方。",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "RSQ 函数的功能是：返回给定数据点的Pearson乘积矩相关系数的平方。"
    },
    {
      type: "fillBlank",
      question: "RSQ 函数的类别是？",
      answer: "统计函数",
      explanation: "RSQ 属于 统计函数。"
    }
  ],
  "RTD": [
    {
      type: "choice",
      question: "RTD 函数属于哪一类？",
      options: [
        "查找与引用函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "RTD 属于 查找与引用函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 RTD 函数的正确功能描述？",
      options: [
        "从支持COM自动化的程序中返回实时数据。",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "RTD 函数的功能是：从支持COM自动化的程序中返回实时数据。"
    },
    {
      type: "fillBlank",
      question: "RTD 函数的类别是？",
      answer: "查找与引用函数",
      explanation: "RTD 属于 查找与引用函数。"
    }
  ],
  "SEARCH": [
    {
      type: "choice",
      question: "SEARCH 函数属于哪一类？",
      options: [
        "文本函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "SEARCH 属于 文本函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 SEARCH 函数的正确功能描述？",
      options: [
        "返回从start_num开始首次找到特定字符或文本串的位置编号。 其中SEARCH以字符数为单位，SEARCHB以字节数为单位。",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "SEARCH 函数的功能是：返回从start_num开始首次找到特定字符或文本串的位置编号。 其中SEARCH以字符数为单位，SEARCHB以字节数为单位。"
    },
    {
      type: "fillBlank",
      question: "SEARCH 函数的类别是？",
      answer: "文本函数",
      explanation: "SEARCH 属于 文本函数。"
    }
  ],
  "SECOND": [
    {
      type: "choice",
      question: "SECOND 函数属于哪一类？",
      options: [
        "日期与时间函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "SECOND 属于 日期与时间函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 SECOND 函数的正确功能描述？",
      options: [
        "返回时间值的秒数(为0至59之间的一个整数)。",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "SECOND 函数的功能是：返回时间值的秒数(为0至59之间的一个整数)。"
    },
    {
      type: "fillBlank",
      question: "SECOND 函数的类别是？",
      answer: "日期与时间函数",
      explanation: "SECOND 属于 日期与时间函数。"
    }
  ],
  "SERIESSUM": [
    {
      type: "choice",
      question: "SERIESSUM 函数属于哪一类？",
      options: [
        "数学与三角函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "SERIESSUM 属于 数学与三角函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 SERIESSUM 函数的正确功能描述？",
      options: [
        "返回幂级数的和。",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "SERIESSUM 函数的功能是：返回幂级数的和。"
    },
    {
      type: "fillBlank",
      question: "SERIESSUM 函数的类别是？",
      answer: "数学与三角函数",
      explanation: "SERIESSUM 属于 数学与三角函数。"
    }
  ],
  "SIGN": [
    {
      type: "choice",
      question: "SIGN 函数属于哪一类？",
      options: [
        "数学与三角函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "SIGN 属于 数学与三角函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 SIGN 函数的正确功能描述？",
      options: [
        "返回数字的符号。正数返回1，零返回0，负数时返回-1。",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "SIGN 函数的功能是：返回数字的符号。正数返回1，零返回0，负数时返回-1。"
    },
    {
      type: "fillBlank",
      question: "SIGN 函数的类别是？",
      answer: "数学与三角函数",
      explanation: "SIGN 属于 数学与三角函数。"
    }
  ],
  "SIN": [
    {
      type: "choice",
      question: "SIN 函数属于哪一类？",
      options: [
        "数学与三角函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "SIN 属于 数学与三角函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 SIN 函数的正确功能描述？",
      options: [
        "返回某一角度的正弦值。",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "SIN 函数的功能是：返回某一角度的正弦值。"
    },
    {
      type: "fillBlank",
      question: "SIN 函数的类别是？",
      answer: "数学与三角函数",
      explanation: "SIN 属于 数学与三角函数。"
    }
  ],
  "SINH": [
    {
      type: "choice",
      question: "SINH 函数属于哪一类？",
      options: [
        "数学与三角函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "SINH 属于 数学与三角函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 SINH 函数的正确功能描述？",
      options: [
        "返回任意实数的双曲正弦值。",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "SINH 函数的功能是：返回任意实数的双曲正弦值。"
    },
    {
      type: "fillBlank",
      question: "SINH 函数的类别是？",
      answer: "数学与三角函数",
      explanation: "SINH 属于 数学与三角函数。"
    }
  ],
  "SKEW": [
    {
      type: "choice",
      question: "SKEW 函数属于哪一类？",
      options: [
        "统计函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "SKEW 属于 统计函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 SKEW 函数的正确功能描述？",
      options: [
        "返回一个分布的不对称度.它反映以平均值为中心的分布的不对称程度,正不对称度表示不对称边的分布更趋向正值.负不对称度表示不对称边的分布更趋向负值",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "SKEW 函数的功能是：返回一个分布的不对称度.它反映以平均值为中心的分布的不对称程度,正不对称度表示不对称边的分布更趋向正值.负不对称度表示不对称边的分布更趋向负值"
    },
    {
      type: "fillBlank",
      question: "SKEW 函数的类别是？",
      answer: "统计函数",
      explanation: "SKEW 属于 统计函数。"
    }
  ],
  "SLN": [
    {
      type: "choice",
      question: "SLN 函数属于哪一类？",
      options: [
        "财务函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "SLN 属于 财务函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 SLN 函数的正确功能描述？",
      options: [
        "返回某项资产在一个期间中的线性折旧值",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "SLN 函数的功能是：返回某项资产在一个期间中的线性折旧值"
    },
    {
      type: "fillBlank",
      question: "SLN 函数的类别是？",
      answer: "财务函数",
      explanation: "SLN 属于 财务函数。"
    }
  ],
  "SLOPE": [
    {
      type: "choice",
      question: "SLOPE 函数属于哪一类？",
      options: [
        "统计函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "SLOPE 属于 统计函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 SLOPE 函数的正确功能描述？",
      options: [
        "返回经过给定数据点的线性回归拟合线方程的斜率(它是直线上任意两点的垂直距离与水平距离的比值，也就是回归直线的变化率)",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "SLOPE 函数的功能是：返回经过给定数据点的线性回归拟合线方程的斜率(它是直线上任意两点的垂直距离与水平距离的比值，也就是回归直线的变化率)"
    },
    {
      type: "fillBlank",
      question: "SLOPE 函数的类别是？",
      answer: "统计函数",
      explanation: "SLOPE 属于 统计函数。"
    }
  ],
  "SMALL": [
    {
      type: "choice",
      question: "SMALL 函数属于哪一类？",
      options: [
        "统计函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "SMALL 属于 统计函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 SMALL 函数的正确功能描述？",
      options: [
        "返回数据集中第k个最小值，从而得到数据集中特定位置上的数值。",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "SMALL 函数的功能是：返回数据集中第k个最小值，从而得到数据集中特定位置上的数值。"
    },
    {
      type: "fillBlank",
      question: "SMALL 函数的类别是？",
      answer: "统计函数",
      explanation: "SMALL 属于 统计函数。"
    }
  ],
  "SQL.REQUEST": [
    {
      type: "choice",
      question: "SQL.REQUEST 函数属于哪一类？",
      options: [
        "外部函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "SQL.REQUEST 属于 外部函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 SQL.REQUEST 函数的正确功能描述？",
      options: [
        "与外部数据源连接，从工作表运行查询，然后SQL.REQUEST将查询结果以数组的形式返回，而无需进行宏编程。",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "SQL.REQUEST 函数的功能是：与外部数据源连接，从工作表运行查询，然后SQL.REQUEST将查询结果以数组的形式返回，而无需进行宏编程。"
    },
    {
      type: "fillBlank",
      question: "SQL.REQUEST 函数的类别是？",
      answer: "外部函数",
      explanation: "SQL.REQUEST 属于 外部函数。"
    }
  ],
  "SQRT": [
    {
      type: "choice",
      question: "SQRT 函数属于哪一类？",
      options: [
        "数学与三角函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "SQRT 属于 数学与三角函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 SQRT 函数的正确功能描述？",
      options: [
        "返回某一正数的算术平方根。",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "SQRT 函数的功能是：返回某一正数的算术平方根。"
    },
    {
      type: "fillBlank",
      question: "SQRT 函数的类别是？",
      answer: "数学与三角函数",
      explanation: "SQRT 属于 数学与三角函数。"
    }
  ],
  "SQRTPI": [
    {
      type: "choice",
      question: "SQRTPI 函数属于哪一类？",
      options: [
        "数学与三角函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "SQRTPI 属于 数学与三角函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 SQRTPI 函数的正确功能描述？",
      options: [
        "返回一个正实数与π的乘积的平方根。",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "SQRTPI 函数的功能是：返回一个正实数与π的乘积的平方根。"
    },
    {
      type: "fillBlank",
      question: "SQRTPI 函数的类别是？",
      answer: "数学与三角函数",
      explanation: "SQRTPI 属于 数学与三角函数。"
    }
  ],
  "STANDARDIZE": [
    {
      type: "choice",
      question: "STANDARDIZE 函数属于哪一类？",
      options: [
        "统计函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "STANDARDIZE 属于 统计函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 STANDARDIZE 函数的正确功能描述？",
      options: [
        "返回以mean为平均值，以standard-dev为标准偏差的分布的正态化数值。",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "STANDARDIZE 函数的功能是：返回以mean为平均值，以standard-dev为标准偏差的分布的正态化数值。"
    },
    {
      type: "fillBlank",
      question: "STANDARDIZE 函数的类别是？",
      answer: "统计函数",
      explanation: "STANDARDIZE 属于 统计函数。"
    }
  ],
  "STDEV": [
    {
      type: "choice",
      question: "STDEV 函数属于哪一类？",
      options: [
        "统计函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "STDEV 属于 统计函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 STDEV 函数的正确功能描述？",
      options: [
        "估算样本的标准偏差。它反映了数据相对于平均值(mean)的离散程度。",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "STDEV 函数的功能是：估算样本的标准偏差。它反映了数据相对于平均值(mean)的离散程度。"
    },
    {
      type: "fillBlank",
      question: "STDEV 函数的类别是？",
      answer: "统计函数",
      explanation: "STDEV 属于 统计函数。"
    }
  ],
  "STDEVA": [
    {
      type: "choice",
      question: "STDEVA 函数属于哪一类？",
      options: [
        "统计函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "STDEVA 属于 统计函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 STDEVA 函数的正确功能描述？",
      options: [
        "计算基于给定样本的标准偏差。它与STDEV函数的区别是文本值和逻辑值(TRUE或FALSE)也将参与计算。",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "STDEVA 函数的功能是：计算基于给定样本的标准偏差。它与STDEV函数的区别是文本值和逻辑值(TRUE或FALSE)也将参与计算。"
    },
    {
      type: "fillBlank",
      question: "STDEVA 函数的类别是？",
      answer: "统计函数",
      explanation: "STDEVA 属于 统计函数。"
    }
  ],
  "STDEVP": [
    {
      type: "choice",
      question: "STDEVP 函数属于哪一类？",
      options: [
        "统计函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "STDEVP 属于 统计函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 STDEVP 函数的正确功能描述？",
      options: [
        "返回整个样本总体的标准偏差。它反映了样本总体相对于平均值(mean)的离散程度。",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "STDEVP 函数的功能是：返回整个样本总体的标准偏差。它反映了样本总体相对于平均值(mean)的离散程度。"
    },
    {
      type: "fillBlank",
      question: "STDEVP 函数的类别是？",
      answer: "统计函数",
      explanation: "STDEVP 属于 统计函数。"
    }
  ],
  "STDEVPA": [
    {
      type: "choice",
      question: "STDEVPA 函数属于哪一类？",
      options: [
        "统计函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "STDEVPA 属于 统计函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 STDEVPA 函数的正确功能描述？",
      options: [
        "计算样本总体的标准偏差",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "STDEVPA 函数的功能是：计算样本总体的标准偏差"
    },
    {
      type: "fillBlank",
      question: "STDEVPA 函数的类别是？",
      answer: "统计函数",
      explanation: "STDEVPA 属于 统计函数。"
    }
  ],
  "STEYX": [
    {
      type: "choice",
      question: "STEYX 函数属于哪一类？",
      options: [
        "统计函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "STEYX 属于 统计函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 STEYX 函数的正确功能描述？",
      options: [
        "返回通过线性回归法计算y预测值时所产生的标准误差",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "STEYX 函数的功能是：返回通过线性回归法计算y预测值时所产生的标准误差"
    },
    {
      type: "fillBlank",
      question: "STEYX 函数的类别是？",
      answer: "统计函数",
      explanation: "STEYX 属于 统计函数。"
    }
  ],
  "SUBSTITUTE": [
    {
      type: "choice",
      question: "SUBSTITUTE 函数属于哪一类？",
      options: [
        "文本函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "SUBSTITUTE 属于 文本函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 SUBSTITUTE 函数的正确功能描述？",
      options: [
        "在文字串中用new_text替代old_text",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "SUBSTITUTE 函数的功能是：在文字串中用new_text替代old_text"
    },
    {
      type: "fillBlank",
      question: "SUBSTITUTE 函数的类别是？",
      answer: "文本函数",
      explanation: "SUBSTITUTE 属于 文本函数。"
    }
  ],
  "SUBTOTAL": [
    {
      type: "choice",
      question: "SUBTOTAL 函数属于哪一类？",
      options: [
        "数学与三角函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "SUBTOTAL 属于 数学与三角函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 SUBTOTAL 函数的正确功能描述？",
      options: [
        "返回数据清单或数据库中的分类汇总",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "SUBTOTAL 函数的功能是：返回数据清单或数据库中的分类汇总"
    },
    {
      type: "fillBlank",
      question: "SUBTOTAL 函数的类别是？",
      answer: "数学与三角函数",
      explanation: "SUBTOTAL 属于 数学与三角函数。"
    }
  ],
  "SUM": [
    {
      type: "choice",
      question: "SUM 函数属于哪一类？",
      options: [
        "数学与三角函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "SUM 属于 数学与三角函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 SUM 函数的正确功能描述？",
      options: [
        "对满足条件的单元格的数值求和",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "SUM 函数的功能是：对满足条件的单元格的数值求和"
    },
    {
      type: "fillBlank",
      question: "SUM 函数的类别是？",
      answer: "数学与三角函数",
      explanation: "SUM 属于 数学与三角函数。"
    }
  ],
  "SUMIF": [
    {
      type: "choice",
      question: "SUMIF 函数属于哪一类？",
      options: [
        "数学与三角函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "SUMIF 属于 数学与三角函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 SUMIF 函数的正确功能描述？",
      options: [
        "根据指定条件对若干单元格、区域或引用求和",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "SUMIF 函数的功能是：根据指定条件对若干单元格、区域或引用求和"
    },
    {
      type: "fillBlank",
      question: "SUMIF 函数的类别是？",
      answer: "数学与三角函数",
      explanation: "SUMIF 属于 数学与三角函数。"
    }
  ],
  "SUMPRODUCT": [
    {
      type: "choice",
      question: "SUMPRODUCT 函数属于哪一类？",
      options: [
        "数学与三角函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "SUMPRODUCT 属于 数学与三角函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 SUMPRODUCT 函数的正确功能描述？",
      options: [
        "在给定的几组数组中，将数组间对应的元素相乘，并返回乘积之和",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "SUMPRODUCT 函数的功能是：在给定的几组数组中，将数组间对应的元素相乘，并返回乘积之和"
    },
    {
      type: "fillBlank",
      question: "SUMPRODUCT 函数的类别是？",
      answer: "数学与三角函数",
      explanation: "SUMPRODUCT 属于 数学与三角函数。"
    }
  ],
  "SUMSQ": [
    {
      type: "choice",
      question: "SUMSQ 函数属于哪一类？",
      options: [
        "数学与三角函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "SUMSQ 属于 数学与三角函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 SUMSQ 函数的正确功能描述？",
      options: [
        "返回所有参数的平方和",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "SUMSQ 函数的功能是：返回所有参数的平方和"
    },
    {
      type: "fillBlank",
      question: "SUMSQ 函数的类别是？",
      answer: "数学与三角函数",
      explanation: "SUMSQ 属于 数学与三角函数。"
    }
  ],
  "SUMX2MY2": [
    {
      type: "choice",
      question: "SUMX2MY2 函数属于哪一类？",
      options: [
        "数学与三角函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "SUMX2MY2 属于 数学与三角函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 SUMX2MY2 函数的正确功能描述？",
      options: [
        "返回两数组中对应数值的平方差之和",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "SUMX2MY2 函数的功能是：返回两数组中对应数值的平方差之和"
    },
    {
      type: "fillBlank",
      question: "SUMX2MY2 函数的类别是？",
      answer: "数学与三角函数",
      explanation: "SUMX2MY2 属于 数学与三角函数。"
    }
  ],
  "SUMX2PY2": [
    {
      type: "choice",
      question: "SUMX2PY2 函数属于哪一类？",
      options: [
        "数学与三角函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "SUMX2PY2 属于 数学与三角函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 SUMX2PY2 函数的正确功能描述？",
      options: [
        "返回两数组中对应数值的平方和的总和",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "SUMX2PY2 函数的功能是：返回两数组中对应数值的平方和的总和"
    },
    {
      type: "fillBlank",
      question: "SUMX2PY2 函数的类别是？",
      answer: "数学与三角函数",
      explanation: "SUMX2PY2 属于 数学与三角函数。"
    }
  ],
  "SUMXMY2": [
    {
      type: "choice",
      question: "SUMXMY2 函数属于哪一类？",
      options: [
        "数学与三角函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "SUMXMY2 属于 数学与三角函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 SUMXMY2 函数的正确功能描述？",
      options: [
        "返回两数组中对应数值之差的平方和",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "SUMXMY2 函数的功能是：返回两数组中对应数值之差的平方和"
    },
    {
      type: "fillBlank",
      question: "SUMXMY2 函数的类别是？",
      answer: "数学与三角函数",
      explanation: "SUMXMY2 属于 数学与三角函数。"
    }
  ],
  "SYD": [
    {
      type: "choice",
      question: "SYD 函数属于哪一类？",
      options: [
        "财务函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "SYD 属于 财务函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 SYD 函数的正确功能描述？",
      options: [
        "返回某项资产按年限总和折旧法计算的指定期间的折旧值",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "SYD 函数的功能是：返回某项资产按年限总和折旧法计算的指定期间的折旧值"
    },
    {
      type: "fillBlank",
      question: "SYD 函数的类别是？",
      answer: "财务函数",
      explanation: "SYD 属于 财务函数。"
    }
  ],
  "TAN": [
    {
      type: "choice",
      question: "TAN 函数属于哪一类？",
      options: [
        "数学与三角函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "TAN 属于 数学与三角函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 TAN 函数的正确功能描述？",
      options: [
        "返回某一角度的正切值",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "TAN 函数的功能是：返回某一角度的正切值"
    },
    {
      type: "fillBlank",
      question: "TAN 函数的类别是？",
      answer: "数学与三角函数",
      explanation: "TAN 属于 数学与三角函数。"
    }
  ],
  "TANH": [
    {
      type: "choice",
      question: "TANH 函数属于哪一类？",
      options: [
        "数学与三角函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "TANH 属于 数学与三角函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 TANH 函数的正确功能描述？",
      options: [
        "返回任意实数的双曲正切值",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "TANH 函数的功能是：返回任意实数的双曲正切值"
    },
    {
      type: "fillBlank",
      question: "TANH 函数的类别是？",
      answer: "数学与三角函数",
      explanation: "TANH 属于 数学与三角函数。"
    }
  ],
  "TBILLEQ": [
    {
      type: "choice",
      question: "TBILLEQ 函数属于哪一类？",
      options: [
        "财务函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "TBILLEQ 属于 财务函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 TBILLEQ 函数的正确功能描述？",
      options: [
        "返回国库券的等效收益率",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "TBILLEQ 函数的功能是：返回国库券的等效收益率"
    },
    {
      type: "fillBlank",
      question: "TBILLEQ 函数的类别是？",
      answer: "财务函数",
      explanation: "TBILLEQ 属于 财务函数。"
    }
  ],
  "TBILLPRICH": [
    {
      type: "choice",
      question: "TBILLPRICH 函数属于哪一类？",
      options: [
        "其他函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "TBILLPRICH 属于 其他函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 TBILLPRICH 函数的正确功能描述？",
      options: [
        "返回面值const FUNCTIONS = 00的国库券的价格",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "TBILLPRICH 函数的功能是：返回面值const FUNCTIONS = 00的国库券的价格"
    },
    {
      type: "fillBlank",
      question: "TBILLPRICH 函数的类别是？",
      answer: "其他函数",
      explanation: "TBILLPRICH 属于 其他函数。"
    }
  ],
  "TBILLYIELD": [
    {
      type: "choice",
      question: "TBILLYIELD 函数属于哪一类？",
      options: [
        "财务函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "TBILLYIELD 属于 财务函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 TBILLYIELD 函数的正确功能描述？",
      options: [
        "返回国库券的收益率",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "TBILLYIELD 函数的功能是：返回国库券的收益率"
    },
    {
      type: "fillBlank",
      question: "TBILLYIELD 函数的类别是？",
      answer: "财务函数",
      explanation: "TBILLYIELD 属于 财务函数。"
    }
  ],
  "TDIST": [
    {
      type: "choice",
      question: "TDIST 函数属于哪一类？",
      options: [
        "统计函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "TDIST 属于 统计函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 TDIST 函数的正确功能描述？",
      options: [
        "返回学生的t分布",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "TDIST 函数的功能是：返回学生的t分布"
    },
    {
      type: "fillBlank",
      question: "TDIST 函数的类别是？",
      answer: "统计函数",
      explanation: "TDIST 属于 统计函数。"
    }
  ],
  "TEXT": [
    {
      type: "choice",
      question: "TEXT 函数属于哪一类？",
      options: [
        "文本函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "TEXT 属于 文本函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 TEXT 函数的正确功能描述？",
      options: [
        "将数值转换为按指定数字格式表示的文本",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "TEXT 函数的功能是：将数值转换为按指定数字格式表示的文本"
    },
    {
      type: "fillBlank",
      question: "TEXT 函数的类别是？",
      answer: "文本函数",
      explanation: "TEXT 属于 文本函数。"
    }
  ],
  "TIME": [
    {
      type: "choice",
      question: "TIME 函数属于哪一类？",
      options: [
        "日期与时间函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "TIME 属于 日期与时间函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 TIME 函数的正确功能描述？",
      options: [
        "返回某一特定时间的小数值",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "TIME 函数的功能是：返回某一特定时间的小数值"
    },
    {
      type: "fillBlank",
      question: "TIME 函数的类别是？",
      answer: "日期与时间函数",
      explanation: "TIME 属于 日期与时间函数。"
    }
  ],
  "TIMEVALUE": [
    {
      type: "choice",
      question: "TIMEVALUE 函数属于哪一类？",
      options: [
        "日期与时间函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "TIMEVALUE 属于 日期与时间函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 TIMEVALUE 函数的正确功能描述？",
      options: [
        "返回用文本串表示的时间小数值",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "TIMEVALUE 函数的功能是：返回用文本串表示的时间小数值"
    },
    {
      type: "fillBlank",
      question: "TIMEVALUE 函数的类别是？",
      answer: "日期与时间函数",
      explanation: "TIMEVALUE 属于 日期与时间函数。"
    }
  ],
  "TINV": [
    {
      type: "choice",
      question: "TINV 函数属于哪一类？",
      options: [
        "统计函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "TINV 属于 统计函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 TINV 函数的正确功能描述？",
      options: [
        "返回作为概率和自由度函数的学生氏t分布的t值",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "TINV 函数的功能是：返回作为概率和自由度函数的学生氏t分布的t值"
    },
    {
      type: "fillBlank",
      question: "TINV 函数的类别是？",
      answer: "统计函数",
      explanation: "TINV 属于 统计函数。"
    }
  ],
  "TODAY": [
    {
      type: "choice",
      question: "TODAY 函数属于哪一类？",
      options: [
        "日期与时间函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "TODAY 属于 日期与时间函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 TODAY 函数的正确功能描述？",
      options: [
        "返回系统当前日期的序列号",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "TODAY 函数的功能是：返回系统当前日期的序列号"
    },
    {
      type: "fillBlank",
      question: "TODAY 函数的类别是？",
      answer: "日期与时间函数",
      explanation: "TODAY 属于 日期与时间函数。"
    }
  ],
  "TRANSPOSE": [
    {
      type: "choice",
      question: "TRANSPOSE 函数属于哪一类？",
      options: [
        "查找与引用函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "TRANSPOSE 属于 查找与引用函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 TRANSPOSE 函数的正确功能描述？",
      options: [
        "返回区域的转置",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "TRANSPOSE 函数的功能是：返回区域的转置"
    },
    {
      type: "fillBlank",
      question: "TRANSPOSE 函数的类别是？",
      answer: "查找与引用函数",
      explanation: "TRANSPOSE 属于 查找与引用函数。"
    }
  ],
  "TREND": [
    {
      type: "choice",
      question: "TREND 函数属于哪一类？",
      options: [
        "统计函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "TREND 属于 统计函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 TREND 函数的正确功能描述？",
      options: [
        "返回一条线性回归拟合线的一组纵坐标值(y值)",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "TREND 函数的功能是：返回一条线性回归拟合线的一组纵坐标值(y值)"
    },
    {
      type: "fillBlank",
      question: "TREND 函数的类别是？",
      answer: "统计函数",
      explanation: "TREND 属于 统计函数。"
    }
  ],
  "TRIM": [
    {
      type: "choice",
      question: "TRIM 函数属于哪一类？",
      options: [
        "文本函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "TRIM 属于 文本函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 TRIM 函数的正确功能描述？",
      options: [
        "除了单词之间的单个空格外，清除文本中的所有的空格",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "TRIM 函数的功能是：除了单词之间的单个空格外，清除文本中的所有的空格"
    },
    {
      type: "fillBlank",
      question: "TRIM 函数的类别是？",
      answer: "文本函数",
      explanation: "TRIM 属于 文本函数。"
    }
  ],
  "TRIMMEAN": [
    {
      type: "choice",
      question: "TRIMMEAN 函数属于哪一类？",
      options: [
        "统计函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "TRIMMEAN 属于 统计函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 TRIMMEAN 函数的正确功能描述？",
      options: [
        "返回数据集的内部平均值",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "TRIMMEAN 函数的功能是：返回数据集的内部平均值"
    },
    {
      type: "fillBlank",
      question: "TRIMMEAN 函数的类别是？",
      answer: "统计函数",
      explanation: "TRIMMEAN 属于 统计函数。"
    }
  ],
  "TRUNC": [
    {
      type: "choice",
      question: "TRUNC 函数属于哪一类？",
      options: [
        "数学与三角函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "TRUNC 属于 数学与三角函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 TRUNC 函数的正确功能描述？",
      options: [
        "将数字的小数部分截去，返回整数",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "TRUNC 函数的功能是：将数字的小数部分截去，返回整数"
    },
    {
      type: "fillBlank",
      question: "TRUNC 函数的类别是？",
      answer: "数学与三角函数",
      explanation: "TRUNC 属于 数学与三角函数。"
    }
  ],
  "TTEST": [
    {
      type: "choice",
      question: "TTEST 函数属于哪一类？",
      options: [
        "统计函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "TTEST 属于 统计函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 TTEST 函数的正确功能描述？",
      options: [
        "返回与学生氏-t检验相关的概率",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "TTEST 函数的功能是：返回与学生氏-t检验相关的概率"
    },
    {
      type: "fillBlank",
      question: "TTEST 函数的类别是？",
      answer: "统计函数",
      explanation: "TTEST 属于 统计函数。"
    }
  ],
  "TYPE": [
    {
      type: "choice",
      question: "TYPE 函数属于哪一类？",
      options: [
        "信息函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "TYPE 属于 信息函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 TYPE 函数的正确功能描述？",
      options: [
        "返回数值的类型",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "TYPE 函数的功能是：返回数值的类型"
    },
    {
      type: "fillBlank",
      question: "TYPE 函数的类别是？",
      answer: "信息函数",
      explanation: "TYPE 属于 信息函数。"
    }
  ],
  "UPPER": [
    {
      type: "choice",
      question: "UPPER 函数属于哪一类？",
      options: [
        "文本函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "UPPER 属于 文本函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 UPPER 函数的正确功能描述？",
      options: [
        "将文本转换成大写形式",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "UPPER 函数的功能是：将文本转换成大写形式"
    },
    {
      type: "fillBlank",
      question: "UPPER 函数的类别是？",
      answer: "文本函数",
      explanation: "UPPER 属于 文本函数。"
    }
  ],
  "VALUE": [
    {
      type: "choice",
      question: "VALUE 函数属于哪一类？",
      options: [
        "文本函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "VALUE 属于 文本函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 VALUE 函数的正确功能描述？",
      options: [
        "将表示数字的文字串转换成数字",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "VALUE 函数的功能是：将表示数字的文字串转换成数字"
    },
    {
      type: "fillBlank",
      question: "VALUE 函数的类别是？",
      answer: "文本函数",
      explanation: "VALUE 属于 文本函数。"
    }
  ],
  "VAR": [
    {
      type: "choice",
      question: "VAR 函数属于哪一类？",
      options: [
        "统计函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "VAR 属于 统计函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 VAR 函数的正确功能描述？",
      options: [
        "估算样本方差",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "VAR 函数的功能是：估算样本方差"
    },
    {
      type: "fillBlank",
      question: "VAR 函数的类别是？",
      answer: "统计函数",
      explanation: "VAR 属于 统计函数。"
    }
  ],
  "VARA": [
    {
      type: "choice",
      question: "VARA 函数属于哪一类？",
      options: [
        "统计函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "VARA 属于 统计函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 VARA 函数的正确功能描述？",
      options: [
        "用来估算给定样本的方差",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "VARA 函数的功能是：用来估算给定样本的方差"
    },
    {
      type: "fillBlank",
      question: "VARA 函数的类别是？",
      answer: "统计函数",
      explanation: "VARA 属于 统计函数。"
    }
  ],
  "VARP": [
    {
      type: "choice",
      question: "VARP 函数属于哪一类？",
      options: [
        "统计函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "VARP 属于 统计函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 VARP 函数的正确功能描述？",
      options: [
        "计算样本总体的方差",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "VARP 函数的功能是：计算样本总体的方差"
    },
    {
      type: "fillBlank",
      question: "VARP 函数的类别是？",
      answer: "统计函数",
      explanation: "VARP 属于 统计函数。"
    }
  ],
  "VARPA": [
    {
      type: "choice",
      question: "VARPA 函数属于哪一类？",
      options: [
        "统计函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "VARPA 属于 统计函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 VARPA 函数的正确功能描述？",
      options: [
        "计算样本总体的方差",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "VARPA 函数的功能是：计算样本总体的方差"
    },
    {
      type: "fillBlank",
      question: "VARPA 函数的类别是？",
      answer: "统计函数",
      explanation: "VARPA 属于 统计函数。"
    }
  ],
  "VDB": [
    {
      type: "choice",
      question: "VDB 函数属于哪一类？",
      options: [
        "财务函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "VDB 属于 财务函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 VDB 函数的正确功能描述？",
      options: [
        "使用余额递减法，返回指定期间内或部分期间内的某项资产折旧值",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "VDB 函数的功能是：使用余额递减法，返回指定期间内或部分期间内的某项资产折旧值"
    },
    {
      type: "fillBlank",
      question: "VDB 函数的类别是？",
      answer: "财务函数",
      explanation: "VDB 属于 财务函数。"
    }
  ],
  "VLOOKUP": [
    {
      type: "choice",
      question: "VLOOKUP 函数属于哪一类？",
      options: [
        "查找与引用函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "VLOOKUP 属于 查找与引用函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 VLOOKUP 函数的正确功能描述？",
      options: [
        "在数组第一列中查找，然后在行之间移动以返回单元格的值",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "VLOOKUP 函数的功能是：在数组第一列中查找，然后在行之间移动以返回单元格的值"
    },
    {
      type: "fillBlank",
      question: "VLOOKUP 函数的类别是？",
      answer: "查找与引用函数",
      explanation: "VLOOKUP 属于 查找与引用函数。"
    }
  ],
  "XLOOKUP": [
    {
      type: "choice",
      question: "XLOOKUP 函数属于哪一类？",
      options: [
        "查找与引用函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "XLOOKUP 属于 查找与引用函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 XLOOKUP 函数的正确功能描述？",
      options: [
        "Office 365 新函数，在表格中按行或列查找值，支持向左/向右/模糊查找",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "XLOOKUP 函数的功能是：Office 365 新函数，在表格中按行或列查找值，支持向左/向右/模糊查找"
    },
    {
      type: "fillBlank",
      question: "XLOOKUP 函数的类别是？",
      answer: "查找与引用函数",
      explanation: "XLOOKUP 属于 查找与引用函数。"
    }
  ],
  "FILTER": [
    {
      type: "choice",
      question: "FILTER 函数属于哪一类？",
      options: [
        "查找与引用函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "FILTER 属于 查找与引用函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 FILTER 函数的正确功能描述？",
      options: [
        "根据条件筛选数组，返回匹配条件的所有行/列（动态数组函数）",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "FILTER 函数的功能是：根据条件筛选数组，返回匹配条件的所有行/列（动态数组函数）"
    },
    {
      type: "fillBlank",
      question: "FILTER 函数的类别是？",
      answer: "查找与引用函数",
      explanation: "FILTER 属于 查找与引用函数。"
    }
  ],
  "UNIQUE": [
    {
      type: "choice",
      question: "UNIQUE 函数属于哪一类？",
      options: [
        "文本函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "UNIQUE 属于 文本函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 UNIQUE 函数的正确功能描述？",
      options: [
        "返回数组中的唯一值（去重），Office 365 动态数组函数",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "UNIQUE 函数的功能是：返回数组中的唯一值（去重），Office 365 动态数组函数"
    },
    {
      type: "fillBlank",
      question: "UNIQUE 函数的类别是？",
      answer: "文本函数",
      explanation: "UNIQUE 属于 文本函数。"
    }
  ],
  "SORT": [
    {
      type: "choice",
      question: "SORT 函数属于哪一类？",
      options: [
        "文本函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "SORT 属于 文本函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 SORT 函数的正确功能描述？",
      options: [
        "对数组进行排序，Office 365 动态数组函数",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "SORT 函数的功能是：对数组进行排序，Office 365 动态数组函数"
    },
    {
      type: "fillBlank",
      question: "SORT 函数的类别是？",
      answer: "文本函数",
      explanation: "SORT 属于 文本函数。"
    }
  ],
  "WEEKDAY": [
    {
      type: "choice",
      question: "WEEKDAY 函数属于哪一类？",
      options: [
        "日期与时间函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "WEEKDAY 属于 日期与时间函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 WEEKDAY 函数的正确功能描述？",
      options: [
        "返回某日期的星期数",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "WEEKDAY 函数的功能是：返回某日期的星期数"
    },
    {
      type: "fillBlank",
      question: "WEEKDAY 函数的类别是？",
      answer: "日期与时间函数",
      explanation: "WEEKDAY 属于 日期与时间函数。"
    }
  ],
  "WEEKNUM": [
    {
      type: "choice",
      question: "WEEKNUM 函数属于哪一类？",
      options: [
        "日期与时间函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "WEEKNUM 属于 日期与时间函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 WEEKNUM 函数的正确功能描述？",
      options: [
        "返回一个数字，该数字代表一年中的第几周",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "WEEKNUM 函数的功能是：返回一个数字，该数字代表一年中的第几周"
    },
    {
      type: "fillBlank",
      question: "WEEKNUM 函数的类别是？",
      answer: "日期与时间函数",
      explanation: "WEEKNUM 属于 日期与时间函数。"
    }
  ],
  "WEIBULL": [
    {
      type: "choice",
      question: "WEIBULL 函数属于哪一类？",
      options: [
        "统计函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "WEIBULL 属于 统计函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 WEIBULL 函数的正确功能描述？",
      options: [
        "返回韦伯分布",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "WEIBULL 函数的功能是：返回韦伯分布"
    },
    {
      type: "fillBlank",
      question: "WEIBULL 函数的类别是？",
      answer: "统计函数",
      explanation: "WEIBULL 属于 统计函数。"
    }
  ],
  "WORKDAY": [
    {
      type: "choice",
      question: "WORKDAY 函数属于哪一类？",
      options: [
        "日期与时间函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "WORKDAY 属于 日期与时间函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 WORKDAY 函数的正确功能描述？",
      options: [
        "返回指定工作日数之前或之后某日期的序列号",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "WORKDAY 函数的功能是：返回指定工作日数之前或之后某日期的序列号"
    },
    {
      type: "fillBlank",
      question: "WORKDAY 函数的类别是？",
      answer: "日期与时间函数",
      explanation: "WORKDAY 属于 日期与时间函数。"
    }
  ],
  "XIRR": [
    {
      type: "choice",
      question: "XIRR 函数属于哪一类？",
      options: [
        "财务函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "XIRR 属于 财务函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 XIRR 函数的正确功能描述？",
      options: [
        "返回一组不定期发生的现金流的内部收益率",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "XIRR 函数的功能是：返回一组不定期发生的现金流的内部收益率"
    },
    {
      type: "fillBlank",
      question: "XIRR 函数的类别是？",
      answer: "财务函数",
      explanation: "XIRR 属于 财务函数。"
    }
  ],
  "XNPV": [
    {
      type: "choice",
      question: "XNPV 函数属于哪一类？",
      options: [
        "财务函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "XNPV 属于 财务函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 XNPV 函数的正确功能描述？",
      options: [
        "返回一组不定期发生的现金流的净现值",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "XNPV 函数的功能是：返回一组不定期发生的现金流的净现值"
    },
    {
      type: "fillBlank",
      question: "XNPV 函数的类别是？",
      answer: "财务函数",
      explanation: "XNPV 属于 财务函数。"
    }
  ],
  "YEAP": [
    {
      type: "choice",
      question: "YEAP 函数属于哪一类？",
      options: [
        "其他函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "YEAP 属于 其他函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 YEAP 函数的正确功能描述？",
      options: [
        "返回某日期的年份。其结果为1900到9999之间的一个整数",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "YEAP 函数的功能是：返回某日期的年份。其结果为1900到9999之间的一个整数"
    },
    {
      type: "fillBlank",
      question: "YEAP 函数的类别是？",
      answer: "其他函数",
      explanation: "YEAP 属于 其他函数。"
    }
  ],
  "YEARFRAC": [
    {
      type: "choice",
      question: "YEARFRAC 函数属于哪一类？",
      options: [
        "日期与时间函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "YEARFRAC 属于 日期与时间函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 YEARFRAC 函数的正确功能描述？",
      options: [
        "返回start_date和end_date之间的天数占全年天数的百分比",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "YEARFRAC 函数的功能是：返回start_date和end_date之间的天数占全年天数的百分比"
    },
    {
      type: "fillBlank",
      question: "YEARFRAC 函数的类别是？",
      answer: "日期与时间函数",
      explanation: "YEARFRAC 属于 日期与时间函数。"
    }
  ],
  "YIELD": [
    {
      type: "choice",
      question: "YIELD 函数属于哪一类？",
      options: [
        "财务函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "YIELD 属于 财务函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 YIELD 函数的正确功能描述？",
      options: [
        "返回定期付息有价证券的收益率，函数YIELD用于计算债券收益率",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "YIELD 函数的功能是：返回定期付息有价证券的收益率，函数YIELD用于计算债券收益率"
    },
    {
      type: "fillBlank",
      question: "YIELD 函数的类别是？",
      answer: "财务函数",
      explanation: "YIELD 属于 财务函数。"
    }
  ],
  "YIELDDISC": [
    {
      type: "choice",
      question: "YIELDDISC 函数属于哪一类？",
      options: [
        "财务函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "YIELDDISC 属于 财务函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 YIELDDISC 函数的正确功能描述？",
      options: [
        "返回折价发行的有价证券的年收益率",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "YIELDDISC 函数的功能是：返回折价发行的有价证券的年收益率"
    },
    {
      type: "fillBlank",
      question: "YIELDDISC 函数的类别是？",
      answer: "财务函数",
      explanation: "YIELDDISC 属于 财务函数。"
    }
  ],
  "YIELDMAT": [
    {
      type: "choice",
      question: "YIELDMAT 函数属于哪一类？",
      options: [
        "财务函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "YIELDMAT 属于 财务函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 YIELDMAT 函数的正确功能描述？",
      options: [
        "返回到期付息的有价证券的年收益率",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "YIELDMAT 函数的功能是：返回到期付息的有价证券的年收益率"
    },
    {
      type: "fillBlank",
      question: "YIELDMAT 函数的类别是？",
      answer: "财务函数",
      explanation: "YIELDMAT 属于 财务函数。"
    }
  ],
  "ZTEST": [
    {
      type: "choice",
      question: "ZTEST 函数属于哪一类？",
      options: [
        "统计函数",
        "文本函数",
        "日期与时间函数",
        "数据库函数"
      ],
      answer: 0,
      explanation: "ZTEST 属于 统计函数。"
    },
    {
      type: "choice",
      question: "以下哪个是 ZTEST 函数的正确功能描述？",
      options: [
        "返回z检验的双尾P值",
        "返回参数算术平均值",
        "返回有关当前操作环境的信息",
        "如果值为除 #N/A 以外的任何错误值，则返回 TRUE"
      ],
      answer: 0,
      explanation: "ZTEST 函数的功能是：返回z检验的双尾P值"
    },
    {
      type: "fillBlank",
      question: "ZTEST 函数的类别是？",
      answer: "统计函数",
      explanation: "ZTEST 属于 统计函数。"
    }
  ]
}

// 练习题进度 { 函数名: { 题号: { answered, correct, selected } } }
let quizProgress = {};

// 加载练习题进度
function loadQuizProgress() {
  try {
    quizProgress = JSON.parse(localStorage.getItem('excel_quiz_progress_v1') || '{}');
  } catch (e) {
    quizProgress = {};
  }
}

// 保存练习题进度
function saveQuizProgress() {
  localStorage.setItem('excel_quiz_progress_v1', JSON.stringify(quizProgress));
}

// 打开练习中心
function openQuizCenter() {
  const overlay = document.getElementById('quizCenterOverlay');
  const body = document.getElementById('quizCenterBody');
  body.innerHTML = '';

  // 总进度统计
  let totalQuiz = 0;
  let totalDone = 0;
  let totalCorrect = 0;
  Object.keys(QUIZ_DATA).forEach(fnName => {
    const quizzes = QUIZ_DATA[fnName];
    totalQuiz += quizzes.length;
    const prog = quizProgress[fnName] || {};
    quizzes.forEach((q, i) => {
      if (prog[i] && prog[i].answered) {
        totalDone++;
        if (prog[i].correct) totalCorrect++;
      }
    });
  });

  const overview = createEl('div', { className: 'qc-overview' }, [
    createEl('div', { className: 'qc-stat' }, [
      createEl('div', { className: 'val', textContent: totalDone }),
      createEl('div', { className: 'lbl', textContent: '已答题数' }),
    ]),
    createEl('div', { className: 'qc-stat' }, [
      createEl('div', { className: 'val', textContent: totalCorrect }),
      createEl('div', { className: 'lbl', textContent: '正确答题数' }),
    ]),
    createEl('div', { className: 'qc-stat' }, [
      createEl('div', { className: 'val', textContent: totalQuiz }),
      createEl('div', { className: 'lbl', textContent: '总题数' }),
    ]),
  ]);
  body.appendChild(overview);

  // 总分进度条
  const pct = totalQuiz > 0 ? Math.round(totalDone / totalQuiz * 100) : 0;
  const correctPct = totalDone > 0 ? Math.round(totalCorrect / totalDone * 100) : 0;
  const totalBar = createEl('div', { className: 'qc-total-bar-wrap' }, [
    createEl('div', { className: 'qc-total-label' }, [
      createEl('span', { textContent: `总进度：${pct}%` }),
      createEl('span', { textContent: `正确率：${correctPct}%` }),
    ]),
    createEl('div', { className: 'qc-total-bar' }, [
      createEl('div', {
        className: 'qc-total-bar-fill',
        style: `width:${pct}%`,
      }),
    ]),
  ]);
  body.appendChild(totalBar);

  // 按分类展示进度
  const catSection = createEl('div', { className: 'qc-cat-section' }, [
    createEl('h3', { textContent: '各函数进度' }),
  ]);
  const catList = createEl('div', { className: 'qc-cat-list' });
  Object.keys(QUIZ_DATA).forEach(fnName => {
    const quizzes = QUIZ_DATA[fnName];
    const prog = quizProgress[fnName] || {};
    const done = quizzes.filter((_, i) => prog[i] && prog[i].answered).length;
    const pctFn = quizzes.length > 0 ? Math.round(done / quizzes.length * 100) : 0;
    const meta = CAT_META[fnMap[fnName]?.category] || {};
    const row = createEl('div', { className: 'qc-cat-row' }, [
      createEl('div', {
        className: 'qc-cat-name',
        textContent: (meta.icon || '📦') + ' ' + fnName,
        style: 'cursor:pointer;',
        onClick: () => { closeQuizCenter(); openModal(fnName); },
      }),
      createEl('div', { className: 'qc-cat-bar' }, [
        createEl('div', {
          className: 'qc-cat-bar-fill',
          style: `width:${pctFn}%;background:${meta.color || '#3b82f6'}`,
        }),
      ]),
      createEl('div', { className: 'qc-cat-count', textContent: `${done}/${quizzes.length}` }),
    ]);
    catList.appendChild(row);
  });
  catSection.appendChild(catList);
  body.appendChild(catSection);

  overlay.classList.add('open');
}

// 关闭练习中心
function closeQuizCenter() {
  document.getElementById('quizCenterOverlay').classList.remove('open');
}

// 打开错题本
function openWrongBook() {
  const overlay = document.getElementById('quizCenterOverlay');
  const body = document.getElementById('quizCenterBody');
  body.innerHTML = '';

  const wrongSection = createEl('div', { className: 'qc-wrong-section' }, [
    createEl('h3', { textContent: '错题列表' }),
  ]);
  const wrongList = createEl('div', { className: 'qc-wrong-list' });

  let hasWrong = false;
  Object.keys(QUIZ_DATA).forEach(fnName => {
    const quizzes = QUIZ_DATA[fnName];
    const prog = quizProgress[fnName] || {};
    quizzes.forEach((q, i) => {
      if (prog[i] && prog[i].answered && !prog[i].correct) {
        hasWrong = true;
        const chip = createEl('div', {
          className: 'qc-wrong-item',
          textContent: fnName + ' #' + (i + 1),
          onClick: () => { closeQuizCenter(); openModal(fnName); switchTab('quiz'); },
        });
        wrongList.appendChild(chip);
      }
    });
  });

  if (!hasWrong) {
    wrongList.appendChild(
      createEl('div', { className: 'qc-empty-wrong', textContent: '🎉 暂无错题，继续保持！' })
    );
  }

  wrongSection.appendChild(wrongList);
  body.appendChild(wrongSection);
  overlay.classList.add('open');
}

// 加载指定函数的练习题到 quiz 面板
function loadQuiz(fnName) {
  const panel = document.getElementById('quizPanel');
  if (!panel) return;
  panel.innerHTML = '';

  const quizzes = QUIZ_DATA[fnName];
  if (!quizzes || quizzes.length === 0) {
    panel.innerHTML = '<div class="quiz-all-done"><div class="done-icon">📭</div><h3>暂无练习题</h3><p>该函数尚未添加练习题，敬请期待！</p></div>';
    return;
  }

  const prog = quizProgress[fnName] || {};
  let doneCount = 0;
  quizzes.forEach((q, idx) => {
    if (prog[idx] && prog[idx].answered) doneCount++;
  });

  // 进度条
  const progBar = createEl('div', { className: 'quiz-progress-wrap' }, [
    createEl('span', { textContent: `进度：${doneCount} / ${quizzes.length}` }),
    createEl('div', { className: 'quiz-progress-bar' }, [
      createEl('div', {
        className: 'quiz-progress-fill',
        style: `width:${quizzes.length > 0 ? doneCount / quizzes.length * 100 : 0}%`,
      }),
    ]),
  ]);
  panel.appendChild(progBar);

  // 渲染每道题
  quizzes.forEach((q, idx) => {
    panel.appendChild(buildQuizCard(fnName, q, idx));
  });

  // 全部完成提示
  if (doneCount === quizzes.length) {
    panel.appendChild(
      createEl('div', { className: 'quiz-all-done' }, [
        createEl('div', { className: 'done-icon', textContent: '🎉' }),
        createEl('h3', { textContent: '本章练习已全部完成！' }),
        createEl('p', { textContent: '你可以重新练习或查看错题。' }),
        createEl('button', {
          className: 'quiz-reset-btn',
          textContent: '🔄 重置本题进度',
          onClick: () => resetQuiz(fnName),
        }),
      ])
    );
  }
}

// 构建单题卡片
function buildQuizCard(fnName, q, idx) {
  const prog = quizProgress[fnName] || {};
  const answered = !!(prog[idx] && prog[idx].answered);
  const isCorrect = answered && prog[idx].correct;

  const card = createEl('div', {
    className: `quiz-card${answered ? (isCorrect ? ' answered-correct' : ' answered-wrong') : ''}`,
  });

  card.appendChild(createEl('div', { className: 'quiz-q-num', textContent: `第 ${idx + 1} 题` }));
  card.appendChild(createEl('div', { className: 'quiz-q-text', textContent: q.question }));

  if (q.type === 'choice') {
    const optionsDiv = createEl('div', { className: 'quiz-options' });
    q.options.forEach((opt, optIdx) => {
      const letter = String.fromCharCode(65 + optIdx); // A, B, C, D
      const optEl = createEl('div', {
        className: `quiz-option${answered ? (optIdx === q.answer ? ' show-correct' : (prog[idx].selected === optIdx ? ' selected-wrong' : '')) : ''}${answered ? ' disabled' : ''}`,
        onClick: answered ? null : () => handleQuizAnswer(fnName, idx, optIdx, 'choice'),
      }, [
        createEl('span', { className: 'option-letter', textContent: letter }),
        createEl('span', { textContent: opt }),
      ]);
      optionsDiv.appendChild(optEl);
    });
    card.appendChild(optionsDiv);
  } else if (q.type === 'fillBlank') {
    const fillWrap = createEl('div', { className: 'quiz-fill-wrap' });
    const inputAttrs = {
      className: `quiz-fill-input${answered ? (isCorrect ? ' correct' : ' wrong') : ''}`,
      placeholder: '请输入答案...',
    };
    if (answered) inputAttrs.readOnly = true;
    const input = createEl('input', inputAttrs);
    if (answered) input.value = prog[idx].userAnswer || '';
    fillWrap.appendChild(input);

    if (!answered) {
      const submitBtn = createEl('button', {
        className: 'quiz-submit-btn',
        textContent: '提交',
        onClick: () => handleQuizAnswer(fnName, idx, input.value, 'fillBlank'),
      });
      fillWrap.appendChild(submitBtn);
    }
    card.appendChild(fillWrap);
  }

  // 解析（答题后显示）
  if (answered) {
    const exp = createEl('div', { className: 'quiz-explanation show', textContent: q.explanation });
    card.appendChild(exp);
  }

  return card;
}

// 处理答题
function handleQuizAnswer(fnName, qIdx, userAnswer, type) {
  if (!quizProgress[fnName]) quizProgress[fnName] = {};
  if (quizProgress[fnName][qIdx] && quizProgress[fnName][qIdx].answered) return;

  const q = QUIZ_DATA[fnName][qIdx];
  let correct = false;

  if (type === 'choice') {
    correct = (userAnswer === q.answer);
  } else if (type === 'fillBlank') {
    // 填空题：忽略大小写和首尾空格比较
    const normalizedUser = userAnswer.toString().trim().toUpperCase();
    const normalizedAns = q.answer.toString().trim().toUpperCase();
    correct = normalizedUser === normalizedAns;
  }

  quizProgress[fnName][qIdx] = {
    answered: true,
    correct: correct,
    selected: type === 'choice' ? userAnswer : null,
    userAnswer: type === 'fillBlank' ? userAnswer : null,
  };

  saveQuizProgress();
  loadQuiz(fnName); // 重新渲染

  // 更新 tab 徽章
  const quizTabBtn = document.getElementById('quizTabBtn');
  if (quizTabBtn && QUIZ_DATA[fnName]) {
    const prog = quizProgress[fnName] || {};
    const done = Object.values(prog).filter(r => r && r.answered).length;
    const badge = document.getElementById('quizTabBadge');
    if (badge) badge.textContent = `${done}/${QUIZ_DATA[fnName].length}`;
  }
}

// 重置某函数的练习进度
function resetQuiz(fnName) {
  if (confirm(`确定重置「${fnName}」的所有练习进度吗？`)) {
    delete quizProgress[fnName];
    saveQuizProgress();
    loadQuiz(fnName);
  }
}

// 页面加载时初始化
document.addEventListener('DOMContentLoaded', () => {
  loadQuizProgress();
});
