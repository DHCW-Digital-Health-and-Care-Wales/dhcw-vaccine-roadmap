import logoImage from '../assets/dhcw-logo.png';
import { useLanguage } from '../lib/i18n';

const REPO_URL =
  'https://github.com/DHCW-Digital-Health-and-Care-Wales/PCMH-Roadmap';
const FEEDBACK_URL = `${REPO_URL}/issues/new?template=roadmap-feedback.md`;

/**
 * Footer (docs/BUILD_BRIEF.md Sections 4 and 9): feedback route, links to the
 * accessibility statement and privacy note, the licence and a link back to the
 * GitHub repository.
 */
export function RoadmapFooter() {
  const { lang } = useLanguage();
  const cy = lang === 'cy';

  const links = [
    {
      href: FEEDBACK_URL,
      label: cy ? 'Rhoi adborth' : 'Give feedback',
      external: true,
    },
    {
      href: '#accessibility',
      label: cy ? 'Datganiad hygyrchedd' : 'Accessibility statement',
      external: false,
    },
    {
      href: '#privacy',
      label: cy ? 'Preifatrwydd' : 'Privacy',
      external: false,
    },
    {
      href: `${REPO_URL}/blob/main/LICENSE`,
      label: cy ? 'Trwydded' : 'Licence',
      external: true,
    },
    {
      href: REPO_URL,
      label: cy ? 'Y gwaith ar GitHub' : 'This project on GitHub',
      external: true,
    },
  ];

  return (
    <footer className="bg-nhs-wales-blue px-4 py-10 text-white sm:px-6">
      <div className="mx-auto max-w-content">
        <img
          src={logoImage}
          alt="Digital Health and Care Wales"
          className="h-12 w-auto object-contain"
        />
        <nav
          aria-label={cy ? 'Dolenni troedyn' : 'Footer links'}
          className="mt-6"
        >
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm underline underline-offset-4 hover:no-underline"
                  {...(link.external
                    ? { target: '_blank', rel: 'noreferrer' }
                    : {})}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <p className="mt-6 text-sm text-white/80">
          {cy
            ? 'Digital Health and Care Wales / Iechyd a Gofal Digidol Cymru'
            : 'Digital Health and Care Wales'}
        </p>
      </div>
    </footer>
  );
}
