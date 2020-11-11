const axios = require('axios')
import { API_URL } from './config'

export default {
  target: 'static',
  /*
   ** Headers of the page
   */
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: '~/components/loading.vue',
  /*
   ** Global CSS
   */
  css: ['~assets/scss/app.scss', 'swiper/dist/css/swiper.css', '~assets/scss/vendors/v-tooltip.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~/plugins/vue-touch', ssr: false },
    { src: '~/plugins/vue-smooth-scroll', ssr: false },
    { src: '~/plugins/vue-awesome-swipper.js', ssr: false },
    { src: '~/plugins/nuxt-ready.js', ssr: false },
    { src: '~/plugins/v-tooltip.js', ssr: false },
    '~/plugins/vue-js-modal.js'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    [
      '@nuxtjs/axios',
      {
        baseURL: API_URL
      }
    ],
    [
      'nuxt-fontawesome',
      {
        imports: [
          {
            set: '@fortawesome/free-solid-svg-icons',
            icons: ['fas']
          },
          {
            set: '@fortawesome/free-brands-svg-icons',
            icons: ['fab']
          }
        ]
      }
    ],
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-157949543-1'
      }
    ],
    '@nuxtjs/style-resources',
    'nuxt-user-agent',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots'
  ],

  sitemap: {
    hostname: 'http://lingotraducao.com.br',
    exclude: ['/not-supported'],
    routes: async () => {
      const routes = [];
      routes.push('?lang=en-US');

      const { data: servicesDataPTBR } = await axios.get(`${API_URL}/posts?categories=8`);

      servicesDataPTBR.forEach(service => {
        routes.push({
          url: `?lang=pt-BR&c=${service.slug}`,
          lastmod: service.date
        })
      })

      const { data: servicesDataENUS } = await axios.get(`${API_URL}/posts?categories=9`);

      servicesDataENUS.forEach(service => {
        routes.push({
          url: `?lang=en-US&c=${service.slug}`,
          lastmod: service.date
        })
      })

      routes.push('?lang=pt-BR&c=conheca-a-lingo');
      routes.push('?lang=en-US&c=about-lingo');

      return routes
    }
  },

  robots: {
    UserAgent: '*',
    Disallow: () => '/not-supported'
  },

  styleResources: {
    scss: [
      'assets/scss/_typo.scss',
      'assets/scss/_variables.scss',
      'assets/scss/_mixins.scss'
    ]
  },

  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) { },
    babel: { compact: true }
  }
}
