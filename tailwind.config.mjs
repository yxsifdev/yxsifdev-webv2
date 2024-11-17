/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: "Montserrat Variable, sans-serif",
        inter: "Inter Variable, sans-serif",
      },
      maxWidth: {
        "8xl": "88rem",
        "9xl": "96rem",
        "10xl": "104rem",
        custom: "120rem",
      },
      colors: {
        primary: "#202020",
        secondary: "#191919",
      },
    },
  },
  plugins: [],
};
