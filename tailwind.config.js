/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'bg-alpha',
    'bg-beta',
    'text-beta',
  ],
  theme: {
    extend: {
      colors: {
        alpha: '#363636',
        beta: '#248A61',
        tango: '#e3d9d1',
        zigma: '#9ac7b3',
      },
      fontFamily: {
        poppins: ['Poppins', 'system-ui', '-apple-system', 'sans-serif'],
        paytone: ['Paytone One', 'system-ui', '-apple-system', 'sans-serif'],
        inter: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        charm: ['Charm', 'cursive', 'system-ui', 'sans-serif'],
        oi: ['Oi', 'system-ui', '-apple-system', 'sans-serif'],
        barlow: ['"Barlow Condensed"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
// Force rebuild
