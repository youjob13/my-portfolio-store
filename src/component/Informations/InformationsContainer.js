import React from "react";
import styles from "./informations.module.scss";
import { connect } from "react-redux";
import {
  changeQuantityProduct,
  changeColorProduct,
  changeSizeProduct,
} from "../../store/reducers/cart";
import CartItem from "./CartItem";

const InformationsContainer = ({
  changeQuantityProduct,
  changeSizeProduct,
  onDeActivateCart,
  changeColorProduct,
  cart,
}) => {
  return (
    <div className={styles.informations}>
      <div
        className={styles.informationsPersonalInfo || styles.informationsBlock}
      >
        <h2>Informations</h2>
        <form>
          <h3>Personal Informations</h3>
          <div className={styles.informationsInput}>
            <select placeholder="County">
              <option value="County">County</option>
              <option value="USA">USA</option>
              <option value="Germany">Germany</option>
            </select>
          </div>
          <div className={styles.informationsInput}>
            <input type="text" placeholder="FirstName" />
            <input type="text" placeholder="Second name" />
          </div>
          <div className={styles.informationsInput}>
            <input type="address" placeholder="Address" />
          </div>
          <div className={styles.informationsInput}>
            <input type="text" placeholder="Postal code" />
            <input type="text" placeholder="City" />
          </div>
          <div className={styles.informationsInput}>
            <input type="email" placeholder="Email" />
            <input type="phone" placeholder="Phone" />
          </div>
        </form>
      </div>

      <div className={styles.informationsNotes || styles.informationsBlock}>
        <h3>Notes</h3>
        <input type="Note" placeholder="Note" />
      </div>

      <div
        className={styles.informationsDeliveryMode || styles.informationsBlock}
      >
        <h3>Delivery Mode</h3>
        <select>
          <option value="1">Collisimo france, $20.00</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>

      <div className={styles.informationsCart || styles.informationsBlock}>
        <h3>Your Cart</h3>
        <div>
          {cart.map((item) => (
            <CartItem
              changeColorProduct={changeColorProduct}
              changeSizeProduct={changeSizeProduct}
              changeQuantityProduct={changeQuantityProduct}
              product={item}
            />
          ))}
        </div>
        <div className={styles.informationsCartResult}>
          <div className={styles.informationsCartShipping}>
            <h4>Shipping</h4>
            <span>$ 20.00</span>
          </div>
          <div className={styles.informationsCartSubtotal}>
            <h4>Subtotal</h4>
            <span>
              ${cart.reduce((sum, item) => sum + item.price, 0)}
              .00
            </span>
          </div>
        </div>
        <div className={styles.informationsPrivatePolicy}>
          <input id="privateCheckbox" type="checkbox" />
          <label for="privateCheckbox" />
          <p>
            I agree <a href="/">terms of use and privacy</a>
          </p>
        </div>
        <button
          onClick={onDeActivateCart}
          className={styles.informationsConfirm}
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cart.cart,
});

export default connect(mapStateToProps, {
  changeQuantityProduct,
  changeSizeProduct,
  changeColorProduct,
})(InformationsContainer);
