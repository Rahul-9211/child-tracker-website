/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: 'var(--primary-light)',
          DEFAULT: 'var(--primary)',
          dark: 'var(--primary-dark)',
        },
        secondary: {
          light: 'var(--secondary-light)',
          DEFAULT: 'var(--secondary)',
          dark: 'var(--secondary-dark)',
        }
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' }
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' }
        },
        blink: {
          'from, to': { opacity: '1' },
          '50%': { opacity: '0' }
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        fadeIn: 'fadeIn 0.2s ease-out forwards',
        slideIn: 'slideIn 0.3s ease-out forwards',
        blink: 'blink 0.75s step-end infinite',
        marquee: 'marquee 40s linear infinite',
        marquee2: 'marquee2 40s linear infinite',
      },
      fontFamily: {
        sans: ['"Inter Variable"', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
        clarendon: ['"Clarendon Graphic"', 'Georgia', 'sans-serif'],
        rebond: ['"ES Rebond Grotesque"', 'sans-serif'],
      },
    }
  },
  plugins: [],
}; 