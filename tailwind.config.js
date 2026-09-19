/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#0f172a',
          800: '#1e293b',
          700: '#334155',
        },
        brand: {
          50: '#eff6ff',
          100: '#dbeafe',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
        },
        status: {
          todo: '#6b7280',
          inProgress: '#3b82f6',
          done: '#10b981',
        },
        priority: {
          low: '#10b981',
          medium: '#f59e0b',
          high: '#ef4444',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      screens: {
        'mobile': '375px',
        'tablet': '768px',
        'desktop': '1280px',
      }
    },
  },
  plugins: [],
}
