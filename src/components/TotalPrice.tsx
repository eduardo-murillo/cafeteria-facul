import React from 'react';

import { Container } from '../styles/TotalPrice';

interface TotalPriceInterface {
  produtos: any;
  frete: number;
  setTotalPrice: Function;
  totalPrice: number;
}

const TotalPrice: React.FC<TotalPriceInterface> = ({produtos, frete, setTotalPrice, totalPrice}) => {
  const prices = produtos.map(({price}) => {
    return price
  })

  const subTotal = prices.length > 0 && prices.reduce((previousValue, currentValue) => previousValue + currentValue)

  setTotalPrice((subTotal + frete).toFixed(2))

  return (
      <Container>
          <p>Subtotal <span>R${(subTotal || 0).toFixed(2)}</span></p>
          <p>Taxa de entrega <span>R${(frete || 0).toFixed(2)}</span></p>
          <h1>Total <span>R${totalPrice}</span></h1>
      </Container>
  );
}

export default TotalPrice;