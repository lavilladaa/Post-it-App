/* eslint-disable */

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
    './pages/**/*.{html,js}',
    '*.{html,js}',
  ],
  theme: {
    minHeight: {
      260: '260px',
    },
    maxHeight: {
      260: '260px',
    },

    extend: {
      colors: {
        'blue-aqua': '#48CACF',
        'purple-count': '#7A056F',
      },
      fontFamily: {
        'leckerli-one': ['Leckerli One', 'cursive'],
        'handlee': ['handlee', 'cursive'],
        'chango': ['chango', 'cursive'],
      },
      rotate: {
        30: '30deg',
      },

      height: {
        70: '70px',
        85: '85px',
        290: '290px',
      },

      width: {
        85: '85px',
        290: '290px',
      },

      gridTemplateColumns: {
        290: ' repeat(auto-fit, 290px)',
      },

      backgroundImage: {
        'bin-full': "url('./components/assets/binFull.png')",
      },
    },
    plugins: [],
  },
};
