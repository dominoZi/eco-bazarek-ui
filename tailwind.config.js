/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bazarek-yellow-main": "var(--bazarek-yellow-main)",
        "bazarek-brown-dark": "var(--bazarek-brown-dark)",
        "bazarek-green-main": "var(--bazarek-green-main)",
      },
    },
  },
  plugins: [],
};
