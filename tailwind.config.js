/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: '#1C1917',
        paper: '#FBF9F5',
        'paper-alt': '#F2ECE1',
        stone: {
          DEFAULT: '#6B6459',
          soft: '#8C8577',
        },
        line: '#E7DFD1',
        ember: {
          DEFAULT: '#AE3B1C',
          dark: '#8A2E15',
          soft: '#F5E7DE',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '1240px',
      },
    },
  },
  plugins: [],
}
