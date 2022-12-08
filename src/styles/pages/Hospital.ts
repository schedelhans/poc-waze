import styled from 'styled-components'
import { media } from '../GlobalStyles'
import { Theme } from '../Theme'

export const HospitalCardsWrapper = styled.section`
  background-color: ${Theme.White};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: 0 auto;
  margin-top: 120px;
  max-width: 80%;
  min-height: 75vh;

  ${media.tablet} {
    align-items: center;
    flex-direction: column;
  }
`
