module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      dropShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        '4xl': [
            '0 35px 35px rgba(0, 0, 0, 0.25)',
            '0 45px 65px rgba(0, 0, 0, 0.15)'
        ]
      },
      animation: {
        backdrop: "backdrop 30s infinite"
      },
      keyframes: {
        backdrop: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)"
          },
          "25%": {
            transform: "translate(30px, -50px) scale(1.25)"
          },
          "50%": {
            transform: "translate(-35px, 35px) scale(.75)"
          },
          "75%": {
            transform: "translate(-15px, 15px) scale(.85)"
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)"
          }
        }
      }
    },
  },
  plugins: [],
}