import { SetStateAction } from 'react'

export interface IPortal {
  id: string
  data: []
  active: boolean
  pagination: {
    total: number
    total_pages: number
    current_page: number
  }
}

export interface IPortals {
  [key: string]: IPortal
}

export interface IPortalsProvider {
  portalsState: IPortals
  setPortalsState: SetStateAction<any>
  currentActivePortal: string
  changePortal: SetStateAction<any>
  getDataFrom: SetStateAction<any>
  propertyApiError: boolean
  isLoading: boolean
}
