 /* eslint-disable */ 

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
    './pages/**/*.{html,js}',
    '*.{html,js}'
  ],
  theme: {
    extend: {
      colors:{
        'blue-aqua':'#48CACF',
      },
      fontFamily: {
      'leckerli-one':["Leckerli One", 'cursive'],
    },
    rotate: {
      '30': '30deg',
    },
    
    height: {
      '70': '70px',
    }


  
  },
  plugins: [],
}}