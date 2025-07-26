import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // This ensures assets are loaded relative to index.html
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    assetsInclude: ['**/*.jpg', '**/*.png', '**/*.jpeg', '**/*.gif'],
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name].[ext]',
      },
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
