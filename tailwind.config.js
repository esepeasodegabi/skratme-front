/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#0a0a0f",
          900: "#0f0f17",
          800: "#16161f",
          700: "#1e1e2a",
          600: "#2a2a38",
        },
        brand: {
          50: "#f1f5ff",
          100: "#e3ebff",
          200: "#c4d1ff",
          300: "#9eb2ff",
          400: "#7b8fff",
          500: "#5b6cff",
          600: "#4348f0",
          700: "#3634c9",
          800: "#2c2da0",
          900: "#26297f",
        },
        mint: {
          400: "#3ee6a8",
          500: "#1fd493",
          600: "#12b57d",
        },
        amber: {
          400: "#ffb547",
          500: "#ff9f1c",
        },
      },
      fontFamily: {
        sans: [
          "Inter var",
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "sans-serif",
        ],
      },
      boxShadow: {
        soft: "0 1px 2px rgba(15,15,25,0.04), 0 8px 24px -8px rgba(15,15,25,0.08)",
        card: "0 1px 1px rgba(15,15,25,0.03), 0 12px 32px -12px rgba(15,15,25,0.12)",
        glow: "0 0 0 1px rgba(91,108,255,0.15), 0 8px 40px -8px rgba(91,108,255,0.35)",
      },
      backgroundImage: {
        "grid-light":
          "linear-gradient(to right, rgba(15,15,25,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,15,25,0.045) 1px, transparent 1px)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: 0, transform: "translateY(12px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        "scale-in": {
          "0%": { opacity: 0, transform: "scale(0.94)" },
          "100%": { opacity: 1, transform: "scale(1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-10px) rotate(2deg)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s cubic-bezier(0.16,1,0.3,1) both",
        "scale-in": "scale-in 0.35s cubic-bezier(0.16,1,0.3,1) both",
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
      },
    },
  },
  plugins: [],
};
