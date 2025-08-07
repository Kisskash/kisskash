export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./src/app/**/*.{js,ts,jsx,tsx}"] ,
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1200px",
      },
    },
    extend: {
      colors: {
        primary: "#b30a54",
        "primary-dark": "#8a083f",
        secondary: "#f7efe7",
        accent: "#333333",
      },
      fontFamily: {
        serif: ["Georgia", "Times New Roman", "serif"],
        sans: ["Segoe UI", "Tahoma", "Geneva", "Verdana", "sans-serif"],
      },
    },
  },
  plugins: [],
};
