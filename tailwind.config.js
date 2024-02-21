/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main': '#037040',
        'pink': '#F72D84',
        'blue': '#5EBEC4',
        'grey': '#D9D9D9',
        'black':'#000000',
        'white':'#FFFFFF',
      }
    },
  },
  plugins: [],
}

