/** @type {import('tailwindcss').Config} */

let withMT = require("@material-tailwind/react/utils/withMT");


module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    
    extend: {
      animation: {
        'spin-slow': 'spin 10s linear infinite',
      },
      colors: {
        'red-1': '#CC2121',
      },
      padding: {
        'pri-padding':  '0 15px'
      },
      margin: {
        'pri-marginTop': '80px 0 0 0',
        'pri-marginX': '0 15px'
      }
    },
  },
  plugins: [],
});

