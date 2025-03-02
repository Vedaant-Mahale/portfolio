/** @type {import('tailwindcss').Config} */
module.exports = {
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
    ],
  };
  