import { defineConfig } from 'vite';
import { glob } from 'glob';
import injectHTML from 'vite-plugin-html-inject';

export default defineConfig({
  root: 'src',
  build: {
    outDir: '../dist',
    rollupOptions: {
      input: glob.sync('./src/*.html'),
    },
  },

  plugins: [injectHTML()],

  server: {
    host: true,
    // port: 3000,
  },
});
