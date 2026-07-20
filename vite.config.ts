import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';

// Strip the `crossorigin` attribute Vite adds to the entry <script> and <link>
// tags. This site's GitHub Pages visibility is Private, so the browser must
// send the authenticated session cookie to fetch the JS/CSS. `crossorigin`
// forces anonymous (credential-less) requests, so GitHub returns an auth
// redirect instead of the assets and the app never boots — a blank page.
// Removing it lets the same-origin asset requests carry credentials.
// Vite has no config flag for this (vitejs/vite#6648), hence the HTML rewrite.
function removeCrossorigin(): Plugin {
  return {
    name: 'remove-crossorigin',
    enforce: 'post',
    transformIndexHtml(html) {
      return html.replace(/\scrossorigin(="[^"]*")?/g, '');
    },
  };
}

export default defineConfig({
  // Use a relative base so built asset URLs (./assets/...) resolve relative to
  // index.html wherever the site is served: the GitHub Pages project path
  // (…github.io/dhcw-vaccine-roadmap/) or any other host root. An absolute base
  // hardcodes the /dhcw-vaccine-roadmap/ prefix and 404s when the deploy root
  // differs, which makes the browser reject the returned 404 HTML as CSS/JS.
  base: './',
  plugins: [react(), removeCrossorigin()],
});
