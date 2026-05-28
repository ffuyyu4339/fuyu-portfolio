import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}", "./content/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        surface: "var(--surface)",
        "surface-low": "var(--surface-low)",
        "surface-card": "var(--surface-card)",
        "surface-high": "var(--surface-high)",
        "text-main": "var(--text-main)",
        "text-muted": "var(--text-muted)",
        "text-subtle": "var(--text-subtle)",
        "border-muted": "var(--border-muted)",
        "border-soft": "var(--border-soft)",
        primary: "var(--primary)",
        "primary-strong": "var(--primary-strong)",
        secondary: "var(--secondary)",
        tertiary: "var(--tertiary)",
        "on-primary": "var(--on-primary)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Noto Sans SC", "sans-serif"],
        heading: ["var(--font-geist)", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
      },
      maxWidth: {
        container: "1280px",
      },
    },
  },
};

export default config;
