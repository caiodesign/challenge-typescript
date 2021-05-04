import { CacheService } from 'server/cache'
import { getGrupoZapProperties } from 'server/providers/grupo-zap'

import CONST from 'config/constants'

const cache = CacheService()
const { API_KEY, CACHE_TTL } = CONST

export default async (req, res) => {
  const value = cache.get(API_KEY)

  if (value) {
    return res.status(200).json(value)
  }

  try {
    const response = await getGrupoZapProperties()
    cache.set(API_KEY, response.data, CACHE_TTL)

    return res.status(200).json(response.data)
  } catch (err) {
    return res.status(500)
  }
}
