import api from 'lib/api-gateway'

export const getPortalData = (id: string, page?: number) =>
  api.get(`/properties/${id}`, { params: { page } })

export const getPropertyData = (id: string) => api.get(`/property/${id}`)
