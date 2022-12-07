export interface ILocation {
  lat: string
  lon: string
}

export interface IHospital {
  name: string
  img: string
  address: string
  location: ILocation
}
