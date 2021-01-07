export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Roberto Caruso Ristrutturazioni',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Lavori di ristrutturazioni edilizie, recupero di facciate, restauro di opere antiche, dipinti e affreschi.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~/assets/css/general.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/svgicons.js'
  ],

  components: false,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [    
    '@nuxtjs/prismic',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [    
    '@nuxtjs/pwa',
    '@nuxtjs/svg'
  ],

  prismic: {
    endpoint: 'https://robertocaruso.cdn.prismic.io/api/v2',
    linkResolver: function(doc) {
      return '/'
    } 
  },
  
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    'html.minify' :{
      collapseBooleanAttributes: true,
      decodeEntities: true,
      minifyCSS: false,
      minifyJS: true,
      processConditionalComments: true,
      removeEmptyAttributes: true,
      removeRedundantAttributes: true,
      trimCustomFragments: true,
      useShortDoctype: true
    }
  }
  ,
  googleFonts: {
    families: {
      'Archivo Black': true
    }
  }
}
