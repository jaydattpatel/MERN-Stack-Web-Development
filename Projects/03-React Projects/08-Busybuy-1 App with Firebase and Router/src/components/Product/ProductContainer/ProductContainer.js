import React from "react";
import styles from "./ProductContainer.module.css";

// Product card container
const ProductContainer = ({ children }) => {
  return <div className={styles.productContainer}>{children}</div>;
};

export default ProductContainer;
