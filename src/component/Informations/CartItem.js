import React, { useState } from "react";
import styles from "./informations.module.scss";
import { Formik, Form, Field } from "formik";

const CartItem = ({
  changeColorProduct,
  changeSizeProduct,
  changeQuantityProduct,
  product,
}) => {
  const [isActiveSelectSize, setIsActiveSelectSize] = useState(null);
  const [isActiveSelectColor, setIsActiveSelectColor] = useState(null);

  const onActivateSelectColorBtnDoubleClick = (product) => {
    setIsActiveSelectColor(product);
  };
  const onChangeColorBtnClick = (values) => {
    changeColorProduct(product.orderId, values.colors);
    setIsActiveSelectColor(null);
  };
  const onActivateSelectSizeBtnDoubleClick = (product) => {
    setIsActiveSelectSize(product);
  };

  const onPlusBtnClick = () => {
    changeQuantityProduct(product.orderId, (product.quantity += 1));
  };

  const onMinusBtnClick = () => {
    changeQuantityProduct(product.orderId, (product.quantity -= 1));
  };

  const onChangeSizeBtnClick = (values) => {
    changeSizeProduct(product.orderId, values.sizes);
    setIsActiveSelectSize(null);
  };

  return (
    <div key={product.orderId} className={styles.informationsCartItem}>
      <div className={styles.informationsCartItemSum}>
        <i onClick={onPlusBtnClick} class="fas fa-plus"></i>
        <p>{product.quantity}</p>
        <i onClick={onMinusBtnClick} class="fas fa-minus"></i>
      </div>
      <div className={styles.informationsCartItemImg}>
        {isActiveSelectColor === product.orderId ? (
          <div>
            <ChangeColorForm
              onChangeColorBtnClick={onChangeColorBtnClick}
              img={Object.keys(product.colors)}
            />
          </div>
        ) : (
          <img
            onDoubleClick={() => {
              onActivateSelectColorBtnDoubleClick(product.orderId);
            }}
            src={product.colors[product.currentColor]}
          />
        )}
      </div>
      <div className={styles.informationsCartItemTitle}>
        <h4>{product.brands}</h4>
        <p>{product.model}</p>
      </div>
      <div className={styles.informationsCartItemSize}>
        <span>Size</span>
        {isActiveSelectSize === product.orderId ? (
          <div>
            <ChangeSizeForm
              onChangeSizeBtnClick={onChangeSizeBtnClick}
              size={product.size}
            />
          </div>
        ) : (
          <span
            onDoubleClick={() => {
              onActivateSelectSizeBtnDoubleClick(product.orderId);
            }}
          >
            {product.currentSize}
          </span>
        )}
      </div>
      <div className={styles.informationsCartItemPrice}>
        <p>${product.price * product.quantity}.00</p>
      </div>
    </div>
  );
};

const ChangeSizeForm = ({ onChangeSizeBtnClick, size }) => (
  <Formik
    initialValues={{ sizes: "" }}
    onSubmit={(values, actions) => {
      onChangeSizeBtnClick(values);
    }}
  >
    {() => (
      <Form>
        <Field as="select" name="sizes">
          (<option value="Sizes"></option>)
          {size.map((elem) => (
            <option key={elem} value={elem}>
              {elem}
            </option>
          ))}
        </Field>
        <button type="submit">Select</button>
      </Form>
    )}
  </Formik>
);

const ChangeColorForm = ({ onChangeColorBtnClick, img }) => (
  <Formik
    initialValues={{ colors: "" }}
    onSubmit={(values, actions) => {
      onChangeColorBtnClick(values);
    }}
  >
    {() => (
      <Form>
        <Field as="select" name="colors">
          (<option value="Colors"></option>)
          {img.map((key) => (
            <option key={key} value={key}>
              {key}
            </option>
          ))}
        </Field>
        <button type="submit">Select</button>
      </Form>
    )}
  </Formik>
);

export default CartItem;
