import { AppProps } from 'next/app'
import GlobalStyles from '@/styles/GlobalStyles'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
