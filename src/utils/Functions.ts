import { isMobile, isTablet } from 'react-device-detect'
import { ILocation } from './Interfaces'

const wazeSearchEndpoint = 'https://waze.com/live-map/ul?'
const wazeDirectionEndpoint =
  'https://waze.com/live-map/directions?navigate=true'

type searchLocationType = string | ILocation

export function searchLocation(
  searchLocation: searchLocationType,
  userLocation?: ILocation,
): string {
  if (typeof searchLocation === 'string') {
    const encodedLocation = encodeURI(searchLocation)
    const endpoint =
      wazeSearchEndpoint + `q=${encodedLocation}` + '&navigate=true'
    return isTablet || isMobile ? 'waze://' + endpoint : endpoint
  }

  const location = searchLocation as ILocation
  const mobileEndpoint =
    wazeSearchEndpoint + `ll=${location.lat},${location.lon}`
  const endpoint =
    wazeDirectionEndpoint +
    `&to=ll.${location.lat},${location.lon}&from=ll.${userLocation.lat},${userLocation.lon}`

  return isTablet || isMobile ? 'waze://' + mobileEndpoint : endpoint
}
