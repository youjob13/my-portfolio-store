import React, { useState } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import logo from "../../assets/img/logo.jpg";
import { getStatus } from "../../store/reducers/cart";
import Filter from "../Filter/Filter";
import InformationsContainer from "../Informations/InformationsContainer";
import styles from "./header.module.scss";
//library classnames!!!!!!

const classes0 = styles.menuItem + " " + styles.search;
const classes11 = styles.menuItem + " " + styles.search + " " + styles.active;
const classes1 = styles.menuItem + " " + styles.cart;
const classes2 = styles.menuItem + " " + styles.cart + " " + styles.active;
const Header = (props) => {
  const [isFilteredOpen, setIsFilteredOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const onActivateFilter = () => {
    setIsFilteredOpen(true);
  };
  const onDeActivateFilter = () => {
    setIsFilteredOpen(false);
  };
  const onActivateCart = () => {
    setIsCartOpen(true);
    props.getStatus(true);
  };
  const onDeActivateCart = () => {
    setIsCartOpen(false);
    props.getStatus(false);
  };

  return (
    <>
      {isFilteredOpen ? (
        <Filter onDeActivateFilter={onDeActivateFilter} />
      ) : null}
      {props.isCart ? (
        <InformationsContainer onDeActivateCart={onDeActivateCart} />
      ) : null}
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
          <div className={isFilteredOpen ? classes11 : classes0}>
            <span onClick={onActivateFilter}>
              <i class="fas fa-search"></i>
            </span>
          </div>
          <div className={isCartOpen ? classes2 : classes1}>
            <span onClick={onActivateCart}>
              <i class="fas fa-shopping-cart" />
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
export default connect(mapStateToProps, { getStatus })(Header);
