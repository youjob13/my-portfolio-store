import React, { useState } from "react";
import styles from "./characteristic.module.scss";
import { Formik, Form, Field } from "formik";
import { connect } from "react-redux";
import { addProduct } from "../../../store/reducers/cart";

const Characteristic = ({ product, addProduct }) => {
  const [productColor, setProductColor] = useState(
    Object.keys(product.colors)[0]
  );
  const onOtherColorClick = (e) => {
    setProductColor(e.currentTarget.id);
  };

  const onAddToCartBtnClick = (values) => {
    addProduct({
      ...product,
      currentSize: values.size,
      currentColor: productColor,
      quantity: 1,
      orderId: Date.now().toString(),
    });
  };

  return (
    <div className={styles.characteristic}>
      <div className={styles.characteristicContent}>
        <div className={styles.characteristicStory}>
          <h3>Story</h3>
          <h2>
            {product.brands} {product.model}
          </h2>
          <p>{product.story}</p>
        </div>
        <div className={styles.characteristicBenefits}>
          <h3>Benefits</h3>
          {product.advantages && Object.keys(product.advantages).map((key) => (
            <div key={key}>
              <h2>{key}</h2>
              <p>{product.advantages[key]}</p>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.characteristicImage}>
        <img alt="product photo" src={product.characteristic} />
      </div>
      <div className={styles.characteristicProduct}>
        <SelectProductForm
          onOtherColorClick={onOtherColorClick}
          productColor={productColor}
          onAddToCartBtnClick={onAddToCartBtnClick}
          product={product}
        />
      </div>
    </div>
  );
};

const SelectProductForm = ({
  onOtherColorClick,
  productColor,
  product,
  onAddToCartBtnClick,
}) => (
  <Formik
    initialValues={{
      size: product.size[0],
      color: productColor,
    }}
    onSubmit={(values, actions) => {
      onAddToCartBtnClick(values);
    }}
  >
    {() => (
      <Form className={styles.characteristicProductMiniSize}>
        <div className={styles.characteristicProductMini}>
          <div>
            <h2>{product.brands}</h2>
            <h3>{product.model}</h3>
          </div>
          <div className={styles.characteristicProductMiniColor}>
            {Object.keys(product.colors).map((key) => (
              <label
                onClick={(e) => {
                  e.preventDefault();
                  onOtherColorClick(e);
                }}
                key={key}
                id={key}
              >
                <Field
                  className={styles.radio}
                  type="radio"
                  name="color"
                  value={key}
                />
                <p>{key}/</p>
              </label>
            ))}
          </div>
          <div className={styles.characteristicProductMiniImage}>
            {Object.keys(product.colors).map((item) => {
              if (item === productColor)
                return (
                  <img
                    id={item}
                    alt={productColor}
                    key={item}
                    src={product.colors[productColor]}
                  />
                );
            })}
          </div>
          <div className={styles.characteristicProductMiniPrice}>
            <p>En Stock</p>
            <p>$ {product.price}.00</p>
          </div>
          <div className={styles.characteristicProductMiniSelect}>
            <Field as="select" name="size">
              <option value="SIZE">SIZE</option>
              {product.size.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </Field>
            <button type="submit">Add To Cart</button>
          </div>
        </div>
      </Form>
    )}
  </Formik>
);

const mapStateToProps = (state) => ({
  cart: state.cart.cart,
});

export default connect(mapStateToProps, { addProduct })(Characteristic);
