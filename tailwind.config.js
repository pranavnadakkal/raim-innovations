/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
      },
      colors: {
        navy: {
          950: '#060D1F',
          900: '#0A1628',
          800: '#0F2040',
          700: '#152B55',
          600: '#1E3A6E',
        },
        steel: {
          300: '#A8BBCC',
          400: '#7998B5',
          500: '#4E7499',
        },
        gold: {
          300: '#F0C97A',
          400: '#E5AE40',
          500: '#C9901A',
        },
        accent: {
          400: '#3B82F6',
          500: '#2563EB',
          600: '#1D4ED8',
        },
      },
      animation: {
        'float': 'float 7s ease-in-out infinite',
        'float-slow': 'float 10s ease-in-out infinite',
        'spin-slow': 'spin 22s linear infinite',
        'spin-slower': 'spin 38s linear infinite reverse',
        'ticker': 'ticker 35s linear infinite',
        'orb-drift-1': 'orbDrift1 18s ease-in-out infinite',
        'orb-drift-2': 'orbDrift2 22s ease-in-out infinite',
        'orb-drift-3': 'orbDrift3 16s ease-in-out infinite',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'pulse-ring': 'pulseRing 2.5s ease-out infinite',
        'gradient-shift': 'gradientShift 8s ease infinite',
        'data-flow': 'dataFlow 3s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        orbDrift1: {
          '0%, 100%': { transform: 'translate(0px, 0px)' },
          '33%': { transform: 'translate(60px, -40px)' },
          '66%': { transform: 'translate(-30px, 50px)' },
        },
        orbDrift2: {
          '0%, 100%': { transform: 'translate(0px, 0px)' },
          '50%': { transform: 'translate(-80px, 30px)' },
        },
        orbDrift3: {
          '0%, 100%': { transform: 'translate(0px, 0px)' },
          '40%': { transform: 'translate(40px, -60px)' },
          '80%': { transform: 'translate(-50px, 20px)' },
        },
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        pulseRing: {
          '0%': { transform: 'scale(1)', opacity: '0.6' },
          '100%': { transform: 'scale(1.8)', opacity: '0' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        dataFlow: {
          '0%': { strokeDashoffset: '100' },
          '100%': { strokeDashoffset: '0' },
        },
      },
    },
  },
  plugins: [],
}
