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
                <span>
                    <h1>{name}</h1>
                    <p>
                        {desc}
                    </p>
                </span>
                <Price>
                    <h1>{price.toFixed(2)}</h1>
                    <h2>R$</h2>
                </Price>
              </div>
              <button onClick={() => addProduct(item)}>
                  Adicionar
              </button>
          </Content>
      </Container>
  );
}

export default Product;

