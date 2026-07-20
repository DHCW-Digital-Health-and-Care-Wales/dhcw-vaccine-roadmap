import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // Use a relative base so built asset URLs (./assets/...) resolve relative to
  // index.html wherever the site is served: the GitHub Pages project path
  // (…github.io/dhcw-vaccine-roadmap/) or any other host root. An absolute base
  // hardcodes the /dhcw-vaccine-roadmap/ prefix and 404s when the deploy root
  // differs, which makes the browser reject the returned 404 HTML as CSS/JS.
  base: './',
  plugins: [react()],
});
