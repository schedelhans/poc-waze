import { ILocation } from './Interfaces'

const wazeSearch = 'https://waze.com/live-map/ul?'
const wazeDirection = 'https://waze.com/live-map/directions?navigate=true'

type searchLocationType = string | ILocation

export function searchLocation(
  searchLocation: searchLocationType,
  userLocation?: ILocation,
): string {
  if (typeof searchLocation === 'string') {
    const encodedLocation = encodeURI(searchLocation)
    return wazeSearch + `q=${encodedLocation}` + '&navigate=true'
  }
  const location = searchLocation as ILocation
  return (
    wazeDirection +
    `&to=ll.${location.lat},${location.lon}&from=ll.${userLocation.lat},${userLocation.lon}`
  )
}
