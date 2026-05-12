import type { Config } from "tailwindcss";

// Brand tokens. Update palette here (do not hardcode hex in components).
// Palette choice: deep blue primary + fresh green accent (eco / clean vibe).
// Documented in README. Designed so a future dark mode can flip these tokens.
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          // Deep blue primary scale
          50: "#eef4fb",
          100: "#d6e4f5",
          200: "#a9c3e7",
          300: "#7ba1d8",
          400: "#4d80c9",
          500: "#2762b3",
          600: "#1e4d8c",
          700: "#173d70",
          800: "#102a4d",
          900: "#0a1c34",
        },
        accent: {
          // Fresh green accent (clean / eco)
          50: "#ecfdf3",
          100: "#d1fadf",
          200: "#a7f0c3",
          300: "#6ce0a0",
          400: "#38c777",
          500: "#16a85c",
          600: "#0d8848",
          700: "#0c6a3a",
          800: "#0d5331",
          900: "#0a3f26",
        },
        ink: {
          50: "#f7f8fa",
          100: "#eef0f4",
          200: "#dde1e9",
          300: "#bcc2cf",
          400: "#8c94a6",
          500: "#5c6577",
          600: "#3f475a",
          700: "#2a3142",
          800: "#1a1f2c",
          900: "#0e121c",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-sans)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
      boxShadow: {
        soft: "0 6px 24px -8px rgb(15 23 42 / 0.10)",
        lift: "0 12px 36px -12px rgb(15 23 42 / 0.18)",
      },
      maxWidth: {
        prose: "65ch",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 400ms ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
