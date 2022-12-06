import styled from 'styled-components'
import { Theme } from '../../Theme'

export const WazeIframeWrapper = styled.div`
  align-items: center;
  background-color: ${Theme.Blue};
  display: flex;
  height: 100vh;
  justify-content: center;
  width: 100%;
`

export const WazeIframeContainer = styled.div`
  border: 3px solid ${Theme.White};
  height: 75%;
  width: 75%;
`
