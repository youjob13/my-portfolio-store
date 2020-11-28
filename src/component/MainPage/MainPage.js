import React from "react";
import product from "../../assets/img/mainPage/catalog.png";
import productWithInfo from "../../assets/img/productsWithInfo/1.jpg";
import styles from "./mainPage.module.scss";
import productsStyle from "../common/ProductItem/productItem.module.scss";
import ProductItem from "../common/ProductItem/ProductItem";
import { connect } from "react-redux";
import { getGoods } from "../../store/reducers/goods";

const MainPage = (props) => {
  if (props.goods === null) return <div>none</div>;
  return (
    <div className={styles.mainPageBlock}>
      {props.goods.map((item) => (
        <ProductItem key={item.id} good={item} />
      ))}
      <ProductItemWithType />
      <ProductItemWithInfo />
      <Brand />
    </div>
  );
};

const ProductItemWithType = () => {
  return (
    <div className={styles.productItemWithType}>
      <p>New arrivals</p>
      <p className={styles.type}>Jacket</p>
      <div className={styles.img}>
        <img src={product} />
      </div>
    </div>
  );
};

const ProductItemWithInfo = () => {
  return (
    <div className={styles.ProductItemWithInfo}>
      <div className={styles.img}>
        <img src={productWithInfo} />
      </div>
      <div className={styles.productInfo}>
        <div className={styles.News}>
          <p>News</p>
        </div>
        <div className={styles.productTitle}>
          <h2>Balman</h2>
          <h3>Black Leather Biker Jacket</h3>
          <p>
            Supple leather biker jacket in black. Silver-tone hardware. Band
            collar fastened at press-stud closure. Ribbed detailing at
            shoulders.
          </p>
        </div>
        <strong>$410.00</strong>
      </div>
    </div>
  );
};

const Brand = () => {
  return (
    <div className={styles.Brand}>
      <p className={styles.BrandTitle}>Brand</p>
      <p className={styles.BrandName}>Nixon(logo)</p>
      <p className={styles.BrandContent}>
        We make the little shit better. The stuff you have that isn't noticed
        first, but can't be ignored. We pay attention to it. We argue about it.
        We work day and night to make the little shit as good as it can be, so
        when you wear it, you feel like you've got a leg up on the rest of the
        world.
      </p>
      <p className={styles.BrandShop}>Shop brands -></p>
    </div>
  );
};
const mapStateToProps = (state) => ({
  goods: state.goods.goods,
});

export default connect(mapStateToProps, getGoods)(MainPage);
