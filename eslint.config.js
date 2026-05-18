// ESLint v9 Flat Config
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended';

export default tseslint.config(
  {
    ignores: ['dist/', 'node_modules/', 'backups/', 'scripts/', '*.config.js', '*.config.cjs', 'js/raw_script.js', 'js/html2canvas.min.js', 'js/__tests__/**'],
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
      'no-var': 'off', // 禁用：经典脚本模式下，var 用于声明全局变量
      'prefer-const': 'off', // 禁用：经典脚本模式下，var 是有意使用的
      'prefer-rest-params': 'off', // 禁用：项目使用经典脚本，arguments 对象仍有使用场景
      'prefer-spread': 'off', // 禁用：与 prefer-rest-params 类似，.apply() 在经典脚本中有用
      '@typescript-eslint/no-unused-expressions': 'off', // 禁用：经典脚本模式下部分表达式写法不被视为错误
      'no-cond-assign': 'warn', // 放宽：赋值误用提醒改为警告
      'no-fallthrough': 'warn', // 放宽：switch case 贯穿提醒改为警告
      'no-sparse-arrays': 'off', // 禁用：生成数据中可能出现的空位数组不视为错误
      '@typescript-eslint/no-this-alias': 'off', // 禁用：经典脚本中保存 this 引用的写法很常见
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
