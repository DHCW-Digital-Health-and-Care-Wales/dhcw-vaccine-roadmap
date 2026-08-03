import { useLanguage } from '../lib/i18n';

/**
 * Accessibility statement (docs/BUILD_BRIEF.md Section 9). UK public sector
 * sites need one. States the target standard and known gaps.
 */
export function AccessibilityStatement() {
  const { lang } = useLanguage();
  const cy = lang === 'cy';
  const headingId = 'accessibility-heading';

  return (
    <section
      id="accessibility"
      aria-labelledby={headingId}
      className="scroll-mt-28 border-t border-border bg-surface-subtle px-4 py-12 sm:px-6"
    >
      <div className="mx-auto max-w-content">
        <h2 id={headingId} className="text-2xl font-bold text-heading">
          {cy ? 'Datganiad hygyrchedd' : 'Accessibility statement'}
        </h2>
        <div className="mt-4 max-w-3xl space-y-4 leading-relaxed text-ink-900">
          <p>
            {cy
              ? 'Rydym am i gymaint o bobl â phosibl allu defnyddio’r trywydd hwn. Rydym yn anelu at gydymffurfio â Chanllawiau Hygyrchedd Cynnwys Gwe (WCAG) 2.2 ar lefel AA.'
              : 'We want as many people as possible to be able to use this roadmap. We aim to meet the Web Content Accessibility Guidelines (WCAG) 2.2 at level AA.'}
          </p>
          <p>
            {cy
              ? 'Mae’r trywydd hwn yn fersiwn beta ac mae’n dal i gael ei brofi. Rydym yn croesawu unrhyw adborth.'
              : 'This roadmap is in beta and still being tested, we welcome any feedback.'}
          </p>
        </div>
      </div>
    </section>
  );
}
