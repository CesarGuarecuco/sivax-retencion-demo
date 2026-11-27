/* Debe cargarse DESPUES de https://cdn.tailwindcss.com para que Tailwind CDN aplique darkMode y colores Sivax */
if (typeof tailwind !== 'undefined') {
  tailwind.config = {
    darkMode: 'class',
    theme: {
      extend: {
        colors: {
          sivax: {
            DEFAULT: '#2d1b8f',
            hover: '#231470',
            soft: '#ede9fe',
            tint: '#8b7cf6',
            lightbg: '#f6f7fa',
            darkbg: '#160a3a',
            darksurface: '#1e104b',
            darkelevated: '#26165c',
            darkrail: '#120831'
          }
        },
        fontFamily: {
          display: ['"Schibsted Grotesk"', 'system-ui', 'sans-serif'],
          sans: ['"Source Sans 3"', 'system-ui', 'sans-serif'],
          mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace']
        }
      }
    }
  };
}
