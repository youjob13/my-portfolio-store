import React, { useEffect, useState } from "react";
import styles from "./catalog.module.scss";

import productsStyle from "../common/ProductItem/productItem.module.scss";
import ProductItem from "../common/ProductItem/ProductItem";
import { connect } from "react-redux";
import { findProduct } from "../../store/reducers/searchProduct";
import Preloader from "../common/Preloader/Preloader";

const CatalogFootWear = (props) => {
  if (props.goods.length === 0) return <Preloader />;

  const onInputSearchField = (e) => {
    props.findProduct(e.target.value);
  };

  return (
    <div className={styles.catalog}>
      <div className={styles.searchInput}>
        <input
          onInput={onInputSearchField}
          value={props.searchField}
          placeholder="Enter product model"
        />
      </div>

      <p className={styles.catalogTitle}>Footwear</p>

      <div className={productsStyle.product}>
        <div className={productsStyle.productItems}>
          {props.filteredGoods.length !== 0
            ? props.filteredGoods.map((item) => {
                if (item.model.includes(props.searchField)) {
                  return <ProductItem key={item.id} good={item} />;
                }
              })
            : props.goods.map((item) => {
                if (item.model.includes(props.searchField)) {
                  return <ProductItem key={item.id} good={item} />;
                }
              })}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  goods: state.goods.goods,
  filteredGoods: state.filter.filteredArr,
  searchField: state.searchProduct.searchField,
});

export default connect(mapStateToProps, {
  findProduct,
})(CatalogFootWear);
