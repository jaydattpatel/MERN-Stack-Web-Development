import React, { useEffect, useContext, useState } from "react";
import Loader from "../../components/UI/Loader/Loader";
import styles from "./CartPage.module.css";

import { doc, getDoc, updateDoc, setDoc, arrayUnion } from "firebase/firestore";
import { db } from "../../config/firebase";
import AuthContext from "../../context/Auth/AuthContext";
import ProductList from "../../components/Product/ProductList/ProductList";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import {
  getProductsUsingProductIds,
  getUserCartProducts,
} from "../../utils/utils";

const CartPage = () => {
  // Write logic to Clear user cart
  const [cartProducts, setCartProducts] = useState([]);
  const [cartProductsMap, setCartProductsMap] = useState([]);
  const [purchasing, setPurchasing] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  let totalPrice = cartProducts.reduce((acc, currentProduct) => {
    return acc + currentProduct.price * currentProduct.quantity;
  }, 0);

  const { user } = useContext(AuthContext);

  useEffect(() => {
    getCartProducts(user?.uid);
  }, []);

  const purchaseProducts = async () => {
    setPurchasing(true);
    try {
      const docRef = doc(db, "userOrders", user.uid);
      const docSnap = await getDoc(docRef);
      const data = docSnap.data();

      // If users orders exist add one new order to the orders list
      if (data) {
        updateDoc(docRef, {
          orders: arrayUnion({ ...cartProductsMap, date: Date.now() }),
        });

        // Redirect the user to orders page after successful purchase
        clearUserCartAndRedirectToOrdersPage();
        return;
      }
      // Create a new orders array if no orders yet
      await setDoc(docRef, {
        orders: [{ ...cartProductsMap, date: Date.now() }],
      });

      // Redirect the user to orders page after successful purchase
      clearUserCartAndRedirectToOrdersPage();
    } catch (error) {
      console.log(error);
    } finally {
      setPurchasing(false);
    }
  };

  // Clear user cart
  const clearUserCartAndRedirectToOrdersPage = async () => {
    const userCartRef = doc(db, "usersCarts", user.uid);

    updateDoc(userCartRef, {
      myCart: {},
    });

    setCartProducts([]);
    setCartProductsMap({});

    navigate("/myorders");
  };

  // Write logic to Fetch user cart products
  // Fetch user cart products
  const getCartProducts = async (uid) => {
    setLoading(true);
    try {
      const { data } = await getUserCartProducts(uid);

      const { myCart: cart } = data;
      setCartProductsMap(cart);

      const productsData = await getProductsUsingProductIds(cart);
      if (!productsData) {
        return toast.error("No products in Cart!");
      }
      setCartProducts(productsData);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  // Write logic to Remove product from cart and cart products list
  // Remove product from cart and cart products list
  const filterProductFromState = (productId) => {
    delete cartProductsMap[productId];
    setCartProducts((prevCartProducts) => {
      return prevCartProducts.filter((product) => {
        return product.id !== productId;
      });
    });
  };

  // Write logic to Remove product from the database
  // Remove product from the database
  const removeProductFromCart = async (productId) => {
    try {
      const { data, docRef } = await getUserCartProducts(user.uid);

      const { myCart: cart } = data;

      if (!cart[productId]) {
        return toast.error("Product not in cart!");
      }

      delete cart[productId];

      await updateDoc(docRef, {
        myCart: {
          ...cart,
        },
      });

      filterProductFromState(productId);

      toast.success("Product Removed Successfully!");
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  // Update the quantity of a specific product in the UI
  const updateProductQuantity = (type, id) => {
    let tempCart = cartProducts.map((product) => {
      if (product.id === id) {
        product.quantity += type === "add" ? 1 : -1;
      }
      return product;
    });
    cartProductsMap[id] += type === "add" ? 1 : -1;
    setCartProducts(tempCart);
  };

  if (loading) return <Loader />;

  return (
    <div className={styles.cartPageContainer}>
      {!!cartProducts.length && (
        <aside className={styles.totalPrice}>
          <p>TotalPrice:- ₹{totalPrice}/-</p>
          <button className={styles.purchaseBtn} onClick={purchaseProducts}>
            {purchasing ? "Purchasing" : "Purchase"}
          </button>
        </aside>
      )}
      {!!cartProducts.length ? (
        <ProductList
          products={cartProducts}
          removeProductFromCart={removeProductFromCart}
          updateProductQuantity={updateProductQuantity}
          filterProductFromState={filterProductFromState}
          onCart
        />
      ) : (
        <h1>Cart is Empty!</h1>
      )}
    </div>
  );
};

export default CartPage;
