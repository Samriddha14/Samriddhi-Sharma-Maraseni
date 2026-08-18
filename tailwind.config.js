/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#faf8f5',
        surface: '#ffffff',
        text: '#1f2933',
        'text-muted': '#6b7280',
        accent: '#1e3a8a',
        'accent-hover': '#2563eb',
        border: '#d4d8df',
        'border-strong': '#bcc3d1',
        grid: '#e3e8ef',
      },
      fontFamily: {
        heading: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        'screen-xl': '1200px',
      },
    },
  },
  plugins: [],
}
