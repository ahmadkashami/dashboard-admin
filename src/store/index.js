import { createStore } from 'vuex'
import axios from '@axios'


export const store = createStore({
  state: {
    userData: localStorage.getItem('userData'),
    ahmad:'Alkasmia',
  },
  mutations: {
    UPDATE_USER_USER_DATA(state, value) {
      state.userData = value
    },
  },
  actions: {
    fetchDashboardData({state}, queryParams) {
      return new Promise((resolve, reject) => {
        axios.get(`dashboard`, {params: queryParams})
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    fetchClients({state}, queryParams) {
      return new Promise((resolve, reject) => {
        axios.get(`clients`, {params: queryParams})
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    createClient({state}, {queryParams}) {
      return new Promise((resolve, reject) => {
        axios.post(`clients`, queryParams)
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    updateClient({state}, {id, queryParams}) {
      return new Promise((resolve, reject) => {
        axios.put(`clients/${id}`, queryParams)
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    fetchUsers({state}, queryParams) {
      return new Promise((resolve, reject) => {
        axios.get(`users`, {params: queryParams})
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    createUser({state}, {queryParams}) {
      return new Promise((resolve, reject) => {
        axios.post(`users`, queryParams)
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    updateUser({state}, {id, queryParams}) {
      return new Promise((resolve, reject) => {
        axios.put(`users/${id}`, queryParams)
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    fetchExpenses({state}, queryParams) {
      return new Promise((resolve, reject) => {
        axios.get(`expenses`, {params: queryParams})
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    createExpense({state}, {queryParams}) {
      return new Promise((resolve, reject) => {
        axios.post(`expenses`, queryParams)
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    updateExpense({state}, {id, queryParams}) {
      return new Promise((resolve, reject) => {
        axios.put(`expenses/${id}`, queryParams)
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    fetchExports({state}, queryParams) {
      return new Promise((resolve, reject) => {
        axios.get(`exports`, {params: queryParams})
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    createExport({state}, {queryParams}) {
      return new Promise((resolve, reject) => {
        axios.post(`exports`, queryParams)
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    updateExport({state}, {id, queryParams}) {
      return new Promise((resolve, reject) => {
        axios.put(`exports/${id}`, queryParams)
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    updateExportStatus({state}, {id}) {
      return new Promise((resolve, reject) => {
        axios.put(`exports/${id}/status`)
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },

    fetchImports({state}, queryParams) {
      return new Promise((resolve, reject) => {
        axios.get(`imports`, {params: queryParams})
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    createImport({state}, {queryParams}) {
      return new Promise((resolve, reject) => {
        axios.post(`imports`, queryParams)
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    updateImport({state}, {id, queryParams}) {
      return new Promise((resolve, reject) => {
        axios.put(`imports/${id}`, queryParams)
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    updateImportStatus({state}, {id}) {
      return new Promise((resolve, reject) => {
        axios.put(`imports/${id}/status`)
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    updateProfile({state}, {queryParams}) {
      return new Promise((resolve, reject) => {
        axios.put(`update-profile`, queryParams)
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    fetchCompanies({state}, queryParams) {
      return new Promise((resolve, reject) => {
        axios.get(`companies`, {params: queryParams})
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    createCompany({state}, {queryParams}) {
      return new Promise((resolve, reject) => {
        axios.post(`companies`, queryParams)
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    updateCompany({state}, {id, queryParams}) {
      return new Promise((resolve, reject) => {
        axios.put(`companies/${id}`, queryParams)
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
  },
  modules: {},
})
