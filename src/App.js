import React, { useEffect } from "react";
import styles from "./App.module.scss";
import Header from "./component/Header/Header";
import MainPage from "./component/MainPage/MainPage";
import CatalogFootWear from "./component/Catalog/CatalogFootWear";
import Product from "./component/Catalog/Product/Product";
import Footer from "./component/Footer/Footer";
import { Redirect, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import Preloader from "./component/common/Preloader/Preloader";
import { getGoods } from "./store/reducers/goods";

const styles1 = styles.App + " " + styles.cartDeActive;
const styles2 = styles.App + " " + styles.cartActive;

const App = ({ getGoods, goods, isCart }) => {
  useEffect(() => {
    getGoods();
  }, []);
  if (goods.length === 0) return <Preloader />;

  return (
    <div className={isCart ? styles2 : styles1}>
      <Header />
      <Switch>
        <Route path="/catalog" render={() => <CatalogFootWear />} />
        <Route path="/product/:id?" render={() => <Product />} />
        <Route path="/main-page" render={() => <MainPage goods={goods} />} />
        <Redirect from="/" to="/main-page" />
        <Route path="*" render={() => <div>404</div>} />
      </Switch>
      <Footer />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    isCart: state.cart.isCart,
    goods: state.goods.goods,
  };
};
export default connect(mapStateToProps, { getGoods })(App);
