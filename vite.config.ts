import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/dhcw-vaccine-roadmap/',
  plugins: [react()],
});
