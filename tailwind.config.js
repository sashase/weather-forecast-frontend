/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        rubik: "Rubik"
      },
      colors: {
        background: "#EFEFEF"
      },
      boxShadow: {
        normal: "0 25px 50px -40px rgb(0 0 0 / 0.25);"
      },
      borderRadius: {
        primary: "45px"
      },
      keyframes: {
        floatIn: {
          "0%": {
            opacity: "0.1",
            transform: "translateY(-15%)"
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)"
          }
        },
        fadeIn: {
          "0%": {
            opacity: "0.1"
          },
          "100%": {
            opacity: "1"
          }
        }
      },
      animation: {
        "float-in": "floatIn 0.6s ease-in-out forwards",
        "fade-in": "fadeIn 0.2s ease-in-out"
      }
    }
  },
  plugins: []
}
