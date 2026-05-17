import { defineConfig } from 'vite';
import { visualizer } from 'rollup-plugin-visualizer';
import compression from 'vite-plugin-compression';

export default defineConfig({
  root: '.',
  base: './',
  publicDir: false, // 不复制 public/ 目录
  server: {
    port: 3000,
    open: true,
    host: '127.0.0.1',
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    minify: 'terser',
    sourcemap: true,
    rollupOptions: {
      input: 'index.html',
      output: {
        entryFileNames: 'js/[name].js',
        chunkFileNames: 'js/[name].js',
        // manifest.json 和 service-worker.js 保持原路径，其他资源按类型分目录
        assetFileNames: (assetInfo) => {
          const name = assetInfo.name || '';
          if (name.endsWith('manifest.json') || name.endsWith('service-worker.js')) {
            return '[name].[ext]';
          }
          const ext = name.split('.').pop();
          return `${ext}/[name].[ext]`;
        },
      },
    },
  },
  css: {
    devSourcemap: true,
  },
  plugins: [
    compression({ algorithm: 'gzip', ext: '.gz' }),
    compression({ algorithm: 'brotliCompress', ext: '.br' }),
    process.env.ANALYZE
      ? visualizer({
          filename: './dist/stats.html',
          open: true,
          gzipSize: true,
          brotliSize: true,
        })
      : null,
  ].filter(Boolean),
});
