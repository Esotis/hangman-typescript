/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        repeat: "repeat(auto-fit, minmax(75px, 1fr))",
      },
      colors: {
        "blue-hsl": "hsl(200, 100%, 50%)",
      },
    },
  },
  plugins: [],
};
