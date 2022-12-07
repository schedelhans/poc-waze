import styled from 'styled-components'
import { media } from '../../GlobalStyles'
import { Theme } from '../../Theme'

export const HeaderWrapper = styled.header`
  align-items: center;
  background-image: linear-gradient(65deg, #136363, #42ada1);
  box-sizing: border-box;
  display: flex;
  height: 80px;
  justify-content: flex-start;
  left: 0;
  position: fixed;
  top: 0;
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

export const HeaderMenu = styled.section`
  align-items: center;
  display: flex;
  width: fit-content;
`

export const HeaderItem = styled.div`
  align-items: center;
  box-sizing: border-box;
  color: ${Theme.White};
  display: flex;
  height: 80px;
  justify-content: center;
  padding: 0 30px;
  transition: 0.3 all;
  width: min-content;

  :hover {
    background-image: linear-gradient(170deg, #136363, #42ada1);
  }
`

export const HeaderSeparator = styled.div`
  border: 1px solid white;
  border-radius: 3px;
  height: 30px;
  margin: 0 12px;
  width: 1px;
`
