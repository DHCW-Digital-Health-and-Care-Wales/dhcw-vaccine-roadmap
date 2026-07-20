import { useCallback, useEffect, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import type { Localised } from '../data/roadmap';
import {
  DEFAULT_LANGUAGE,
  LANG_PARAM,
  LANG_STORAGE_KEY,
  LanguageContext,
  t,
  type Lang,
} from '../lib/i18n';

function isLang(value: string | null): value is Lang {
  return value === 'cy' || value === 'en';
}

/**
 * Determine the initial language from, in order: the URL query parameter (so a
 * link can be shared in a given language), a same-site stored preference, then
 * the default. No third-party cookies are used (docs/BUILD_BRIEF.md Section 8).
 */
function readInitialLang(): Lang {
  if (typeof window === 'undefined') {
    return DEFAULT_LANGUAGE;
  }

  const fromUrl = new URLSearchParams(window.location.search).get(LANG_PARAM);
  if (isLang(fromUrl)) {
    return fromUrl;
  }

  try {
    const stored = window.localStorage.getItem(LANG_STORAGE_KEY);
    if (isLang(stored)) {
      return stored;
    }
  } catch {
    // Storage may be unavailable (private mode); fall through to the default.
  }

  return DEFAULT_LANGUAGE;
}

/**
 * Provides the active language and a translation helper, and keeps the document
 * `lang` attribute, the URL and the stored preference in sync.
 */
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(readInitialLang);

  useEffect(() => {
    document.documentElement.lang = lang;

    try {
      window.localStorage.setItem(LANG_STORAGE_KEY, lang);
    } catch {
      // Ignore storage failures; the choice still applies for this session.
    }

    // Reflect the choice in the URL without adding a history entry.
    const url = new URL(window.location.href);
    url.searchParams.set(LANG_PARAM, lang);
    window.history.replaceState({}, '', url);
  }, [lang]);

  const setLang = useCallback((next: Lang) => setLangState(next), []);

  const value = useMemo(
    () => ({
      lang,
      setLang,
      tr: (localised: Localised) => t(localised, lang),
    }),
    [lang, setLang],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}
