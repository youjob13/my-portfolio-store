import React from "react";
import styles from "./productItem.module.scss";
import logo1 from "../../../assets/img/products/5mini.png";
import { NavLink } from "react-router-dom";

const ProductItem = ({ good }) => {
  console.log(good.img[0]);
  return (
    <div className={styles.productItem}>
      <NavLink to={`/product/${good.id}`}>
        <img src={good.img[0]} />
        <div className={styles.productInfo}>
          <div className={styles.productTitle}>
            <p className={styles.productName}>{good.brands}</p>
            <p className={styles.productDescription}>{good.model}</p>
          </div>
          <p>${good.price}.00</p>
        </div>
        <div className={styles.productButtons}>
          <div className={styles.productFavorite}>Like</div>
          <div className={styles.productCart}>Cart</div>
        </div>
      </NavLink>
    </div>
  );
};

export default ProductItem;
