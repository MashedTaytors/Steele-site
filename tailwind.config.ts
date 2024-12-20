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
        montserrat: ['Montserrat', 'serif'],
        metrophobic: ['Metrophobic', 'sans-serif'],
        scada: ['Scada', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
