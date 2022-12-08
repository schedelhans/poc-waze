import Link from 'next/link'
import HospitalsMock from '@/mock/hospitals.json'
import { searchLocation } from '@/utils/Functions'
import { IHospital } from '@/utils/Interfaces'
import { useGlobalConfig } from '@/context/GlobalConfig'
import { HospitalCardsWrapper } from '@/styles/pages/Hospital'
import Image from 'next/image'

export default function Hospitals(): JSX.Element {
  const { userLocation } = useGlobalConfig()
  const hospitals = HospitalsMock as IHospital[]

  return (
    <>
      <HospitalCardsWrapper>
        {hospitals.map((hospital, index) => (
          <section key={`hospital_${index}`}>
            <Image
              alt={`hospital_${hospital.name}`}
              src={hospital.imgSrc}
              height={200}
              width={250}
            />
            <div>{hospital.name}</div>
            <div>{hospital.address}</div>
            <Link
              href={searchLocation(hospital.location, userLocation)}
              target="_blank"
            >
              leve me para lá
            </Link>
            <br />
          </section>
        ))}
      </HospitalCardsWrapper>
    </>
  )
}
