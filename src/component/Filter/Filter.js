import React, { useState } from "react";
import { connect } from "react-redux";
import { setFilter } from "../../store/reducers/filter";
import styles from "./filter.module.scss";
import FilterSize from "./FilterSize";
import FilterBrands from "./FilterBrands";
import FilterCategory from "./FilterCategory";
import FilterColors from "./FilterColors";
import FilterPrice from "./FilterPrice";

const Filter = ({
  goods,
  onFilterBtnClick,
  setFilter,
  allProductInformation,
}) => {
  const [category, setCategory] = useState([]);
  const [brand, setBrand] = useState([]);
  const [size, setSize] = useState([]);
  const [color, setColor] = useState([]);
  const [price, setPrice] = useState([0, 10000]);

  const filteredGoods = goods.filter(
    (item) =>
      (!category.length || category.includes(item.category)) &&
      (!brand.length || brand.includes(item.brands)) &&
      (!size.length || size.includes(item.size.find((elem) => elem == size))) &&
      (!color.length ||
        color.includes(Object.keys(item.colors).find((key) => key == color))) &&
      (!price[0] || price[0] <= item.price) &&
      (!price[1] || price[1] >= item.price)
  );

  const addPriceToFilter = (target) => {
    setPrice(
      price.map((item, i) =>
        i === +target.dataset.index ? target.value : item
      )
    );
  };

  const addColorToFilter = (value) => {
    setColor(
      !color.includes(value)
        ? [...color, value]
        : color.filter((item) => item !== value)
    );
  };

  const addCategoryToFilter = (value) => {
    setCategory(
      !category.includes(value)
        ? [...category, value]
        : category.filter((item) => item !== value)
    );
  };

  const addBrandsToFilter = (value) => {
    setBrand(
      !brand.includes(value)
        ? [...brand, value]
        : brand.filter((item) => item !== value)
    );
  };

  const addSizeToFilter = (value) => {
    setSize(
      !size.includes(value)
        ? [...size, value]
        : size.filter((item) => item !== value)
    );
  };
  
  const onOkFilterBtnClick = () => {
    onFilterBtnClick();
    setFilter(filteredGoods);
  };

  return (
    <div className={styles.filter}>
      <div className={styles.filterWrapper}>
        <div className={styles.filterCategory}>
          <h4>Category</h4>
          <ul>
            {allProductInformation.category.map((item) => (
              <FilterCategory
                addCategoryToFilter={addCategoryToFilter}
                key={item}
                item={item}
              />
            ))}
          </ul>
        </div>
        <div className={styles.filterCharacteristics}>
          <div className={styles.filterSize}>
            <h4>Size</h4>
            <div className={styles.filterSizes}>
              {allProductInformation.size.map((item) => (
                <FilterSize
                  addSizeToFilter={addSizeToFilter}
                  item={item}
                  key={item}
                />
              ))}
            </div>
          </div>
          <div className={styles.filterColors}>
            <h4>Colors</h4>
            <div className={styles.filterColorsItem}>
              {allProductInformation.colors.map((item) => (
                <FilterColors
                  addColorToFilter={addColorToFilter}
                  key={item}
                  item={item}
                />
              ))}
            </div>
          </div>
          <div className={styles.filterPriceRange}>
            <h4>Price Range</h4>
            <FilterPrice addPriceToFilter={addPriceToFilter} price={price} />
          </div>
        </div>
        <div className={styles.filterBrands}>
          <h4>Brands</h4>
          <div className={styles.filterBrandsItems}>
            <ul>
              {allProductInformation.brands.map((item) => (
                <FilterBrands
                  addBrandsToFilter={addBrandsToFilter}
                  item={item}
                  key={item}
                />
              ))}
            </ul>
          </div>
        </div>
        <button onClick={onOkFilterBtnClick} className={styles.filterApply}>
          <i className="fas fa-check"></i>
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  allProductInformation: state.allProductInformation,
  goods: state.goods.goods,
});
export default connect(mapStateToProps, {
  setFilter,
})(Filter);
