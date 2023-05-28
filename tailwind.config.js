/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'top-game': "url('https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/en_US/games/switch/l/lots-of-slots-switch/hero')"
      },
      backgroundSize: {
        'top-game-size': '100% 135%',
       
      }
    },
  },
  plugins: [],
}
