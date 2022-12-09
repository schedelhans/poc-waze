import styled from 'styled-components'
import { media } from '../GlobalStyles'
import { Theme } from '../Theme'

export const HospitalCardsWrapper = styled.section`
  background-color: ${Theme.White};
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: 0 auto;
  max-width: 80%;
  min-height: 75vh;
  padding: 120px 0;

  ${media.tablet} {
    align-items: center;
    flex-direction: column;
  }
`
