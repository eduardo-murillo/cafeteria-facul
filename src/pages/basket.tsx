import Head from 'next/head'

import { RiArrowRightSLine } from 'react-icons/ri'
import { DeliveryPlace, LeftSide, RightSide, Items, Button }  from '../styles/Basket';
import Item from '../components/Item';
import TotalPrice from '../components/TotalPrice';
import PaymentMethod from '../components/PaymentMethod';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fretesUpdate } from '../store/products';
import api from '../../config/api';
import router from 'next/router';
import { GrFormLocation } from 'react-icons/gr';

export default function Basket() {
  const dispatch = useDispatch()
  const {basketItems, fretes} = useSelector((state:any) => state.products)
  
  const [valorTaxa, setValorTaxa] = useState(15)

  async function getFretes() {
    const {fretes} = (await api.get('basket/fretes')).data
    dispatch(fretesUpdate(fretes))
    console.log('fretes', fretes);
  }

  useEffect(() => {
    if(fretes.length === 0 ) {
      getFretes()
    }
  }, [])

  return (
    <>
      <Head>
        <title>Coffee Mountain | Carrinho</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <div className="page">
        <h1>Carrinho</h1>

        <DeliveryPlace>
          <LeftSide>
            <img src="https://firebasestorage.googleapis.com/v0/b/coffeemountain.appspot.com/o/deliveryico.png?alt=media&token=e4e8589c-414f-4035-9baf-012f2bc50c36"/>
          </LeftSide>
          <RightSide>
            <h1>Endereço de Entrega:</h1>
            <p>Rua: </p>            
            <input placeholder="Insira aqui o endereço para entrega.." type="text" style={{width: "250px", height: "30px"}}/>                            
            {/* <RiArrowRightSLine/> */}
          </RightSide>
        </DeliveryPlace>

        <Items>
        <h3>Revise seu pedido:</h3>
        {basketItems.map(({id, name, price}) => {
          return <Item id={id} name={name} price={price}/>
        })}

          <Button onClick={() => {router.push('/')}} style={{cursor: 'pointer'}}>Adicionar mais  Itens</Button>
        </Items>

        <TotalPrice produtos={basketItems} frete={valorTaxa}/>
        <PaymentMethod/>

        <Button className="FinalButton">
          Finalizar Pedido
        </Button>
      </div> 
    </>
  )
}
