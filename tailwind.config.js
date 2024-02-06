/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        activeColor:"#F0BFAB",
        bgColor:"#f4eceb"
      },
    
    },
  },
  plugins: [],
}

