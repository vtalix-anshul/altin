/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: "#E74625",
        lightOrange: "#FDEDE9",
        lightGray: "#F5F5F5",
        darkGray: "#AEAEAE",
        black2: "#040505CC"

      },
    },
  },
  plugins: [],
}
