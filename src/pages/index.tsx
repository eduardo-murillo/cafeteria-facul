import Head from 'next/head'
import { useDispatch, useSelector } from 'react-redux';
import Product from '../components/Product';
import { basketProductsUpdate } from '../store/products';

export default function Home() {
  const dispatch = useDispatch()
  const {items, basketItems} = useSelector((state:any)=> state.products)

  function addBasketProduct({idProduto, NomeProduto, PrecoProduto}) {
    dispatch(basketProductsUpdate([...basketItems, {id: idProduto, name: NomeProduto, price: PrecoProduto}]))
  }
  return (
    <>
      <Head>
        <title>Coffee Mountain | Início</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <div className="page page--wrap">
        {items.map((item) => (
          <Product src="https://firebasestorage.googleapis.com/v0/b/tagorilla-db761.appspot.com/o/images%2F0c4dc23-06b-0a0c-3dd1-38a40fdc1a.jpg?alt=media&token=5328a7d6-1e7c-4f8d-bdb5-6018620d609b" alt={item.NomeProduto} name={item.NomeProduto} desc='Placeholder de descrição' price={item.PrecoProduto} item={item} addProduct={addBasketProduct}/>
        ))}
      </div> 
    </>
  )
}