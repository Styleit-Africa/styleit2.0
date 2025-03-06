/** @type {import('tailwindcss').Config} */
export default {    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		colors: {
			primary:'#FF617C',
			secondary:'#27213C',
			light:'#FFFDFD',
			darkGray:'#F2E6E6',
  		},
  		fontFamily: {
  			lato: '"Lato", sans-serif'
  		},
  	}
  },
  plugins: [require("tailwindcss-animate")],
  plugins: [],
}


