/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"Space Mono"', 'Courier New', 'monospace'],
      },
      colors: {
        terminal: {
          green: '#4ade80',
          dimgreen: '#22c55e',
          dark: '#080c08',
          panel: '#0d1a0d',
          border: '#1a3a1a',
          amber: '#fbbf24',
          red: '#ef4444',
          gray: '#4b5563',
        },
      },

      boxShadow: {
        terminal: '0 0 10px rgba(74, 222, 128, 0.3), inset 0 0 10px rgba(74, 222, 128, 0.05)',
        'terminal-lg': '0 0 20px rgba(74, 222, 128, 0.4), inset 0 0 20px rgba(74, 222, 128, 0.05)',
        amber: '0 0 10px rgba(251, 191, 36, 0.3)',
      },
    },
  },
  plugins: [],
}
