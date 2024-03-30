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
        cute:"#A77866",
        footerLight:'#EAE2DF',
        input:'#F0F1F2',
        footerDark:'#262020',
        Allright:'#9A9EA6',
        Desc:'#9F9F9F',
        star:'#FFC700',
        increment:'#F3F3F8',
        Cart:'#AAAAAA',

       
      },
      height: {
        '40':'40px',
        '507':'507px',
        '44':'44px',
        '281':'281px',
        '400':'400px',
        '370':'370px',
        '319':'319px',
        '395':'395px',
        '80':'80px',
      },
      width:{
        '510':'510px',
        '530':'530px',
        '412':'412px',
        '868':'868px',
        '280':'280px',
        '390':'390px',
        '680':'680px',
        '285':'285px',
        '200':'200px',
        '460':'460px',
        '715':'715px',
        '230':'230px',
      },
      
        screens: {
   
        'sm': {'max': '800px'},
        // => @media (min-width: 640px and max-width: 767px) { ... }
  
        'md': {'min': '800px', 'max':'1500px'},
        // => @media (min-width: 768px and max-width: 1023px) { ... }
       
        'lg': {'min': '1024px', 'max': '1279px'},
        // => @media (min-width: 1024px and max-width: 1279px) { ... }
  
        'xl': {'min': '800px'},
        // => @media (min-width: 1280px and max-width: 1535px) { ... }
  
        '2xl': {'min': '1536px'},
        // => @media (min-width: 1536px) { ... }
      },

    
    },
  },
  plugins: [],
}

