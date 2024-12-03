import React from "react";
import styles from "./OrderTable.module.css";
import { convertDate } from "../../utils/utils";

// Component to display user order in table format
const OrderTable = ({ order }) => {
  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      {order[0].date && <h2>Ordered On:- {convertDate(order[0].date)}</h2>}
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total Price</th>
          </tr>
        </thead>
        <tbody>
          {order.map((product, idx) => {
            return (
              <tr key={idx}>
                <td>{product.title.slice(0, 25) + "..."}</td>
                <td>{`₹ ${product.price} `}</td>
                <td>{`${product.quantity} `}</td>
                <td>{`₹ ${product.quantity * product.price}`}</td>
              </tr>
            );
          })}
          <tr></tr>
        </tbody>
        <tr className={styles.totalPrice}>
          <td>
            {/* Display total price of products for that particular order */}
            {`₹ ${order.reduce((acc, currentProduct) => {
              return acc + currentProduct.price * currentProduct.quantity;
            }, 0)}`}
          </td>
        </tr>
      </table>
    </div>
  );
};

export default OrderTable;
