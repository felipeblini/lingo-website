export const state = () => ({
  language: 'pt-BR',
  whatsappNumber: '',
  whatsappNumber2: '',
  menu: {
    company: {
      'pt-BR': 'Empresa',
      'en-US': 'The Company'
    },
    'who-are-us': {
      'pt-BR': 'Quem somos',
      'en-US': 'About Us'
    },
    services: {
      'pt-BR': 'Serviços',
      'en-US': 'Services'
    },
    testimonials: {
      'pt-BR': 'Depoimentos',
      'en-US': 'Testimonials'
    },
    partners: {
      'pt-BR': 'Parceiros',
      'en-US': 'Partners'
    },
    contact: {
      'pt-BR': 'Contato',
      'en-US': 'Contact'
    }
  },
  navbarFixed: false,
  isModalOpen: false,
  isLoading: true,
  testimonialsSwiperReady: false
})

export const mutations = {
  toggleLanguage(state, payload) {
    state.language = payload
  },

  setNavbarFixed(state, payload) {
    state.navbarFixed = payload
  },

  setModalOpen(state, payload) {
    state.isModalOpen = payload
  },

  storeWhatsappNumber(state, payload) {
    state.whatsappNumber = payload.wp1
    state.whatsappNumber2 = payload.wp2
  },

  setLoading(state, payload) {
    state.isLoading = payload
  },

  setTestimonialsSwiperReady(state, payload) {
    state.testimonialsSwiperReady = payload
  },
}

export const actions = {
  async nuxtServerInit({ commit }, { app }) {
    const response = await app.$axios.get(`posts?slug=contato`)
    commit('storeWhatsappNumber', { wp1: response.data[0].acf.whatsapp_number, wp2: response.data[0].acf.whatsapp_number_2 })
  }
}
