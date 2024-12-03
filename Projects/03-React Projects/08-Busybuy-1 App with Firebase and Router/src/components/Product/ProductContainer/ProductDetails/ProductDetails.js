import React, { useState, useContext } from "react";
import styles from "./ProductDetails.module.css";
import MinusIcon from "../../../UI/Icons/MinusIcon";
import PlusIcon from "../../../UI/Icons/PlusIcon";

import { toast } from "react-toastify";
import AuthContext from "../../../../context/Auth/AuthContext";
import { useNavigate } from "react-router-dom";
import { updateDoc, setDoc } from "firebase/firestore";
import { getUserCartProducts } from "../../../../utils/utils";

const ProductDetails = ({
  title,
  price,
  productId,
  onCart,
  quantity,
  removeProductFromCart,
  updateProductQuantity,
  filterProductFromState,
}) => {
  const [productAddingToCart, setProductAddingToCart] = useState(false);
  const [productRemovingFromCart, setProductRemovingCart] = useState(false);

  const { user } = useContext(AuthContext);

  const navigate = useNavigate();
  // Create a Function to add product to cart
  // Create a new cart if it does not exist
  const addProductToCart = async () => {
    setProductAddingToCart(true);
    // Redirect to login page if user is not authenticated
    if (!user) {
      return navigate("/signin");
    }

    try {
      const { data, docRef } = await getUserCartProducts(user.uid);

      // If cart exists then update the cart
      if (data && data.myCart[productId]) {
        const { myCart: cart } = data;
        const currentProductCount = cart[productId];
        const updatedCart = {
          ...cart,
          [productId]: currentProductCount + 1,
        };

        updateDoc(docRef, {
          myCart: updatedCart,
        });

        return toast.success("Increase product count!");
      }

      // Create a new cart if it does not exist
      const cart = data?.myCart || {};
      await setDoc(docRef, {
        myCart: { ...cart, [productId]: 1 },
      });

      toast.success("Product Added Successfully!");
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    } finally {
      setProductAddingToCart(false);
    }
  };

  // Create a function to remove the cart
  const removeProduct = async () => {
    setProductRemovingCart(true);
    await removeProductFromCart(productId);
    setProductRemovingCart(false);
  };

  //Create a Function for Handling the product quantity increase
  const handleAdd = async () => {
    try {
      const { data, docRef } = await getUserCartProducts(user.uid);

      const { myCart: cart } = data;
      if (cart && cart[productId]) {
        const currentProductCount = cart[productId];
        const updatedCart = {
          ...cart,
          [productId]: currentProductCount + 1,
        };

        await updateDoc(docRef, {
          myCart: updatedCart,
        });

        updateProductQuantity("add", productId);

        return;
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  //Create a function for  Handling the product quantity decrease
  const handleRemove = async () => {
    try {
      const { data, docRef } = await getUserCartProducts(user.uid);

      const { myCart: cart } = data;
      if (cart && cart[productId]) {
        const productCountAfterRemove = cart[productId] - 1;

        const updatedCart = {
          ...cart,
          [productId]: productCountAfterRemove,
        };

        if (productCountAfterRemove === 0) delete updatedCart[productId];

        await updateDoc(docRef, {
          myCart: updatedCart,
        });

        if (productCountAfterRemove === 0)
          return filterProductFromState(productId);

        updateProductQuantity("remove", productId);

        return;
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <div className={styles.productDetails}>
      <div className={styles.productName}>
        <p>{`${title.slice(0, 35)}...`}</p>
      </div>
      <div className={styles.productOptions}>
        <p>₹ {price}</p>
        {onCart && (
          <div className={styles.quantityContainer}>
            <MinusIcon handleRemove={handleRemove} />
            {quantity}
            <PlusIcon handleAdd={handleAdd} />
          </div>
        )}
      </div>
      {/* Conditionally Rendering buttons based on the screen */}
      {!onCart ? (
        <button
          className={styles.addBtn}
          title="Add to Cart"
          disabled={productAddingToCart}
          onClick={addProductToCart}
        >
          {productAddingToCart ? "Adding" : "Add To Cart"}
        </button>
      ) : (
        <button
          className={styles.removeBtn}
          title="Remove from Cart"
          onClick={removeProduct}
        >
          {productRemovingFromCart ? "Removing" : "Remove From Cart"}
        </button>
      )}
    </div>
  );
};

export default ProductDetails;
