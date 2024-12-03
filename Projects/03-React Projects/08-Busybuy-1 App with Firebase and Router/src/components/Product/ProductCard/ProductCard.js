import React from "react";
import ProductContainer from "../ProductContainer/ProductContainer";
import ProductDetails from "../ProductContainer/ProductDetails/ProductDetails";
import ProductImage from "../ProductContainer/ProductImage/ProductImage";

// Product Card component
const ProductCard = ({
  product: { title, price, image, id, quantity },
  onOwnPage,
  onCart,
  removeProductFromCart,
  updateProductQuantity,
  filterProductFromState,
}) => {
  return (
    <ProductContainer>
      <ProductImage image={image} />
      <ProductDetails
        title={title}
        price={price}
        onOwnPage={onOwnPage}
        productId={id}
        onCart={onCart}
        quantity={quantity}
        removeProductFromCart={removeProductFromCart}
        updateProductQuantity={updateProductQuantity}
        filterProductFromState={filterProductFromState}
      />
    </ProductContainer>
  );
};

export default ProductCard;
