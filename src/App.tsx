import { roadmap } from './data/roadmap';
import { RoadmapHeader } from './components/RoadmapHeader';
import { RoadmapIntro } from './components/RoadmapIntro';
import { VisionStatement } from './components/VisionStatement';
import { HorizonExplainer } from './components/HorizonExplainer';
import { DeliveredSection } from './components/DeliveredSection';
import { CategorySection } from './components/CategorySection';
import { AccessibilityStatement } from './components/AccessibilityStatement';
import { PrivacyNote } from './components/PrivacyNote';
import { RoadmapFooter } from './components/RoadmapFooter';
import { BackToTop } from './components/BackToTop';
import { useLanguage } from './lib/i18n';

/** The roadmap page. All content is read from src/data/roadmap.ts. */
export default function App() {
  const { lang } = useLanguage();
  const cy = lang === 'cy';

  return (
    <>
      <a href="#main-content" className="skip-link">
        {cy ? 'Neidio i\u2019r prif gynnwys' : 'Skip to content'}
      </a>

      <span id="top" />
      <RoadmapHeader />

      <main id="main-content">
        {/* 1. Roadmap title, status label and intro */}
        <RoadmapIntro meta={roadmap.meta} />

        {/* 2. Our vision + Service description */}
        <VisionStatement meta={roadmap.meta} />

        {/* 3. Now / Next / Later explainer */}
        <HorizonExplainer roadmap={roadmap} />

        {/* 4. Recently delivered — immediately before the Now horizon */}
        <DeliveredSection section={roadmap.recentlyDelivered} />

        {/* 5. Now / Next / Later roadmap horizons */}
        <div id="roadmap" className="scroll-mt-28 bg-surface px-4 py-8 sm:px-6">
          <div className="mx-auto max-w-content">
            <h2 className="sr-only">
              {cy ? 'Y trywydd yn \u00f4l gorwel' : 'The roadmap by horizon'}
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

        {/* 6. Other work we have delivered this year — last roadmap content section */}
        <DeliveredSection section={roadmap.otherDelivered} />

        <AccessibilityStatement />
        <PrivacyNote />
      </main>

      <RoadmapFooter />
      <BackToTop />
    </>
  );
}
