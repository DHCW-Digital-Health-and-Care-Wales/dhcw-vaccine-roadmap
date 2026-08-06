import type { RoadmapMeta } from '../data/roadmap';
import { useLanguage } from '../lib/i18n';

/**
 * "Our vision" and "Service description" blocks, placed directly beneath the
 * header and above the roadmap body.
 *
 * Both pieces of copy are agreed verbatim wording stored in roadmap.ts.
 * Do not edit the copy here — update it in src/data/roadmap.ts only.
 */
export function VisionStatement({ meta }: { meta: RoadmapMeta }) {
  const { lang, tr } = useLanguage();

  return (
    <>
      <section
        id="vision"
        aria-labelledby="vision-heading"
        className="border-b border-border bg-surface px-4 py-12 sm:px-6"
      >
        <div className="mx-auto max-w-content">
          <h2 id="vision-heading" className="text-2xl font-bold text-heading">
            {lang === 'cy' ? 'Ein gweledigaeth' : 'Our vision'}
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-ink-900">
            {tr(meta.vision)}
          </p>
        </div>
      </section>

      <section
        id="service-description"
        aria-labelledby="service-description-heading"
        className="border-b border-border bg-surface-subtle px-4 py-12 sm:px-6"
      >
        <div className="mx-auto max-w-content">
          <h2
            id="service-description-heading"
            className="text-2xl font-bold text-heading"
          >
            {lang === 'cy'
              ? 'Ein gwerth'
              : 'Our value'}
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-ink-900">
            {tr(meta.serviceDescription)}
          </p>
        </div>
      </section>
    </>
  );
}
