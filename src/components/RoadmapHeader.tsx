import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logoImage from '../assets/dhcw-logo.png';
import { useLanguage } from '../lib/i18n';
import type { Localised } from '../data/roadmap';
import { LanguageToggle } from './LanguageToggle';

const NAV_LINKS: { href: string; label: Localised }[] = [
  {
    href: '#about',
    label: { cy: 'Am y trywydd hwn', en: 'About this roadmap' },
  },
  { href: '#roadmap', label: { cy: 'Y trywydd', en: 'The roadmap' } },
];

/**
 * Fixed brand header (docs/BUILD_BRIEF.md Section 4), matching the Figma Make
 * design: NHS Wales Blue bar with the DHCW logo, in-page navigation and the
 * language toggle. Collapses to a menu button on narrow screens.
 */
export function RoadmapHeader() {
  const { tr } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-nhs-wales-blue text-white shadow-md">
      <div className="mx-auto flex max-w-content items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <a
          href="#top"
          className="flex items-center"
          aria-label="Digital Health and Care Wales home"
        >
          <img
            src={logoImage}
            alt="Digital Health and Care Wales"
            className="h-12 w-auto object-contain sm:h-16"
          />
        </a>

        <div className="flex items-center gap-3">
          <nav aria-label="Roadmap sections" className="hidden md:block">
            <ul className="flex items-center gap-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="rounded px-3 py-2 text-sm font-medium transition-colors hover:bg-white hover:text-nhs-wales-blue"
                  >
                    {tr(link.label)}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <LanguageToggle />

          <button
            type="button"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav"
            className="rounded p-2 transition-colors hover:bg-white/15 md:hidden"
          >
            <span className="sr-only">
              {mobileMenuOpen ? 'Close menu' : 'Open menu'}
            </span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <nav
          id="mobile-nav"
          aria-label="Roadmap sections"
          className="border-t border-white/20 px-4 pb-4 md:hidden"
        >
          <ul className="flex flex-col gap-1 pt-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block rounded px-3 py-2 font-medium transition-colors hover:bg-white hover:text-nhs-wales-blue"
                >
                  {tr(link.label)}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
