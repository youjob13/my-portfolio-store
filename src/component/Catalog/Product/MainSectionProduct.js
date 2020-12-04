import React, { useState } from "react";
import { connect } from "react-redux";
import styles from "./mainSectionProduct.module.scss";
import { addProduct } from "../../../store/reducers/cart";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import cn from "classnames";
import { Carousel } from "react-responsive-carousel";

const MainSectionProduct = ({ product, addProduct }) => {
  const [translateX, setTranslateX] = useState(0);
  const [isActiveColor, setActiveColor] = useState(
    Object.keys(product.colors)[0]
  );

  const onAddToCartBtnClick = (values) => {
    addProduct({
      ...product,
      currentSize: values.size,
      currentColor: values.color,
      quantity: 1,
      orderId: Date.now().toString(),
    });
  };

  const onScrollColorsImgBtnClick = (value) => {
    if (document.body.clientWidth > 1440) {
      if (
        value < 0 &&
        translateX / value < Object.keys(product.colors).length - 3
      ) {
        setTranslateX(translateX + value);
      } else if (translateX === 0 && value > 0) {
        setTranslateX((Object.keys(product.colors).length - 3) * -value);
      } else if (translateX < 0 && value > 0) {
        setTranslateX(translateX + value);
      } else if (value < 0) {
        setTranslateX(0);
      }
    } else {
      if (
        value < 0 &&
        translateX / value < Object.keys(product.colors).length - 2
      ) {
        setTranslateX(translateX + value);
      } else if (translateX === 0 && value > 0) {
        setTranslateX((Object.keys(product.colors).length - 2) * -value);
      } else if (translateX < 0 && value > 0) {
        setTranslateX(translateX + value);
      } else if (value < 0) {
        setTranslateX(0);
      }
    }
  };

  return (
    <div className={styles.product}>
      <div className={styles.productImg}>
        <SliderImgCarousel img={product.img} />
      </div>
      <div className={styles.productInfo}>
        <div className={styles.productFavorite}></div>
        <div className={styles.productText}>
          <h3 className={styles.productBrand}>{product.brands}</h3>
          <h2 className={styles.productTitle}>{product.model}</h2>
          <p className={styles.productPrice}>$ {product.price}.00</p>
        </div>
        <SelectProductForm
          setActiveColor={setActiveColor}
          isActiveColor={isActiveColor}
          translateX={translateX}
          onScrollColorsImgBtnClick={onScrollColorsImgBtnClick}
          onAddToCartBtnClick={onAddToCartBtnClick}
          colors={product.colors}
          size={product.size}
        />
      </div>
    </div>
  );
};

const SliderImgCarousel = ({ img }) => (
  <Carousel
    className={styles.slide}
    interval={5000}
    infiniteLoop
    transitionTime={600}
    showThumbs={false}
    showStatus={false}
    autoPlay
  >
    {img.map((item) => (
      <div key={item} className={styles.carouselWrap}>
        <img key={item} src={item} />
      </div>
    ))}
  </Carousel>
);

const SelectProductForm = ({
  translateX,
  onScrollColorsImgBtnClick,
  onAddToCartBtnClick,
  size,
  isActiveColor,
  setActiveColor,
  colors,
}) => (
  <Formik
    initialValues={{ size: size[0], color: Object.keys(colors)[0] }}
    onSubmit={(values, actions) => {
      onAddToCartBtnClick(values);
    }}
  >
    {() => (
      <Form>
        <div className={styles.productColor}>
          <span>
            Colors -{" "}
            {Object.keys(colors).map((key) => (
              <p key={key}>{key}/</p>
            ))}
          </span>

          <div className={styles.productOtherItemsInner}>
            <button
              className="fas fa-caret-left"
              onClick={(e) => {
                e.preventDefault();
                onScrollColorsImgBtnClick(133);
              }}
            />
            <div className={styles.productOtherItemsWrapper}>
              <div
                style={{
                  transform: `translateX(${translateX}px)`,
                  transition: `.3s`,
                }}
                className={styles.productOtherItems}
              >
                {Object.keys(colors).map((key) => (
                  <label key={key} id={key}>
                    <Field
                      className={styles.radio}
                      type="radio"
                      name="color"
                      value={key}
                    />
                    <div
                      className={cn(styles.productOtherItem, {
                        [styles.activeColor]: isActiveColor === key,
                      })}
                      onClick={() => {
                        setActiveColor(key);
                      }}
                    >
                      <img src={colors[key]} />
                    </div>
                  </label>
                ))}
              </div>
            </div>
            <button
              className="fas fa-caret-right"
              onClick={(e) => {
                e.preventDefault();
                onScrollColorsImgBtnClick(-133);
              }}
            />
          </div>
        </div>
        <div className={styles.productSize}>
          <p>Size charts</p>
          <Field as="select" name="size">
            <option value="Size">Size</option>
            {size.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </Field>
          <button type="submit">Add To Cart</button>
        </div>
      </Form>
    )}
  </Formik>
);

const mapStateToProps = (state) => ({
  cart: state.cart.cart,
});

export default connect(mapStateToProps, { addProduct })(MainSectionProduct);
