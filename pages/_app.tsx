import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

interface Props {
  Component: React.ComponentType<any>
  pageProps: any
  locale: string
}

function MyApp({ Component, pageProps  }: AppProps) {
  // const router = useRouter()

  // useEffect(() => {
  //   const { locale } = router
  //   i18n.changeLanguage(locale)
  // }, [router.locale]);



  return 
  <Component {...pageProps} />
  
//   (
//     <NextIntlProvider messages={pageProps.messages}>
//     <Component {...pageProps} />
//   </NextIntlProvider>
// );

}

export default MyApp
