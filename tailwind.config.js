/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-purple':
          'linear-gradient(180deg, rgba(162, 89, 255, 0) 0%, rgb(162, 89, 255) 100%)',
      },
      colors: {
        purple: '#a259ff',
        customgray: '#3b3b3b',
        gray2B: '#2B2B2B',
        footer: '#cccccc',
      },
      fontFamily: {
        work: ['Work Sans', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
      },
    },
  },
  plugins: [],
};
