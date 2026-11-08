import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}", "./content/**/*.mdx"],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#eef3fa",
          100: "#d7e2f1",
          200: "#aec5e3",
          300: "#7fa0cd",
          400: "#4f7bb5",
          500: "#2f5c98",
          600: "#1f4579",
          700: "#16335c",
          800: "#0f2748",
          900: "#0a1c36",
          950: "#06122a",
        },
        brand: {
          50: "#ecfaf2",
          100: "#d0f3df",
          200: "#a3e6c3",
          300: "#6fd3a1",
          400: "#3dbb7e",
          500: "#1fa264",
          600: "#15834f",
          700: "#136842",
          800: "#135237",
          900: "#10442f",
        },
        sun: {
          50: "#fffbea",
          100: "#fff3c4",
          200: "#ffe58a",
          300: "#ffd54f",
          400: "#fcc419",
          500: "#f0ab00",
          600: "#c98500",
          700: "#9a6200",
        },
        paper: "#fafaf6",
      },
      fontFamily: {
        display: ["var(--font-jakarta)", "system-ui", "sans-serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(10,28,54,.06), 0 8px 24px -12px rgba(10,28,54,.18)",
      },
      typography: ({ theme }: { theme: (path: string) => string }) => ({
        DEFAULT: {
          css: {
            "--tw-prose-body": theme("colors.slate.700"),
            "--tw-prose-headings": theme("colors.navy.900"),
            "--tw-prose-links": theme("colors.navy.600"),
            "--tw-prose-bold": theme("colors.navy.900"),
            "--tw-prose-bullets": theme("colors.brand.500"),
            "--tw-prose-counters": theme("colors.navy.500"),
            "--tw-prose-quotes": theme("colors.navy.800"),
            "--tw-prose-quote-borders": theme("colors.sun.400"),
            maxWidth: "none",
            fontSize: "1.0625rem",
            lineHeight: "1.75",
            h2: { fontFamily: "var(--font-jakarta), system-ui, sans-serif", scrollMarginTop: "6rem" },
            h3: { fontFamily: "var(--font-jakarta), system-ui, sans-serif", scrollMarginTop: "6rem" },
            a: { textDecorationThickness: "2px", textUnderlineOffset: "3px" },
            "a:hover": { color: theme("colors.brand.700") },
          },
        },
      }),
    },
  },
  plugins: [typography],
};

export default config;
