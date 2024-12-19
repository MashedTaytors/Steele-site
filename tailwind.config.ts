import type { Config } from "tailwindcss";

const config: Config = {
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
      fontFamily: {
        ibmPlexSerif: ['var(--font-ibm-plex-serif)', 'serif'], // Define the custom font family
        sourceCodePro: ['var(--font-source-code-pro)', 'monospace'], // Define the custom font family for Source Code Pro
      },
    },
  },
  plugins: [],
};
export default config;
