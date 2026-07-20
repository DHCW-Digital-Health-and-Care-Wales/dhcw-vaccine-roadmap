import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// Self-hosted Roboto (DHCW digital interface font). Bundled into the build so
// no third-party font service is called (docs/BUILD_BRIEF.md Sections 3 and 9).
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './index.css';
import App from './App.tsx';
import { LanguageProvider } from './components/LanguageProvider';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element #root was not found in the document.');
}

createRoot(rootElement).render(
  <StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </StrictMode>,
);
