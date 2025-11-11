/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primaryBg: '#2F3A30',
        lightBg: '#F7F3EC',
        cardBg: '#E4D9C7',
        textMain: '#1E221D',
        textMuted: '#6F736B',
        accentGold: '#C6AA76',
        accentRed: '#8F4B3A',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 18px 45px rgba(0,0,0,0.06)',
      },
    },
  },
  plugins: [],
}
