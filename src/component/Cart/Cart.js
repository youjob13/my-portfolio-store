import React from "react";
import styles from "./informations.module.scss";
import { connect } from "react-redux";
import {
  changeQuantityProduct,
  changeColorProduct,
  changeDeliveryProduct,
  changeSizeProduct,
  setConsent,
  deleteQuantityProduct,
} from "../../store/reducers/cart";
import CartItem from "./CartItem";
import { Formik, Form, Field } from "formik";
import cn from "classnames";

const Cart = ({
  changeQuantityProduct,
  changeSizeProduct,
  onCartBtnClick,
  changeColorProduct,
  changeDeliveryProduct,
  cart,
  deleteQuantityProduct,
  delivery,
  setConsent,
  isConsent,
}) => {
  const onConfirmBtnClick = (values) => {
    console.log(values);
    if (!isConsent) return alert("check the checkbox please");
    alert(
      "First Name: " +
        values.firstName +
        ", Last Name: " +
        values.secondName +
        ", Address: " +
        values.address +
        ", Postal Code: " +
        values.postalCode +
        ", Phone: " +
        values.phone +
        ", country: " +
        values.country +
        ", city: " +
        values.city
    );
    onCartBtnClick();
  };
  const onDeliveryModeChange = (e) => {
    changeDeliveryProduct(e.target.value);
  };
  const onCheckboxClick = () => {
    setConsent();
  };
  return (
    <div className={styles.informations}>
      <Formik
        initialValues={{
          country: "Germany",
          firstName: "",
          secondName: "",
          address: "",
          postalCode: "",
          city: "",
          email: "",
          phone: "",
          note: "",
          delivery: "",
          consent: false,
        }}
        onSubmit={(values, actions) => {
          onConfirmBtnClick(values);
        }}
      >
        {() => (
          <Form className={styles.form}>
            <Informations />

            <div
              className={styles.informationsNotes || styles.informationsBlock}
            >
              <h3>Notes</h3>
              <Field type="text" name="note" placeholder="Note" />
            </div>

            <div
              className={
                styles.informationsDeliveryMode || styles.informationsBlock
              }
            >
              <h3>Delivery Mode</h3>
              <Field
                required
                onChange={onDeliveryModeChange}
                as="select"
                name="delivery"
                placeholder="Delivery"
              >
                <option value="Delivery">Delivery</option>
                <option value="20">Collisimo france, $20.00</option>
                <option value="50">Post, $50.00</option>
                <option value="130">Fast delivery, $130.00</option>
              </Field>
            </div>

            <div
              className={styles.informationsCart || styles.informationsBlock}
            >
              <h3>Your Cart</h3>
              <div>
                {cart.map((item) => (
                  <CartItem
                    deleteQuantityProduct={deleteQuantityProduct}
                    key={item.orderId}
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
                  <span>$ {delivery}</span>
                </div>
                <div className={styles.informationsCartSubtotal}>
                  <h4>Subtotal</h4>
                  <span>
                    $
                    {cart.reduce(
                      (sum, item) =>
                        sum + +item.price * +item.quantity + +delivery,
                      0
                    )}
                    .00
                  </span>
                </div>
              </div>
              <div
                className={cn(styles.informationsPrivatePolicy, {
                  [styles.active]: isConsent,
                })}
              >
                <input
                  onClick={onCheckboxClick}
                  id="privateCheckbox"
                  name="consent"
                  type="checkbox"
                />
                <label htmlFor="privateCheckbox" />
                <p>
                  I agree <a href="/">terms of use and privacy</a>
                </p>
              </div>
              <button type="submit" className={styles.informationsConfirm}>
                Confirm
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

const Informations = () => (
  <div className={styles.informationsPersonalInfo || styles.informationsBlock}>
    <h2>Informations</h2>
    <h3>Personal Informations</h3>
    <div className={styles.informationsInput}>
      <Field required as="select" name="country" placeholder="Country">
        <option value="England">England</option>
        <option value="Japan">Japan</option>
        <option value="Germany">Germany</option>
      </Field>
    </div>
    <div className={styles.informationsInput}>
      <Field required type="text" name="firstName" placeholder="First name" />
      <Field required type="text" name="secondName" placeholder="Second name" />
    </div>
    <div className={styles.informationsInput}>
      <Field required type="address" name="address" placeholder="Address" />
    </div>
    <div className={styles.informationsInput}>
      <Field required type="text" name="postalCode" placeholder="Postal code" />
      <Field required type="text" name="city" placeholder="City" />
    </div>
    <div className={styles.informationsInput}>
      <Field required type="email" name="email" placeholder="Email" />
      <Field required type="tel" name="phone" placeholder="Phone" />
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  cart: state.cart.cart,
  delivery: state.cart.delivery,
  isConsent: state.cart.isConsent,
});

export default connect(mapStateToProps, {
  changeQuantityProduct,
  changeSizeProduct,
  changeColorProduct,
  changeDeliveryProduct,
  setConsent,
  deleteQuantityProduct,
})(Cart);
