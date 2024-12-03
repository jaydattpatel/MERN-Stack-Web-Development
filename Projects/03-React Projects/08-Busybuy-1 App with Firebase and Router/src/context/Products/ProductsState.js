import { useReducer } from "react";
import ProductsContext from "./ProductsContext";
import ProductsReducer from "./ProductsReducer";
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase";
import {
  SET_PRODUCTS,
  SET_ERROR,
  TOGGLE_LOADING,
  SET_FILTERED_PRODUCTS,
} from "./types";

import { addDataToCollection } from "../../utils/utils";

const AuthState = ({ children }) => {
  const initialState = {
    loading: false,
    products: [],
    filteredProducts: [],
    cartProducts: [],
    error: "",
  };

  const [state, dispatch] = useReducer(ProductsReducer, initialState);

  const getAllProducts = async () => {
    try {
      dispatch({ type: TOGGLE_LOADING });

      // add data to firebase from local data files
      await addDataToCollection();

      // getting data from firebase
      const productsRef = collection(db, "products");
      const productsSnapshot = await getDocs(query(productsRef));
      const productsData = productsSnapshot.docs.map((doc) => ({
        ...doc.data(),
      }));

      // const productsData = [...dataLocal];

      // console.log(productsData);

      dispatch({ type: SET_PRODUCTS, payload: productsData });
    } catch (error) {
      dispatch({ type: SET_ERROR, payload: error.message });
    }
  };

  // Function to filter and search products
  const filterProducts = (filterObj) => {
    const {
      searchQuery,
      priceRange,
      categories: { mensFashion, womensFashion, jewelery, electronics },
    } = filterObj;

    let filteredProducts = state.products;
    if (searchQuery) {
      filteredProducts = filteredProducts.filter((product) => {
        return product.title.toLowerCase().includes(searchQuery.toLowerCase());
      });
    }
    if (mensFashion || womensFashion || jewelery || electronics) {
      filteredProducts = filteredProducts.filter((product) => {
        if (mensFashion && product.category === "men's clothing") {
          return true;
        }
        if (womensFashion && product.category === "women's clothing") {
          return true;
        }
        if (electronics && product.category === "electronics") {
          return true;
        }
        if (jewelery && product.category === "jewelery") {
          return true;
        }
        return false;
      });
    }

    if (priceRange) {
      filteredProducts = filteredProducts.filter((product) => {
        return product.price < priceRange;
      });
    }

    dispatch({ type: SET_FILTERED_PRODUCTS, payload: filteredProducts });
  };

  return (
    <ProductsContext.Provider
      value={{
        products: state.products,
        filteredProducts: state.filteredProducts,
        loading: state.loading,
        getAllProducts,
        filterProducts,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default AuthState;
