import type { Category, Roadmap } from '../data/roadmap';
import { useLanguage } from '../lib/i18n';
import { itemsFor } from '../lib/roadmap-helpers';
import { HorizonColumn } from './HorizonColumn';

/**
 * One outcome category (docs/BUILD_BRIEF.md Sections 4 and 6): its warm
 * headline, formal name and description, with the items split across the three
 * horizons. A coloured accent rule makes categories visually distinct without
 * relying on colour to carry meaning.
 */
export function CategorySection({
  category,
  roadmap,
}: {
  category: Category;
  roadmap: Roadmap;
}) {
  const { tr } = useLanguage();
  const headingId = `category-${category.id}`;

  return (
    <section
      aria-labelledby={headingId}
      className="scroll-mt-28 border-t border-border py-10 first:border-t-0"
    >
      <div className="border-l-4 pl-4" style={{ borderColor: category.accent }}>
        <p className="text-sm font-semibold uppercase tracking-wide text-ink-700">
          {tr(category.name)}
        </p>
        <h3 id={headingId} className="mt-1 text-2xl font-bold text-heading">
          {tr(category.headline)}
        </h3>
      </div>

      <p className="mt-4 max-w-3xl leading-relaxed text-ink-900">
        {tr(category.description)}
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {roadmap.horizons.map((horizon) => (
          <HorizonColumn
            key={horizon.id}
            horizonId={horizon.id}
            label={horizon.label}
            items={itemsFor(roadmap, category.id, horizon.id)}
            headingId={`${headingId}-${horizon.id}`}
          />
        ))}
      </div>
    </section>
  );
}
