// quiz.js - 练习题功能模块
// 依赖：data.js, modal.js, utils.js

// 练习题数据（每个函数对应一组题，type: "mc" 选择题 / "fill" 填空题）
const QUIZ_DATA = {
  "VLOOKUP": [
    {
      id: 1,
      type: "mc",
      question: "VLOOKUP 的第三个参数是什么含义？",
      options: ["查找值", "查找范围", "返回列序号", "匹配模式"],
      answer: 2, // 索引从 0 开始，2 = "返回列序号"
      explanation: "VLOOKUP(查找值, 查找范围, 返回列序号, [匹配模式])\n第三个参数指定返回查找范围中的第几列。"
    },
    {
      id: 2,
      type: "fill",
      question: "用 VLOOKUP 在 A1:C10 范围查找 A2 的值，并返回第 3 列，公式怎么写？\n（提示：精确匹配用 FALSE 或 0）",
      answer: "=VLOOKUP(A2,A1:C10,3,FALSE)",
      explanation: "=VLOOKUP(查找值, 查找范围, 返回列序号, [精确匹配])\n精确匹配时第四参数用 FALSE 或 0。"
    },
    {
      id: 3,
      type: "mc",
      question: "VLOOKUP 在什么情况下会返回错误值 #N/A？",
      options: ["查找值不存在于第一列", "返回列序号超出范围", "查找范围引用错误", "以上都有可能"],
      answer: 3,
      explanation: "VLOOKUP 在查找失败、列序号超出范围、或引用错误时都会返回 #N/A 或其他错误值。"
    }
  ],
  "SUM": [
    {
      id: 1,
      type: "mc",
      question: "SUM 函数的主要作用是什么？",
      options: ["计数", "求平均值", "求和", "求最大值"],
      answer: 2,
      explanation: "SUM 函数用于对指定范围内的数值求和。"
    },
    {
      id: 2,
      type: "fill",
      question: "求 A1 到 A10 单元格的和，公式怎么写？",
      answer: "=SUM(A1:A10)",
      explanation: "SUM(范围) 对范围内的所有数值求和，忽略文本和空单元格。"
    },
    {
      id: 3,
      type: "mc",
      question: "SUM(A1:A5, C1:C5) 的结果是？",
      options: ["只计算 A1:A5", "只计算 C1:C5", "A1:A5 和 C1:C5 全部求和", "报错"],
      answer: 2,
      explanation: "SUM 可以接受多个参数，每个参数可以是单个单元格、范围或常量，全部加总。"
    }
  ],
  "IF": [
    {
      id: 1,
      type: "mc",
      question: "IF 函数的参数顺序是？",
      options: ["条件, 真值, 假值", "真值, 条件, 假值", "条件, 假值, 真值", "范围, 条件, 值"],
      answer: 0,
      explanation: "IF(逻辑测试, 为真时的返回值, [为假时的返回值])，第三个参数可选。"
    },
    {
      id: 2,
      type: "fill",
      question: "如果 A1>60 则显示"合格"，否则显示"不合格"，公式怎么写？",
      answer: '=IF(A1>60,"合格","不合格")',
      explanation: 'IF 的文本参数需要用英文双引号包裹，中文引号不生效。'
    },
    {
      id: 3,
      type: "mc",
      question: "IF 函数嵌套最多支持多少层（Excel 2019+）？",
      options: ["3 层", "7 层", "64 层", "没有限制"],
      answer: 2,
      explanation: "Excel 2019 及以前版本 IF 嵌套最多 7 层，Excel 365 支持 64 层，实际工作中建议用 IFS 替代深层嵌套。"
    }
  ]
};

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

  if (q.type === 'mc') {
    const optionsDiv = createEl('div', { className: 'quiz-options' });
    q.options.forEach((opt, optIdx) => {
      const letter = String.fromCharCode(65 + optIdx); // A, B, C, D
      const optEl = createEl('div', {
        className: `quiz-option${answered ? (optIdx === q.answer ? ' show-correct' : (prog[idx].selected === optIdx ? ' selected-wrong' : '')) : ''}${answered ? ' disabled' : ''}`,
        onClick: answered ? null : () => handleQuizAnswer(fnName, idx, optIdx, 'mc'),
      }, [
        createEl('span', { className: 'option-letter', textContent: letter }),
        createEl('span', { textContent: opt }),
      ]);
      optionsDiv.appendChild(optEl);
    });
    card.appendChild(optionsDiv);
  } else if (q.type === 'fill') {
    const fillWrap = createEl('div', { className: 'quiz-fill-wrap' });
    const input = createEl('input', {
      className: `quiz-fill-input${answered ? (isCorrect ? ' correct' : ' wrong') : ''}`,
      placeholder: '请输入答案...',
      readOnly: answered,
    });
    if (answered) input.value = prog[idx].userAnswer || '';
    fillWrap.appendChild(input);

    if (!answered) {
      const submitBtn = createEl('button', {
        className: 'quiz-submit-btn',
        textContent: '提交',
        onClick: () => handleQuizAnswer(fnName, idx, input.value, 'fill'),
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

  if (type === 'mc') {
    correct = (userAnswer === q.answer);
  } else if (type === 'fill') {
    // 填空题：忽略大小写和首尾空格比较
    const normalizedUser = userAnswer.toString().trim().toUpperCase();
    const normalizedAns = q.answer.toString().trim().toUpperCase();
    correct = normalizedUser === normalizedAns;
  }

  quizProgress[fnName][qIdx] = {
    answered: true,
    correct: correct,
    selected: type === 'mc' ? userAnswer : null,
    userAnswer: type === 'fill' ? userAnswer : null,
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
