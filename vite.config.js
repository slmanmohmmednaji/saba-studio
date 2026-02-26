import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/saba-studio/',
  build: {
    // تقسيم الكود إلى ملفات أصغر (Code Splitting)
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom', 'react-router-dom', 'framer-motion', 'gsap'],
          'i18n': ['i18next', 'react-i18next'],
        },
      },
    },
    // تحويل الأصول الصغيرة إلى base64 لتقليل عدد الطلبات
    assetsInlineLimit: 4096,
    // إعدادات التخزين المؤقت والحجم
    chunkSizeWarningLimit: 1000,
  },
})
