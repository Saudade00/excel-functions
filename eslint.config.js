// ESLint v9 Flat Config
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended';

export default tseslint.config(
  {
    ignores: ['dist/', 'node_modules/', 'backups/', 'scripts/', '*.config.js', '*.config.cjs', 'js/raw_script.js'],
  },
  {
    files: ['js/**/*.js', 'data/**/*.js'],
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      eslintPluginPrettier,
    ],
    rules: {
      // 自定义规则
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-unused-vars': 'off', // 由 typescript-eslint 处理
      '@typescript-eslint/no-unused-vars': 'off', // 禁用：全局脚本模式下，函数跨文件使用，ESLint 无法跟踪
      'prettier/prettier': 'error',
    },
  },
  {
    files: ['js/**/*.js', 'data/**/*.js'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'script', // 使用 script 而不是 module（全局变量模式）
      globals: {
        // 浏览器全局变量
        document: 'readonly',
        window: 'readonly',
        localStorage: 'readonly',
        // 自定义全局变量（在 data.js 中定义）
        FUNCTIONS: 'readonly',
        CATEGORY_META: 'readonly',
        QUIZ_DATA: 'writable',
      },
    },
  }
);
