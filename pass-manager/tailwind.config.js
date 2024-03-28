/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-secondary": "#fcaaffde", // Your custom primary color
        "dark-secondary": "#3d003e", // Your custom secondary color
        "light-primary": "#f279ff", // Your custom secondary color
        "dark-primary": "#3e002e", // Your custom secondary color
        "light-tertiary": "#b800cb", // Your custom secondary color
        "dark-tertiary": "#940071" // Your custom secondary color
      },
    },
  },

  plugins: [],
  // other configurations
};
