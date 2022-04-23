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
        fadeOut: 'fadeOut ease-out 3s',
        fadeIn: 'fadeIn ease-out 3s'
      },
      keyframes: {
        fadeOut: {
          "0%": {opacity:  1},
          "100%": {opacity:  0}
        },
        fadeIn: {
          "0%": {opacity:  0},
          "100%": {opacity:  1}
        }
      },
      gridTemplateColumns: {
        'fit': 'repeat(auto-fit, minmax(~"min-content, 1fr"))'
      }
    },
  },
  plugins: [],
}