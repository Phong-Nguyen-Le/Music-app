/** @type {import('tailwindcss').Config} */

let withMT = require("@material-tailwind/react/utils/withMT");


module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'sm': {'min': '320px', 'max': '767px'},
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'md': {'min': '768px', 'max': '1023px'},
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'lg': {'min': '1024px', 'max': '1279px'},
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      'xl': {'min': '1280px'},
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

    },
    extend: {
      animation: {
        'spin-slow': 'spin 10s linear infinite',
      },
      colors: {
        'red-1': '#CC2121',
        'gray-1': '#eaeaea'
      },
      padding: {
        'pri-padding':  '0 15px'
      },
      margin: {
        'pri-marginTop': '80px 0 0 0',
        'pri-marginX': '0 15px',
        'pri-margin': '15px'
      },
      
    },
  },
  plugins: [],
});

