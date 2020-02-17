module.exports = {
  theme: {
    extend: {},
    zIndex: {
      '0': 0,
     '10': 10,
     '20': 20,
     '30': 30,
     '40': 40,
     '50': 50,
     '25': 25,
     '50': 50,
     '75': 75,
     '100': 100,
      'auto': 'auto',
    },
    zIndex: {
          '-10': '-10',
          }
  },
  variants: {
      // ...
      zIndex: ['responsive'],
      zIndex: ['responsive', 'hover', 'focus'],
  },
  plugins: [],
}
