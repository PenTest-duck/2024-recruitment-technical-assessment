/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "unilectives-blue": "#1279F2",
        "search-border-blue": "#9CACE9",
        "star-purple": "#B789E5",
        "term-tag-blue": "#CCEBF6",
      }
    },
  },
  plugins: [],
}

