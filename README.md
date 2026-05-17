# Excel 函数大全 · 交互式参考手册

一个功能完整的 Excel 函数参考工具，支持搜索、筛选、收藏和交互式学习。

## 📋 项目概述

这是一个基于 Web 的 Excel 函数参考手册，包含了 Excel 的各种函数。主要特性：

- 🔍 **实时搜索**：快速查找函数
- 🏷️ **分类筛选**：按函数类别筛选
- ⭐ **收藏管理**：保存常用函数
- 🌙 **深色模式**：支持浅色/深色主题
- 📱 **响应式设计**：适配各种屏幕尺寸
- 💾 **本地存储**：收藏数据保存在浏览器本地

## 📁 项目结构

```
函数工具/
├── index.html              # 主页面（框架和UI）
├── package.json            # Node.js 项目配置
├── README.md              # 项目文档（本文件）
├── .gitignore             # Git 忽略配置
│
├── data/                  # 📊 数据文件夹
│   ├── functions_data.json # 函数数据源
│   ├── excel_data.json     # Excel 数据
│   └── Excel函数大全完整版.xls # 原始数据文件
│
├── scripts/               # 🔧 维护脚本
│   ├── rebuild_final.js   # 重建 HTML 数据脚本
│   └── add_quizzes_final.js # 添加测试题脚本
│
├── backups/               # 📦 备份文件夹
│   └── Excel函数大全.html.bak* # HTML 备份文件
│
└── node_modules/          # NPM 依赖（已安装）
    └── xlsx/              # Excel 文件处理库
```

## 🚀 快速开始

### 浏览函数

1. 在浏览器中打开 `index.html`
2. 使用搜索框查找函数
3. 点击函数卡片查看详细信息
4. 点击 ⭐ 图标收藏常用函数

### 维护脚本

```bash
# 安装依赖（仅第一次需要）
npm install

# 重建函数数据
node scripts/rebuild_final.js

# 添加测试题
node scripts/add_quizzes_final.js
```

## 📊 数据源

- **functions_data.json**：函数的完整定义和描述
- **excel_data.json**：补充的 Excel 函数数据
- **Excel函数大全完整版.xls**：原始 Excel 文件数据来源

## 🛠️ 技术栈

- **前端**：HTML5 + CSS3 + Vanilla JavaScript
- **数据**：JSON 格式
- **构建工具**：Node.js + XLSX 库
- **本地存储**：Browser LocalStorage API

## 🎨 特性详解

### 搜索和筛选
- 实时搜索函数名称和描述
- 按分类快速筛选
- 支持多条件组合筛选

### 主题切换
- 自动检测系统主题偏好
- 手动切换浅色/深色模式
- 主题设置本地保存

### 收藏功能
- 收藏常用函数
- 专门的收藏视图
- 本地持久化存储

## 📝 函数信息

每个函数包含以下信息：
- **函数名**：Excel 中的函数名称
- **描述**：函数用途说明
- **分类**：所属的函数类别
- **用法**：函数语法（如有）
- **参数**：参数说明（如有）
- **示例**：使用示例（如有）
- **评分**：用户评分（如有）

## 🔄 维护指南

### 更新函数数据

1. 修改 `data/functions_data.json` 或 `data/excel_data.json`
2. 运行 `node scripts/rebuild_final.js` 重建 HTML
3. 刷新浏览器查看更新

### 添加测试题

1. 编辑 `scripts/add_quizzes_final.js`
2. 运行脚本添加题目
3. 重新构建 HTML

### 备份

- 修改前自动创建备份到 `backups/` 目录
- 可以从备份文件恢复之前的版本

## 📦 依赖

- **xlsx** ^0.18.5：用于处理 Excel 文件

安装依赖：
```bash
npm install
```

## 🐛 常见问题

**Q: 收藏的函数丢失了？**
A: 收藏数据存储在浏览器 LocalStorage 中。清除浏览器缓存会导致丢失。

**Q: 搜索找不到某个函数？**
A: 检查函数名称拼写，或查看 `data/functions_data.json` 中是否包含该函数。

**Q: 脚本执行出错？**
A: 确保已安装 Node.js 和依赖包：`npm install`

## 📄 许可证

MIT License

## 👤 作者

Created as an interactive reference tool for Excel functions.

---

**最后更新**：2024年
