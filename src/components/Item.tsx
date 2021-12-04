import React from 'react';

import { Container, LeftSide, RightSide, } from '../styles/Item';
import { GrFormClose } from 'react-icons/gr'
import { useDispatch, useSelector } from 'react-redux';
import { basketProductsUpdate } from '../store/products';

interface ItemInterface {
  id: number,
  name: string,
  price: number
}

const Item: React.FC<ItemInterface> = ({id, name, price}) => {
  const dispatch = useDispatch()
  const {basketItems} = useSelector((state:any) => state.products)

  function removeProduct(id:number) {
    console.log('itens não filtrados', basketItems);
    const filteredItems = basketItems.filter((item) =>{ return item.id !== id })
    console.log('itens filtrados', filteredItems);
    dispatch(basketProductsUpdate([...filteredItems]))
  }

  return (
    <Container>
      <LeftSide>
        <h1>{name}</h1>
        <p>R${price.toFixed(2)}</p>
      </LeftSide>
      <RightSide>
          <GrFormClose onClick={() => removeProduct(id)}/>
      </RightSide>
    </Container>
  );
}

export default Item;