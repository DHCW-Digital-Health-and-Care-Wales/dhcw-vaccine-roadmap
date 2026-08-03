import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Project site is served from https://<org>.github.io/dhcw-vaccine-roadmap/
// so assets must be referenced from that absolute base. A relative base ('./')
// 404s when the site is accessed without a trailing slash or on a client-side
// deep link, because ./assets/... then resolves one directory too high.
export default defineConfig({
  base: '/dhcw-vaccine-roadmap/',
  plugins: [react()],
});
