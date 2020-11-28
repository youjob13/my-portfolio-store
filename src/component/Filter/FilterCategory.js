import React, { useState } from "react";
import styles from "./filter.module.scss";

const FilterCategory = ({ addCategoryToFilter, item }) => {
  const [isCategory, setIsCategory] = useState(false);
  const onCategoriesItemClick = () => {
    addCategoryToFilter(item);
    setIsCategory(!isCategory);
  };
  return (
    <li
      className={isCategory ? styles.ActiveLi : null}
      onClick={onCategoriesItemClick}
    >
      {item}
    </li>
  );
};
export default FilterCategory;
