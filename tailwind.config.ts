import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      text: 'rgb(var(--text-color) / <alpha-value>)',
      bg: 'rgb(var(--bg-color) / <alpha-value>)',
    }
  },
  plugins: [],
};
export default config;
