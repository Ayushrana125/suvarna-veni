/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#F8F5F0',
        kraft: '#C8A67E',
        gold: '#D8B26E',
        marigold: '#F2C94C',
        tissue: '#F7E5E3',
        ink: '#2B2B2B',
        cocoa: '#6F4E2D',
      },
      boxShadow: {
        soft: '0 18px 50px rgba(111, 78, 45, 0.12)',
        glow: '0 18px 45px rgba(216, 178, 110, 0.24)',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
