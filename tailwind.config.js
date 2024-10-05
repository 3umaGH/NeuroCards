/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    boxShadow: {
      innerDecoration: 'inset -11px -8px 78px -25px rgba(0,0,150,0.82)',
    },
    extend: {
      fontFamily: {
        karla: ['Karla', 'sans-serif'],
      },
      animation: {
        wiggle: 'wiggle 0.8s ease-in infinite',
        'fade-in-slow': 'fade_in 0.5s ease-in 1s forwards',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(15deg)' },
          '75%': { transform: 'rotate(-15deg)' },
        },
        fade_in: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
}
