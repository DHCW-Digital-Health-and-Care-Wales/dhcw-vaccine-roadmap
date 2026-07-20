/**
 * Bilingual helpers (docs/BUILD_BRIEF.md Section 8).
 *
 * The content model is language-keyed. English is the working default for this
 * pass. Welsh is treated no less favourably structurally: every string has a
 * Welsh slot, and when it is empty the UI falls back to English so nothing
 * breaks. In development we collect which strings are still missing Welsh so
 * the translation work is easy to complete later.
 */
import { createContext, useContext } from 'react';
import type { Localised } from '../data/roadmap';

export type Lang = 'cy' | 'en';

/**
 * The default interface language. English for now so content can be reviewed
 * quickly. To make the site Welsh-first later, flip this single value to 'cy'
 * (docs/BUILD_BRIEF.md Section 8).
 */
export const DEFAULT_LANGUAGE: Lang = 'en';

/** Query-string key used to share and persist the language choice. */
export const LANG_PARAM = 'lang';

/** Same-site storage key for remembering the choice without cookies. */
export const LANG_STORAGE_KEY = 'pcmh-roadmap-lang';

// In development only, record Localised values that are missing a Welsh string.
const missingWelsh = new Set<string>();

/**
 * Resolve a language-keyed value to a display string, falling back to English
 * when the requested language is empty.
 */
export function t(value: Localised, lang: Lang): string {
  const requested = value[lang];
  if (requested && requested.trim() !== '') {
    return requested;
  }

  // Track and warn about missing Welsh in development only.
  if (lang === 'cy' && import.meta.env.DEV) {
    const english = value.en;
    if (english && !missingWelsh.has(english)) {
      missingWelsh.add(english);
      console.warn(
        `[i18n] Missing Welsh translation, falling back to English: "${english}"`,
      );
    }
  }

  return value.en;
}

/** The set of English strings still awaiting Welsh, for dev tooling. */
export function getMissingWelsh(): string[] {
  return Array.from(missingWelsh);
}

export interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  /** Translate a language-keyed value into the active language. */
  tr: (value: Localised) => string;
}

export const LanguageContext = createContext<LanguageContextValue | null>(null);

/** Access the active language and translation helper. */
export function useLanguage(): LanguageContextValue {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
