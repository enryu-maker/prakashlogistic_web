/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily : {
        Poppins : 'Poppins'
      },
      colors : {
        primary : "#FF4F00",
        navy :"#090C22"
      }
    },
  },
  plugins: [    require('daisyui'),
  ],
})

