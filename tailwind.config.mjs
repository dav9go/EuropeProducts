/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        helvetica: ["HelveticaNeueHeavy", ...defaultTheme.fontFamily.sans],
        helveticaLight: ["HelveticaNeueLight", ...defaultTheme.fontFamily.sans],
        helveticaMedium: [
          "HelveticaNeueMedium",
          ...defaultTheme.fontFamily.sans,
        ],
      },
    },
  },
  plugins: [],
};
