import { defineConfig } from 'vite';
import { glob } from 'glob';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';

export default defineConfig({
  root: 'src',
  build: {
    outDir: '../dist',
    rollupOptions: {
      input: glob.sync('./src/*.html'),
    },
  },
  plugins: [injectHTML(), FullReload(['./src/**/*.html', './src/**/*.scss'])],
  server: {
    host: true,
    // port: 3000,
  },
});
