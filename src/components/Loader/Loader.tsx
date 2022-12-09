import { Theme } from '@/styles/Theme'
import { GridLoader } from 'react-spinners'

export default function Loader(): JSX.Element {
  return (
    <GridLoader
      color={Theme.LightGreenPhilips}
      loading
      size={25}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  )
}
