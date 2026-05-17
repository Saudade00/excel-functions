// favorites.js - 收藏夹功能模块
// 依赖：需要在 app.js 之前加载

const FAV_KEY = 'excel_fav_v1';

// 加载收藏列表
function loadFavs() {
  try {
    return JSON.parse(localStorage.getItem(FAV_KEY) || '[]');
  } catch (e) {
    return [];
  }
}

// 保存收藏列表
function saveFavs(arr) {
  localStorage.setItem(FAV_KEY, JSON.stringify(arr));
}

// 收藏集合
const favSet = new Set(loadFavs());

// 切换收藏状态
function toggleFav(fnName, e) {
  if (e) e.stopPropagation();
  if (favSet.has(fnName)) {
    favSet.delete(fnName);
  } else {
    favSet.add(fnName);
  }
  saveFavs([...favSet]);
  render();
  updateModalFavBtn(fnName);
}

// 切换收藏筛选
function toggleFavFilter() {
  showFavOnly = !showFavOnly;
  const btn = document.getElementById('favFilterBtn');
  btn.classList.toggle('fav-active', showFavOnly);
  render();
}

// 更新模态框收藏按钮
function updateModalFavBtn(fnName) {
  const btn = document.getElementById('modalFavBtn');
  if (!btn) return;
  const isFav = favSet.has(fnName);
  btn.innerHTML = isFav ? '⭐ 已收藏' : '☆ 收藏';
  btn.classList.toggle('active', isFav);
}

// 切换模态框收藏
function toggleModalFav() {
  if (!currentModalFn) return;
  toggleFav(currentModalFn, null);
}
