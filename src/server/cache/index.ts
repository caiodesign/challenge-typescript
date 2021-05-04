import NodeCache from 'node-cache'

export function CacheService() {
  const service = new NodeCache()

  function set(key: string, value: any, ttl = 3600): boolean {
    return service.set(key, value, ttl)
  }

  function get(key: string): any {
    return service.get(key)
  }

  function clear(): void {
    return service.flushAll()
  }

  return { set, get, clear }
}
