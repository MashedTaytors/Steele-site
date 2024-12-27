import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // Enable class-based dark mode
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}", //unused
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paleLilac: "var(--pale-lilac)",

        // tokens
        background: "var(--background)",
        foreground: "var(--foreground)",

        buttonBg: "var(--button-bg-color)",
        buttonText: "var(--button-text-color)",

        inputBorder: "var(input-border-color)",

        primaryText: "var(--primary-text)",
        secondaryText: "var(--secondary-text)",
        tertiaryText: "var(--tertiary-text)",
      },
      width: {
        'content': 'min(1200px, 90%)',
      },
      fontFamily: { 
        ibmPlexSerif: ['var(--font-ibm-plex-serif)', 'serif'],
        sourceCodePro: ['var(--font-source-code-pro)', 'monospace'],
      },
    },
  },
  plugins: [],
};
export default config;
