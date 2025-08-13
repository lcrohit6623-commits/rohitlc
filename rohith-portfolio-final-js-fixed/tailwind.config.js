
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
        screens: { "2xl": "1100px" }
      },
      boxShadow: {
        card: "0 4px 14px rgba(0,0,0,0.08)",
        cardHover: "0 12px 30px rgba(0,0,0,0.18)"
      }
    },
  },
  plugins: [],
}
