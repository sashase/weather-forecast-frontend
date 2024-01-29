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
        }
      },
      animation: {
        "float-in": "floatIn 0.6s ease-in-out forwards"
      }
    }
  },
  plugins: []
}
