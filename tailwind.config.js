const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  theme: {
    extend: {
      colors: {
        'primary': '#7A001F',
        'on-primary': '#D9C187'
      },
      fontFamily: {
        sans: ["Archivo Black", ...defaultTheme.fontFamily.sans]
      }
    }
  }  
};
