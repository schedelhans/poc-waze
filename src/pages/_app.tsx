import { AppProps } from 'next/app'
import GlobalStyles from '@/styles/GlobalStyles'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import { GlobalProvider } from '@/context/GlobalConfig'

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <GlobalStyles />
      <GlobalProvider>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </GlobalProvider>
    </>
  )
}
