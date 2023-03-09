import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { VitePWA } from 'vite-plugin-pwa';

const PWACONFIG = {
  registerType: 'autoUpdate',
  workbox: {
    clientsClaim: true,
    skipWaiting: true
  },
  // enable on DEV
  devOptions: {
    enabled: true
  }
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA(PWACONFIG),
  ],
})
