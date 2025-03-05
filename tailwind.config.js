const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      content: {
        relative: true,
        transform: (content) => content.replace(/taos:/g, ''),
        files: ['./src/*.{html,js}'],
      },
      fontFamily: {
        'sans': ['var(--font-geist-sans)', 'sans-serif'],
        'mono': ['var(--font-geist-mono)', 'monospace'],
        'arsenal': ['var(--font-arsenal-sc)', 'sans-serif'],
      },
      animation: {
        gradient: "gradient 3s ease infinite",
        bgmove: 'bgmove 40s infinite',
      },
      keyframes: {
        keyframes: {        
          bgmove: {
             "0%": { backgroundPosition: "0 0" },
            "100%": { backgroundPosition: "0 100%" }
          },
        },
      },

    },
  },
  plugins: [
    function addVariablesForColors({ addBase, theme }) {
      let allColors = theme("colors");
      let newVars = Object.fromEntries(
        Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
      );

      addBase({
        ":root": newVars,
      });
    },
    require('taos/plugin')
  ],
  safelist: [
    '!duration-[0ms]',
    '!delay-[0ms]',
    'html.js :where([class*="taos:"]:not(.taos-init))'
  ]
};
