import type { Config } from "tailwindcss";
import tailwindAnimate from "tailwindcss-animate";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        head: ["'Clash Display'", "'Plus Jakarta Sans'", "sans-serif"],
        body: ["'Satoshi'", "'Plus Jakarta Sans'", "sans-serif"],
      },
      colors: {
        teal: { DEFAULT: "#00848e", dark: "#006970", light: "#d6eff1" },
        orange: { DEFAULT: "#ff6d00", dark: "#cc5700", light: "#ffeedd" },
        cream: "#fdf6f0",
        gray: { DEFAULT: "#222222", mid: "#555555", light: "#e2ddd7" },
      },
    },
  },
  plugins: [tailwindAnimate],
};

export default config;
