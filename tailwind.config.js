/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontWeight:{
        '350': '350',
      },
      borderRadius:{
        '3px':'3px',
      },
      colors: {
        crimson: '#DC143C',
        firebrick: '#B22222',
        tomato: '#FF6347',
        indianred: '#CD5C5C',
        lightcoral: '#F08080',
        salmon: '#FA8072',
        'crimson-300': '#DC143C',
      },
      height: {
        '0.25':'0.5px',
      },
      width: {
        '9/10': '90%',
      },
    },
  },
  plugins: [],
}

