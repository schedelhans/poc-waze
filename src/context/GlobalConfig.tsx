import { ILocation } from '@/utils/Interfaces'
import { createContext, ReactNode, useContext, useState } from 'react'

export enum DefaultMap {
  Waze,
  GoogleMaps,
}

interface IGlobalConfigContext {
  defaultMap: DefaultMap
  setDefaultMap: (deafultMap: DefaultMap) => void
  userLocation: ILocation
  setUserLocation: (userLocation: ILocation) => void
}

interface IGlobalConfigProvider {
  children: ReactNode
}

const GlobalConfigContext = createContext<IGlobalConfigContext>(
  {} as IGlobalConfigContext,
)

export const GlobalProvider = ({
  children,
}: IGlobalConfigProvider): JSX.Element => {
  const [defaultMap, setDefaultMap] = useState<DefaultMap>(DefaultMap.Waze)
  const [userLocation, setUserLocation] = useState<ILocation>({
    lat: '',
    lon: '',
  })

  return (
    <GlobalConfigContext.Provider
      value={{
        defaultMap,
        setDefaultMap,
        userLocation,
        setUserLocation,
      }}
    >
      {children}
    </GlobalConfigContext.Provider>
  )
}

export const useGlobalConfig = (): IGlobalConfigContext =>
  useContext(GlobalConfigContext)
