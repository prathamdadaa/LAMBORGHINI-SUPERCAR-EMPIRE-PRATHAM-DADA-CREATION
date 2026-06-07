/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderWidth: {
        '3': '3px',
      },
      backgroundImage: {
        'radial-glow': 'radial-gradient(circle at 20% 80%, rgba(255,102,0,0.2) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,215,0,0.2) 0%, transparent 50%)',
      }
    },
  },
  plugins: [],
}
