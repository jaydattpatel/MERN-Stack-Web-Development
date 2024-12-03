import React, { useEffect, useState, useContext } from "react";
import styles from "./HomePage.module.css";
import FilterSidebar from "../../components/FilterSidebar/FilterSidebar";

import Loader from "../../components/UI/Loader/Loader";
import ProductList from "../../components/Product/ProductList/ProductList";
import ProductsContext from "../../context/Products/ProductsContext";

function HomePage() {
  const [query, setQuery] = useState("");
  const [priceRange, setPriceRange] = useState(75000);
  const [categories, setCategories] = useState({
    mensFashion: false,
    electronics: false,
    jewelery: false,
    womensClothing: false,
  });

  const {
    products,
    loading,
    getAllProducts,
    filteredProducts,
    filterProducts,
  } = useContext(ProductsContext);

  // Write logic to Rerender the products if the search or filter parameters change
  useEffect(() => {
    filterProducts({ priceRange, searchQuery: query, categories });
  }, [priceRange, query, categories]);

  // Write logic to Fetch products on app mount
  useEffect(() => {
    getAllProducts();
  }, []);

  // Display loader while products are fetching
  if (loading) {
    return <Loader />;
  }

  return (
    <div className={styles.homePageContainer}>
      {/* Write logic to display the product using the ProductList */}
      <FilterSidebar
        setPriceRange={setPriceRange}
        setCategories={setCategories}
        priceRange={priceRange}
      />
      <form className={styles.form}>
        <input
          type="search"
          placeholder="Search By Name"
          className={styles.searchInput}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>
      {products.length ? (
        <ProductList products={products.length ? filteredProducts : null} />
      ) : null}
    </div>
  );
}

export default HomePage;
