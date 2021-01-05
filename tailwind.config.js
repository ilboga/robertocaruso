module.exports = {
  theme: {
    extend: {
      colors: {
        'primary': '#7A001F',
        'on-primary': '#D9C187'
      },
      fontFamily: {
        sans: ['Archivo Black', 'Source Sans Pro', 'Arial', 'sans-serif']
      }
    }
  },
  plugins: [    
    require('tailwindcss-visuallyhidden')()    
  ],
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'pages/*.html',
      'layouts/*.html',      
      'nuxt.config.js'
    ]
  }  
};
