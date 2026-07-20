/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // DHCW brand palette (docs/BUILD_BRIEF.md Section 3).
        navy: '#1B294A',
        'dhcw-blue': '#12A3C9',
        'nhs-wales-blue': '#325083',
        yellow: '#F8CA4D',
        // UI tokens lifted from the Figma Make export so look and feel match
        // the design (figma-make-export/App.tsx and theme.css).
        heading: '#1B365D', // section and card headings
        action: '#005AA8', // interactive accents and active states
        // Neutral scale for text, borders and backgrounds.
        ink: {
          900: '#212B32', // body text (from Figma)
          700: '#3A4453',
          500: '#5A6675',
          300: '#9AA4B2',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          subtle: '#F0F4F5', // section backgrounds (from Figma)
          muted: '#E8EDF3',
        },
        border: {
          DEFAULT: '#D8DDE0', // card and panel borders (from Figma)
          strong: '#B6C0CD',
        },
      },
      fontFamily: {
        // DHCW digital interface font is Roboto, self-hosted via @fontsource
        // (docs/BUILD_BRIEF.md Sections 3 and 9), with a system fallback.
        sans: [
          'Roboto',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
      borderRadius: {
        // Figma cards and panels use an 8px radius.
        card: '0.5rem',
      },
      maxWidth: {
        // Figma content container is max-w-7xl (80rem).
        content: '80rem',
      },
    },
  },
  plugins: [],
};
