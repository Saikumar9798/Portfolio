const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        dark: "#0B0C10",
        greydark: "#1F2833",
        grey: "#C5C6C7",
        lightblue: "rgb(237, 249, 254)",
        mediumblue: "rgb(166,225,250)",
        darkblue: "rgb(0, 28, 85)",
        linkedin: "#0e76a8",
        stackoverflow: "#F48024",
        github: "#6e5494",
        coursera: "rgb(0,86,210)",
        nptel: "rgba(255, 187, 0, .8)",
      },
      fontFamily: {
        Arizonia: "'Arizonia', cursive",
        Nunito: "'Nunito Sans', sans-serif",
      },
      fontSize: {
        18: "18px",
      },
      screens: {
        xs: { max: "599px" },
        ...defaultTheme.screens,
        sm: "600px",
        lg: "992px",
        // sm: "640px",
        // md: "768px",
        // lg: "992px",
        // xl: "1280px",
        // "2xl": "1536px",
      },
      width: {
        "3/10": "30%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
