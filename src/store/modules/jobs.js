import Fetch from '@/utils/fetch'

const jobs = {
  namespaced: true,

  state: {
    loading: true,
    id: '',
    data: {},
    selectEnv: []
  },

  mutations: {
    SET_ID: (state, id) => {
      state.id = Number(id)
    },

    SET_DATA: (state, data) => {
      state.data = data
    },

    SET_SELECT_ENV: (state, data) => {
      state.selectEnv = data.list.map(_ => {
        return {
          label: _.env === 'root' ? 'PRIMARY' : _.title,
          value: _.id
        }
      })
    }
  },

  actions: {
    async getById({ commit, state }, id) {
      const data = await Fetch.get(`/v2/jobs/${id || state.id}`)
      commit('SET_DATA', data)
    },

    async getByName({ commit }, productName) {
      const data = await Fetch.get(`/v2/jobs`, { productName })
      commit(`SET_SELECT_ENV`, data)
    },

    async saveById({ commit, state }) {
      try {
        await Fetch.put(`/v2/jobs/${state.id}`, state.data)
      } catch (e) {
        return
      }
      // this.getById()
    }
  }
}

export default jobs
