import React from "react";
import styles from "./FilterSidebar.module.css";

const FilterSidebar = ({ setCategories, setPriceRange, priceRange }) => {
  return (
    <aside className={styles.filterContainer}>
      <h2>Filter</h2>
      <form>
        <label htmlFor="price">Price: {priceRange}</label>
        <input
          type="range"
          id="price"
          name="price"
          min="1"
          max="100000"
          className={styles.priceRange}
          step="10"
          value={priceRange}
          onChange={(e) => setPriceRange(e.target.value)}
        />
        <h2>Category</h2>
        <div className={styles.categoryContainer}>
          <div className={styles.inputContainer}>
            <input
              type="checkbox"
              id="mensFashion"
              name="mensFashion"
              onChange={(e) =>
                setCategories((prevCategories) => ({
                  ...prevCategories,
                  mensFashion: e.target.checked,
                }))
              }
            />
            <label htmlFor="mensFashion">Men's Clothing</label>
          </div>
          <div className={styles.inputContainer}>
            <input
              type="checkbox"
              id="womensFashion"
              name="womensFashion"
              onChange={(e) =>
                setCategories((prevCategories) => ({
                  ...prevCategories,
                  womensFashion: e.target.checked,
                }))
              }
            />
            <label htmlFor="womensFashion">Women's Clothing</label>
          </div>
          <div className={styles.inputContainer}>
            <input
              type="checkbox"
              id="jewelery"
              name="jewelery"
              onChange={(e) =>
                setCategories((prevCategories) => ({
                  ...prevCategories,
                  jewelery: e.target.checked,
                }))
              }
            />
            <label htmlFor="jewelery">Jewelery</label>
          </div>
          <div className={styles.inputContainer}>
            <input
              type="checkbox"
              id="electronics"
              name="electronics"
              onChange={(e) =>
                setCategories((prevCategories) => ({
                  ...prevCategories,
                  electronics: e.target.checked,
                }))
              }
            />
            <label htmlFor="electronics">Electronics</label>
          </div>
        </div>
      </form>
    </aside>
  );
};

export default FilterSidebar;
