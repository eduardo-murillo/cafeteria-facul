import Head from 'next/head'

import { RiArrowRightSLine } from 'react-icons/ri'
import { DeliveryPlace, LeftSide, RightSide, Items, Button }  from '../styles/Basket';
import Item from '../components/Item';
import TotalPrice from '../components/TotalPrice';
import PaymentMethod from '../components/PaymentMethod';

export default function Basket() {
  return (
    <>
      <Head>
        <title>Coffee Mountain | Carrinho</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <div className="page">
        <h1>Carrinho</h1>

        <DeliveryPlace>
          <LeftSide></LeftSide>
          <RightSide>
            <h1>Endereço de Entrega:</h1>
            <p>Rua: </p>            
            <input placeholder="Insira aqui o endereço para entrega.." type="text" style={{width: "250px", height: "30px"}}/>                            
            <RiArrowRightSLine/>
          </RightSide>
        </DeliveryPlace>

        <Items>
        <h3>Revise seu pedido:</h3>
          <Item/>
          <Item/>
          <Item/>

          <Button>Adicionar mais  Itens</Button>
        </Items>

        <TotalPrice/>
        <PaymentMethod/>

        <Button className="FinalButton">
          Finalizar Pedido
        </Button>
      </div> 
    </>
  )
}
