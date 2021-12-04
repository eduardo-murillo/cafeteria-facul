import Head from 'next/head'
import router from 'next/router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Product from '../components/Product';
import { basketProductsUpdate } from '../store/products';

export default function Home() {
  const dispatch = useDispatch()
  const {items, basketItems} = useSelector((state:any)=> state.products)
  const user = useSelector((state:any)=> state.user)

  function addBasketProduct({IdProduto, NomeProduto, PrecoProduto}) {
    dispatch(basketProductsUpdate([...basketItems, {id: IdProduto, name: NomeProduto, price: PrecoProduto}]))
  }

  useEffect(() => {
    if(user.id === 0) {
      router.push('/login')
    }
  }, [])

  return (
    <>
      <Head>
        <title>Coffee Mountain | Início</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <div className="page page--wrap">
        {items.map((item) => (
          <Product key={item.IdProduto} src={item.URLImg} alt={item.NomeProduto} name={item.NomeProduto} desc={item.DescricaoProduto} price={item.PrecoProduto} item={item} addProduct={addBasketProduct}/>
        ))}
      </div> 
    </>
  )
}