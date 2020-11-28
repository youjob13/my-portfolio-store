import React, { useState } from "react";
import styles from "./filter.module.scss";

const FilterSize = ({ addSizeToFilter, item }) => {
  const [isSize, setIsSize] = useState(false);
  const onSizeItemClick = () => {
    addSizeToFilter(item);
    setIsSize(!isSize);
  };
  return (
    <span
      className={isSize ? styles.ActiveSpan : null}
      onClick={onSizeItemClick}
    >
      {item}
    </span>
  );
};
export default FilterSize;
