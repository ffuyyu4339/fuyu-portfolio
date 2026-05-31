import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}", "./content/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        surface: "var(--surface)",
        "surface-elevated": "var(--surface-elevated)",
        "text-main": "var(--text-main)",
        "text-muted": "var(--text-muted)",
        "text-subtle": "var(--text-subtle)",
        primary: "var(--primary)",
        "primary-strong": "var(--primary-strong)",
        accent: "var(--accent)",
      },
      fontFamily: {
        sans: ["var(--font-body)", "PingFang SC", "sans-serif"],
        heading: ["var(--font-headline)", "var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
    },
  },
};

export default config;
