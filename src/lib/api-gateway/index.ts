import getConfig from 'next/config'
import axios from 'axios'

const { publicRuntimeConfig = {} } = getConfig() || {}

const api = axios.create({
  baseURL: publicRuntimeConfig.API_BASE_URL
})

export default api
