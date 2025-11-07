/** @type {import('tailwindcss').Config} */
export default {
  // Enable class-based dark mode (toggle by adding/removing the `dark` class on <html>)
  darkMode: 'class',

  // Tell Tailwind which files to scan for class names
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],

  theme: {
    extend: {},
  },

  plugins: [],
}
