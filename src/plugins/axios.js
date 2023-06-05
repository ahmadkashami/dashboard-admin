// axios
import axios from 'axios'

const axiosIns = axios.create({
  // You can add your headers here
  // ================================
  baseURL: process.env.MIX_BASE_URL,
  headers: { 'Access-Control-Allow-Methods': 'GET,HEAD,PATCH,POST,PUT' },
})

axiosIns.interceptors.request.use(
  config => {
    // Do something before request is sent
    const accessToken = localStorage.getItem('accessToken')

    // eslint-disable-next-line no-param-reassign
    if (accessToken) config.headers.Authorization = `Bearer ${accessToken}`

    // const officeId = store.state.user.officeId
    // const role = store.state.user.role
    // if (officeId && role == "superadmin") config.headers.common['office-id'] = officeId
    return config
  },
  error => Promise.reject(error),
)


export default axiosIns
