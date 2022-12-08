import { useGlobalConfig } from '@/context/GlobalConfig'
import {
  WazeIframeContainer,
  WazeIframeWrapper,
} from '@/styles/components/WazeIframe/WazeIframe'
import { useEffect } from 'react'

export function WazeIframe(): JSX.Element {
  const { userLocation, setUserLocation } = useGlobalConfig()
  const iframeSrc = `https://embed.waze.com/iframe?zoom=14&lat=${userLocation.lat}&lon=${userLocation.lon}&pin=1&desc=1&q=hospital`

  function getLocation() {
    navigator.geolocation.getCurrentPosition(updateLocation)
  }

  function updateLocation(position) {
    setUserLocation({
      lat: position.coords.latitude,
      lon: position.coords.longitude,
    })
  }

  useEffect(() => {
    getLocation()
  }, [])

  return (
    <WazeIframeWrapper>
      <WazeIframeContainer>
        <iframe src={iframeSrc} width="100%" height="100%" />
      </WazeIframeContainer>
    </WazeIframeWrapper>
  )
}
