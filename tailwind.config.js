/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.css'],
  theme: {
    extend: {
      animation: {
        spin: 'spin 30s linear infinite', // Adjust the duration as needed
      },
      borderRadius: {
        'tl-20': '20px',
        'br-20': '20px',
    },
    boxShadow: {
      'custom-inner': 'inset 0 4px 6px rgba(0, 0, 0, 0.1), inset 0 -2px 4px rgba(0, 0, 0, 0.06)',
    },
      keyframes: {
        spin: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
};
