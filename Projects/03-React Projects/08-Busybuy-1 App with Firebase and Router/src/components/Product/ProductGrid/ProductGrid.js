import React from "react";
import styles from "./ProductGrid.module.css";

// Component mainly for styling purpose
const ProductGrid = ({ children, style }) => {
  return (
    <div className={styles.grid} style={{ ...style }}>
      {children}
    </div>
  );
};

export default ProductGrid;
