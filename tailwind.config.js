/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,tsx,jsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#212121",
        "light-gray": "#999797",
        "light-blue": "#09f",
      },
    },
  },
  plugins: [],
};
