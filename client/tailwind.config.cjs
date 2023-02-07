/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto Flex', 'sans-serif'],
        playFair: ['Playfair Display', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
