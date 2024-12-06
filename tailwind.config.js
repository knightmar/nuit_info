/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {

    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'perso-blue-100': '#9BCEE1',
        'perso-blue-300': '#51B2D7',
        'perso-blue-500': '#3F8CAF',
        'perso-blue-700': '#285D81',
        'perso-blue-900': '#1C5077',
        'perso-blue-950': '#183F5C',
      },
    },
  },
  plugins: [],
}

