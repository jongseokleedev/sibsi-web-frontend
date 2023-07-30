import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { PUBLIC_SITE_TITLE } from '../config/constants'
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout/Layout';


export default function App({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <title>{`${PUBLIC_SITE_TITLE}`}</title>
      <meta name="description" content="Sib-Si-Il-Ban Proejct"/>
      {/*<Link href="/login"><a>Login</a></Link>*/}
      {/*<span style={styles.divider}>|</span>*/}
    </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>

}
