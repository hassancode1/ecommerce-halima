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
        bgColor:"#EAE2DF",
        cute:"#A77866"
      },
      height: {
        '40':'40px',
        '507':'507px',
        '499':'499px',
        
      },
      width:{
        '465':'465px',
        '868':'868px',
        '412':'412px',
      },
         
      // top:{
      //   '24':'24px',
      // },
      // left:{
      //   '17':'17rem'
      // },
      
      screens: {
        'sm': {'max': '800px'},
        // => @media (min-width: 640px and max-width: 767px) { ... }
  
        'md': {'min': '800px', 'max':'1500px'},
        // => @media (min-width: 768px and max-width: 1023px) { ... }
       
        'lg': {'min': '1024px', 'max': '1279px'},
        // => @media (min-width: 1024px and max-width: 1279px) { ... }
  
        'xl': {'max': '600px'},
        // => @media (min-width: 1280px and max-width: 1535px) { ... }
  
        '2xl': {'min': '1536px'},
        // => @media (min-width: 1536px) { ... }
      },

    
    },
  },
  plugins: [],
}

