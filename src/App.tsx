import { roadmap } from './data/roadmap';
import { RoadmapHeader } from './components/RoadmapHeader';
import { RoadmapIntro } from './components/RoadmapIntro';
import { HorizonExplainer } from './components/HorizonExplainer';
import { CategorySection } from './components/CategorySection';
import { AccessibilityStatement } from './components/AccessibilityStatement';
import { PrivacyNote } from './components/PrivacyNote';
import { RoadmapFooter } from './components/RoadmapFooter';
import { BackToTop } from './components/BackToTop';
import { useLanguage } from './lib/i18n';

/**
 * The roadmap page. All content is read from src/data/roadmap.ts; nothing is
 * hard-coded here. Layout follows the Figma Make design, reconciled to the
 * brief's Now/Next/Later structure across six outcome categories.
 */
export default function App() {
  const { lang } = useLanguage();
  const cy = lang === 'cy';

  return (
    <>
      <a href="#main-content" className="skip-link">
        {cy ? 'Neidio i’r prif gynnwys' : 'Skip to content'}
      </a>

      <span id="top" />
      <RoadmapHeader />

      <main id="main-content">
        <RoadmapIntro meta={roadmap.meta} />
        <HorizonExplainer roadmap={roadmap} />

        <div id="roadmap" className="scroll-mt-28 bg-surface px-4 py-8 sm:px-6">
          <div className="mx-auto max-w-content">
            <h2 className="sr-only">
              {cy ? 'Y trywydd yn ôl canlyniad' : 'The roadmap by outcome'}
            </h2>
            {roadmap.categories.map((category) => (
              <CategorySection
                key={category.id}
                category={category}
                roadmap={roadmap}
              />
            ))}
          </div>
        </div>

        <AccessibilityStatement />
        <PrivacyNote />
      </main>

      <RoadmapFooter />
      <BackToTop />
    </>
  );
}
