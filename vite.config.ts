import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteCompression from 'vite-plugin-compression';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteCompression({ algorithm: 'brotliCompress', ext: '.br' }),
    viteCompression({ algorithm: 'gzip', ext: '.gz' }),
  ],
  define: {
    'process.env.MY_ENV_VAR': JSON.stringify(process.env.MY_ENV_VAR),
  },
  build: {
    outDir: 'dist',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_debugger: true,
        drop_console: true,
      },
      format: {
        comments: false,
      },
    },
    rollupOptions: {
      input: {
        main: 'index.html',
      },
      output: {
        manualChunks: undefined,
      },
    },
  },
  server: {
    host: true,
  },
  resolve: {
    alias: {
      '@': '/src',
      '@hooks': '/src/app/hooks',
      '@models': '/src/app/models',
      '@router': '/src/app/router',
      '@selectors': '/src/app/selectors',
      '@store': '/src/app/store',
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
        additionalData: '@use "@/styles/global.styles.scss" as *;\n',
      },
    },
  },
  appType: 'spa',
});
