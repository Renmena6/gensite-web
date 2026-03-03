/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Montserrat para títulos (más pesada y corporativa)
        montserrat: ['Montserrat', 'sans-serif'],
        // Raleway para textos de cuerpo o detalles (más estilizada)
        raleway: ['Raleway', 'sans-serif'],
      },
    },
  },
  plugins: [],
}