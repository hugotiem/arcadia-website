import type { Config } from "tailwindcss";

export default {
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
      },
      fontFamily: {
        "mainson-neue-extended": ['var(--font-mainson-neue-extended)'],
        "minion-pro": ['var(--font-minion-pro)'],
      },
    },
  },
  plugins: [],
} satisfies Config;
