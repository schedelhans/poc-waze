import {
  WazeIframeContainer,
  WazeIframeWrapper,
} from '@/src/styles/components/WazeIframe/WazeIframe'
import { ILocation } from '@/src/utils/Interfaces'
import { useEffect, useState } from 'react'

export function WazeIframe(): JSX.Element {
  const [location, setLocation] = useState<ILocation>({
    lat: '',
    lon: '',
  })
  const iframeSrc = `https://embed.waze.com/iframe?zoom=14&lat=${location.lat}&lon=${location.lon}&pin=1&desc=1&q=hospital`

  function getLocation() {
    navigator.geolocation.getCurrentPosition(updateLocation)
  }

  function updateLocation(position) {
    setLocation({
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
