/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Light Theme Color Palette (Blue-Violet)
        'light-bg': '#f8f7ff',
        'light-surface': '#f3f0ff',
        'light-text': '#2c1d5c',
        'light-text-secondary': '#5a4a7f',
        'light-text-tertiary': '#8b7aa3',
        'light-border': '#d4c5e8',
        'light-icon': '#4a3f7f',
        
        // Dark Theme Color Palette (Soft Neon Glow)
        'dark-bg': '#0f0e1a',
        'dark-surface': '#1a1829',
        'dark-text': '#e5d9ff',
        'dark-text-secondary': '#c4a8ff',
        'dark-text-tertiary': '#a099b3',
        'dark-border': '#4a3f7f',
        'dark-icon': '#d4a5ff',
        
        // Legacy theme structure
        light: {
          bg: '#f8f7ff',
          surface: '#f3f0ff',
          text: '#2e3440',
          accent: '#6366f1',
          primary: '#3b82f6',
          secondary: '#8b5cf6',
          heading: '#1e40af',
          paragraph: '#4f46e5',
          small: '#6b7280',
          border: '#e0e7ff',
          icon: '#3b82f6',
          shadow: 'rgba(59, 130, 246, 0.15)',
        },
        dark: {
          bg: '#0f172a',
          surface: '#1e293b',
          text: '#f1f5f9',
          accent: '#a78bfa',
          primary: '#a78bfa',
          secondary: '#e879f9',
          heading: '#e9d5ff',
          paragraph: '#d8b4fe',
          small: '#cbd5e1',
          border: '#6366f1',
          icon: '#c4b5fd',
          shadow: 'rgba(168, 85, 247, 0.25)',
        },
        primary: '#3b82f6',
        secondary: '#a855f7',
      },
      fontFamily: {
        sans: ['Segoe UI', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
        'slide-up': 'slideUp 0.6s ease-out',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}
