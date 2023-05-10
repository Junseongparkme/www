/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,md,mdx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      mobile: "360px",
      tablet: "768px",
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
