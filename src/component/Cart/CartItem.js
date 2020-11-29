import React, { useState } from "react";
import styles from "./informations.module.scss";
import { Formik, Form, Field } from "formik";

const CartItem = ({
  changeColorProduct,
  changeSizeProduct,
  changeQuantityProduct,
  product,
  deleteQuantityProduct,
}) => {
  const [isActiveSelectSize, setIsActiveSelectSize] = useState(null);
  const [isActiveSelectColor, setIsActiveSelectColor] = useState(null);

  const onActivateSelectColorBtnDoubleClick = (product) => {
    setIsActiveSelectColor(product);
  };
  const onChangeColorBtnClick = (values) => {
    changeColorProduct(product.orderId, values.target.value);
  };
  const onSelectColorBtnClick = () => {
    setIsActiveSelectColor(null);
  };
  const onChangeSizeBtnClick = (values) => {
    changeSizeProduct(product.orderId, values.target.value);
  };
  const onSelectSizeBtnClick = () => {
    setIsActiveSelectSize(null);
  };
  const onActivateSelectSizeBtnDoubleClick = (product) => {
    setIsActiveSelectSize(product);
  };
  const onPlusBtnClick = () => {
    changeQuantityProduct(product.orderId, (product.quantity += 1));
  };
  const onMinusBtnClick = () => {
    if (product.quantity > 1)
      changeQuantityProduct(product.orderId, (product.quantity -= 1));
    else deleteQuantityProduct(product.orderId);
  };

  return (
    <div key={product.orderId} className={styles.informationsCartItem}>
      <div className={styles.informationsCartItemSum}>
        <i onClick={onPlusBtnClick} className="fas fa-plus"></i>
        <p>{product.quantity}</p>
        <i onClick={onMinusBtnClick} className="fas fa-minus"></i>
      </div>
      <div className={styles.informationsCartItemImg}>
        {isActiveSelectColor === product.orderId ? (
          <div>
            <ChangeColorForm
              onSelectColorBtnClick={onSelectColorBtnClick}
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
              onSelectSizeBtnClick={onSelectSizeBtnClick}
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

const ChangeSizeForm = ({
  onSelectSizeBtnClick,
  onChangeSizeBtnClick,
  size,
}) => (
  <>
    <select onChange={onChangeSizeBtnClick} name="sizes">
      <option value="Sizes"></option>
      {size.map((elem) => (
        <option key={elem} value={elem}>
          {elem}
        </option>
      ))}
    </select>
    <button onClick={onSelectSizeBtnClick}>Select</button>
  </>
);

const ChangeColorForm = ({
  onSelectColorBtnClick,
  onChangeColorBtnClick,
  img,
}) => (
  <>
    <select onChange={onChangeColorBtnClick} name="colors">
      <option value="Colors"></option>
      {img.map((key) => (
        <option key={key} value={key}>
          {key}
        </option>
      ))}
    </select>
    <button onClick={onSelectColorBtnClick}>Select</button>
  </>
);

export default CartItem;
