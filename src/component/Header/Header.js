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
        <nav className={styles.navbar} role="navigation">
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <NavLink to="/catalog">Footwear</NavLink>
            </li>
            <li className={styles.navItem}>
              <a href="/">Clothing</a>
            </li>
            <li className={styles.navItem}>
              <a href="/">Accessories</a>
            </li>
            <li className={styles.navItem}>
              <a href="/">Brands</a>
            </li>
            <li className={styles.navItem}>
              <a href="/">Clearance</a>
            </li>
          </ul>
          <select className={styles.navSelect}>
            <option>Footwear</option>
            <option>Clothing</option>
            <option>Accessories</option>
            <option>Brands</option>
            <option>Clearance</option>
          </select>
        </nav>
        <div className={styles.menu}>
          <div
            className={cn(styles.menuItem, styles.search, {
              [styles.active]: isFiltered,
            })}
          >
            <span onClick={onFilterBtnClick}>
              <i className="fas fa-search"></i>
            </span>
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
