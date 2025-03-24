/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        "custom-gray":"#928dab",
        "steel-gray":"#1f1c2c",
        "hunter":"#fffcdc",
        "custom-green":"#14281D"
      },
      fontFamily:{
        'sans': ['Helvetica', 'Arial', 'sans-serif'],
        'circular':['Circular Std Bold'],
        'custom-font':['Circular Std Bold', 'Helvetica', 'Arial', 'sans-serif']
      }
    },
  },
  plugins: [],
}

