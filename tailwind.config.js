const keepPreset = require("keep-react/preset");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/keep-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        display: [
          "Space Grotesk",
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
      colors: {
        ink: {
          950: "#0B0C10",
          900: "#101218",
          850: "#161821",
          800: "#1B1E27",
          700: "#23262F",
          600: "#2D3140",
        },
        brand: {
          50: "#FFFBEB",
          100: "#FEF3C7",
          200: "#FDE68A",
          300: "#FCD34D",
          400: "#FBBF24",
          500: "#F59E0B",
          600: "#D97706",
          700: "#B45309",
          800: "#92400E",
          900: "#78350F",
        },
        gold: "#F5C453",
        silver: "#D7DBE2",
        bronze: "#CD7F32",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "brand-gradient":
          "linear-gradient(135deg, #FBBF24 0%, #F97316 50%, #E11D48 100%)",
        "brand-gradient-soft":
          "linear-gradient(135deg, rgba(251,191,36,0.18) 0%, rgba(249,115,22,0.18) 50%, rgba(225,29,72,0.18) 100%)",
        mesh:
          "radial-gradient(at 20% 10%, rgba(245,158,11,0.16) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(249,115,22,0.16) 0px, transparent 50%), radial-gradient(at 0% 70%, rgba(225,29,72,0.12) 0px, transparent 50%), radial-gradient(at 80% 80%, rgba(16,185,129,0.10) 0px, transparent 50%)",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(255,255,255,0.06), 0 8px 30px rgba(245,158,11,0.20)",
        "glow-lg":
          "0 0 0 1px rgba(255,255,255,0.06), 0 24px 60px rgba(245,158,11,0.28)",
        soft: "0 8px 28px rgba(0,0,0,0.45)",
        modal: "0 32px 80px rgba(0,0,0,0.55), 0 8px 24px rgba(0,0,0,0.45)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        "pulse-glow": {
          "0%, 100%": {
            boxShadow:
              "0 0 0 0 rgba(245,158,11,0.45), 0 0 0 0 rgba(225,29,72,0.0)",
          },
          "50%": {
            boxShadow:
              "0 0 0 8px rgba(245,158,11,0.0), 0 0 24px 4px rgba(225,29,72,0.30)",
          },
        },
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
        "gradient-x": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.6s ease-out both",
        "fade-in": "fade-in 0.4s ease-out both",
        float: "float 4s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2.4s ease-in-out infinite",
        shimmer: "shimmer 1.6s linear infinite",
        "gradient-x": "gradient-x 8s ease infinite",
      },
    },
  },
  plugins: [],
  presets: [keepPreset],
};
