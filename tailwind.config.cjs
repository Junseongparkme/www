/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,md,mdx,ts,tsx}"],
  plugins: [require("@tailwindcss/typography")],
  theme: {
    colors: {
      black: "#121212",
      white: "#fff",
    },
    screens: {
      mobile: "540px",
    },
    extend: {
      keyframes: {
        "fade-in": {
          from: {
            opacity: 0,
          },
          "50%": {
            opacity: 0.5,
          },
          to: {
            opacity: 1,
          },
        },
      },
    },
  },
};
