import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import '~/node_modules/swiper/swiper.min.css'
 
export default {
  components: {
    Swiper,
    SwiperSlide
  },
  directives: {
    swiper: directive
  },
  async asyncData({ $prismic, error }) {
    const document = await $prismic.api.getSingle('hero')

    if (document) {
      return { 
        gallery : document.data.body[0].items.map(e => {
          return e
        }) 
      }
    } else {
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
  data() {
    return {
      banners: [ 
          {url: require('~/assets/images/lavoro.jpeg'), alt: 'La prima img'},          
          {url: require('~/assets/images/piastrellatura_2.jpeg'), alt: 'La prima img'},
          {url: require('~/assets/images/tetto.jpeg'), alt: 'La prima img'}
        ],
      swiperOptions: {
        autoplay: {
          delay: 2000,
        },
        pagination: {
          el: '.swiper-pagination'
        },
        breakpoints: {          
          // when window width is >= 640px
          1024: {
            centeredSlides: true,
            centeredSlidesBounds: true,
            slidesPerView: 2.5,
            spaceBetween: 20
          }
        }       
      }
    }
  }
}