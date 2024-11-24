/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flyonui/dist/js/*.js",
  ],
  theme: {
    container:{
      center:true,
      screens:{
        'sm': '600px',
      'md': '728px',
      'lg': '960px',
      'xl': '1220px',
      '2xl': '1280px',
          }
        },
    extend: {
      colors:{
        primary:"#2c3e50",
        second:"#1abc9c",
      }
    },
  },
  plugins: [
    require("flyonui"),
  ],
}

