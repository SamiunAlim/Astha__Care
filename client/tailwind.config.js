/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f7ff',
          100: '#e0effe',
          200: '#bae0fd',
          300: '#7ccbfd',
          400: '#36b3fa',
          500: '#0c9cee',
          600: '#027fcf',
          700: '#0467a8',
          800: '#09558a',
          900: '#0d4872',
        },
        surface: '#f4f6f8',
        danger: '#dc2626',
        success: '#16a34a',
        warning: '#f59e0b',
      }
    },
  },
  plugins: [],
}
