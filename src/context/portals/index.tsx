import { createContext, useState, useContext, useEffect } from 'react'
import portals from './portals'
import { getPortalData, getPropertyData } from 'api'
import { IPortalsProvider, IPortals, IPortal } from './interface'

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
  const [propertyState, setPropertyState] = useState<any>({})

  function changePortal(id: string) {
    setCurrentActivePortal(id)
  }

  async function getPortalDataFrom(id: string, page?: number) {
    setIsLoading(true)
    setPropertyApiError(false)
    try {
      const { data } = await getPortalData(id, page)

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

  async function getPropertyDataFrom(id: string) {
    setIsLoading(true)
    setPropertyApiError(false)

    try {
      const { data } = await getPropertyData(id)

      setPropertyState(data)
    } catch (err) {
      setPropertyApiError(true)
    } finally {
      setIsLoading(false)
    }
  }

  function fetchPortalInitialData() {
    const currentPortal = portalsState[currentActivePortal]

    if (!currentPortal.data.length) getPortalDataFrom(currentPortal.id, 1)
  }

  return (
    <PortalsContext.Provider
      value={{
        portalsState,
        setPortalsState,
        currentActivePortal,
        changePortal,
        getPortalDataFrom,
        propertyApiError,
        isLoading,
        fetchPortalInitialData,
        setPropertyState,
        propertyState,
        getPropertyDataFrom
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
