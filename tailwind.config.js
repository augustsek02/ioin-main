/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        noir: {
          50: '#f4f7fb',
          700: '#16202c',
          800: '#1a1a1a', 
          900: '#0a0a0a',  
        },
        aurora: {
          500: '#7dd3fc',
          600: '#60a5fa',
          700: '#34d399',
        },
        
      },
      animation: {
        'fade-in': 'fade-in 600ms ease-out both',
        'bg-pan': 'bg-pan 12s linear infinite',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: 0, transform: 'translateY(8px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        'bg-pan': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  safelist: [
    'bg-noir-900', 'bg-noir-800', 'bg-white',
    'text-white', 'text-noir-900',
  ],
  plugins: [],
}