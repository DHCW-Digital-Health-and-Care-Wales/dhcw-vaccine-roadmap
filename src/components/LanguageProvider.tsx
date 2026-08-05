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
 * Returns true when the initial language came from an explicit source (URL
 * param or stored preference) rather than the hard-coded default. Used to
 * decide whether to write the `?lang=` param on first render — we only do so
 * when the user previously expressed a choice, so clean URLs stay clean.
 */
function hasExplicitInitialLang(): boolean {
  if (typeof window === 'undefined') return false;
  const fromUrl = new URLSearchParams(window.location.search).get(LANG_PARAM);
  if (isLang(fromUrl)) return true;
  try {
    return isLang(window.localStorage.getItem(LANG_STORAGE_KEY));
  } catch {
    return false;
  }
}

/**
 * Provides the active language and a translation helper, and keeps the document
 * `lang` attribute, the URL and the stored preference in sync.
 */
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(readInitialLang);
  // Track whether the URL param should be written. We only write it when the
  // user has actively chosen a language (or when an explicit choice was already
  // present on load), so first-time visitors don't see ?lang=en appended to
  // every URL they share.
  const [writeUrlParam, setWriteUrlParam] = useState<boolean>(
    hasExplicitInitialLang,
  );

  useEffect(() => {
    document.documentElement.lang = lang;

    try {
      window.localStorage.setItem(LANG_STORAGE_KEY, lang);
    } catch {
      // Ignore storage failures; the choice still applies for this session.
    }

    // Only reflect the choice in the URL when the user has explicitly set it.
    if (writeUrlParam) {
      const url = new URL(window.location.href);
      url.searchParams.set(LANG_PARAM, lang);
      window.history.replaceState({}, '', url);
    }
  }, [lang, writeUrlParam]);

  const setLang = useCallback((next: Lang) => {
    setWriteUrlParam(true);
    setLangState(next);
  }, []);

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
