import Link from 'next/link'
import HospitalsMock from '../mock/Hospitals.json'
import { searchLocation } from '../utils/Functions'
import { IHospital } from '../utils/Interfaces'

export default function Hospitals(): JSX.Element {
  const hospitals = HospitalsMock as IHospital[]

  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      {hospitals.map(hospital => (
        <>
          <div>{hospital.name}</div>
          <div>{hospital.address}</div>
          <Link href={searchLocation(hospital.location)} target="_blank">
            leve me para lá
          </Link>
          <br />
          <br />
          <br />
        </>
      ))}
    </>
  )
}
