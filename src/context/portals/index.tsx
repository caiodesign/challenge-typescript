import { createContext, useState, useContext, useEffect } from 'react'
import portals from './portals'
import { getPropertyFromId } from 'api'
import { IPortalsProvider, IPortals } from './interface'

const initialState = portals.reduce((acc, portal) => {
  return (acc = {
    ...acc,
    [portal]: {
      id: portal,
      data: [],
      pagination: {
        total: 0,
        current_page: 1
      }
    }
  })
}, {})

const PortalsContext = createContext({} as IPortalsProvider)

export const PortalsProvider: React.FC = ({ children }) => {
  const [portalsState, setPortalsState] = useState<IPortals>(initialState)
  const [propertyApiError, setPropertyApiError] = useState(false)
  const [currentActivePortal, setCurrentActivePortal] = useState(portals[0])
  const [isLoading, setIsLoading] = useState(false)

  function changePortal(id: string) {
    setCurrentActivePortal(id)
  }

  async function getDataFrom(id: string, page?: number) {
    setIsLoading(true)
    setPropertyApiError(false)
    try {
      const { data } = await getPropertyFromId(id, page)

      setPortalsState((state) => ({
        ...state,
        [id]: {
          ...state[id],
          ...data
        }
      }))
    } catch (err) {
      setPropertyApiError(true)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    const currentPortal = portalsState[currentActivePortal]

    if (!currentPortal.data.length) getDataFrom(currentPortal.id, 1)
  }, [portalsState, currentActivePortal])

  return (
    <PortalsContext.Provider
      value={{
        portalsState,
        setPortalsState,
        currentActivePortal,
        changePortal,
        getDataFrom,
        propertyApiError,
        isLoading
      }}
    >
      {children}
    </PortalsContext.Provider>
  )
}

export default function usePortals() {
  const context = useContext(PortalsContext)

  return context
}
