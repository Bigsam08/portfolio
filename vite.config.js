import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer';


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), visualizer({
    filename: 'bundle-report.html',
    open: true,  // open report automatically after build
    gzipSize: true,
    brotliSize: true,
  }),],
})
