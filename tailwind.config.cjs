/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        tiny: "15rem",
      },
      height: {
        "screen-footer": "calc(100vh - 35px)",
      },
    },
  },
  plugins: [],
};
