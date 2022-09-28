/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        black: {
          DEFAULT: '#040505',
          light: 'rgba(163, 162, 170,0.1)',
        },
      },
    },
  },
  plugins: [],
};
