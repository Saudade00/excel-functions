// utils.js - 工具函数模块

// HTML 转义（防止 XSS）
function escHtml(str) {
  return String(str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// 复制文本到剪贴板
function copyText(text) {
  navigator.clipboard.writeText(text).then(() => {
    const btn = event.target;
    btn.textContent = '✅ 已复制';
    setTimeout(() => {
      btn.textContent = '📋 复制语法';
    }, 1500);
  });
}

// 创建 DOM 元素（安全替代字符串拼接）
function createEl(tag, attrs = {}, children = []) {
  const el = document.createElement(tag);

  for (const [key, val] of Object.entries(attrs)) {
    if (key === 'className') {
      el.className = val;
    } else if (key === 'textContent') {
      el.textContent = val;
    } else if (key === 'innerHTML') {
      el.innerHTML = val;
    } else if (key.startsWith('on')) {
      el.addEventListener(key.slice(2).toLowerCase(), val);
    } else {
      el.setAttribute(key, val);
    }
  }

  children.forEach((child) => {
    if (typeof child === 'string') {
      el.appendChild(document.createTextNode(child));
    } else if (child instanceof Node) {
      el.appendChild(child);
    }
  });

  return el;
}

// 防抖函数
function debounce(func, wait) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

// 节流函数
function throttle(func, limit) {
  let inThrottle;
  return function (...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

// 导出函数（用于测试）
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    escHtml,
    // copyText, // 暂时不导出，因为依赖浏览器 API
    createEl,
    debounce,
    throttle,
  };
}
