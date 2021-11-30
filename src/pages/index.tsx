import Head from 'next/head'
import Product from '../components/Product';

export default function Home() {
  return (
    <>
      <Head>
        <title>Coffee Mountain | Início</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <div className="page">
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
      </div> 
    </>
  )
}