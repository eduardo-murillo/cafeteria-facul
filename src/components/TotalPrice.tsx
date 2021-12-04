import React from 'react';

import { Container } from '../styles/TotalPrice';

interface TotalPriceInterface {
  produtos: any;
  frete: number;
}

const TotalPrice: React.FC<TotalPriceInterface> = ({produtos, frete}) => {
  const prices = produtos.map(({price}) => {
    return price
  })

  const subTotal = prices.length > 0 && prices.reduce((previousValue, currentValue) => previousValue + currentValue)


  return (
      <Container>
          <p>Subtotal <span>R${subTotal || 0}</span></p>
          <p>Taxa de entrega <span>R${frete || 0}</span></p>
          <h1>Total <span>R${(subTotal + frete).toFixed(2)}</span></h1>
      </Container>
  );
}

export default TotalPrice;