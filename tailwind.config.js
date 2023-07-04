/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#070',
        },
      },
    },
  },
};
