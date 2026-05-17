// quiz.js - 练习题功能模块
// 依赖：data.js, modal.js

// 练习题数据（示例结构，实际数据需要从原 index.html 提取）
const QUIZ_DATA = {};

// 练习题进度
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
  // 实现练习中心逻辑
  // console.log('Opening quiz center...');
}

// 打开错题本
function openWrongBook() {
  // 实现错题本逻辑
  // console.log('Opening wrong book...');
}

// 加载练习题
function loadQuiz(fnName) {
  // 加载指定函数的练习题
  // console.log('Loading quiz for:', fnName);
}

// 页面加载时初始化
document.addEventListener('DOMContentLoaded', () => {
  loadQuizProgress();
});
