// app.js - 主应用逻辑
// 依赖：utils.js, data.js, favorites.js, theme.js, modal.js

// 懒加载配置
var BATCH_SIZE = 50;
var currentBatch = [];
var renderedCount = 0;
var loadMoreObserver = null;
var sentinelEl = null;

// 初始化应用
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    // 构建 fnMap
    fnMap = {};
    FUNCTIONS.forEach((f) => { fnMap[f.name] = f; });
    initCatCounts();
    initHeaderStats();
    buildFilterTags();
    bindEvents();
    render();
  });
} else {
  // 构建 fnMap
  fnMap = {};
  FUNCTIONS.forEach((f) => { fnMap[f.name] = f; });
  initCatCounts();
  initHeaderStats();
  buildFilterTags();
  bindEvents();
  render();
}

// 初始化分类计数
function initCatCounts() {
  CAT_COUNTS = {};
  FUNCTIONS.forEach((f) => {
    if (!CAT_COUNTS[f.category]) CAT_COUNTS[f.category] = 0;
    CAT_COUNTS[f.category]++;
  });
}

// 初始化头部统计
function initHeaderStats() {
  const totalFns = FUNCTIONS.length;
  const withDetail = FUNCTIONS.filter((f) => f.hasDetail).length;
  const categories = [...new Set(FUNCTIONS.map((f) => f.category))].length;

  const statsHtml = `
    <div class="stat-badge">📊 共 <span>${totalFns}</span> 个函数</div>
    <div class="stat-badge">📖 有详解 <span>${withDetail}</span> 个</div>
    <div class="stat-badge">📂 分 <span>${categories}</span> 大类</div>
  `;
  document.getElementById('headerStats').innerHTML = statsHtml;
}

// 构建筛选标签
function buildFilterTags() {
  const tagContainer = document.getElementById('filterTags');
  const allTag = createEl(
    'div',
    {
      className: 'tag active',
      onClick: () => setCategory('all'),
    },
    [
      createEl('span', { textContent: '全部' }),
      createEl('span', {
        className: 'tag-count',
        textContent: Object.values(CAT_COUNTS).reduce((a, b) => a + b, 0),
      }),
    ]
  );
  tagContainer.appendChild(allTag);

  const catOrder = [
    '日期与时间函数',
    '数学与三角函数',
    '逻辑函数',
    '查找与引用函数',
    '数据库函数',
    '文本函数',
    '统计函数',
    '财务函数',
    '工程函数',
    '信息函数',
    '外部函数',
    '其他函数',
  ];
  catOrder.forEach((cat) => {
    const meta = CAT_META[cat] || { icon: '📦', color: '#6b7280', bg: '#f9fafb' };
    const count = CAT_COUNTS[cat] || 0;
    if (count === 0) return;

    const tag = createEl(
      'div',
      {
        className: 'tag',
        onClick: () => setCategory(cat),
      },
      [
        createEl('span', { textContent: meta.icon + ' ' + cat }),
        createEl('span', { className: 'tag-count', textContent: count }),
      ]
    );
    tag.style.color = meta.color;
    tag.style.backgroundColor = meta.bg;
    tag._cat = cat;
    tagContainer.appendChild(tag);
  });
}

// 绑定事件
function bindEvents() {
  document.getElementById('searchInput').addEventListener('input', (e) => {
    searchQuery = e.target.value.toLowerCase();
    render();
  });

  document.getElementById('sortSelect').addEventListener('change', (e) => {
    sortMode = e.target.value;
    render();
  });
}

// 设置分类
function setCategory(cat) {
  activeCategory = cat;
  document.querySelectorAll('.tag').forEach((t) => {
    const isActive = t._cat === cat;
    t.classList.toggle('active', isActive);
  });
  render();
}

// 获取筛选后的函数列表
function getFiltered() {
  let fns = FUNCTIONS;

  if (activeCategory !== 'all') {
    fns = fns.filter((f) => f.category === activeCategory);
  }

  if (searchQuery) {
    fns = fns.filter(
      (f) =>
        f.name.toLowerCase().includes(searchQuery) ||
        f.description.toLowerCase().includes(searchQuery) ||
        f.category.includes(searchQuery) ||
        (f.usage && f.usage.toLowerCase().includes(searchQuery)) ||
        (f.params && f.params.toLowerCase().includes(searchQuery)) ||
        (f.example && f.example.toLowerCase().includes(searchQuery))
    );
  }

  if (showFavOnly) {
    fns = fns.filter((f) => favSet.has(f.name));
  }

  const diffSelect = document.getElementById('diffSelect');
  const diff = diffSelect ? diffSelect.value : 'all';
  if (diff !== 'all') {
    fns = fns.filter((f) => DIFFICULTY[f.name] === diff);
  }

  // 排序
  if (sortMode === 'name') {
    fns = [...fns].sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortMode === 'category') {
    fns = [...fns].sort(
      (a, b) => a.category.localeCompare(b.category) || a.name.localeCompare(b.name)
    );
  } else if (sortMode === 'detail') {
    fns = [...fns].sort(
      (a, b) => (b.hasDetail ? 1 : 0) - (a.hasDetail ? 1 : 0) || a.name.localeCompare(b.name)
    );
  } else if (sortMode === 'fav') {
    fns = [...fns].sort(
      (a, b) =>
        (favSet.has(b.name) ? 1 : 0) - (favSet.has(a.name) ? 1 : 0) || a.name.locateCompare(b.name)
    );
  }

  return fns;
}

// 渲染函数卡片（懒加载版）
function render() {
  const fns = getFiltered();
  const grid = document.getElementById('functionGrid');
  const empty = document.getElementById('emptyState');
  const countEl = document.getElementById('resultsCount');

  countEl.innerHTML = `共 <strong>${fns.length}</strong> 个函数${searchQuery ? ' (搜索: "' + escHtml(searchQuery) + '"）' : ''}`;
  if (fns.length === 0) {
    grid.innerHTML = '';
    empty.style.display = 'block';
    return;
  }

  empty.style.display = 'none';
  grid.innerHTML = '';
  currentBatch = fns;
  renderedCount = 0;

  // 渲染首批
  appendBatch(grid);

  // 设置 Intersection Observer 懒加载
  setupLazyLoad(grid);
}

// 追加一批卡片
function appendBatch(grid) {
  const fragment = document.createDocumentFragment();
  const end = Math.min(renderedCount + BATCH_SIZE, currentBatch.length);

  for (let i = renderedCount; i < end; i++) {
    const f = currentBatch[i];
    const meta = CAT_META[f.category] || CAT_META['其他函数'];
    const card = createFunctionCard(f, meta);
    fragment.appendChild(card);
  }

  grid.appendChild(fragment);
  renderedCount = end;
}

// 设置懒加载观察者
function setupLazyLoad(grid) {
  // 断开之前的观察者
  if (loadMoreObserver) {
    loadMoreObserver.disconnect();
    loadMoreObserver = null;
  }
  if (sentinelEl) {
    sentinelEl.remove();
    sentinelEl = null;
  }

  // 如果已全部渲染，不需要观察者
  if (renderedCount >= currentBatch.length) return;

  // 创建哨兵元素
  sentinelEl = createEl('div', {
    className: 'sentinel',
    style: 'height:20px;grid-column:1/-1;',
  });
  grid.appendChild(sentinelEl);

  loadMoreObserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      // 移除哨兵，追加下一批
      if (sentinelEl) {
        sentinelEl.remove();
        sentinelEl = null;
      }
      appendBatch(grid);

      // 如果还有更多，重新设置观察者
      if (renderedCount < currentBatch.length) {
        sentinelEl = createEl('div', {
          className: 'sentinel',
          style: 'height:20px;grid-column:1/-1;',
        });
        grid.appendChild(sentinelEl);
        loadMoreObserver.observe(sentinelEl);
      } else {
        loadMoreObserver.disconnect();
        loadMoreObserver = null;
      }
    }
  }, {
    rootMargin: '200px', // 提前 200px 触发加载
  });

  loadMoreObserver.observe(sentinelEl);
}

// 创建函数卡片（使用 DOM，避免 XSS）
function createFunctionCard(f, meta) {
  const card = createEl('div', {
    className: 'card',
    style: `color:${meta.color}`,
    onClick: () => openModal(f.name),
  });

  // 收藏按钮
  const isFav = favSet.has(f.name);
  const favBtn = createEl(
    'button',
    {
      className: `card-fav-btn ${isFav ? 'active' : ''}`,
      title: isFav ? '取消收藏' : '收藏',
      onClick: (e) => toggleFav(f.name, e),
    },
    [isFav ? '⭐' : '☆']
  );
  card.appendChild(favBtn);

  // 卡片头部
  const header = createEl('div', { className: 'card-header' });
  const nameEl = createEl('div', {
    className: 'card-name',
    style: `color:${meta.color}`,
    textContent: f.name,
  });
  const badge = createEl(
    'div',
    {
      className: 'card-badge',
      style: `background:${meta.bg};color:${meta.color}`,
    },
    [meta.icon + ' ' + f.category]
  );

  header.appendChild(nameEl);
  header.appendChild(badge);
  card.appendChild(header);

  // 描述
  const desc = createEl('div', { className: 'card-desc', textContent: f.description });
  card.appendChild(desc);

  // 语法
  if (f.usage) {
    const usage = createEl('div', { className: 'card-usage', textContent: f.usage });
    card.appendChild(usage);
  }

  // 评分
  if (f.stars) {
    const stars = createEl('div', { className: 'card-stars', textContent: f.stars });
    card.appendChild(stars);
  }

  // 详情徽章
  if (f.hasDetail) {
    const detailBadge = createEl('div', {
      className: 'card-detail-badge',
      textContent: '📖 含详细示例',
    });
    card.appendChild(detailBadge);
  }

  // 练习题徽章
  if (QUIZ_DATA && QUIZ_DATA[f.name] && QUIZ_DATA[f.name].length > 0) {
    const prog = quizProgress[f.name] || {};
    const doneCnt = Object.values(prog).filter((r) => r && r.answered).length;
    const totalCnt = QUIZ_DATA[f.name].length;
    const badge = createEl('div', { className: 'card-quiz-badge' }, [
      createEl('span', { textContent: '🎯 练习题 ' }),
      createEl('span', { textContent: doneCnt > 0 ? `${doneCnt}/${totalCnt}` : `${totalCnt}题` }),
    ]);
    card.appendChild(badge);
  }

  // 难度徽章
  const diff = DIFFICULTY[f.name];
  if (diff) {
    const diffBadge = createEl('div', {
      className: `card-diff-badge diff-${diff}`,
      textContent: DIFF_LABELS[diff],
    });
    card.appendChild(diffBadge);
  }

  // 收藏徽章
  if (isFav) {
    const favBadge = createEl('div', { className: 'card-fav-badge', textContent: '⭐ 已收藏' });
    card.appendChild(favBadge);
  }

  return card;
}
