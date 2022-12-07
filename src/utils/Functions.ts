import { ILocation } from './Interfaces'

const wazeSearch = 'https://waze.com/live-map/ul?'

type searchLocationType = string | ILocation

export function searchLocation(searchLocation: searchLocationType): string {
  if (typeof searchLocation === 'string') {
    const encodedLocation = encodeURI(searchLocation)
    return wazeSearch + `q=${encodedLocation}` + '&navigate=true'
  }
  const location = searchLocation as ILocation
  return wazeSearch + `ll=${location.lat},${location.lon}` + '&navigate=true'
}
