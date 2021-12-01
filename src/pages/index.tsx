import Head from 'next/head'
import Product from '../components/Product';

export default function Home() {
  return (
    <>
      <Head>
        <title>Coffee Mountain | Início</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <div className="page page--wrap">
        <Product src="https://firebasestorage.googleapis.com/v0/b/tagorilla-db761.appspot.com/o/images%2F0c4dc23-06b-0a0c-3dd1-38a40fdc1a.jpg?alt=media&token=5328a7d6-1e7c-4f8d-bdb5-6018620d609b" alt="sla porra"/>
        <Product src="https://firebasestorage.googleapis.com/v0/b/tagorilla-db761.appspot.com/o/images%2F0c4dc23-06b-0a0c-3dd1-38a40fdc1a.jpg?alt=media&token=5328a7d6-1e7c-4f8d-bdb5-6018620d609b" alt="sla porra"/>
        <Product src="https://firebasestorage.googleapis.com/v0/b/tagorilla-db761.appspot.com/o/images%2F0c4dc23-06b-0a0c-3dd1-38a40fdc1a.jpg?alt=media&token=5328a7d6-1e7c-4f8d-bdb5-6018620d609b" alt="sla porra"/>
        <Product src="https://firebasestorage.googleapis.com/v0/b/tagorilla-db761.appspot.com/o/images%2F0c4dc23-06b-0a0c-3dd1-38a40fdc1a.jpg?alt=media&token=5328a7d6-1e7c-4f8d-bdb5-6018620d609b" alt="sla porra"/>
        <Product src="https://firebasestorage.googleapis.com/v0/b/tagorilla-db761.appspot.com/o/images%2F0c4dc23-06b-0a0c-3dd1-38a40fdc1a.jpg?alt=media&token=5328a7d6-1e7c-4f8d-bdb5-6018620d609b" alt="sla porra"/>
        <Product src="https://firebasestorage.googleapis.com/v0/b/tagorilla-db761.appspot.com/o/images%2F0c4dc23-06b-0a0c-3dd1-38a40fdc1a.jpg?alt=media&token=5328a7d6-1e7c-4f8d-bdb5-6018620d609b" alt="sla porra"/>
      </div> 
    </>
  )
}