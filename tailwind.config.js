/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#1E1E1E',
          light: '#2B2B2B',
          dark: '#1E1E1E',
        },
        accent: {
          DEFAULT: '#FF6B00',
          light: '#F97316',
          dark: '#E65C00',
        },
        secondary: {
          DEFAULT: '#D2C6AE',
          light: '#E3D9C6',
          dark: '#C2B69E',
        },
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        'muted-foreground': 'hsl(var(--muted-foreground))',
        granite: {
          DEFAULT: '#2B2B2B',
          light: '#3A3A3A',
          medium: '#313131',
          dark: '#2B2B2B',
          darker: '#1E1E1E',
        }
      },
      maxWidth: {
        container: '80rem',
      },
      animation: {
        marquee: 'marquee var(--duration) linear infinite',
        'hero-rotate': 'heroBG 15s infinite',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(calc(-50% - var(--gap)/2))' },
        },
        heroBG: {
          '0%, 33%': {
            backgroundImage: "url('https://imgur.com/RJiytpz.jpg')",
          },
          '34%, 66%': {
            backgroundImage: "url('https://imgur.com/Yfg88CG.jpg')",
          },
          '67%, 100%': {
            backgroundImage: "url('https://imgur.com/JK828ck.jpg')",
          },
        },
      },
    },
  },
  plugins: [],
  safelist: [
    'bg-primary',
    'text-primary',
    'hover:bg-primary',
    'hover:text-primary',
    'bg-accent',
    'text-accent',
    'hover:bg-accent',
    'hover:text-accent',
    'bg-granite',
    'bg-granite-light',
    'bg-granite-medium',
    'bg-granite-dark',
    'bg-granite-darker'
  ]
}