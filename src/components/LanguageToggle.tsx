import { useLanguage, type Lang } from '../lib/i18n';

const OPTIONS: { value: Lang; label: string }[] = [
  { value: 'cy', label: 'Cymraeg' },
  { value: 'en', label: 'English' },
];

/**
 * Language toggle (docs/BUILD_BRIEF.md Section 8). Switches all keyed display
 * text and updates the document lang attribute via the LanguageProvider.
 * Implemented as a labelled group of buttons so the current choice is conveyed
 * in text and by aria-pressed, not by colour alone.
 */
export function LanguageToggle() {
  const { lang, setLang } = useLanguage();

  return (
    <div
      role="group"
      aria-label="Dewis iaith / Choose language"
      className="inline-flex overflow-hidden rounded border border-white/40"
    >
      {OPTIONS.map((option) => {
        const isActive = lang === option.value;
        return (
          <button
            key={option.value}
            type="button"
            lang={option.value}
            onClick={() => setLang(option.value)}
            aria-pressed={isActive}
            className={`px-3 py-1.5 text-sm font-medium transition-colors ${
              isActive
                ? 'bg-white text-nhs-wales-blue'
                : 'bg-transparent text-white hover:bg-white/15'
            }`}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
