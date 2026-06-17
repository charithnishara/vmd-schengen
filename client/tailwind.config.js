/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: '#6B0F1A', light: '#8B1A2A', dark: '#4a0a12' },
        gold: { DEFAULT: '#B8860B', light: '#c9950e', pale: '#fdf8f0' },
        cream: { DEFAULT: '#F5E6C8', dark: '#f0e8d8', muted: '#e8e0d0' },
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', 'serif'],
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
