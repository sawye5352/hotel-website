/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        gym: "url('/src/assets/images/facilities/gym.png')",
        "poolside-bar": "url('src/assets/images/facilities/poolside-bar.png')",
        spa: "url('src/assets/images/facilities/spa.png')",
        "swimming-pool":
          "url('src/assets/images/facilities/swimming-pool.png')",
        restaurant: "url('src/assets/images/facilities/restaurant.png')",
        laundary: "url('src/assets/images/facilities/laundary.png')",
      },
      colors: {
        primary_blue: "#14274A",
        primary_yellow: "#E0B973",
      },
      mixBlendMode: {
        multiply: "multiply",
      },
    },
  },
};
