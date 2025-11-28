/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: {
          900: "#09090b", // Deepest black
          800: "#0a0a0a", // Background
          700: "#121212", // Surface
          600: "#1f1f22", // Secondary Surface
        },
        primary: {
          DEFAULT: "#00f2ea", // Neon Teal
          glow: "rgba(0, 242, 234, 0.5)",
        },
        secondary: {
          DEFAULT: "#ff00ff", // Neon Purple
          glow: "rgba(255, 0, 255, 0.5)",
        },
        glass: {
          100: "rgba(255, 255, 255, 0.05)",
          200: "rgba(255, 255, 255, 0.1)",
          300: "rgba(255, 255, 255, 0.15)",
        },
        border: "#2a2a2a",
      },
      boxShadow: {
        "neon-teal":
          "0 0 10px rgba(0, 242, 234, 0.5), 0 0 20px rgba(0, 242, 234, 0.3)",
        "neon-purple":
          "0 0 10px rgba(255, 0, 255, 0.5), 0 0 20px rgba(255, 0, 255, 0.3)",
        glass: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-gradient": "linear-gradient(135deg, #0a0a0a 0%, #121212 100%)",
      },
    },
  },
  plugins: [],
};
