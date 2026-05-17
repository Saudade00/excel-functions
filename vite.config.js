import { defineConfig } from 'vite';

export default defineConfig({
  root: '.', // 项目根目录
  base: './', // 使用相对路径
  server: {
    port: 3000, // 开发服务器端口
    open: true, // 自动打开浏览器
    host: '127.0.0.1', // 监听地址
  },
  build: {
    outDir: 'dist', // 构建输出目录
    assetsDir: 'assets', // 静态资源目录
    minify: 'terser', // 使用 terser 压缩
    sourcemap: true, // 生成 source map
    rollupOptions: {
      // 不打包，只复制文件
      input: 'index.html',
      output: {
        // 保持原始文件名
        entryFileNames: 'js/[name].js',
        chunkFileNames: 'js/[name].js',
        assetFileNames: '[ext]/[name].[ext]',
      },
    },
  },
  css: {
    devSourcemap: true, // CSS sourcemap
  },
});
