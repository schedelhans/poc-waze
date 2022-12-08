export interface ILocation {
  lat: string
  lon: string
}

export interface IHospital {
  name: string
  imgSrc: string
  address: string
  location: ILocation
}
