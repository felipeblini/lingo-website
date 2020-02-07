import { API_URL } from './config'

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Lingo - Interpretação, tradução simultânea, transcrição, revisão e media training',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'Lingo Interpretação, tradução simultânea, transcrição, revisão e media training',
        name: 'description',
        content: 'Lingo website'
      }
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
  css: ['~assets/scss/app.scss', 'swiper/dist/css/swiper.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~/plugins/vue-touch', ssr: false },
    { src: '~/plugins/vue-smooth-scroll', ssr: false },
    { src: '~/plugins/vue-awesome-swipper.js', ssr: false },
    { src: '~/plugins/browser-check.js', ssr: false }
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
    '@nuxtjs/eslint-module',
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
    '@nuxtjs/style-resources',
    'nuxt-user-agent',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots'
  ],

  sitemap: {
    exclude: ['/not-supported']
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
  buildModules: [
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-157949543-1'
      }
    ]
  ],
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) { }
  }
}
