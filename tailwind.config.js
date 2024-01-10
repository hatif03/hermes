/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        myBlue: '#0A32B3',
        myPink: '#BD365D',
      }
    },
  },
  plugins: [],
}

