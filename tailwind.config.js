/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",          // فایل html اصلی
    "./src/**/*.{js,ts,jsx,tsx}" // همه فایل‌های js داخل src
  ],
  theme: {
    extend: {
      animation: {
        'gradient-x': 'gradient-x 8s ease infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}