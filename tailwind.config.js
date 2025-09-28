/** @type {import('tailwindcss').Config} */
export default {    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			primary: '#FF617C',
  			s_primary: '#FFCED6',
  			secondary: '#27213C',
  			light: '#FFFDFD',
  			darkGray: '#F2E6E6',
  			sidebar: '#27213c',
  			lightGray: '#E9EBF8',
  			lgray: '#B4B8C5',
  			lPink: '#ffeff2'
  		},
  		fontFamily: {
  			lato: 'Lato", sans-serif'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
  plugins: [],
}


