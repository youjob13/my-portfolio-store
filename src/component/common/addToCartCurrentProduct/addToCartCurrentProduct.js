export const addToCartCurrentProduct = (
  size,
  product,
  addProduct,
  addSelectedSize
) => {
  addSelectedSize(size);
  addProduct(product);
};
