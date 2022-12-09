import styled from 'styled-components'
import { Theme } from '../../Theme'

export const WazeIframeWrapper = styled.div`
  align-items: center;
  background-color: ${Theme.White};
  display: flex;
  height: 100vh;
  justify-content: center;
  padding: 120px 0;
  width: 100%;
`

export const WazeIframeContainer = styled.div`
  align-items: center;
  border: 3px solid ${Theme.White};
  display: flex;
  height: 75%;
  justify-content: center;
  margin-top: 10%;
  width: 80%;
`
