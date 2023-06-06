/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  future: {
    hoverOnlyWhenSupported: true
  },
  theme: {
    extend: {
      spacing: {
        '0.5': '0.5rem',
        '1': '1rem',
        '1.5': '1.5rem',
        '2': '2rem',
        '3': '3rem',
        '4': '4rem',
        '5': '5rem',
        '6': '6rem',
        '8': '8rem',
        '10': '10rem',
        '50': '50%',
        '85': '85%',
        '90': '90%'
      },
      fontSize: {
        xs: '1.4rem',
        sm: '1.6rem',
        md: '1.8rem',
        base: '2.4rem',
        lg: '3.2rem',
        xl: '4.2rem'
      },
      borderRadius: {
        sm: '0.6rem',
        md: '0.8rem',
        lg: '1rem'
      },
      colors: {
        black: 'hsl(0, 0%, 0%)',
        gray: 'hsl(0, 0%, 48%)',
        cyan: {
          DEFAULT: 'hsl(176, 50%, 47%)',
          100: 'hsl(176, 72%, 28%)'
        }
      },
      backgroundImage: {
        navMob: "url('./src/assets/hero-mobile.jpg')"
      },
      backgroundSize: {
        navMob: '100%'
      },
    },
  },
  plugins: [],
}

