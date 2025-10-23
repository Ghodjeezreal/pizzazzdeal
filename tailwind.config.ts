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
        primary: {
          50: '#fef7f7',
          100: '#fdeaea',
          200: '#fbd5d5',
          300: '#f8b4b4',
          400: '#f27474',
          500: '#e53e3e',
          600: '#d53f41',
          700: '#b02e31',
          800: '#922b2e',
          900: '#7a292c',
        },
      },
    },
  },
  plugins: [],
};
export default config;