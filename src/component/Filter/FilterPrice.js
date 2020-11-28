import React from "react";
import styles from "./filter.module.scss";

const FilterPrice = ({ addPriceToFilter, price }) => {
  const onPriceChange = (e) => {
    addPriceToFilter(e.target);
  };
  const onPriceInput = (e) => {
    addPriceToFilter(e.target);
  };
  return (
    <div class={styles.priceSlider}>
      <span>
        from
        <input
          onChange={onPriceChange}
          data-index="0"
          type="number"
          value={price[0]}
          min="0"
          max="10000"
        />{" "}
        to
        <input
          onChange={onPriceChange}
          data-index="1"
          type="number"
          value={price[1]}
          min="0"
          max="10000"
        />
      </span>
      <input
        onInput={onPriceInput}
        data-index="0"
        value={price[0]}
        min="0"
        max="10000"
        step="1"
        type="range"
      />
      <input
        onInput={onPriceInput}
        data-index="1"
        value={price[1]}
        min="0"
        max="10000"
        step="1"
        type="range"
      />
      <svg width="100%" height="24">
        <line
          x1="4"
          y1="0"
          x2="300"
          y2="0"
          stroke="#212121"
          stroke-width="12"
          stroke-dasharray="1 28"
        ></line>
      </svg>
    </div>
  );
};

export default FilterPrice;
