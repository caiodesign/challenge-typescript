import api from 'lib/api-gateway'

export const getPropertyFromId = (id: string, page?: number) =>
  api.get(`/properties/${id}`, { params: { page } })
