import Head from 'next/head'

import { RiArrowRightSLine } from 'react-icons/ri'
import { DeliveryPlace, LeftSide, RightSide, Items, Button }  from '../styles/Basket';
import Item from '../components/Item';
import TotalPrice from '../components/TotalPrice';
import PaymentMethod from '../components/PaymentMethod';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { fretesUpdate } from '../store/products';
import api from '../../config/api';
import router from 'next/router';
import { GrFormLocation } from 'react-icons/gr';
import { TabPanel } from 'react-tabs';
import Input from '../components/Endereco';

export default function Basket(): JSX.Element {
  const dispatch = useDispatch()
  const {basketItems, fretes} = useSelector((state:any) => state.products)
  const user = useSelector((state:any)=> state.user)

  
  const [valorTaxa, setValorTaxa] = useState(15)
  const [totalPrice, setTotalPrice] = useState()

  async function getFretes() {
    const {fretes} = (await api.get('basket/fretes')).data
    dispatch(fretesUpdate(fretes))
    }

  async function handleSendOrder() {
    // fazer verificação se existe algum produto na basket
    const idProdutos = (basketItems.map((item) => {return item.id})).toString()
    
    const data = await api.post('orders/postOrder', {idUsuario_FK: user.id, PrecoTotal: totalPrice, Produtos: idProdutos })
  }

  const [ rua, setRua ] = useState('')
  const [ numero, setNumero ] = useState('')
  const [ bairro, setBairro ] = useState('')

  useEffect(() => {
    if(user.id === 0) {
      router.push('/login')
    }
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
            <img src="https://firebasestorage.googleapis.com/v0/b/coffeemountain.appspot.com/o/deliveryico.png?alt=media&token=967536a0-d04e-4d1e-8f55-07712a99fdba"/>
          </LeftSide>
          <RightSide>
            <h1>Endereço de Entrega:</h1>               
              <Input state={setRua} placeholder="Rua" />
              <Input state={setNumero} type="number" placeholder="Nº" />
              <Input state={setBairro} placeholder="Bairro" />                        
          </RightSide>
        </DeliveryPlace>

        <Items>
        <h3>Revise seu pedido:</h3>
        {basketItems.map(({id, name, price}, i) => {
          return <Item key={i} id={id} name={name} price={price}/>
        })}

          <Button onClick={() => {router.push('/')}} style={{cursor: 'pointer'}}>Adicionar mais  Itens</Button>
        </Items>

        <TotalPrice produtos={basketItems} frete={valorTaxa} setTotalPrice={setTotalPrice} totalPrice={totalPrice}/>
        <PaymentMethod/>

        <Button className="FinalButton" onClick={handleSendOrder}>
          Finalizar Pedido
        </Button>
      </div> 
    </>
  )
}
