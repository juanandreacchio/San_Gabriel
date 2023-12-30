/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      height:{
        altura_pagina_md: '88vh',
        altura_navbar_md: '12vh'
      },
      fontFamily: {
        lobster: ["Lobster", "cursive"],
        manrope: ['Manrope']
      },
      backgroundImage: {
        back1: "url('/src/assets/back1.jpg')",
        back2: "url('/src/assets/hero/pexels-chan-walrus-941861.jpg')",
        backHero1: "url('/src/assets/hero1.jpg')",
      },
      colors:{
        purple:{
          header: '#413079',
          titles: '#453852'
        }
      },
      borderRadius:{
        cincuenta: '50px'
      }
    },
  },
  plugins: ["flowbite/plugin"],
};
