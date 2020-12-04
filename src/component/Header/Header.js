import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import logo from "../../assets/img/logo.jpg";
import { setStatus } from "../../store/reducers/cart";
import Filter from "../Filter/Filter";
import Cart from "../Cart/Cart";
import styles from "./header.module.scss";
import cn from "classnames";
import { setFilterStatus } from "../../store/reducers/filter";
import Navigation from "../common/Navigation/Navigation";

const Header = ({ setStatus, isCart, isFiltered, setFilterStatus }) => {
  const onFilterBtnClick = () => {
    setFilterStatus();
  };
  const onCartBtnClick = () => {
    setStatus();
  };
  return (
    <>
      {isFiltered ? <Filter onFilterBtnClick={onFilterBtnClick} /> : null}
      {isCart ? <Cart onCartBtnClick={onCartBtnClick} /> : null}
      <header className={styles.header}>
        <div>
          <NavLink to="/main-page">
            <img src={logo} />
          </NavLink>
        </div>
        <Navigation styles={styles} />
        <div className={styles.menu}>
          <div
            className={cn(styles.menuItem, styles.search, {
              [styles.active]: isFiltered,
            })}
          >
            <NavLink to="/catalog">
              <span onClick={onFilterBtnClick}>
                <i className="fas fa-search"></i>
              </span>
            </NavLink>
          </div>
          <div
            className={cn(styles.menuItem, styles.cart, {
              [styles.active]: isCart,
            })}
          >
            <span onClick={onCartBtnClick}>
              <i className="fas fa-shopping-cart" />
            </span>
          </div>
        </div>
      </header>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    isCart: state.cart.isCart,
    isFiltered: state.filter.isFiltered,
  };
};

export default connect(mapStateToProps, { setStatus, setFilterStatus })(Header);
