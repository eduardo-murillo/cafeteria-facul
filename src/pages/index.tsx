import Head from 'next/head'
import { useDispatch, useSelector } from 'react-redux';
import Product from '../components/Product';
import { basketProductsUpdate } from '../store/products';

export default function Home() {
  const dispatch = useDispatch()
  const {items, basketItems} = useSelector((state:any)=> state.products)

  function addBasketProduct({IdProduto, NomeProduto, PrecoProduto}) {
    dispatch(basketProductsUpdate([...basketItems, {id: IdProduto, name: NomeProduto, price: PrecoProduto}]))
  }
  return (
    <>
      <Head>
        <title>Coffee Mountain | Início</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <div className="page page--wrap">
        {items.map((item) => (
          <Product src={item.URLImg} alt={item.NomeProduto} name={item.NomeProduto} desc={item.DescricaoProduto} price={item.PrecoProduto} item={item} addProduct={addBasketProduct}/>
        ))}
      </div> 
    </>
  )
}