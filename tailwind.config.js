/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      colors: {
        'bg': '#0a0a0a',
        'surface': '#1a1a1a',
        'text': '#f5f5f5',
        'muted': '#a3a3a3',
        'accent': '#d4af37',
      },
    },
  },
  plugins: [],
}