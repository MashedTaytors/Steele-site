import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // Enable class-based dark mode
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}", // Remove if unused
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fill: {
        'icon': 'var(--color-icon)',
        'icon-hover': 'var(--color-icon-hover)',
      },
      colors: {
        // Primitive Colors
        midnightIndigo: "var(--color-midnight-indigo)",
        slateGrey: "var(--color-slate-grey)",
        mutedPeriwinkle: "var(--color-muted-periwinkle)",
        lavenderGrey: "var(--color-lavender-grey)",
        softAmethyst: "var(--color-soft-amethyst)",
        paleLilac: "var(--color-pale-lilac)",
        mistyRose: "var(--color-misty-rose)",
        gunmetalPurple: "var(--color-gunmetal-purple)",

        // Tokens
        background: "var(--color-background)",
        foreground: "var(--color-foreground)",

        buttonBg: "var(--color-button-bg)",
        buttonText: "var(--color-button-text)",

        primaryText: "var(--color-primary-text)",
        secondaryText: "var(--color-secondary-text)",
        tertiaryText: "var(--color-tertiary-text)",

        success: "var(--color-success)",
        fail: "var(--color-fail)",
      },
      width: {
        content: "min(1200px, 90%)",
      },
      fontFamily: {
        ibmPlexSerif: ["var(--font-serif)", "serif"],
        sourceCodePro: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        'subtleRadialForeground': 'radial-gradient(circle, transparent 90%, var(--color-foreground) 5%)',

     },
    },
  },
  plugins: [],
};

export default config;
