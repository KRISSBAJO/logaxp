/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      height: {
        '128': '32rem',  // Assuming 1rem = 16px, 32rem would be 512px
        '143': '35.75rem', // 35.75rem would be 572px
        '155': '38.75rem', // 38.75rem would be 620px
      },
      colors: {
        'gray-1': '#E8EAE9',
        'gray-2': '#BBBCBC',
        'custom-dark': '#2B2B2B',
        'custom-light': '#4B4B4A',
      }
    },
  },
  plugins: [],
}
