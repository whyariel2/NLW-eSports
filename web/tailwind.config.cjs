/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/**.tsx',
    './index.html',
  ],
  theme: {
    extend: {
      backgroundImage:{
        galaxy: "url('/background-galaxy.png')",
        'nlw-gradient': 'linear-gradient(89.86deg, #9572FC 30.08%, #43E7AD 51.94%, #E1D55D 19.57%)'

      }
    },
  },
  plugins: [],
}
