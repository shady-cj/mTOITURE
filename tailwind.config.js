/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '360px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1300px',
      '2xl': '1536px',
    },
    extend: {
      backgroundImage: {
          "hero-bg": "linear-gradient(309.83deg, #EFEFFE 57.44%, #C0C6F0 100.76%)"
      },
      width: {
          "header": "calc(100% - 15rem)"
      }
    },
  },
  plugins: [],
}

