import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true
    },
    proxy: {
      '/graphql': {
        target: 'https://leetcode.com',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/graphql/, ''),
      },
    },
  }
})

