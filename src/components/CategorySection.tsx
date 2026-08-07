import { ChevronDown } from 'lucide-react';
import type { Category, Roadmap } from '../data/roadmap';
import { useLanguage } from '../lib/i18n';
import { itemsFor } from '../lib/roadmap-helpers';
import { HorizonColumn } from './HorizonColumn';

/**
 * One outcome category (docs/BUILD_BRIEF.md Sections 4 and 6): its warm
 * headline, formal name and description, followed by the three horizons stacked
 * as a single top-to-bottom journey (Now, then Next, then Later). A coloured
 * accent rule makes categories visually distinct, and a decorative connector
 * between phases signals progression without relying on colour to carry
 * meaning.
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
  const lastIndex = roadmap.horizons.length - 1;

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

      <ol className="mt-8 space-y-8">
        {roadmap.horizons.map((horizon, index) => (
          <li key={horizon.id}>
            <HorizonColumn
              horizonId={horizon.id}
              label={horizon.label}
              items={itemsFor(roadmap, category.id, horizon.id)}
              headingId={`${headingId}-${horizon.id}`}
              accent={category.accent}
            />
            {index < lastIndex ? (
              <div
                aria-hidden="true"
                className="flex flex-col items-center pt-8 text-ink-300"
              >
                <ChevronDown className="h-6 w-6" strokeWidth={2.5} />
              </div>
            ) : null}
          </li>
        ))}
      </ol>
    </section>
  );
}
