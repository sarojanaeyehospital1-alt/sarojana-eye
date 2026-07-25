import type { Config } from "tailwindcss";

/**
 * Brand tokens for Sarojana Eye Hospital.
 * Primary styling uses CSS @theme in app/globals.css (Tailwind v4).
 */
const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1A7A8A",
          dark: "#0F5A68",
          light: "#22A8BF",
        },
        teal: {
          50: "#F0FAFB",
          100: "#D4EBF0",
          200: "#A8D6E0",
          300: "#7BC2D1",
          400: "#4EADC1",
          500: "#22A8BF",
          600: "#1A7A8A",
          700: "#146070",
          800: "#0F5A68",
          900: "#0A3D47",
        },
        background: "#F8FFFE",
        foreground: "#1A2E35",
        muted: "#4A6670",
        border: "#D4EBF0",
        success: "#2ECC71",
        warning: "#F39C12",
        whatsapp: "#25D366",
      },
      fontFamily: {
        heading: ["var(--font-playfair)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        brand: "0 4px 20px rgba(26, 122, 138, 0.12)",
        "brand-lg": "0 8px 32px rgba(26, 122, 138, 0.18)",
        card: "0 2px 12px rgba(26, 122, 138, 0.08)",
        "card-hover": "0 8px 40px rgba(26, 122, 138, 0.18)",
        hero: "0 20px 60px rgba(26, 122, 138, 0.25)",
      },
    },
  },
  plugins: [],
};

export default config;
