import SEO from '@/components/SEO/SEO'
import { WazeIframe } from '@/components/WazeIframe/WazeIframe'

export default function Home(): JSX.Element {
  return (
    <>
      <SEO title="POC Hospital Waze" description="POC Hospital Waze" />

      <WazeIframe />
    </>
  )
}
