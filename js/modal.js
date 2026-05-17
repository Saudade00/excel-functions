// modal.js - 模态框功能模块
// 依赖：data.js, utils.js, favorites.js

let currentModalFn = null;

// 打开模态框
function openModal(name) {
  const f = fnMap[name];
  if (!f) return;

  currentModalFn = name;
  const meta = CAT_META[f.category] || CAT_META['其他函数'];

  document.getElementById('modalName').textContent = f.name;
  document.getElementById('modalName').style.color = meta.color;
  document.getElementById('modalDesc').textContent = f.description;

  // 练习题 Tab
  const hasQuiz = !!(QUIZ_DATA && QUIZ_DATA[name] && QUIZ_DATA[name].length > 0);
  const quizTabBtn = document.getElementById('quizTabBtn');
  if (quizTabBtn) {
    quizTabBtn.style.display = hasQuiz ? '' : 'none';
    if (hasQuiz) {
      const prog = quizProgress[name] || {};
      const done = Object.values(prog).filter((r) => r && r.answered).length;
      const badge = document.getElementById('quizTabBadge');
      if (badge) badge.textContent = `${done}/${QUIZ_DATA[name].length}`;
    }
  }

  // 收藏按钮状态
  updateModalFavBtn(name);

  // 切换到详情 Tab
  switchTab('detail');

  // 构建模态框内容（使用 DOM 操作，避免 XSS）
  const body = document.getElementById('modalBody');
  body.innerHTML = '';

  // 分类和难度
  const headerSection = createEl('div', { className: 'modal-section' }, [
    createEl(
      'div',
      { className: 'modal-cat-badge', style: `background:${meta.bg};color:${meta.color}` },
      [createEl('span', { textContent: meta.icon + ' ' + f.category })]
    ),
  ]);
  if (f.stars) {
    headerSection.appendChild(
      createEl('div', { className: 'stars-display', textContent: f.stars })
    );
  }
  body.appendChild(headerSection);

  // 语法格式
  if (f.usage) {
    const usageSection = createEl('div', { className: 'modal-section' }, [
      createEl('div', { className: 'modal-section-label', textContent: '语法格式' }),
      createEl('div', { className: 'usage-block', textContent: f.usage }),
      createEl('button', {
        className: 'copy-btn',
        textContent: '📋 复制语法',
        onClick: () => copyText(f.usage),
      }),
    ]);
    body.appendChild(usageSection);
  }

  // 参数说明
  if (f.params) {
    body.appendChild(
      createEl('div', { className: 'modal-section' }, [
        createEl('div', { className: 'modal-section-label', textContent: '参数说明' }),
        createEl('div', { className: 'params-block', textContent: f.params }),
      ])
    );
  }

  // 注意事项
  if (f.notes) {
    body.appendChild(
      createEl('div', { className: 'modal-section' }, [
        createEl('div', { className: 'modal-section-label', textContent: '注意事项' }),
        createEl('div', { className: 'notes-block', textContent: f.notes }),
      ])
    );
  }

  // 应用实例
  if (f.example) {
    body.appendChild(
      createEl('div', { className: 'modal-section' }, [
        createEl('div', { className: 'modal-section-label', textContent: '应用实例' }),
        createEl('div', { className: 'example-block', textContent: f.example }),
      ])
    );
  }

  // 显示模态框
  document.getElementById('modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

// 关闭模态框
function closeModal(e) {
  if (e.target === document.getElementById('modal')) {
    closeModalBtn();
  }
}

function closeModalBtn() {
  document.getElementById('modal').classList.remove('open');
  document.body.style.overflow = '';
}

// Tab 切换
function switchTab(tabName) {
  document.querySelectorAll('.modal-tab').forEach((tab) => {
    tab.classList.toggle('active', tab.dataset.tab === tabName);
  });
  document.querySelectorAll('.modal-tab-panel').forEach((panel) => {
    panel.classList.toggle('active', panel.id === 'panel-' + tabName);
  });

  // 如果切换到练习题 tab，加载练习题
  if (tabName === 'quiz' && currentModalFn) {
    loadQuiz(currentModalFn);
  }
}

// 截图功能
function toggleScreenshotMenu(e) {
  e.stopPropagation();
  const menu = document.getElementById('screenshotMenu');
  const isOpen = menu.style.display !== 'none';
  menu.style.display = isOpen ? 'none' : 'block';
  if (!isOpen) {
    const close = () => {
      menu.style.display = 'none';
      document.removeEventListener('click', close);
    };
    setTimeout(() => document.addEventListener('click', close), 0);
  }
}
