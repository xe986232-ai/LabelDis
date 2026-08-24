// Simplified, representative marks for each streaming platform.
// These are stylised glyphs (not the official brand assets) so the UI
// works out of the box. Swap the `icon` render fn for an <img src="..." />
// pointing at each platform's official brand-kit SVG before shipping to
// production — see the note in platform-marquee.jsx.

export const platforms = [
  {
    name: 'Spotify',
    color: '#1DB954',
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="11" fill="currentColor" />
        <path
          d="M6.5 9.8c3.2-.9 7.4-.7 10.2 1"
          stroke="#0b0b0b"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M6.2 12.9c2.7-.7 6.2-.5 8.9.9"
          stroke="#0b0b0b"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M6 16c2.1-.5 4.9-.3 7 .8"
          stroke="#0b0b0b"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    name: 'Apple Music',
    color: '#FA243C',
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <rect x="1" y="1" width="22" height="22" rx="6" fill="currentColor" />
        <path
          d="M15.5 6.2v8.6a2.6 2.6 0 1 1-1.4-2.3V9l-4.6 1v6a2.6 2.6 0 1 1-1.4-2.3V7.6l7.4-1.4z"
          fill="#fff"
        />
      </svg>
    ),
  },
  {
    name: 'YouTube Music',
    color: '#FF0000',
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="11" fill="currentColor" />
        <circle cx="12" cy="12" r="6.4" fill="#fff" />
        <circle cx="12" cy="12" r="1.9" fill="currentColor" />
        <path d="M10.6 9.6l3.4 2.4-3.4 2.4z" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: 'Amazon Music',
    color: '#00A8E1',
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="11" fill="currentColor" />
        <path
          d="M7 15.5c3.6 1.7 6.4 1.7 10 0"
          stroke="#0b0b0b"
          strokeWidth="1.6"
          strokeLinecap="round"
          fill="none"
        />
        <path d="M15.5 15.2l1.8.5-.7 1.6z" fill="#0b0b0b" />
        <path d="M9 7l6 5-6 5V7z" fill="#0b0b0b" />
      </svg>
    ),
  },
  {
    name: 'TikTok',
    color: '#25F4EE',
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <rect x="1" y="1" width="22" height="22" rx="6" fill="#111" />
        <path
          d="M14.6 5.5c.4 1.7 1.6 2.9 3.4 3.1v2.3c-1.2 0-2.3-.4-3.4-1.1v4.9a4.4 4.4 0 1 1-4.4-4.4c.2 0 .4 0 .6.03v2.3a2.1 2.1 0 1 0 1.5 2v-9.1h2.3z"
          fill="#25F4EE"
        />
        <path
          d="M14.9 5.5c.4 1.7 1.6 2.9 3.4 3.1v2.3c-1.2 0-2.3-.4-3.4-1.1v4.9a4.4 4.4 0 1 1-4.4-4.4c.2 0 .4 0 .6.03v2.3a2.1 2.1 0 1 0 1.5 2V5.5h2.3z"
          fill="#FE2C55"
          opacity="0.85"
        />
      </svg>
    ),
  },
  {
    name: 'Deezer',
    color: '#A238FF',
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <rect x="1" y="1" width="22" height="22" rx="6" fill="currentColor" />
        {[6, 10.4, 14.8].map((x, i) => (
          <rect key={x} x={x} y={14 - i * 1.6} width="3.2" height={4 + i * 1.6} rx="0.6" fill="#fff" />
        ))}
      </svg>
    ),
  },
  {
    name: 'TIDAL',
    color: '#000000',
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="11" fill="currentColor" />
        {[[7, 9], [12, 9], [9.5, 6.5], [14.5, 6.5]].map(([x, y], i) => (
          <rect key={i} x={x - 1.4} y={y - 1.4} width="2.8" height="2.8" fill="#fff" transform={`rotate(45 ${x} ${y})`} />
        ))}
      </svg>
    ),
  },
  {
    name: 'SoundCloud',
    color: '#FF5500',
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <rect x="1" y="1" width="22" height="22" rx="6" fill="currentColor" />
        {[6, 8, 10, 12, 14, 16, 18].map((x, i) => (
          <rect
            key={x}
            x={x}
            y={16 - (i % 4) * 2 - 3}
            width="1.4"
            height={7 + (i % 4) * 2}
            rx="0.7"
            fill="#fff"
          />
        ))}
      </svg>
    ),
  },
  {
    name: 'Shazam',
    color: '#3B82F6',
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="11" fill="currentColor" />
        <path
          d="M10 7c-2 0-3.4 1.2-3.4 2.9 0 3.6 5.6 2.7 5.6 5 0 .8-.7 1.3-1.8 1.3-1.2 0-2.3-.6-3-1.5l-1.5 1.7C6.9 17.8 8.4 18.7 10.3 18.7c2.1 0 3.6-1.2 3.6-3 0-3.7-5.6-2.8-5.6-5 0-.7.6-1.2 1.6-1.2 1 0 1.9.5 2.6 1.2l1.4-1.7C13 7.7 11.6 7 10 7z"
          fill="#fff"
        />
        <path
          d="M14.2 8.9c1.7 0 2.9 1 2.9 2.4 0 3-4.7 2.3-4.7 4.2 0 .6.6 1 1.5 1 1 0 1.9-.5 2.5-1.2l1.3 1.5c-.9 1-2.3 1.6-3.9 1.6-1.8 0-3.1-1-3.1-2.5 0-3.1 4.7-2.4 4.7-4.2 0-.5-.5-.9-1.3-.9-.8 0-1.6.4-2.1 1l-1.3-1.5c.9-.9 2.1-1.4 3.5-1.4z"
          fill="#fff"
          opacity="0"
        />
      </svg>
    ),
  },
  {
    name: 'iHeartRadio',
    color: '#C6002B',
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="11" fill="currentColor" />
        <path
          d="M12 17.5l-4.7-4.7a3 3 0 0 1 4.2-4.2l.5.5.5-.5a3 3 0 0 1 4.2 4.2L12 17.5z"
          fill="#fff"
        />
      </svg>
    ),
  },
  {
    name: 'Pandora',
    color: '#3668FF',
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="11" fill="currentColor" />
        <path
          d="M9.5 6.5h3.6c2.7 0 4.7 2 4.7 4.6 0 2.3-1.6 4.1-3.8 4.5l3 5.4h-2.7l-2.7-5H12v5H9.5v-14.5zM12 13.4h1c1.3 0 2.2-.9 2.2-2.2 0-1.2-.9-2.1-2.2-2.1h-1v4.3z"
          fill="#fff"
        />
      </svg>
    ),
  },
  {
    name: 'Instagram / Reels',
    color: '#E1306C',
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <rect x="1" y="1" width="22" height="22" rx="6" fill="currentColor" />
        <rect x="6" y="6" width="12" height="12" rx="3.5" stroke="#fff" strokeWidth="1.6" fill="none" />
        <circle cx="12" cy="12" r="3" stroke="#fff" strokeWidth="1.6" fill="none" />
        <circle cx="16.3" cy="7.7" r="1" fill="#fff" />
      </svg>
    ),
  },
];
