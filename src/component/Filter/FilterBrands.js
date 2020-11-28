import React, { useState } from "react";
import styles from "./filter.module.scss";

const FilterBrands = ({ addBrandsToFilter, item }) => {
  const [isBrands, setIsBrands] = useState(false);
  const onBrandsItemClick = () => {
    addBrandsToFilter(item);
    setIsBrands(!isBrands);
  };
  return (
    <li
      className={isBrands ? styles.ActiveLi : null}
      onClick={onBrandsItemClick}
    >
      {item}
    </li>
  );
};
export default FilterBrands;
