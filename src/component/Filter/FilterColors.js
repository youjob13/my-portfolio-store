import React, { useState } from "react";
import styles from "./filter.module.scss";

const FilterColors = ({ addColorToFilter, item }) => {
  const style1 = styles[`${item}`];
  const style2 = styles[`${item}`] + " " + styles.active;
  const [isColor, setIsColor] = useState(false);
  const onColorsItemClick = () => {
    addColorToFilter(item);
    setIsColor(!isColor);
  };
  return (
    <div onClick={onColorsItemClick} className={isColor ? style2 : style1}>
      <i className="fas fa-check"></i>
    </div>
  );
};
export default FilterColors;
