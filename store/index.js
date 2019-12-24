export const state = () => ({
  language: 'pt-BR',
  whatsappNumber: ''
})

export const mutations = {
  toggleLanguage(state, payload) {
    state.language = payload
  },

  storeWhatsappNumber(state, payload) {
    state.whatsappNumber = payload
  }
}
