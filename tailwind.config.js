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
      },
      backgroundImage: (theme) => ({
        pattern: 'url("https://img.freepik.com/free-vector/topographic-contour-lines-map-seamless-pattern_1284-52862.jpg?w=740&t=st=1704868608~exp=1704869208~hmac=61afdd3a60ad0db613c5ca90203933ba3c9ab248a981b82dd5177be53d650f51")'
      }),
    },
  },
  plugins: [],
}

