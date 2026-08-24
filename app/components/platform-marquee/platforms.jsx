// Simplified, representative marks for each streaming platform, rendered
// as flat single-color (currentColor) glyphs — not the official brand
// assets — so the UI works out of the box. Swap the `icon` render fn for
// an <img src="..." /> pointing at each platform's official brand-kit
// SVG/PNG before shipping to production — see the note in
// platform-marquee.jsx.

export const platforms = [
  {
    name: 'Spotify',
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="1.6" />
        <path
          d="M6.5 9.8c3.2-.9 7.4-.7 10.2 1"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M6.2 12.9c2.7-.7 6.2-.5 8.9.9"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M6 16c2.1-.5 4.9-.3 7 .8"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    name: 'Apple Music',
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <rect x="1" y="1" width="22" height="22" rx="6" stroke="currentColor" strokeWidth="1.6" />
        <path
          d="M15.5 6.2v8.6a2.6 2.6 0 1 1-1.4-2.3V9l-4.6 1v6a2.6 2.6 0 1 1-1.4-2.3V7.6l7.4-1.4z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    name: 'Amazon Music',
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="1.6" />
        <path
          d="M7 15.5c3.6 1.7 6.4 1.7 10 0"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          fill="none"
        />
        <path d="M15.5 15.2l1.8.5-.7 1.6z" fill="currentColor" />
        <path d="M9 7l6 5-6 5V7z" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: 'YouTube',
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <rect x="1" y="4.5" width="22" height="15" rx="5" stroke="currentColor" strokeWidth="1.6" />
        <path d="M10.5 9l5 3-5 3V9z" fill="currentColor" />
      </svg>
    ),
  },
];
