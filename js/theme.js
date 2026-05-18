// theme.js - 暗色模式模块

var THEME_KEY = 'excel_theme_v1';

// 加载主题
function loadTheme() {
  const t = localStorage.getItem(THEME_KEY);
  if (t) {
    document.documentElement.setAttribute('data-theme', t);
  }
  updateThemeBtn();
}

// 切换主题
function toggleTheme() {
  const cur = document.documentElement.getAttribute('data-theme');
  const next = cur === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem(THEME_KEY, next);
  updateThemeBtn();
}

// 更新主题按钮
function updateThemeBtn() {
  const btn = document.getElementById('themeToggle');
  if (!btn) return;
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  btn.textContent = isDark ? '☀️' : '🌙';
  btn.title = isDark ? '切换到亮色模式' : '切换到暗色模式';
}

// 页面加载时初始化主题
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', loadTheme);
} else {
  loadTheme();
}
