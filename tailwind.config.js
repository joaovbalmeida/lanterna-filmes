/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat'],
      },
      fontSize: {
        h1: ['3rem', '3.3rem'],
        h2: ['2.5rem', '2.75rem'],
        h3: ['2.25rem', '2.475rem'],
        body1: ['1.5rem', '2.1rem'],
        body2: ['1.125rem', '1.68rem'],
        body3: ['1rem', '1.5rem'],
        body4: ['0.875rem', '1.3125rem'],
      },
      colors: {
        black: {
          light: '#525252',
          DEFAULT: '#333333',
          dark: '#201D1D',
          darkest: '#000000',
        },
        green: {
          light: '#19989A',
          DEFAULT: '#007476',
          dark: '#0B4D4F',
        },
        blue: {
          light: '#1F5587',
          DEFAULT: '#022240',
          dark: '#05192C',
        },
        orange: {
          light: '#f49f64',
          DEFAULT: '#ff6425',
          dark: '#CE470F',
        },
        orange: {
          light: '#f49f64',
          DEFAULT: '#ff6425',
          dark: '#CE470F',
        },
        gray: {
          1: '#333333',
          2: '#4F4F4F',
          3: '#828282',
          4: '#BDBDBD',
          5: '#E0E0E0',
          6: '#F2F2F2',
        },
        danger: {
          'light-screen': '#CE470F',
          'dark-screen': '#FF6425',
        },
      },
      backgroundImage: {
        'gradient-green': 'linear-gradient(220.94deg, #007476 14.43%, #0B4D4F 85.28%)',
        'gradient-blue': 'linear-gradient(220.94deg, #022240 14.43%, #1F5587 85.28%)',
        'gradient-orange': 'linear-gradient(220.94deg, #F49164 14.43%, #FF6425 85.28%)',
        'gradient-dark': 'linear-gradient(220.94deg, #333333 14.43%, #525252 85.28%)',
        'gradient-transparent':
          'linear-gradient(180deg, rgba(51, 51, 51, 0.15) 0%, rgba(51, 51, 51, 0) 100%)',
      },
    },
  },
  plugins: [],
}
