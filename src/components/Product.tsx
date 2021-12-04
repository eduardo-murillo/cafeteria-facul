import React from 'react';

import { Container, Image, Content,  Price}  from '../styles/Product';
interface ProductInterface {
    src: string;
    alt?: string;
    name: string,
    desc: string,
    price: Number
    addProduct: any;
    item: object;
}
const Product: React.FC<ProductInterface> = ({src, alt, name, desc, price, addProduct, item}) => {
  return (
      <Container>
          <Image>
            <img src={src} alt={alt} />
          </Image>
          <Content>
              <div>
                <h1>{name}</h1>
                <span>
                    <p>
                        {desc}
                    </p>
                    <Price>
                        <h2>R$</h2>
                        <h1>{price.toFixed(2)}</h1>
                    </Price>
                </span>
              </div>
              <button onClick={() => addProduct(item)}>
                  Adicionar
              </button>
          </Content>
      </Container>
  );
}

export default Product;

