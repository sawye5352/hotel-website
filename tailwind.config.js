/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary_blue: "#14274A",
        primary_yellow: "#E0B973",
      },
    },
  },
};
