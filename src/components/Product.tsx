import React from 'react';

import { Container, Image, Content,  Price}  from '../styles/Product';
interface ProductInterface {
    src: string;
    alt?: string;
}
const Product: React.FC<ProductInterface> = ({src, alt}) => {
  return (
      <Container>
          <Image>
            <img src={src} alt={alt} />
          </Image>
          <Content>
              <div>
                <span>
                    <h1>Brigadeiro</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro aut ab .
                    </p>
                </span>
                <Price>
                    <h1>00,0</h1>
                    <h2>R$</h2>
                </Price>
              </div>
              <button>
                  Adicionar
              </button>
          </Content>
      </Container>
  );
}

export default Product;

