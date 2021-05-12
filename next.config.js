/* eslint-disable @typescript-eslint/no-var-requires */
const withPWA = require('next-pwa')
const isProd = process.env.NODE_ENV === 'production'

function getApiBaseURL() {
  const url = process.env.API_BASE_URL

  if (isProd) return url || 'http://localhost:6999'

  return 'http://localhost:6999/'
}

module.exports = withPWA({
  pwa: {
    dest: 'public',
    disable: !isProd
  },
  publicRuntimeConfig: {
    API_BASE_URL: getApiBaseURL()
  }
})
