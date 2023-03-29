/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        'dark-blue-1':'#0A558C',
        'dark-blue-2':'#186FAF',
        'blue-1': '#2680C2',
        'light-blue':'#B6E0FE',
        'lightest-blue':'#DCEEFB',
        'neutral-1': '#243B53',
        'neutral-2': '#486581',
        'neutral-3': '#BCCCDC',
        'teal-1':'#5FE3C0'
      },
      screens:{
        'md':'910px'
      }
    },
  },
  plugins: [require("tw-elements/dist/plugin"),
  require('flowbite/plugin')
],
}
