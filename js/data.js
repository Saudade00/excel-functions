// data.js - 数据定义模块
// 从外部文件加载 FUNCTIONS 数据

// 分类元数据
const CAT_META = {
  日期与时间函数: { icon: '📅', color: '#3b82f6', bg: '#eff6ff' },
  数学与三角函数: { icon: '📐', color: '#10b981', bg: '#ecfdf5' },
  逻辑函数: { icon: '🔀', color: '#f59e0b', bg: '#fffbeb' },
  查找与引用函数: { icon: '🔍', color: '#8b5cf6', bg: '#f5f3ff' },
  数据库函数: { icon: '🗄️', color: '#ef4444', bg: '#fef2f2' },
  文本函数: { icon: '📝', color: '#14b8a6', bg: '#f0fdfa' },
  统计函数: { icon: '📊', color: '#6366f1', bg: '#eef2ff' },
  财务函数: { icon: '💰', color: '#d97706', bg: '#fffbeb' },
  工程函数: { icon: '⚙️', color: '#dc2626', bg: '#fef2f2' },
  信息函数: { icon: 'ℹ️', color: '#0891b2', bg: '#ecfeff' },
  外部函数: { icon: '🔌', color: '#7c3aed', bg: '#f5f3ff' },
  其他函数: { icon: '📦', color: '#6b7280', bg: '#f9fafb' },
};

// 难度数据
const DIFFICULTY = {
  // 入门 easy
  IF: 'easy',
  SUM: 'easy',
  MAX: 'easy',
  MIN: 'easy',
  AVERAGE: 'easy',
  LEN: 'easy',
  LEFT: 'easy',
  RIGHT: 'easy',
  TODAY: 'easy',
  NOW: 'easy',
  ABS: 'easy',
  ROUND: 'easy',
  INT: 'easy',
  MOD: 'easy',
  // 进阶 medium
  AND: 'medium',
  OR: 'medium',
  NOT: 'medium',
  VLOOKUP: 'medium',
  HLOOKUP: 'medium',
  COUNTIF: 'medium',
  SUMIF: 'medium',
  TEXT: 'medium',
  MID: 'medium',
  FIND: 'medium',
  SUBSTITUTE: 'medium',
  TRIM: 'medium',
  DATE: 'medium',
  YEAR: 'medium',
  MONTH: 'medium',
  DAY: 'medium',
  RANK: 'medium',
  WEEKDAY: 'medium',
  CEILING: 'medium',
  FLOOR: 'medium',
  // 高级 hard
  IFS: 'hard',
  INDEX: 'hard',
  MATCH: 'hard',
  OFFSET: 'hard',
  INDIRECT: 'hard',
  COUNTIFS: 'hard',
  SUMIFS: 'hard',
  SUMPRODUCT: 'hard',
  DATEDIF: 'hard',
};

const DIFF_LABELS = { easy: '🟢 入门', medium: '🟡 进阶', hard: '🔴 高级' };

// 相关函数推荐
const RELATED = {
  IF: ['AND', 'OR', 'IFS', 'NOT'],
  AND: ['IF', 'OR', 'NOT', 'IFS'],
  OR: ['IF', 'AND', 'NOT'],
  IFS: ['IF', 'AND', 'OR'],
  NOT: ['IF', 'AND', 'OR'],
  VLOOKUP: ['HLOOKUP', 'INDEX', 'MATCH', 'OFFSET', 'INDIRECT'],
  HLOOKUP: ['VLOOKUP', 'INDEX', 'MATCH'],
  INDEX: ['MATCH', 'OFFSET', 'VLOOKUP'],
  MATCH: ['INDEX', 'VLOOKUP', 'OFFSET'],
  OFFSET: ['INDEX', 'MATCH', 'INDIRECT'],
  INDIRECT: ['OFFSET', 'INDEX', 'ADDRESS'],
  LEFT: ['RIGHT', 'MID', 'LEN', 'FIND'],
  RIGHT: ['LEFT', 'MID', 'LEN'],
  MID: ['LEFT', 'RIGHT', 'LEN', 'FIND'],
  LEN: ['LEFT', 'RIGHT', 'MID', 'TRIM'],
  FIND: ['LEFT', 'MID', 'SUBSTITUTE'],
  SUBSTITUTE: ['TRIM', 'FIND', 'TEXT'],
  TRIM: ['LEN', 'SUBSTITUTE', 'CLEAN'],
  TEXT: ['DATE', 'TODAY', 'NOW'],
  TODAY: ['NOW', 'DATE', 'DATEDIF', 'YEAR', 'MONTH', 'DAY'],
  NOW: ['TODAY', 'TEXT'],
  DATE: ['TODAY', 'YEAR', 'MONTH', 'DAY'],
  YEAR: ['MONTH', 'DAY', 'DATE', 'TODAY'],
  MONTH: ['YEAR', 'DAY', 'DATE'],
  DAY: ['YEAR', 'MONTH', 'DATE'],
  DATEDIF: ['TODAY', 'DATE', 'YEAR'],
  WEEKDAY: ['TODAY', 'DATE', 'IF'],
  COUNTIF: ['COUNTIFS', 'SUMIF', 'SUMIFS'],
  COUNTIFS: ['COUNTIF', 'SUMIFS', 'SUMPRODUCT'],
  SUMIF: ['SUMIFS', 'COUNTIF', 'AVERAGEIF'],
  SUMIFS: ['SUMIF', 'COUNTIFS', 'SUMPRODUCT'],
  AVERAGE: ['SUM', 'COUNTIF', 'MAX', 'MIN'],
  MAX: ['MIN', 'RANK', 'LARGE'],
  MIN: ['MAX', 'RANK', 'SMALL'],
  RANK: ['MAX', 'MIN', 'COUNTIF'],
  SUM: ['SUMIF', 'SUMIFS', 'SUMPRODUCT'],
  ROUND: ['CEILING', 'FLOOR', 'INT', 'MOD'],
  INT: ['ROUND', 'FLOOR', 'MOD'],
  MOD: ['INT', 'FLOOR', 'ROUND'],
  ABS: ['ROUND', 'INT'],
  CEILING: ['FLOOR', 'ROUND', 'INT'],
  FLOOR: ['CEILING', 'ROUND', 'INT'],
  SUMPRODUCT: ['SUMIFS', 'COUNTIFS', 'INDEX'],
};

// 分类计数（动态计算）
let CAT_COUNTS = {};

// 初始化 CAT_COUNTS
function initCatCounts() {
  if (typeof FUNCTIONS !== 'undefined') {
    CAT_COUNTS = {};
    FUNCTIONS.forEach((f) => {
      if (!CAT_COUNTS[f.category]) CAT_COUNTS[f.category] = 0;
      CAT_COUNTS[f.category]++;
    });
  }
}

// 全局变量
const activeCategory = 'all';
const searchQuery = '';
const sortMode = 'name';
const showFavOnly = false;
const currentModalFn = null;
