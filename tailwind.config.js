/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--color-bg)",
        surface1: "var(--color-surface1)",
        surface2: "var(--color-surface2)",
        textLight: "var(--color-text-light)",
        textDark: "var(--color-text-dark)",
        textGray: "var(--color-text-gray)",
        accent1: "var(--color-accent1)",
        accent2: "var(--color-accent2)",
      },
    },
  },
  plugins: [],
};
