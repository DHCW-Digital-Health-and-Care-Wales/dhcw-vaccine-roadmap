import { useLanguage } from '../lib/i18n';

/**
 * Privacy note (docs/BUILD_BRIEF.md Section 9). The site sets no tracking
 * cookies, uses no third-party analytics and self-hosts its fonts, so there is
 * nothing for visitors to consent to.
 */
export function PrivacyNote() {
  const { lang } = useLanguage();
  const cy = lang === 'cy';
  const headingId = 'privacy-heading';

  return (
    <section
      id="privacy"
      aria-labelledby={headingId}
      className="scroll-mt-28 border-t border-border px-4 py-12 sm:px-6"
    >
      <div className="mx-auto max-w-content">
        <h2 id={headingId} className="text-2xl font-bold text-heading">
          {cy ? 'Preifatrwydd' : 'Privacy'}
        </h2>
        <div className="mt-4 max-w-3xl space-y-4 leading-relaxed text-ink-900">
          <p>
            {cy
              ? 'Nid yw’r safle hwn yn gosod cwcis tracio nac yn defnyddio dadansoddeg trydydd parti. Nid ydym yn rhannu unrhyw ddata personol.'
              : 'This site sets no tracking cookies and uses no third-party analytics. We do not share any personal data.'}
          </p>
          <p>
            {cy
              ? 'Mae’r ffontiau’n cael eu gwesteia gennym ni ein hunain, felly nid yw eich ymweliad yn cael ei rannu â gwasanaeth ffont allanol.'
              : 'Fonts are self-hosted, so your visit is not shared with an external font service.'}
          </p>
        </div>
      </div>
    </section>
  );
}
