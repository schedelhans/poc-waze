import Link from 'next/link'
import HospitalsMock from '@/mock/hospitals.json'
import { searchLocation } from '@/utils/Functions'
import { IHospital } from '@/utils/Interfaces'
import { useGlobalConfig } from '@/context/GlobalConfig'
import { HospitalCardsWrapper } from '@/styles/pages/Hospital'
import HospitalCard from '@/components/HospitalCard/HospitalCard'
import SEO from '@/components/SEO/SEO'

export default function Hospitals(): JSX.Element {
  const { userLocation } = useGlobalConfig()
  const hospitals = HospitalsMock as IHospital[]

  return (
    <>
      <SEO
        title="POC Hospital Waze - Hospitals"
        description="POC Hospital Waze - Hospitals"
      />

      <HospitalCardsWrapper>
        {hospitals.map((hospital, index) => (
          <Link
            href={searchLocation(hospital.location, userLocation)}
            target="_blank"
            key={`hospital_${index}`}
          >
            <HospitalCard {...hospital} />
          </Link>
        ))}
      </HospitalCardsWrapper>
    </>
  )
}
