// modal.js - 模态框功能模块
// 依赖：data.js, utils.js, favorites.js
// html2canvas 通过 js/html2canvas.min.js 全局引入

var currentModalFn = null;

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

// ── 截图功能（使用 html2canvas）──────────────────────────

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

function doScreenshot(mode) {
  const menu = document.getElementById('screenshotMenu');
  if (menu) menu.style.display = 'none';

  if (!window.html2canvas) {
    alert('截图功能加载失败，请刷新页面后重试。');
    return;
  }

  const btn = document.getElementById('screenshotBtn');
  const modal = document.querySelector('.modal');
  const fnName = document.getElementById('modalName').textContent.trim() || 'function';

  btn.classList.add('capturing');
  btn.innerHTML = '⏳ 生成中…';

  window
    .html2canvas(modal, {
      backgroundColor: '#ffffff',
      scale: 2,
      useCORS: true,
      logging: false,
    })
    .then((canvas) => {
      canvas.toBlob((blob) => {
        if (mode === 'clipboard') {
          copyBlobToClipboard(blob, btn);
        } else if (mode === 'savepicker') {
          saveWithPicker(blob, fnName, btn);
        } else {
          downloadBlob(blob, fnName, btn);
        }
      }, 'image/png');
    })
    .catch((e) => {
      alert('截图失败：' + e.message);
      btn.classList.remove('capturing');
      btn.innerHTML = '📷 截图 ▾';
    });
}

// 复制到剪贴板（最推荐，无文件安全问题）
async function copyBlobToClipboard(blob, btn) {
  try {
    await navigator.clipboard.write([new ClipboardItem({ 'image/png': blob })]);
    btn.classList.remove('capturing');
    btn.innerHTML = '✅ 已复制';
    setTimeout(() => {
      btn.innerHTML = '📷 截图 ▾';
    }, 2000);
  } catch (e) {
    alert(
      '剪贴板复制失败（需要 HTTPS 或浏览器权限），已改为直接下载。\n如需复制，请在浏览器地址栏点击🔒图标允许剪贴板权限。'
    );
    const fnName = document.getElementById('modalName').textContent.trim() || 'function';
    downloadBlob(blob, fnName, btn);
  }
}

// 用系统文件选择器另存（保存的文件不含 Zone.Identifier 安全标记）
async function saveWithPicker(blob, fnName, btn) {
  if (!window.showSaveFilePicker) {
    downloadBlob(blob, fnName, btn);
    return;
  }
  try {
    const handle = await window.showSaveFilePicker({
      suggestedName: 'Excel函数_' + fnName + '.png',
      types: [{ description: 'PNG 图片', accept: { 'image/png': ['.png'] } }],
    });
    const writable = await handle.createWritable();
    await writable.write(blob);
    await writable.close();
    btn.classList.remove('capturing');
    btn.innerHTML = '✅ 已保存';
    setTimeout(() => {
      btn.innerHTML = '📷 截图 ▾';
    }, 2000);
  } catch (e) {
    if (e.name !== 'AbortError') {
      downloadBlob(blob, fnName, btn);
    } else {
      btn.classList.remove('capturing');
      btn.innerHTML = '📷 截图 ▾';
    }
  }
}

// 直接下载（部分情况下 Windows 安全策略可能拦截）
function downloadBlob(blob, fnName, btn) {
  const blobUrl = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.download = 'Excel函数_' + fnName + '.png';
  link.href = blobUrl;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  setTimeout(() => URL.revokeObjectURL(blobUrl), 1000);
  btn.classList.remove('capturing');
  btn.innerHTML = '✅ 已下载';
  setTimeout(() => {
    btn.innerHTML = '📷 截图 ▾';
  }, 2000);
}
