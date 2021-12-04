export const FRETES_UPDATE = "FRETES_UPDATE";
export const PRODUCTS_UPDATE = "PRODUCTS_UPDATE";
export const BASKET_PRODUCTS_UPDATE = "BASKET_PRODUCTS_UPDATE";
export const BASKET_PRODUCTS_RESET = "BASKET_PRODUCTS_RESET";

export const fretesUpdate = (fretes) => ({
  type: FRETES_UPDATE,
  payload: fretes,
});

export const productsUpdate = (product) => ({
  type: PRODUCTS_UPDATE,
  payload: product,
});

export const basketProductsUpdate = (product) => ({
  type: BASKET_PRODUCTS_UPDATE,
  payload: product,
});

export const basketProductsReset = () => {
  return {
    type: PRODUCTS_RESET,
  };
};
