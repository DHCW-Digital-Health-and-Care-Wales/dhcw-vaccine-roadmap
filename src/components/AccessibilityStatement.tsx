import { useLanguage } from '../lib/i18n';

/**
 * Accessibility statement (docs/BUILD_BRIEF.md Section 9). UK public sector
 * sites need one. States the target standard, known gaps and how to report a
 * problem. Contact route and review date are left as placeholders to confirm.
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
              ? 'Mae hwn yn ddrafft i’w drafod ac mae’r gwaith yn parhau. Efallai na fydd rhai rhannau wedi’u profi’n llawn eto.'
              : 'This is a draft for discussion and the work is ongoing. Some parts may not yet be fully tested.'}
          </p>
          <p>
            {/* TODO: confirm the contact route for accessibility problems. */}
            {cy
              ? 'Os byddwch yn cael unrhyw broblem hygyrchedd, rhowch wybod i ni: [maes cyswllt i’w gadarnhau].'
              : 'If you find any accessibility problem, please tell us: [contact route to be confirmed].'}
          </p>
          <p className="text-sm text-ink-700">
            {/* TODO: confirm when this statement was last reviewed. */}
            {cy
              ? 'Adolygwyd y datganiad hwn ddiwethaf: [dyddiad i’w gadarnhau].'
              : 'This statement was last reviewed: [review date to be confirmed].'}
          </p>
        </div>
      </div>
    </section>
  );
}
