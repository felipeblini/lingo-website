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
