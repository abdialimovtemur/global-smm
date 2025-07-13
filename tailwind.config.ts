import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: "class", // ⚠️ dark modeni class orqali boshqarish
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'slide-up': 'slide-up 0.6s ease-out forwards',
      },
    },
  },
  plugins: [],
}

export default config
