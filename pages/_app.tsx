import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout/Layout'
import { WalletProvider } from '../context/WalletProvider'

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <WalletProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </WalletProvider>
  )
}

export default MyApp
