/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'rich-black': '#0B0F0E',
        'neon-green': '#00FF7F',
        'emerald': '#12B981',
        'tinted-white': '#E6FFE6',
      },
      fontFamily: {
        'orbitron': ['Orbitron', 'sans-serif'],
      },
      animation: {
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite alternate',
      },
      keyframes: {
        'glow-pulse': {
          '0%': { filter: 'drop-shadow(0 0 5px #00FF7F)' },
          '100%': { filter: 'drop-shadow(0 0 20px #00FF7F)' },
        }
      }
    },
  },
  plugins: [],
}