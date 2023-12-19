/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'title': '2.5rem', // Example custom font size
        'subTitle': '1.7rem', // Example custom font size
        'text': '1rem', // Example custom font size
      },
    },
  },
  plugins: [],
}