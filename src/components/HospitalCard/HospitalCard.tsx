import {
  HospitalCardContent,
  HospitalCardImage,
  HospitalCardImageContainer,
  HospitalCardText,
  HospitalCardTitle,
  HospitalCardWrapper,
} from '@/styles/components/HospitalCard/HospitalCard'
import { IHospital } from '@/utils/Interfaces'
export interface IHospitalCard {
  imgSrc: string
  imgAlt: string
  serviceTitle: string
  serviceItems: string[]
}
export default function HospitalCard({
  address,
  imgSrc,
  name,
}: IHospital): JSX.Element {
  return (
    <HospitalCardWrapper>
      <HospitalCardImageContainer>
        <HospitalCardImage src={imgSrc} alt={name} width={398} height={225} />
      </HospitalCardImageContainer>
      <HospitalCardContent>
        <HospitalCardTitle>{name}</HospitalCardTitle>
        <HospitalCardText>{address}</HospitalCardText>
        <HospitalCardText className="green">
          <p>Leve-me para lá!</p>
        </HospitalCardText>
      </HospitalCardContent>
    </HospitalCardWrapper>
  )
}
