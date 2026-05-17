import { defineConfig } from 'vite';
import { visualizer } from 'rollup-plugin-visualizer';
import compression from 'vite-plugin-compression';
import { readFileSync } from 'fs';
import { resolve } from 'path';

// Vite 插件：将 html2canvas.min.js 作为静态资源复制到 dist/js/
function copyHtml2CanvasPlugin() {
  return {
    name: 'copy-html2canvas',
    generateBundle() {
      this.emitFile({
        type: 'asset',
        fileName: 'js/html2canvas.min.js',
        source: readFileSync(resolve(__dirname, 'js/html2canvas.min.js')),
      });
    },
  };
}

export default defineConfig({
  root: '.',
  base: './',
  publicDir: false,
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
    copyHtml2CanvasPlugin(),
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
