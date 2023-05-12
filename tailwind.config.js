/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Inter", "Helvetica", "Arial", "sans-serif"],
      serif: ["Merriweather", "Georgia", "serif"],
      mono: ["Inconsolata", "monospace"],
    },
    extend: {},
    // ... other theme settings ...
  },
  plugins: [],
};
