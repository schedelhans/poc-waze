import styled from 'styled-components'
import { Theme } from '@/styles/Theme'
import Image from 'next/image'
import { media } from '@/styles/GlobalStyles'

export const HospitalCardWrapper = styled.div`
  border: 1px solid ${Theme.DarkGreenPhilips};
  border-radius: 15px;
  box-shadow: 0 3px 6px ${Theme.DarkGreenPhilips};
  display: flex;
  flex-direction: column;
  height: 623px;
  overflow: hidden;
  transition: all 0.5s ease;
  width: 398px;

  &:hover {
    box-shadow: 0 9px 18px ${Theme.DarkGreenPhilips};

    img {
      transform: scale(1.3);
    }
  }

  &:not(:nth-child(0)) {
    margin-top: 24px;
  }

  ${media.smallTablet} {
    max-width: 100%;

    &:first-child {
      margin-top: 0;
    }

    &:not(:first-child) {
      margin-top: 24px;
    }
  }
`
export const HospitalCardImageContainer = styled.div`
  border-radius: 15px 15px 0 0;
  height: 225px;
  overflow: hidden;
`
export const HospitalCardImage = styled(Image)`
  border-radius: 15px 15px 0 0;
  height: 225px;
  object-fit: cover;
  transition: all 0.5s ease;
  width: 100%;
`
export const HospitalCardContent = styled.div`
  align-items: flex-start;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 12px 28px;
`
export const HospitalCardTitle = styled.p`
  color: ${Theme.DarkGreenPhilips};
  font-size: 28px;
  font-weight: bold;
  line-height: 38px;
  width: 80%;

  ${media.mobile} {
    font-size: 24px;
    line-height: 32px;
  }
`
export const HospitalCardText = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  width: 100%;

  &.green {
    p {
      color: ${Theme.LightGreenPhilips};
      font-weight: bolder;
    }

    &:hover {
      color: ${Theme.DarkGreenPhilips};
    }
  }

  ${media.mobile} {
    margin-top: 12px;
  }
`
export const HospitalCardItem = styled.p`
  font-size: 16px;
  line-height: 22px;

  &:not(:first-child) {
    margin-top: 8px;
  }

  ${media.mobile} {
    font-size: 14px;
    line-height: 19px;
    &:not(:first-child) {
      margin-top: 4px;
    }
  }
`
