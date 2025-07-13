import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: "class", // ⚠️ dark modeni class orqali boshqarish
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

export default config
