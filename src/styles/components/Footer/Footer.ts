import styled from 'styled-components'
import { Theme } from '../../Theme'

export const FooterWrapper = styled.footer`
  align-items: center;
  background-image: linear-gradient(65deg, #136363, #42ada1);
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  left: 0;
  min-height: 25vh;
  position: relative;
  width: 100%;
  z-index: 10;

  svg {
    fill: ${Theme.White};
    margin: 0 20px;

    path {
      fill: ${Theme.White};
    }
  }
`

export const FooterNote = styled.section`
  color: ${Theme.White};
  font-size: 12px;
  margin-top: 32px;
`
