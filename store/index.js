export const state = () => ({
  language: 'pt-BR',
  whatsappNumber: '',
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
  }
})

export const mutations = {
  toggleLanguage(state, payload) {
    state.language = payload
  },

  storeWhatsappNumber(state, payload) {
    state.whatsappNumber = payload
  }
}

export const actions = {
  async nuxtServerInit({ commit }, { app }) {
    const response = await app.$axios.get(`posts?slug=contato`)
    commit('storeWhatsappNumber', response.data[0].acf.whatsapp_number)
  }
}
