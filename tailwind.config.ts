import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // Enable class-based dark mode
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        primaryText: "var(--primary-text)",
        secondaryText: "var(--secondary-text)",
        tertiaryText: "var(--tertiary-text)",
      },
      width: {
        'content': 'min(1200px, 90%)',
      },
      // TODO: fix fonts
      fontFamily: { 
        ibmPlexSerif: ['"IBM Plex Serif"', "serif"], // Use IBM Plex Serif
        sourceCodePro: ['"Source Code Pro"', "monospace"], // Use Source Code Pro
      },
    },
  },
  plugins: [],
};
export default config;
