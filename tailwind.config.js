/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        "primary-hover": "var(--color-primary-hover)",
        "primary-light": "var(--color-primary-light)",
        accent: "var(--color-accent)",
        "accent-hover": "var(--color-accent-hover)",
        bg: "var(--color-bg)",
        "bg-secondary": "var(--color-bg-secondary)",
        "bg-tertiary": "var(--color-bg-tertiary)",
        "text-primary": "var(--color-text-primary)",
        "text-secondary": "var(--color-text-secondary)",
        "text-tertiary": "var(--color-text-tertiary)",
        "text-inverse": "var(--color-text-inverse)",
        border: "var(--color-border)",
        "border-light": "var(--color-border-light)",
        success: "var(--color-success)",
        error: "var(--color-error)",
      },
      fontFamily: {
        heading: ["var(--font-heading)"],
        body: ["var(--font-body)"],
      },
      fontSize: {
        hero: ["var(--text-hero)", { lineHeight: "1.1" }],
        h1: ["var(--text-h1)", { lineHeight: "1.2" }],
        h2: ["var(--text-h2)", { lineHeight: "1.25" }],
        h3: ["var(--text-h3)", { lineHeight: "1.3" }],
        body: ["var(--text-body)", { lineHeight: "1.6" }],
        small: ["var(--text-small)", { lineHeight: "1.5" }],
        caption: ["var(--text-caption)", { lineHeight: "1.4" }],
      },
      spacing: {
        section: "var(--space-section)",
        block: "var(--space-block)",
        element: "var(--space-element)",
        inline: "var(--space-inline)",
        tight: "var(--space-tight)",
      },
      borderRadius: {
        btn: "var(--btn-radius)",
        card: "var(--card-radius)",
        input: "var(--input-radius)",
      },
      boxShadow: {
        card: "var(--card-shadow)",
        "card-hover": "var(--card-shadow-hover)",
        header: "var(--header-shadow)",
      },
      maxWidth: {
        content: "var(--max-width-content)",
      },
      minHeight: {
        touch: "var(--btn-min-touch)",
      },
    },
  },
  plugins: [],
};
