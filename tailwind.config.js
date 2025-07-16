import defaultTheme from 'tailwindcss/defaultTheme';



module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
   content: [
        './src/**/*.{html,js}',
      ],
  theme: {
    extend: { fontFamily: {
       inter11: ['Inter', ...defaultTheme.fontFamily.sans],
    } },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
